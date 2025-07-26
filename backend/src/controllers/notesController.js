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
        cosole.error("Error adding new note");
        res.status(500).json("Internal server error");
    }
}
export const editNotes=async (req,res)=>{
    try {
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,
        {title:title,content:content},
        {new:true});
        if(!updatedNote){
            res.status(404).json({message:"Note not found"});
        }
        res.status(200).json(updatedNote);

    } catch (error) {
        cosole.error("Error editing note");
        res.status(500).json({message:"Internal server error"});
    }
}
export const deleteNotes=async (req,res)=>{
    try {
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            res.status(404).json({message:"Note not found"});
        }
        res.status(200).json(deletedNote);
    } catch (error) {
        cosole.error("Error Deleting note");
        res.status(500).json({message:"Internal server error"});
    }
}