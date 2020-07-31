import { Request, Response } from "express";

export const getNotes = async( request: Request, response:Response ): Promise<Response> =>{

    return response.json( {msg: "Get all notes"} );
}


export const getNoteById = async(  request: Request, response: Response ): Promise<Response> =>{

    return response.json({msg: "get note by id"});
}