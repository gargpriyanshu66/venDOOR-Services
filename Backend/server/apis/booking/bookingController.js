const bookingModel = require("./bookingModel")
const add = (req,res)=>{
    var errMsgs = [];
     if(!req.body.categoryId){
        errMsgs.push("categoryId is required!!")
    }
    if(!req.body.serviceId)
    {
        errMsgs.push("serviceId is required!!")
    }
    if(!req.body.price){
        errMsgs.push("price is required!!")
    }
     if(!req.body.date){
        errMsgs.push("date is required!!")
    }
     if(!req.body.address){
        errMsgs.push("address is required!!")
    }
    if(!req.body.time){
        errMsgs.push("time is required!!")
    } 
    if (!req.body.vendorId){
        errMsgs.push("vendorId is required!!")
    } 
    // if(!req.body.paymentStatus){
    //     errMsgs.push("paymentStatus is required!!")
    // }
    if(errMsgs.length>0){
        res.json({
            status:422,
            success:false,
            message:errMsgs,
        
        })

    }
    else{
        bookingModel.findOne({ date: req.body.date, serviceId: req.body.serviceId, addedBy:req.decoded._id })
        .then(async(bookingdata)=>{
                 console.log("booking data",bookingdata);
                if(bookingdata == null){
                    //insertion
                    
                let totalBookings = await bookingModel.countDocuments()
                let bookingObj = new bookingModel()
                bookingObj.autoId = totalBookings + 1
                bookingObj.time = req.body.time
                bookingObj.date  = req.body.date 
                bookingObj.address = req.body.address
                bookingObj.price  = req.body.price 
                bookingObj.serviceId  = req.body.serviceId
                bookingObj.categoryId  = req.body.categoryId 
                bookingObj.paymentMethod  = req.body.paymentMethod
                bookingObj.paymentStatus  = req.body.paymentStatus 
                bookingObj.vendorId  = req.body.vendorId 
                bookingObj.addedBy  = req.decoded._id
                bookingObj.save()
                .then((bookingDATA)=>{
                    console.log(bookingDATA);
                    
                    res.send({
                        status:200,
                        success:true,
                        message:"booking Inserted successfully!",
                        data:bookingDATA
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
                else{
                    //data already exists
                    res.send({
                        status:422,
                        success:false,
                        message:"Data already exists!!",
                      
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

const getAll = (req,res)=>{
    bookingModel.find(req.body)
    .populate("categoryId")
    .populate("serviceId")
        .populate("vendorId")
    .populate("addedBy")
    .then((bookingdata)=>{
        res.send({  
            status:200,
            success:true,
            message:"data loaded!",
            // total: bookingdata.length,
            data:bookingdata
        
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


const getSingle = (req,res)=>{
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
    bookingModel.findOne({_id:req.body._id})
    
    .populate("addedBy")
    .populate("categoryId")
    .populate("serviceId")
        .populate("vendorId")
    .then((bookingData)=>{
        console.log("service data",bookingData);
        
        if(bookingData == null){

            res.send({
                status:404,
                success:false,
                message:"Data not found!!",
             
            })
        }
        else{
            res.json({
                status:200,
                success:true,
                message:"Single record loaded!!",
                data:bookingData
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

const getPagination = (req,res)=>{
    var errMsgs = []
    if(!req.body.pageno){
        errMsgs.push("Page no is required!")
    }
    if(!req.body.limit){
        errMsgs.push("limit is required!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        let limit = req.body.limit;
        let pageno = req.body.pageno;
        let skip = 0;
        if(pageno>1){
            skip = (pageno-1)*limit

        }
        bookingModel.find()
        
        .populate("addedBy") 
        .populate("categoryId")
        .populate("serviceId")
        .populate("verderId")
        .skip(skip)
        .limit(limit)
        .then((bookingdata)=>{
                res.send({
                    status:200,
                    success:true,
                    message:"data loaded",
                    data:bookingdata
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
        bookingModel.deleteOne({_id:req.body._id})
        .then((bookingdata)=>{
            res.send({
                status:200,
                success:true,
                message:"data deleted!!",
                data:bookingdata
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
const update = (req,res)=>{
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
        bookingModel.findOne({_id:req.body._id})
        .then(async(bookingdata)=>{
                // console.log("service data",bookingdata);
                if(bookingdata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!",
                        
                    })
                }
                else{
                    //update code
                    // console.log(bookingdata);
                    if(req.body.date){
                        bookingdata.date = req.body.date
                    }
                     if(req.body.time){
                        bookingdata.time = req.body.time
                    }
                    if(req.body.address){
                        bookingdata.address = req.body.address
                    }
                     if(req.body.price){
                        bookingdata.price = req.body.price
                    }
                    if(req.body.paymentStatus){
                        bookingdata.paymentStatus = req.body.paymentStatus
                    }
                    if(req.body.paymentMethod){
                        bookingdata.paymentMethod = req.body.paymentMethod
                    }
                     bookingdata.save()
                    .then((updateddata)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"Data Updated!!",
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
//soft delete
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
        bookingModel.findOne({_id:req.body._id})
        .then((bookingdata)=>{
                // console.log("service data",bookingdata);
                if(bookingdata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    //update status
                    bookingdata.status = req.body.status
                    bookingdata.save()
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

module.exports = {add,getAll,getSingle,getPagination,deleteOne,update,changeStatus}