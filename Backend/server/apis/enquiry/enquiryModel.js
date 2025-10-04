const mongoose = require("mongoose")

const enquirySchema = new mongoose.Schema({
    email:{type:String,default:""},
    message:{type:String,default:""},
    subject:{type:String,default:""},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})
module.exports = mongoose.model("enquiry",enquirySchema)