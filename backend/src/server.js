import express from "express";
import notesRoute from "./routers/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app=express()

dotenv.config();
const PORT=process.env.PORT || 5000

app.use(express.json());
app.use("/api/notes",notesRoute)

connectDB();

app.listen(PORT, ()=>{
    console.log("Server running at port:",PORT);
});

