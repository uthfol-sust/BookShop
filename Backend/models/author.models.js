import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  biography: {
    type: String,
    default: null,
  },
  books:
  [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', 
    },
  ]

  


});

const Author= mongoose.model('Author', authorSchema);
export default Author;