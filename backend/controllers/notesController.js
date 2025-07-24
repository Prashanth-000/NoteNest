export const viewNotes=(req,res)=>{
    res.status(200).send("All records are here check");
}
export const addNotes=(req,res)=>{
    res.status(201).json({message:"notes created successfully"});
}
export const editNotes=(req,res)=>{
    res.status(200).json({message:"notes updated successfully"});
}
export const deleteNotes=(req,res)=>{
    res.status(200).json({message:"Notes deleted succesfully"})
}