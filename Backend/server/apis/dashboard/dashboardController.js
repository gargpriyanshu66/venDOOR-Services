const categoryModel = require("../category/categoryModel")
const serviceModel = require("../service/serviceModel")
const bookingModel = require("../booking/bookingModel")
const enquiryModel = require("../enquiry/enquiryModel")
const feedbackModel = require("../feedback/feedbackModel")
const customerModel = require("../customer/customerModel")
const vendorModel = require("../vendor/vendorModel")
const dashboard = async(req,res)=>{
    var totalCategories = 0
    var totalServices = 0
    var totalBookings = 0
    var totalEnquiries = 0
    var totalFeedbacks = 0
    var totalCustomers = 0
    var totalVendors = 0
   await categoryModel.countDocuments()
   .then((tcat)=>{
            totalCategories = tcat
   })
   await serviceModel.countDocuments()
   .then((tser)=>{
            totalServices = tser
   })
   await bookingModel.countDocuments()
   .then((tbook)=>{
            totalBookings = tbook
   })
    await enquiryModel.countDocuments()
   .then((tenq)=>{
            totalEnquiries = tenq
   })
   await feedbackModel.countDocuments()
   .then((tfdbk)=>{
            totalFeedbacks = tfdbk
   })
   await customerModel.countDocuments()
   .then((tcus)=>{
            totalCustomers = tcus
   })
   await vendorModel.countDocuments()
   .then((tven)=>{
            totalVendors = tven
   })
   res.send({
        status:200,
        success:true,
        message:"dashboard loaded!!",
        totalcategories:totalCategories,
        totalservices:totalServices,
        totalenquiries:totalEnquiries,
        totalfeedbacks:totalFeedbacks,
        totalbookings:totalBookings,
        totalvendors:totalVendors,
        totalcustomers:totalCustomers
   })



}

module.exports= {dashboard}