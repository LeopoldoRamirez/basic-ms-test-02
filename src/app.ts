import express from "express";
import router from "./routes/index.route";

export const init= async () =>{
    const app = express();

    //app configuration


    //configure middlewares
    app.use( express.json() );
    app.use( express.urlencoded( { extended: false }  ) );

    //configure routes
    app.use(router);
    
    app.listen( 3001, ()=>{
        console.log('Init ts microservice with typescript');
    })
}

