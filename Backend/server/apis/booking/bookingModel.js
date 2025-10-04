const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"category"},
    serviceId:{type:mongoose.Schema.Types.ObjectId,ref:"service"},
    date:{type:String,default:""},
    time:{type:String,default:""},
    address:{type:String,default:""},
    price:{type:String,default:""},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    addedBy:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    vendorId:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    paymentMethod:{type:String,default:""},
    paymentStatus:{type:String,default:""},
})
module.exports = mongoose.model("bookings",bookingSchema)   