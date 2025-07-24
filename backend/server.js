import express from "express";
import notesRoute from "./routes/notesRoutes.js";

const app=express()

app.use("/api/notes",notesRoute)

app.listen(5000, (req,res)=>{
    console.log("Server running at port:5000");
});