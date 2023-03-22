const Usr = require("../model/user");
require("dotenv").config();
const DATE=new Date().toLocaleDateString().slice(0,10)
exports.Data = async (req, res) => {
	try {
		console.log("get hit");
		const result = await Usr.find();
		if (result) {
			res.status(200).json({
				res: result,
			});
		} else {
			res: "failed";
		}
	} catch (err) {
		res.send(err);
	}
};
exports.DataId = async (req, res) => {
	try {
		console.log("get hit");
		const result = await Usr.findById(req.params.id);
		if (!result) {
			res.send("plz check the id")
		} else {
			res.status(200).json({ 
				res: result,
			});
		}
	} catch (err) {
		res.send({failed:err.kind});
	}
};

exports.dataPost = async (req, res) => {
	try {
		console.log("post hit");
		
		const User = new Usr(req.body);
		const result = await User.save();
		if (!result) {
			res.send("plz check the id")
		} else {
			res.status(200).json({ 
				res: result,
			});
		}
	} catch (err) {
        if(err.errors){
            res.status(500).json({
                res:err.message
            });   
        }
		  else{
            res.status(500).json({
			res:err,
		});}
	}
};
 exports.dataUpdate=async (req,res)=>{

	try{ 
		console.log("hi put")
		const data = await Usr.findById(req.params.id);
		if (!data) {
			res.send("plz check the id")
		}else{
		const result = await Usr.findByIdAndUpdate(req.params.id,
			req.body , {
				new: true,
				runValidator: true,
			  }
		)
		if (!result) {
			res.send("plz check the id")
		} else {
			res.status(200).json({ 
				res: result,
			});
		}} 
	}
	catch(err){
		res.status(500).send({
			msg:err.kind
		})
	}
 }