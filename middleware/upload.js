const cloudinary = require("cloudinary").v2;
          
cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key: process.env.APIKEYS, 
    api_secret: process.env.APISECRET 
});

const uploadFile = async(filePath) => {

    try {
        const result = await cloudinary.uploader.upload(filePath);
        // console.log(result)
        return result;
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    uploadFile
}