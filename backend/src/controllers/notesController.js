const Note = require("../models/Note")

const  getAllNotes=async (req,res)=>{
   try{
      const note= await Note.find().sort({createdAt:1});//newest first
      res.status(200).json(note)
   }
   catch(error){
    res.status(500).json({
        message: "Internal Server Error",
    })
   }
}

const getNoteById=async(req,res)=>{
    try{
        const note=await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"})
            res.json(note);
    }
    catch(error){
        res.status(500).json({
        message: "Internal Server Error",
    })
    }
}
// Create Note API
const  createANote=async(req,res)=>{
   try{
   const {title,content}=req.body
   const newNote=new Note({title,content})
   await newNote.save()
   res.status(201).json({message:"Note created successfully"})
   }
   catch(error){
        res.status(500).json({
        message: "Internal Server Error",
    })
   }
}

// Update note api
const   updateANote=async(req,res)=>{
   try{
    const {title,content} =req.body
    const updatedNote=await Note.findByIdUpdate(req.params.id,{title,content},{new:true,});
    if(!updatedNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json({
        message:"Note updated successfully"
    })
    }

   catch(error){
         res.status(500).json({
        message: "Internal Server Error",
    })
   
}
   }


const   deleteANote=async(req,res)=>{
    try{
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message:"Note not found "})
    }
     catch(error){
    res.status(500).json({
        message: "Internal Server Error",
    })
}
}

module.exports={
    getAllNotes,
    createANote,
    updateANote,
    deleteANote,
    getNoteById,
};