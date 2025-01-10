import Genre from "../models/genre.models.js"; // Adjust the file path as needed

// Create a single genre
const createGenre = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required." });
    }

    const newGenre = await Genre.create({
      name,
      description,
    });

    res.status(201).json({ message: "Genre created successfully", genre: newGenre });
  } catch (error) {
    res.status(400).json({ message: "Error creating genre", error: error.message });
  }
};

// Create multiple genres
const createManyGenres = async (req, res) => {
  try {
    const genres = req.body;

    if (!Array.isArray(genres) || genres.length === 0) {
      return res.status(400).json({ message: "An array of genres is required." });
    }

    const createdGenres = await Genre.insertMany(genres);

    res.status(201).json({ message: "Genres created successfully", genres: createdGenres });
  } catch (error) {
    res.status(400).json({ message: "Error creating genres", error: error.message });
  }
};

// Get a single genre by ID
const getGenreById = async (req, res) => {
  try {
    const { genre_id } = req.params; // Match route parameter name

    const genre = await Genre.findById(genre_id);
    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ message: "Error fetching genre", error: error.message });
  }
};

// Get all genres
const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();

    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ message: "Error fetching genres", error: error.message });
  }
};

export { createGenre, createManyGenres, getGenreById, getAllGenres };
