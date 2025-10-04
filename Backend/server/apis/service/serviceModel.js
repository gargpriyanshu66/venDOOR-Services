const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    
    serviceName:{type:String,default:""},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"category"},
    image: { type: String, default: '' },
    description:{type:String,default:""},
    price:{type:Number,default:""},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    addedBy:{type:mongoose.Schema.Types.ObjectId,ref:"users"}

})
module.exports = mongoose.model("service",serviceSchema)