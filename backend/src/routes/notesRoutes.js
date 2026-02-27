const express =require("express");
const {getAllNotes,
    createANote,
    updateANote,
    deleteANote,
    getNoteById
}=require("../controllers/notesController")

const router=express.Router();

router.get("/",getAllNotes)
router.post("/:id",getNoteById)
router.put("/:id",updateANote)
router.delete("/:id",deleteANote)


module.exports=router