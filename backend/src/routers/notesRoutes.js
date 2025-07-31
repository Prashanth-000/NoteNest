import express from "express";
import { addNotes, deleteNotes, editNotes, viewNotes, viewById } from "../controllers/notesController.js";

const router=express.Router();

router.get("/",viewNotes);
router.get("/:id",viewById);
router.post("/",addNotes);
router.put("/:id",editNotes);
router.delete("/:id",deleteNotes);
export default router;