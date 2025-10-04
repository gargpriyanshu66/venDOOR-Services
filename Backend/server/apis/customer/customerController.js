const userModel = require("../user/userModel")
const customerModel = require("./customerModel")
const bcrypt = require("bcrypt")

const register = (req,res)=>{
    var errMsgs = [];
    if(!req.body.name)
    {
        errMsgs.push("name is required!!")
    }
    if(!req.body.email){
        errMsgs.push("email is required!!")
    }
    if(!req.body.password){
        errMsgs.push("password is required!!")
    }
    if(!req.body.address){
        errMsgs.push("address is required!!")
    }
    if(!req.body.contact){
        errMsgs.push("contact is required!!")
    }
    if(errMsgs.length>0){
        res.json({
            status:422,
            success:false,
            message:errMsgs,
        
        })

    }
    else{
        //logic
        userModel.findOne({email:req.body.email})
        .then((userdata)=>{
                // console.log("userdata is ",userdata);
                if(userdata == null){
                        //register 
                        let userObj = new userModel()
                        userObj.name = req.body.name
                        userObj.email = req.body.email
                        userObj.password =bcrypt.hashSync(req.body.password,10) 
                        userObj.userType = 3
                        userObj.save()
                        .then(async(udata)=>{
                                    //customer model
                                    
                                                        
                                    let totalCustomers = await customerModel.countDocuments()
                                    let customerObj = new customerModel()
                                    customerObj.autoId = totalCustomers + 1
                                    customerObj.userId = udata._id
                                    customerObj.name = req.body.name
                                    customerObj.email = req.body.email
                                    customerObj.address = req.body.address
                                    customerObj.contact = req.body.contact
                                    customerObj.save()
                                    .then((customerdata)=>{
                                        res.json({
                                                    status:200,
                                                    success:true,
                                                    message:"customer Register successfully!!",
                                                    data:customerdata
        
                                                }) 

                                    })
                                    .catch((err)=>{
                                            res.json({
                                                    status:500,
                                                    success:false,
                                                    message:"Internal server error!!",
                                                    errMsg:err
        
                                                })    
                                                })


                        })
                        .catch((err)=>{
                            res.json({
                                    status:500,
                                    success:false,
                                    message:"Internal server error!!",
                                    errMsg:err
        
        })    
        })

                }
                else{
                    res.send({
                        status:422,
                        success:false,
                        message:"user already exists with same email!!!"
                    })
                }
                
        })
        .catch((err)=>{
              res.json({
                    status:500,
                    success:false,
                    message:"Internal server error!!",
                    errMsg:err
        
        })    
        })
    }
}
//getall
const getAll = (req,res)=>{
    customerModel.find(req.body)
    .populate("userId")
    .then((customerData)=>{
        res.send({
            status:200,
            success:true,
            message:"data loaded!",
            total:customerData.length,
            data:customerData
           
        })

    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Internel server error",
            errMsg :err
        })
})
} 
//get single
const getSingle = (req, res) => {
    let validation = ""

    if (!req.body._id) {
        validation += "_id is required. "
    }
    if (!!validation) {
        res.send({
            success: false,
            status: 402,
            message: validation,
        })
    }
    else {
        customerModel.findOne({ userId: req.body._id })
        .populate("userId")
        .then((result) => {
            if (!result) {
                res.send({
                    success: false,
                    status: 404,
                    message: "Customer Not Found",
                })
            } else {
                res.send({
                    success: true,
                    status: 200,
                    message: "Data Loaded",
                    data: result
                })
            }

        }).catch((err) => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
    }
}
//get pagination
const getPagination = (req,res)=>{
        var errMsgs = []
        if(!req.body.pageno){
            errMsgs.push("pageno is required!!")
        }
        if(!req.body.limit){
            errMsgs.push("limit is required!!")
        }
        if(errMsgs.length>0){
                res.send({
                    status:400,
                    success:false,
                    message:errMsgs
                })
        }
        else{
            //pagination
            var pageno = req.body.pageno
            var limit = req.body.limit
            var skip = 0
            if(pageno>1){
                skip = (pageno-1)*limit
            }
            customerModel.find()
            .populate("userId")
            .skip(skip)
            .limit(limit)
            .then((customerData)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"Data loaded!!",
                        data:customerData
                    })
            })
             .catch((err)=>{
                    res.send({
                        status:500,
                        success:false,
                        message:"Internel server error",
                        errMsg :err
                    })
                })
        }
}
//permanent dlt
const deleteOne = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
        errMsgs.push("_id is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{

        //delete 
        customerModel.deleteOne({_id:req.body._id})
        .then((customerdata)=>{
            res.send({
                status:200,
                success:true,
                message:"data deleted!!",
                data:customerdata
            })
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                errMsg :err
            })
        })
    }

}
//update data
const update = (req, res) => {
var errMsgs = [];

if (!req.body._id) {
          errMsgs.push("_id is required!!");
             }

// If there are validation errors, send them
if (errMsgs.length > 0) {
                res.json({
                         status: 422,
                         success: false,
                         message: errMsgs
                         });
                        }
else {
        customerModel.findOne({ _id: req.body._id })
        .then(async (customerdata) => {
if (customerdata == null) {
// If customer not found, send 404
            res.send({
                      status: 404,
                      success: false,
                      message: "Data not found!!"
                    });
                }
else {
if (req.body.name) {
        customerdata.name = req.body.name;
        }
if (req.body.email) {
        customerdata.email = req.body.email;
        }
if (req.body.status) {
        customerdata.status = req.body.status;
        }


customerdata.save()
.then((updateddata) => {

if (customerdata.userId) {
    let updateFields = {};

if (req.body.name) updateFields.name = req.body.name;
if (req.body.email) updateFields.email = req.body.email;
if (req.body.status) updateFields.status = req.body.status;
userModel.findByIdAndUpdate(customerdata.userId, updateFields, { new: true })
.then((updatedUserData) => {
           res.send({
                     status: 200,
                     success: true,
                     message: "Data updated Successfully!",
                     customerdata: updateddata,
                     userData: updatedUserData
                   });
                })
.catch((err) => {
console.log(err.message, err)
         res.send({
                   status: 500,
                   success: false,
                   message: "Internal server error while updating user",
                   errmsg: err
                 });
});
}
else {
// If no userId linked, only customer updated
        res.send({
                status: 200,
                success: true,
                message: "Data updated Successfully!",
                customerdata: updateddata
               });
}

})
.catch((err) => {
console.log(err.message, err)
// Error while saving customer
      res.send({
             status: 500,
             success: false,
             message: "Internal server error",
             errmsg: err
             });
});
}
})
.catch((err) => {
console.log(err.message, err)
// Error while finding customer
       res.send({
                status: 500,
                success: false,
                message: "Internal server error",
                errmsg: err
              });
});
}
}




const changeStatus = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
        errMsgs.push("_id is required!!")
    }
    if(req.body.status==null||req.body.status==undefined){
        errMsgs.push("status is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        customerModel.findOne({_id:req.body._id})
        .then((customerdata)=>{
                // console.log("customer data",customerdata);
                if(customerdata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    //update status
                    customerdata.status = req.body.status
                    customerdata.save()
                    .then((updateddata)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"Status changed!!",
                            data:updateddata
                        })
                    })
                    .catch((err)=>{
                        res.send({
                            status:500,
                            success:false,
                            message:"Internel server error",
                            errMsg :err
                        })
                    })

                }
                
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                errMsg :err
            })
        })
        
    }
}

module.exports = {register,getAll,getSingle,getPagination,deleteOne,update,changeStatus}