const mongoose =require("mongoose")
const cartSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    product: {
        type: String,
        require:[true,"plz provide product"],
    },
    quantity: {
        type: Number,
        require:[true,"plz provide quantity"],
        minValu:1,
        minlength:10,
        maxlength:10,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require:true
    },
},
{timestamps: true}
)
const Cart =mongoose.model('Cart',cartSchema)
module.exports=Cart