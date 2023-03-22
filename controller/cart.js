const Cart=require("../model/cart")
exports.Data= async(req,res)=>{
    try{const result = await Cart.find().populate("user")
        if (!result){
            res.status(400).json({
                res:"failed"
            })
        }
        else{
            res.status(200).json({
                res:result
            })
        }
     }
    catch(err){
        res.send({failed:err.kind})
    }
}

exports.DataId=async (req,res)=>{
    try{const result =await Cart.findById(req.params.id).populate("user")
        if (!result){
            res.status(400).json({
                res:"check the id "
            })
        }
        else{
            res.status(200).json({
                    cart:result
            })
        }
                    }
        catch(err){
            res.send({
              failed:err.kind
            })
        }

}
exports.dataPost= async (req,res)=>{
    try{
        const cart = new Cart(req.body)
        const result  = await cart.save()
        if(!result){
            res.status(400).json({
                msg:"failed to ad cart"
            })
        }else{
            res.status(200).json({
                cart:result
            })
        }

}catch(err){
    res.send({
        failed:err.kind
    })
}

}
exports.dataUpdate=async (req,res)=>{
    try {
        
        const data = await Cart.findById(req.params.id)
        if(!data){
            res.send("plzzz check the id")
        }else{
            const result = await Cart.findById(req.params.id,req.body,{
                new :true,
                runValidators:true
            }).populate("user")
        }
    } catch (error) {
        
    }

}