import mongoose from "mongoose";


const connect = mongoose.connect("mongodb://localhost:27017/ex").then( ()=> console.log("success"))
.catch(()=> console.log("error"));

export default   connect;