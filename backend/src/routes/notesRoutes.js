import express from "express";
import { getAllnotes, createNote , updateNote , deleteNote ,getNoteById} from "../controller/notesControllers.js";

// create a router

const router = express.Router();

// there 4 are controllers so we will transger them inthe controllers file
router.get("/",getAllnotes);

router.get("/:id",getNoteById);

router.post("/",createNote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote );

export default router;
