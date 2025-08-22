import express from "express";
import notesRoute from "./routers/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";

const app=express()

dotenv.config();
const PORT=process.env.PORT || 5000

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes",notesRoute)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server running at port:",PORT);
    });
})

