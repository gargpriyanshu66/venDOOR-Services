import { useState } from "react";
import PageHeader from "../../PageHeader";
// import { useNavigate } from "react-router-dom";
import ApiServices from "../../ApiServices";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function AddCategory() {
    var[name,setName] = useState()
    var[description,setDescription] = useState()
    var[image,setImage] = useState()
    // var nav = useNavigate()

    function handleform(e){
        e.preventDefault()
        console.log("form Submitted");
        let data = new FormData()
        data.append("name",name)
        data.append("description",description)
        data.append("image",image)
        
        axios.post("http://localhost:3000/apis/category/add",data)
        .then((res)=>{
          console.log("response is ",res);
          if (res.data.success){
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
        .catch((err)=>{
          toast.error("something went wrong!!",err)
        })

        
    }
  return (
    <>
    <PageHeader child={"AddCategory"}/>
    <ToastContainer/>

      <div
        className="mt-4 container position-relative wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "-6rem" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <h1 className="mb-4">Add Category</h1>
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
                      Add Now
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
