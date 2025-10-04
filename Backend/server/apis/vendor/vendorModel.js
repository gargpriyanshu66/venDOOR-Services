const mongoose = require("mongoose")

const vendorSchema = new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    contact:{type:String,default:""},
    address:{type:String,default:""},
    status:{type:String,default:false},
    created_at:{type:Date,default:Date.now()},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"category"},

})

module.exports = new mongoose.model("vendors",vendorSchema)