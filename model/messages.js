const mongoose =require("mongoose")
const messageSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    userName: {
        type: String,
        trim:true, //trim is use to eleminate space in fron and end of the string
        required:[true,"plz provide name"],
        capitalie:true
        
    },
    email: {
        type: String,
        trim:true,
        lowercase: true,
        unique: true,
        required:[true,"plz provide email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    message:{
        type:String,
        required:[true,"plz provide message"],
    },
},{timestamps: true})
const Message =mongoose.model('Message',messageSchema)
module.exports=Message
