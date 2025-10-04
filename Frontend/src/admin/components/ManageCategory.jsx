import PageHeader from "../../PageHeader"
import { useEffect, useState } from "react"
import axios, { Axios } from "axios"
import { Link } from "react-router-dom"
import { BounceLoader } from "react-spinners"
import { toast } from "react-toastify"

export default function ManageCategory(){
    var[data,setData] = useState([])
    var[load,setLoad] = useState(true)

    useEffect(()=>{
        axios.post("http://localhost:3000/apis/category/all")
        .then((res)=>{
            console.log("data is ",res.data.data);
            setData(res?.data?.data)
            setLoad(false)
        })
        .catch((err)=>{
            console.log("err is:",err);
            setLoad(false)
        })
    },[load])
    function changeInactiveStatus(id){
        console.log("change inactive funtion call",id);
        let data = new FormData()
        data.append("_id",id)
        data.append("status",false)
        axios.post("http://localhost:3000/apis/category/update",data,null)
        .then((res)=>{
            console.log("res is",res);
            if(res.data.success){
                toast.success(res.data.message)
                setLoad(true)
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch(()=>{
            toast.error("something went wrong!!")
        })
        
    }
    function changeActiveStatus(id){
        console.log("change inactive funtion call",id);
        let data = new FormData()
        data.append("_id",id)
        data.append("status",true)
        axios.post("http://localhost:3000/apis/category/update",data,null)
        .then((res)=>{
            console.log("res is",res);
            if(res.data.success){
                toast.success(res.data.message)
                setLoad(true)
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch(()=>{
            toast.error("something went wrong!!")
        })
        
    }

    return(
        <>
            <PageHeader child={"ManageCategory"}/>
        
        <div className="container-xxl py-5">
            <BounceLoader cssOverride={{marginLeft:"45%"}} size={150} color="" loading={load}/>
            <div className="container">
                <div className="row g-4">
                    {
                    !load?
                    <div className="offset-md-2 col-md-8 table-responsive">
                        <table className="table table-bordered table-hover ">
                            <thead>
                                <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            {/* {
                                data?.map((el,index)=>{
                                    console.log("el is:",index+el.name)
                                })
                            } */}
                            {
                                data?.map((el,index)=>(
                                    <>
                                    <tbody>
                                        <td>{index+1}</td>
                                        <td>{el?.name}</td>
                                        <td>{el?.description}</td>
                                        {/* <td>{el?.image}</td> */}
                                        <td><img src={el.image} alt="noimg" height={"50px"}  width={"50px"}/></td>
                                        <td>{el?.status == true?"true":"false"}</td>
                                        <td>
                                            <Link to={"/admin/category/edit/"+el._id} className="btn btn-success rounded-pill" style={{background:"green"}}>Edit</Link>
                                            {
                                            el.status?<><Link className="btn btn-danger ms-2 rounded-pill" style={{backgroundColor:"red"}} onClick={()=>{changeInactiveStatus(el._id)}}>Inactive</Link></>:<Link className="btn btn-success ms-2 rounded-pill" style={{backgroundColor:"green"}}onClick={()=>{changeActiveStatus(el._id)}}>Active</Link>
                                            }
                                        </td>
                                    </tbody>
                                    </>
                                ))
                            
                            }

                        </table>
                    </div>
                    :""
                    }
                </div>
            </div>
        </div>
        </>
    )
}