const categoryModel = require("./categoryModel")
const {uploadImg} = require("../../utilities/helper")
const add = (req,res)=>{
    var errMsgs = [];
    if(!req.body.categoryName)
    {
        errMsgs.push("categoryName is required!!")
    }
   
    if(!req.file){
        errMsgs.push("image is required!!")
    }
    //  if(req.files?.length<=0){
    //     validation+="Images are required"
    // }
    
    if(errMsgs.length>0){
        res.json({
            status:422,
            success:false,
            message:errMsgs,
        
        })

    }
    else{
        categoryModel.findOne({categoryName:req.body.categoryName})
        .then(async(categoryData)=>{
                // console.log("category data",categoryData);
                if(categoryData == null){
                    //insertion
                    
                let totalCategories = await categoryModel.countDocuments()
                let categoryObj = new categoryModel()
                categoryObj.autoId = totalCategories + 1
            
                categoryObj.categoryName = req.body.categoryName
                // categoryObj.image  = "product/"+req.file.filename
                if(req.file){
                    try{
                            //logic
                            let url =await uploadImg(req.file.buffer)
                            categoryObj.image =url
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
                categoryObj.save()
                .then((categoryData)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"category Added successfully!",
                        data:categoryData
                    })
                })
                .catch((err)=>{
                    console.log("error is",err)
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
            console.log("eror is",err)
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                errMsg :err
            })
         })
        
    }

}
//get all

const getAll = (req,res)=>{
    categoryModel.find(req.body)
    .then((categoryData)=>{
        res.send({
            status:200,
            success:true,
            message:"data loaded!",
            total:categoryData.length,
            data:categoryData
           
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
        categoryModel.findOne({ _id: req.body._id }).then((result) => {
            if (!result) {
                res.send({
                    success: false,
                    status: 404,
                    message: "Category Not Found",
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
            categoryModel.find()
            .skip(skip)
            .limit(limit)
            .then((categoryData)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"Data loaded!!",
                        data:categoryData
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
        categoryModel.deleteOne({_id:req.body._id})
        .then((categorydata)=>{
            res.send({
                status:200,
                success:true,
                message:"data deleted!!",
                data:categorydata
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
        categoryModel.findOne({categoryName:req.body.categoryName})
        .then((Data)=>{
            if(Data!=null){
                    res.send({
                        status:200,
                        success:true,
                        message:"category already exist!",
        
                    })}
                    else{
                          categoryModel.findOne({_id:req.body._id})
        
        .then(async(categorydata)=>{
                // console.log("category data",categorydata);
                if(categorydata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!",
                        
                    })
                }
                else{
                    //update code
                    // console.log(categorydata);
                    if(req.body.categoryName){
                        categorydata.categoryName = req.body.categoryName
                    }
                    
                    // if(req.file){
                    //     categorydata.image = url
                    // }
                    if(req.file){
                    try{
                            //logic
                            let url =await uploadImg(req.file.buffer)
                            categorydata.image =url
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
                    categorydata.save()
                .then((categoryData)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"category update successfully!",
                        data:categoryData
                    })
                })
                .catch((err)=>{
                    console.log("error is",err)
                        res.send({
                            status:422,
                            success:false,
                            message:"data already exist",
                            errMsg :err
                        })
        })
                }
             
                
        })
                   
        .catch((err)=>{
        console.log("erroe is",err)
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
                    console.log("error is",err)
                        res.send({
                            status:422,
                            success:false,
                            message:"data already exist",
                            errMsg :err
                        })
        })
       
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
        categoryModel.findOne({_id:req.body._id})
        .then((categorydata)=>{
                // console.log("product data",categorydata);
                if(categorydata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    //update status
                    categorydata.status = req.body.status
                    categorydata.save()
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