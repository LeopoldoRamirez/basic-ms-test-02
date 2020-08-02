import { Request, Response } from "express";
import { buildResponse } from "./controllerUtils";


export const getAllNotes = async( request: Request, response:Response ): Promise<Response> =>{

    try {
        return buildResponse( response, 200, {msg: "get all notes"} );    
    } catch (error) {
        return buildResponse( response, 500, {msg: "some error"} );
    }    
}


export const getNoteById = async(  request: Request, response: Response ): Promise<Response> =>{
    try {
        return buildResponse( response, 200, {msg: "get note by id"} );    
    } catch (error) {
        return buildResponse( response, 500, {msg: "some error"} );
    }
}

export const saveNote = async( request: Request, response:Response ): Promise<Response> =>{

    try {
        return buildResponse( response, 200, {msg: "save notes"} );    
    } catch (error) {
        return buildResponse( response, 500, {msg: "some error"} );
    }    
}

export const updateNote = async( request: Request, response:Response ): Promise<Response> =>{

    try {
        return buildResponse( response, 200, {msg: "update notes"} );    
    } catch (error) {
        return buildResponse( response, 500, {msg: "some error"} );
    }    
}

export const deleteNote = async( request: Request, response:Response ): Promise<Response> =>{

    try {
        return buildResponse( response, 200, {msg: "delete notes"} );    
    } catch (error) {
        return buildResponse( response, 500, {msg: "some error"} );
    }    
}