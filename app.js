import e from "express";
import  "./src/config/db.js"

const app = e();



app.listen(3000 , ()=> 
{
    console.log("test");
})