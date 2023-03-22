const http=require('http');
const app =require('./server');
const server =http.createServer(app);
const cloudinary = require('cloudinary').v2;
const fileupload=require('express-fileupload')
require("dotenv").config();
const PORT=process.env.PORT
server.listen(PORT,console.log(`app is running on http://localhost:${PORT}`));
//image
app.use(fileupload({
    useTempFiles:true
}))

cloudinary.config({
    secure: true
  });
  
  // Configuration 
cloudinary.config({
    cloud_name: "dvmyu1phy",
    api_key: "289319398836845",
    api_secret: "xs2a1iG2HNTNZ6xnCutQOQDnAFE"
  });
  app.post('/up' ,(req , res)=>{
    try{const file=req.files.image
    const imagePath=file.tempFilePath
    cloudinary.uploader.upload(imagePath,(err,result)=>{
        res.send(result.url)
    });
    }catch(err){
        res.send(err)
    }
  
})