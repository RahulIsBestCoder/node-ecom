const mongoose =require("mongoose")
const userSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required:[true,"plz provide name"],
    },
    email: {
        type: String,
        trim:true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: Number,
        require:[true,"plz provide phone number"],
        unique:true,
        minlength:10,
        maxlength:10,
    },
    country:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    area:{
        type:String,
        require:true
    },
    pin:{
        type:Number,
        maxlength:6,
        minlength:6,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
},
{timestamps: true})
const User =mongoose.model('User',userSchema)
module.exports=User