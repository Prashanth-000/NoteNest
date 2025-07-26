import Note from "../models/note.js";

export const viewNotes=async (req,res)=>{
    try {
        const notes=await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error getting all notes",error);
        res.status(500).json({message:"Internal server error"});
    }

}
export const addNotes=async (req,res)=>{
    try {
        const {title,content}=req.body;
        const newNote=new Note({title:title,content:content});
        await newNote.save();
        res.status(201).json({message:"Note created successfully!"});
        
    } catch (error) {
        cosole.error("Error aadding new note");
        res.status(500).json("Internal server error");
    }
}
export const editNotes=(req,res)=>{
    res.status(200).json({message:"notes updated successfully"});
}
export const deleteNotes=(req,res)=>{
    res.status(200).json({message:"Notes deleted succesfully"})
}