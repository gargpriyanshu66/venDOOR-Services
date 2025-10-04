const serviceModel = require("./serviceModel")
const {uploadImg} = require("../../utilities/helper")
const add = (req,res)=>{
    var errMsgs = [];
    if(!req.body.serviceName)
    {
        errMsgs.push("serviceName is required!!")
    }
    if(!req.body.price){
        errMsgs.push("price is required!!")
    }
     if(!req.body.description){
        errMsgs.push("description is required!!")
    }
    if(!req.file){
        errMsgs.push("image is required!!")
    }
    if(!req.body.categoryId){
        errMsgs.push("categoryId is required!!")
    }
    if(errMsgs.length>0){
        res.json({
            status:422,
            success:false,
            message:errMsgs,
        
        })

    }
    else{
        serviceModel.findOne({serviceName:req.body.serviceName})
        .populate("categoryId")
        .then(async(servicedata)=>{
                 console.log("service data",servicedata);
                if(servicedata == null){
                    //insertion
                    
                let totalServices = await serviceModel.countDocuments()
                let serviceObj = new serviceModel()
                serviceObj.autoId = totalServices + 1
                serviceObj.serviceName = req.body.serviceName
                serviceObj.price  = req.body.price 
                serviceObj.description  = req.body.description
                serviceObj.addedBy  = req.decoded._id
                // serviceObj.image  = "product/"+req.file.filename
                // if(req.file){
                //     try{
                //             //logic
                //             let url =await uploadImg(req.file.buffer)
                //             serviceObj.image =url
                //     }
                //     catch(err){
                //         console.log("err is",err);
                //         res.send({
                //             status:400,
                //             success:false,
                //             message:"cloudnairy error!!"
                //         })
                        

                //     }
                // }
                 if(req.file){
                                    try{
                                            //logic
                                            let url =await uploadImg(req.file.buffer)
                                            serviceObj.image =url
                                    }
                                     catch(err){
                        console.log("err is",err);
                        res.send({
                            status:400,
                            success:false,
                            message:"cloudnairy error!!"
                        })
                        

                    }
                }
                serviceObj.categoryId  = req.body.categoryId 

                serviceObj.save()
                .then((servicedata)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"service Inserted successfully!",
                        data:servicedata
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
    serviceModel.find(req.body)
    
    .populate("addedBy")
    .populate("categoryId")
    .then((servicedata)=>{
        res.send({
            status:200,
            success:true,
            message:"data loaded!",
            total:servicedata.length,
            data:servicedata
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
    serviceModel.findOne({_id:req.body._id})
    
    .populate("addedBy")
    .populate("categoryId")
    .then((serviceData)=>{
        console.log("service data",serviceData);
        
        if(serviceData == null){

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
                data:serviceData
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
        serviceModel.find()
        
        .populate("addedBy")
        .populate("categoryId")
        .skip(skip)
        .limit(limit)
        .then((servicedata)=>{
                res.send({
                    status:200,
                    success:true,
                    message:"data loaded",
                    data:servicedata
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
        serviceModel.deleteOne({_id:req.body._id})
        .then((servicedata)=>{
            res.send({
                status:200,
                success:true,
                message:"data deleted!!",
                data:servicedata
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
         serviceModel.findOne({serviceName:req.body.serviceName})
                .then((Data)=>{
                    if(Data!=null){
                            res.send({
                                status:700,
                                success:true,
                                message:"service already exist!",
                
                            })}
      else{  serviceModel.findOne({_id:req.body._id})
        .then(async(servicedata)=>{
                // console.log("service data",servicedata);
                if(servicedata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!",
                        
                    })
                }
                else{
                    //update code
                    // console.log(servicedata);
                    if(req.body.serviceName){
                        servicedata.serviceName = req.body.serviceName
                    }
                     if(req.body.description){
                        servicedata.description = req.body.description
                    } if(req.body.price){
                        servicedata.price = req.body.price
                    }
                    
                    // if(req.file){
                    //     servicedata.image = url
                    // }
                    if(req.file){
                    try{
                            //logic
                            let url =await uploadImg(req.file.buffer)
                            servicedata.image =url
                    }
                // if(req.files){
                //     try{
                //             //logic
                //             let imageArr=[]
                //              for(let i=0;i<req.files?.length;i++){
                //                 let url=await uploadImg(req.files[i]?.buffer);
                //                 imageArr.push(url)     
                //                 categoryObj.image =imageArr       
                //             }
                //         }
                    catch(err){
                        console.log("err is",err);
                        res.send({
                            status:400,
                            success:false,
                            message:"cloudnairy error!!"
                        })
                        

                    }
                }
                    servicedata.save()
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
    }
}
)

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
        serviceModel.findOne({_id:req.body._id})
        .then((servicedata)=>{
                // console.log("service data",servicedata);
                if(servicedata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    //update status
                    servicedata.status = req.body.status
                    servicedata.save()
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