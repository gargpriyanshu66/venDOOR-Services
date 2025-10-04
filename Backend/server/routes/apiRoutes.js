const router = require("express").Router()
module.exports = router

const multer = require('multer')
const memoryStorage = multer.memoryStorage()
const upload = multer({ storage: memoryStorage })

const categoryController = require("../apis/category/categoryController")
const serviceController = require("../apis/service/serviceController")
const enquiryController = require("../apis/enquiry/enquiryController")
const bookingController = require("../apis/booking/bookingController")
const feedbackController = require("../apis/feedback/feedbackController")
const customerController = require("../apis/customer/customerController")
const vendorController = require("../apis/vendor/vendorController")
const userController = require("../apis/user/userController")
const dashboardController = require("../apis/dashboard/dashboardController")

//enquiry
router.post("/enquiry/add",enquiryController.add)
router.post("/enquiry/getAll",enquiryController.getAll)
router.post("/enquiry/getSingle",enquiryController.getSingle)
router.post("/enquiry/getPagination",enquiryController.getPagination)

//service
router.post("/service/getSingle",serviceController.getSingle)
router.post("/service/getPagination",serviceController.getPagination)
router.post("/service/getAll",serviceController.getAll)

//category
router.post("/category/getSingle",categoryController.getSingle)
router.post("/category/getPagination",categoryController.getPagination)
router.post("/category/getAll",categoryController.getAll)


//feedback
router.post("/feedback/getAll",feedbackController.getAll)
router.post("/feedback/getSingle",feedbackController.getSingle)
router.post("/feedback/getPagination",feedbackController.getPagination)
//register vendor
router.post("/vendor/register",vendorController.register)

//register customer
router.post("/customer/register",customerController.register)
//login
router.post("/user/login",userController.login)

router.use(require("../apis/middleware/middleware"))

//dashboard
router.post("/dashboard",dashboardController.dashboard)

//enquiry
router.post("/enquiry/deleteOne",enquiryController.deleteOne)
router.post("/enquiry/update",enquiryController.update)
router.post("/enquiry/changeStatus",enquiryController.changeStatus)

//service
router.post("/service/add",upload.single("image"),serviceController.add)
router.post("/service/deleteOne",serviceController.deleteOne)
router.post("/service/changeStatus",serviceController.changeStatus)
router.post("/service/update",upload.single("image"),serviceController.update)


//category
router.post("/category/add",upload.single("image"),categoryController.add)
router.post("/category/deleteOne",categoryController.deleteOne)
router.post("/category/changeStatus",categoryController.changeStatus)
router.post("/category/update",upload.single("image"),categoryController.update)

//booking
router.post("/booking/add",bookingController.add)
router.post("/booking/getAll",bookingController.getAll)
router.post("/booking/getSingle",bookingController.getSingle)
router.post("/booking/getPagination",bookingController.getPagination)
router.post("/booking/deleteOne",bookingController.deleteOne)
router.post("/booking/update",bookingController.update)
router.post("/booking/changeStatus",bookingController.changeStatus)

//feedback
router.post("/feedback/add",feedbackController.add)
router.post("/feedback/deleteOne",feedbackController.deleteOne)
router.post("/feedback/update",feedbackController.update)
router.post("/feedback/changeStatus",feedbackController.changeStatus)

//user

router.post("/user/changePassword",userController.changePassword)

//customer
router.post("/customer/getAll",customerController.getAll)
router.post("/customer/getSingle",customerController.getSingle)
router.post("/customer/getPagination",customerController.getPagination)
router.post("/customer/deleteOne",customerController.deleteOne)
router.post("/customer/update",customerController.update)
router.post("/customer/changeStatus",customerController.changeStatus)

//vendor

router.post("/vendor/getAll",vendorController.getAll)
router.post("/vendor/getSingle",vendorController.getSingle)
router.post("/vendor/getPagination",vendorController.getPagination)
router.post("/vendor/deleteOne",vendorController.deleteOne)
router.post("/vendor/update",vendorController.update)
router.post("/vendor/changeStatus",vendorController.changeStatus)