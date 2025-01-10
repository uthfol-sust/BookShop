import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
// Register (Add) a New User
const createUser = async (req, res) => {
  try {
    console.log("trigger");
    const { name, email, password } = req.body;

    console.log(req.body);
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required." });
    }


    // Check if the user already exists
    const existingUser = await User.findOne($or[{ email },{name}]);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists. Please log in." });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      
    });

    
    const createdUser=await  User.findOne({email:email}).select(-password );

    if(createdUser){
        res.status(201).json({ message: "User registered successfully!", userId: newUser._id });
    }
    
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


//login user
const loginUser= async(req,res) =>{
  try {
    const {email,password}=  req.body;
  
   const user= await User.findOne({email:email});
   if(!user){
      return res.status(400).res.json({message:"User does't registered on this email"});
   }
  
  
   // Validate the password
   const isPasswordValid = await bcrypt.compare(password, user.password);
   if (!isPasswordValid) {
     return res.status(401).json({ message: "Invalid email or password." });
   }

   // Generate JWT access token
   const accessToken = jwt.sign(
     { id: user._id, email: user.email, role: user.role },
     process.env.AUTH_SECRET,
     { expiresIn:   process.env.AUTH_EXPIRE}
   );

   // Set the token in an HTTP-only cookie
   res.cookie("accessToken", accessToken, {
     httpOnly: true, // Cookie cannot be accessed via JavaScript
     secure: process.env.NODE_ENV === "production", // Use secure cookies in production
     maxAge: 3600000, // 1 hour
     sameSite: "strict", // Prevent CSRF
   });

   // Respond with user details (excluding sensitive fields)
   res.status(200).json({
     message: "Login successful.",
     user: {
       id: user._id,
       name: user.name,
       email: user.email,
       role: user.role,
     },
   });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error." });
  }
}

 const logoutUser = (req, res) => {
  try {
    // Clear the access token cookie
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logout successful." });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Get a Single User by ID
const getUserById = async (req, res) => {
  try {
    const { userId } = req.params; // Corrected to req.params
    console.log(userId);


    const user = await User.findById(userId); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const updates = req.body;


    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }

    // Hash the password if it's being updated
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true }).populate(
      "booksOwned borrowedBooks wishlist"
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Delete User by ID
const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }

    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export { createUser, loginUser, logoutUser, getAllUsers, getUserById, updateUserById, deleteUserById };
