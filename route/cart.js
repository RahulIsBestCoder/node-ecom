const controllerCart =require("../controller/cart")
const express=require("express")
const router = express.Router()  

router.get("/cart",controllerCart.Data)
router.get("/cartbyid",controllerCart.DataId)
router.post("/cart",controllerCart.dataPost)
router.put("/cart",controllerCart.dataUpdate)
module.exports= router