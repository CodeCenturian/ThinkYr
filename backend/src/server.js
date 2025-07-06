import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import path from 'path';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config(); // neccessary for ececuting .env

const app = express();
const __dirname = path.resolve();
import cors from 'cors' ;


//middlewares
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes); // this means if you get any request of the form localhost:5001/api/


// app.get("/api/notes",(req,res) =>{
//     res.send("you got 5 notes");
// })

// app.post("/api/notes" , (req,res) => {
//     res.status(201).json({message : "Note Cretaed Successfully"});
// })

// app.put("/api/notes/:id", (req,res) =>{
//     res.status(200).json({message : "Note Updated Successfully"});
// })

// app.delete("/api/notes" , (req,res) => {
//     res.status(200).json({message : "Note deleted Successfully"});
// })



const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

const executefirst = async() =>  {    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log("Server started on PORT: 5001")
        })

    } catch (error) {
        console.log("The Database cannot be connected and the error is : ", error);

    }
}

executefirst();