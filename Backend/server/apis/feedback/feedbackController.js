const feedbackModel = require("./feedbackModel")
const add = (req,res)=>{
    var errMsgs = [];
     if(!req.body.bookingId){
        errMsgs.push("bookingId is required!!")
    }
    if(!req.body.email)
    {
        errMsgs.push("email is required!!")
    }
    if(!req.body.message){
        errMsgs.push("message is required!!")
    }
     if(!req.body.rating){
        errMsgs.push("rating is required!!")
    }
    if(errMsgs.length>0){
        res.json({
            status:422,
            success:false,
            message:errMsgs,
        
        })

    }
    else{
        // feedbackModel.findOne({date:req.body.date,serviceId:req.body.serviceId,serviceId:req.body.serviceId})
        // .then(async(feedbackdata)=>{
        //          console.log("feedback data",feedbackdata);
        //         if(feedbackdata == null){
                    //insertion
                    
                // let totalFeedbacks = await feedbackObj.countDocuments()
                let feedbackObj = new feedbackModel()
                // feedbackObj.autoId = totalFeedbacks + 1
                feedbackObj.email = req.body.email
                feedbackObj.message  = req.body.message 
                feedbackObj.rating = req.body.rating
                feedbackObj.bookingId  = req.body.bookingId
                feedbackObj.addedBy  = req.decoded._id
                feedbackObj.save()
                .then((feedbackdata)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"feedback Inserted successfully!",
                        data:feedbackdata
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
                // else{
                //     //data already exists
                //     res.send({
                //         status:422,
                //         success:false,
                //         message:"Data already exists!!",
                      
                //     })
                // }
                
        // })
        // .catch((err)=>{
        //     res.send({
        //         status:500,
        //         success:false,
        //         message:"Internel server error",
        //         errMsg :err
        //     })
        //  })
        
    }

// }
const getAll = (req,res)=>{
    feedbackModel.find(req.body)
    .populate("bookingId")
    .populate("addedBy")
    .then((feedbackData)=>{
        res.send({
            status:200,
            success:true,
            message:"data loaded!",
            data:feedbackData
        })

    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Internal server error",
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
    feedbackModel.findOne({_id:req.body._id})
    .populate("bookingId")
    .populate("addedBy")
    .then((feedbackData)=>{
        console.log("feedback data",feedbackData);
        
        if(feedbackData == null){

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
                data:feedbackData
            })
        }

    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Internal server error",
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
        feedbackModel.find()
        .populate("bookingId")
        .populate("addedBy")
        .skip(skip)
        .limit(limit)
        .then((feedbackData)=>{
                res.send({
                    status:200,
                    success:true,
                    message:"data loaded",
                    data:feedbackData
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
        feedbackModel.deleteOne({_id:req.body._id})
        .then((feedbackdata)=>{
            res.send({
                status:200,
                success:true,
                message:"data deleted!!",
                data:feedbackdata
            })
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internal server error",
                errMsg :err
            })
        })
    }

}

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
       feedbackModel.findOne({_id:req.body._id})
        .then((feedbackData)=>{
                // console.lofeedbackObj data",feedbackData);
                if(feedbackData == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!",
                        
                    })
                }
                else{
                    //update code
                    // console.log(feedbackData);
                    if(req.body.email){
                        feedbackData.email = req.body.email
                    }
                    if(req.body.message){
                        feedbackData.message = req.body.message
                       
                    }
                    if(req.body.subject){
                        feedbackData.rating = req.body.rating
                    }
                    feedbackData.save()
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
    if(!req.body.status){
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
        feedbackModel.findOne({_id:req.body._id})
        .then((feedbackData)=>{
                // console.log("feedbackModel data",feedbackData);
                if(feedbackData == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    //update status
                    feedbackData.status = req.body.status
                    feedbackData.save()
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
