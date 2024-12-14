const express =require("express")
const app = express()
const dotenv=require("dotenv").config()
const mongoose = require('mongoose');
const productRoutes=require("./routes/productRoutes")




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("not connected to database",err)
})









app.use(productRoutes)





















app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})













