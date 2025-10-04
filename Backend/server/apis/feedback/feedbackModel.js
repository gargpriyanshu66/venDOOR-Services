const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    bookingId:{type:mongoose.Schema.Types.ObjectId,ref:"booking"},
    email:{type:String,default:""},
    message:{type:String,default:""},
    rating:{type:String,default:""},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    addedBy:{type:mongoose.Schema.Types.ObjectId,ref:"users"}
})
module.exports = mongoose.model("feedback",feedbackSchema)