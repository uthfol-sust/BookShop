import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
  },

  email: {
    type: String,
    required: true,
    unique: true ['email already exhist'],
   
    lowercase: true ['please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  location:{
    country: {
      type:String,
    },
    state:{
      type:String,
    },
    district:{
      type:String,
    },
    city:{
      type:String,
    },
    Locality:{
      type:String,
    },
    street:{
      type:Number,
    },
    House:{
      type:Number,
    },
    Cordinates:{
      longitude:{type:Number},
      latitude:{type:Number}
    }


    
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  booksOwned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // Books the user owns
    },
  ],
  borrowedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // Books the user has borrowed
    },
  ],
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // Books the user wants to borrow
    },
  ],
  profileRating: {
    totalRating: {
      type: Number,
      default: 0, // Sum of all ratings
    },
    ratingCount: {
      type: Number,
      default: 0, // Number of ratings received
    },
    totalRating:
    {
        type: Number,
        default: 0, // Number of ratings received
    },
    
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Users following this user
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Users this user is following
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.index({ location: '2dsphere' }); // Geospatial index

const User =mongoose.model('User', userSchema);
export default User;