const express = require('express');
const multer = require('multer');
const app = express();
const router = express.Router();

const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,"uploads")
    },filename:function(req,file,cb){
      cb(null,file.fieldname + "-" + Date.now() +".jpg")
    }
  })
}).single("user_file")

app.post("/upload" , upload ,(res, resp)=>{
  resp.send("file upload")
})

app.listen(5000)
module.exports = router ;