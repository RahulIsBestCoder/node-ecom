const Msg = require("../model/messages");
require("dotenv").config();
const DATE=new Date().toLocaleDateString().slice(0,10)
exports.Data = async (req, res) => {
	try {
		console.log("get hit");
		const result = await Msg.find();
		if (result) {
			res.status(200).json({
				msg: result,
			});
		} else {
			msg: "failed";
		}
	} catch (err) {
		res.send(err);
	} 
};

exports.dataPost = async (req, res) => {
	try {
		console.log("post hit");
		const Msge = new Msg(req.body);
		const result = await Msge.save();
		res.status(200).json({
			Msge: result,
		});
	} catch (err) {
        if(err.errors){
            res.status(500).json({
                msg:err.message
            });   
        }
		  else{
            res.status(500).json({
			msg:err,
		});}
	}
};
exports.DataId = async (req, res) => {
	try {
		console.log("get hit");
		const result = await Msg.findById(req.params.id);
		if (!result) {
			res.send("plz check the id")
		} else {
			res.status(200).json({ 
				res: result,
			});
		}
	} catch (err) {
		res.send(err);
	}
};

 exports.dataUpdate=async (req,res)=>{
	try{
		console.log("hi put")
		const result = await Msg.findByIdAndUpdate(req.params.id,
			req.body , {
				new: true,
				runValidator: true,
			  }
		)
		console.log(result);
		res.status(200).json({
			result
		})
	}
	catch(err){
		console.log(err);
		res.status(500).send({
			err
		})
	}
 }