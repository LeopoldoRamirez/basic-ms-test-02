import { Router, Response } from "express";
import noteRouter from "./notes.router";

const router = Router();

router.use('/notes',noteRouter);


router.get('/', ( request, response:Response ) =>{
    response.send('Hello Microservice');
});


export default router;