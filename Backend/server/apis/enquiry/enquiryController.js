const enquiry = require("./enquiryModel")
const add = (req, res) => {
    // console.log(req.file)
    // return

    let validation = ""
    if (!req.body.email) {
        validation += "email is required. "
    }
     if (!req.body.message) {
        validation += "message is required. "
    }
     if (!req.body.subject) {
        validation += "subject is required. "
    }
    

    if (!!validation) {
        res.send({
            success: false,
            status: 402,
            message: validation,
        })
    }

    else {
        enquiry.findOne({ email: req.body.email }).then(async (enquiryData) => {
            if (enquiryData) {
                console.log("data is",enquiryData);
                res.send({
                    success: false,
                    status: 400,
                    message: "enquiry Already Exist",

                })

            } else {
                let totalEnquiries = await enquiry.countDocuments()
                let newEnquiry = new enquiry()
                newEnquiry.autoId = totalEnquiries + 1
                newEnquiry.email = req.body.email
                newEnquiry.message = req.body.message
                newEnquiry.subject = req.body.subject
                newEnquiry.save().then((savedEnquiry) => {
                    res.send({
                        success: true,
                        status: 201,
                        message: "Enquiry Added Successfully",
                        data: savedEnquiry
                    })

                }).catch((err) => {
                    
                    console.log("err is",err)
                    res.send({
                        success: false,
                        status: 500,
                        message: err.message
                    })

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
const getAll = (req,res)=>{
    enquiry.find(req.body)
    
    .then((enquiryData)=>{
        res.send({
            status:200,
            success:true,
            message:"data loaded!",
            total:enquiryData.length,
            data:enquiryData
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
    enquiry.findOne({_id:req.body._id})
   
    .then((enquiryData)=>{
        console.log("enquiry data",enquiryData);
        
        if(enquiryData == null){

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
                data:enquiryData
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
        enquiry.find()
        .skip(skip)
        .limit(limit)
        .then((enquiryData)=>{
                res.send({
                    status:200,
                    success:true,
                    message:"data loaded",
                    data:enquiryData
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
        enquiry.deleteOne({_id:req.body._id})
        .then((enquirydata)=>{
            res.send({
                status:200,
                success:true,
                message:"data deleted!!",
                data:enquirydata
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
        enquiry.findOne({_id:req.body._id})
        .then((enquiryData)=>{
                // console.log("enquiry data",enquiryData);
                if(enquiryData == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!",
                        
                    })
                }
                else{
                    //update code
                    // console.log(enquiryData);
                    if(req.body.email){
                        enquiryData.email = req.body.email
                    }
                    if(req.body.message){
                        enquiryData.message = req.body.message
                       
                    }
                    if(req.body.subject){
                        enquiryData.subject = req.body.subject
                    }
                    enquiryData.save()
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
        enquiry.findOne({_id:req.body._id})
        .then((enquiryData)=>{
                // console.log("enquiry data",enquiryData);
                if(enquiryData == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    //update status
                    enquiryData.status = false
                    enquiryData.save()
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
