const express=require("express")
const router=express.Router()
const productController=require("../controllers/productController")
const multer = require('multer');

var uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 5 * 1024 * 1024 }
});



router.post("/uploadproduct",uploader.single("file"),productController.uploadProduct)


module.exports=router