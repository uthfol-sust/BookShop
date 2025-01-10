import Author from "../models/author.models.js";

// Create a new author
const createAuthor = async (req, res) => {
  try {
    const { name, biography, books } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Author name is required." });
    }

    const newAuthor = await Author.create({
      name,
      biography,
      books,
    });

    res.status(201).json({ message: "Author created successfully", author: newAuthor });
  } catch (error) {
    res.status(400).json({ message: "Error creating author", error: error.message });
  }
};

const createManyAuthors = async (req, res) => {
  try {
    const authors = req.body;

    // Validate that the request body contains an array of authors
    if (!Array.isArray(authors) || authors.length === 0) {
      return res.status(400).json({ message: "An array of authors is required." });
    }

    // Insert the authors into the database
    const createdAuthors = await Author.insertMany(authors);

    // Respond with success message and the created authors
    res.status(201).json({ message: "Authors created successfully", authors: createdAuthors });
  } catch (error) {
    res.status(400).json({ message: "Error creating authors", error: error.message });
  }
};



// Get all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find(); //TODO connect with book
    res.status(200).json(authors);
  } catch (error) {
    res.status(400).json({ message: "Error fetching authors", error: error.message });
  }
};

// Get a single author by ID
const getAuthorById = async (req, res) => {
  try {
    const { author_id } = req.params;

    const author = await Author.findById(author_id).populate("books");
    if (!author) {
      return res.status(404).json({ message: "Author not found." });
    }

    res.status(200).json(author);
  } catch (error) {
    res.status(400).json({ message: "Error fetching author", error: error.message });
  }
};

// Update an author
const updateAuthor = async (req, res) => {
  try {
    const { author_id } = req.params;
    const { name, biography, books } = req.body;

    const updatedAuthor = await Author.findByIdAndUpdate(
      author_id,
      { name, biography, books },
      { new: true, runValidators: true }
    );

    if (!updatedAuthor) {
      return res.status(404).json({ message: "Author not found." });
    }

    res.status(200).json({ message: "Author updated successfully", author: updatedAuthor });
  } catch (error) {
    res.status(400).json({ message: "Error updating author", error: error.message });
  }
};

// Delete
const deleteAuthor = async (req, res) => {
  try {
    const { author_id } = req.params;

    const deletedAuthor = await Author.findByIdAndDelete(author_id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: "Author not found." });
    }

    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting author", error: error.message });
  }
};

export { createAuthor, getAllAuthors,createManyAuthors, getAuthorById, updateAuthor, deleteAuthor };
