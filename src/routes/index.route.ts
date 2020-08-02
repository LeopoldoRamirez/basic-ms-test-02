import { Router, Response } from "express";
import noteRouter from "./notes.router";

const router = Router();

router.use('/notes',noteRouter);

// Default route
router.get('/', ( request, response:Response ) =>{
    response.send('Hello Microservice with Express and TypeScript');
});


export default router;