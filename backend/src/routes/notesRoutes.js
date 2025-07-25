import express from "express";
import { addNotes, deleteNotes, editNotes, viewNotes } from "../controllers/notesController.js";

const router=express.Router();

router.get("/",viewNotes);
router.post("/",addNotes);
router.put("/:id",editNotes);
router.delete("/:id",deleteNotes);
export default router;