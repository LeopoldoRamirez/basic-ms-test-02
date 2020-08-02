import { Router } from "express";
import { getAllNotes, getNoteById, saveNote, deleteNote, updateNote  } from "../controllers/note.controller";


const router = Router();

router.get('/', getAllNotes );

router.get('/:id', getNoteById );

router.post('/', saveNote );

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);


export default router;

