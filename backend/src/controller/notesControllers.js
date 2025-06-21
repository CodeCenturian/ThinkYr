import Note from "../models/Note.js";

export const getAllnotes = async(req,res) =>{
    try {
        const notes = await Note.find().sort({createdAt : -1});
        res.status(200).json({message : "You have fetched the nodes",notes} );
    } catch (error) {
        console.log("The error encoutered is : ", error);
        res.status(500).send("Server side error");
    }
};

export const getNoteById = async (req,res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message : "The input ID is not found"});
        res.status(200).json({message : "The note with the given Id is found" , note});
    } catch (error) {
        console.log("The error encoutered is : ", error);
        res.status(500).send("Server side error");
    }
};

export const createNote = async(req,res) => {
    try {
        const {title , content} = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json({message :"The new Note is created" , newNote});
    } catch (error) {
        console.log("The error encountered is : ", error);
        res.status(500).send("Server Side Error");
    }
}

export const updateNote = async(req,res) =>{
    try {
        const {title ,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id ,
             {title , content} ,
             {new : true });
        res.status(200).json({message : "The note has been updated and the updated note is - " , updatedNote});
    } catch (error) {
        console.log("The error encountered is : ", error);
        res.status(500).send("Server Side Error");

    }
};

export const deleteNote = async(req,res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message : "The ID is not found"});
        res.status(200).json({message : "The following note is deleted" , deletedNote});
    } catch (error) {
        console.log("The error encountered is : ", error);
        res.status(500).send("Server Side Error");
    }
};