import { toast, ToastContainer } from "react-toastify";
import PageHeader from "../../PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditCategory(){
    var[name,setName]=useState("")
    var[description,setDescription]=useState("")
    var[image,setImage]=useState("")
    var params = useParams()
    // console.log("params",params.id);
    useEffect(()=>{
        let data = {
            _id:params.id
        }
        axios.post("http://localhost:3000/apis/category/update",data)
        .then((res)=>{
            console.log("res is",res);
            setName(res.data.data.name)
            setDescription(res.data.data.description)
            setImage(res.data.data.image)
        })
        .catch((err)=>{
            console.log("err is",err);
            
        })
        
    })
    

    function handleform(e){
            // refresh control
            e.preventDefault()
            let data = new FormData()
            data.append("_id",params.id)
            data.append("name",name)
            data.append("name",description)
            data.append("image",image)
            axios.post("http://localhost:3000/apis/category/update",data)

            .then((res)=>{
                console.log("res is",res);
                
                    if(res.data.success){
                        toast.success(res.data.message)
                        setTimeout(()=>{
                            setName("")
                            setDescription("")
                            setImage("")
                        },2000)
                    }
                    else{
                        toast.error(res.data.message)
                    }
            })
            .catch(()=>{
                toast.error("Something went wrong!!")
            })
    }

    return (
    <>
    <PageHeader child={"EditCategory"}/>
    <ToastContainer/>

      <div
        className="mt-4 container position-relative wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "-6rem" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <h1 className="mb-4">Edit Category</h1>
              <form onSubmit={handleform}>
                <div className="row">
                  <div className="col-12 col-sm-12 p-2">
                    <input
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                      className="form-control border-0"
                      placeholder="Name"
                      style={{ height: 45 }}
                    />
                  </div>
                  <div className="col-12 col-sm-12 p-2">
                    <input
                      value={description}
                      onChange={(e)=>{setDescription(e.target.value)}}
                      className="form-control border-0"
                      placeholder="Description"
                      style={{ height: 45 }}
                    />
                  </div>
                  <div className="col-12 col-sm-12 p-2">
                    <input
                      type="file"
                      onChange={(e)=>{setImage(e.target.files[0])}}
                      className="form-control border-0"
                      placeholder="Image"
                      style={{ height: 45 }}
                    />
                  </div>

                  <div className="col-12 p-3">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Edit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}