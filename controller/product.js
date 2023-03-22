const Pro=require("../model/product")
exports.Data= async(req,res)=>{
    try{const result = await Pro.find()
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
    try{const result =await Pro.findById(req.params.id)
        if (!result){
            res.status(400).json({
                res:"check the id "
            })
        }
        else{
            res.status(200).json({
                    product:result
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
        const product = new Pro(req.body)
        const result  = await product.save()
        if(!result){
            res.status(400).json({
                msg:"failed to ad product"
            })
        }else{
            res.status(200).json({
                product:result
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
        
        const data = await Pro.findById(req.params.id)
        if(!data){
            res.send("plzzz check the id")
        }else{
            const result = await Pro.findById(req.params.id,req.body,{
                new :true,
                runValidators:true
            })
            res.status(200).json({
                prod:result
            })
        }
    } catch (err) {
        res.status(500).send({
            failed:err.message
        })
    }

}