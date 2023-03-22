const mongoose =require("mongoose")
const productSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required:[true,"plz provide name"],
    },
    company: {
        type: String,
        required:[true,"plz provide company"],
    },
    price: {
        type: Number,
        required:[true,"plz provide price"],
    },
    colors:[],
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
    },
    featuredImage:{
    type:String,
    },
    productImage:{
        type:String,
    },
},
{timestamps: true})
const Product =mongoose.model('Product',productSchema)
module.exports=Product
