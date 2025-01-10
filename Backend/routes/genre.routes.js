import { Router } from "express";
import { createGenre, createManyGenres, getAllGenres, getGenreById } from "../controllers/genre.controller.js"; // Ensure the correct file path

const router = Router();

// Routes
router.post('/create_genre', createGenre); // Create a single genre
router.post('/create_genres', createManyGenres); // Create multiple genres
router.get('/all', getAllGenres); // Get all genres
router.get('/:genre_id', getGenreById); // Get a single genre by ID

export default router;
