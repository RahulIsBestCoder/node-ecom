const controllerProduct =require("../controller/product")
const express=require("express")
const router = express.Router()  

router.get("/",controllerProduct.Default)
router.get("/prod",controllerProduct.Data)
router.get("/prodbyid",controllerProduct.DataId)
router.post("/prod",controllerProduct.dataPost)
router.put("/prod/:id",controllerProduct.dataUpdate)
module.exports= router
