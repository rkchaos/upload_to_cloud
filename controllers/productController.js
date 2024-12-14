
const Upload=require("../middleware/upload")
const Product = require("../models/Uploadproducts")




exports.uploadProduct=async(req,res)=>{
try{
    console.log(req.body)
const upload =await Upload.uploadFile(req.file.path)
const product= new Product({
    name:req.body.name,
    img:upload.secure_url

})
const result=await product.save()
res.status(200).json({msg:"uploded successfully",result})
}
catch(err){
    res.status(400).json({msg:" not uploded successfully"})
    console.log(err);
}
}