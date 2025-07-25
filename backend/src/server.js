import express from "express";
import notesRoute from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app=express()

dotenv.config();
const PORT=process.env.PORT || 5001

app.use("/api/notes",notesRoute)

connectDB();

app.listen(PORT, (req,res)=>{
    console.log("Server running at port:",PORT);
});

