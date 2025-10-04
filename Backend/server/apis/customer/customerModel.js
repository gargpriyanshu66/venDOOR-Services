const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    // password:{type:String,default:""},
    contact:{type:String,default:""},
    address:{type:String,default:""},
    status:{type:Boolean,default:true},
    created_at:{type:Date,default:Date.now()},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"users"}

})

module.exports = new mongoose.model("customers",customerSchema)