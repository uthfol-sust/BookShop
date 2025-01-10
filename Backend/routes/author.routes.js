import { Router } from "express";
import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
  createManyAuthors,
} from "../controllers/Author.controller.js";

const router = Router();

router.post("/create_author", createAuthor); // Create a new author
router.post("/create_authors", createManyAuthors);  
router.get("/all", getAllAuthors); // Get all authors
router.get("/:author_id", getAuthorById); // Get a single author by ID
router.put("/:author_id", updateAuthor); // Update an author
router.delete("/:author_id", deleteAuthor); // Delete an author

export default router;
