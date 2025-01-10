import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js"; // Import the user route

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(cors());
app.use(cookieParser());

// MongoDB connection
connectDB();

// Route setup
app.use("/api/v1/user", userRoute); // Mount user routes

// Test API
app.get("/", (req, res) => {
  res.send("Welcome to the Book Sharing Service API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use`);
      process.exit(1);
  } else {
      throw error;
  }
});