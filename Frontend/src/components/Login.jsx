import { useState } from "react";
import PageHeader from "../PageHeader";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  var[load,setLoad]=useState(false)
  var[email,setEmail]=useState()
  var[password,setPassword]=useState()
  var nav = useNavigate()
  
  function handleform(e){
    e.preventDefault()
    console.log("Submitted!!");
    let data = {
      email:email,
      password:password
    }
    axios.post("http://localhost:3000/apis/user/login",data)
    .then((res)=>{
      console.log("response is:",res);
      if(res.data.success){
        toast.success(res?.data?.message)
        sessionStorage.setItem("token",res?.data?.token)
        sessionStorage.setItem("token",res?.data?.data?._id)
        sessionStorage.setItem("token",res?.data?.data?.name)
        sessionStorage.setItem("token",res?.data?.data?.email)
        sessionStorage.setItem("token",res?.data?.data?.userType)
        if(res.data.data.userType == 1 ){
          setTimeout(()=>{
            nav("/admin")
          },2000)
        }
        else{
          toast.error(res?.data?.message)
        }
      }
      
    })
    .catch((err)=>{
      console.log("error is: ",err);
      
    })
    
  }
  return (
    <>
        <PageHeader child={"Login"}/>
        <ToastContainer/>
        <ClipLoader cssOverride={{marginLeft:"45%"}} size={150} color="" loading={load}/>


        
      <div
        className="mt-4 container position-relative wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "-6rem" }}
      >
        <div className="row justify-content-center">
          {
            !load?
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <h1 className="mb-4">Login</h1>
              <form onSubmit={handleform}>
                <div className="row">
                  <div className="col-12 col-sm-12 p-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: 45 }}
                    />
                  </div>
                  <div className="col-12 col-sm-12 p-2">
                    <input
                      type="password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                      className="form-control border-0"
                      placeholder="Your Password"
                      style={{ height: 45 }}
                    />
                  </div>

                  <div className="col-12 p-3">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Login Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
            :""
          }
        </div>
      </div>
    </>
  );
}
