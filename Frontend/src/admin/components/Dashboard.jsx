import { useEffect, useState } from "react";
import PageHeader from "../../PageHeader";
import axios from "axios";

export default function Dashboard(){
    var[data,setData]=useState();
    useEffect (()=>{
        axios.post("http://localhost:3000/apis/dashboard")
        .then((res)=>{
            console.log("data is ",res);
            setData(res.data)
        })
        .catch(()=>{})
    },[])
    return(
        <>
        <PageHeader child={"Dashboard"} />

        <div className="container">
            <div className="row m-2">
                <div className="col d-flex justify-content-between">
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Category</h2>
                        <div className="card-body">
                            <h4  className="card-text fw-2">{data?.TotalCategories}</h4>
                        </div>
                    </div>
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Customers</h2>
                        <div className="card-body">
                            <h4  className="card-text fw-2">{data?.TotalCustomers}</h4>
                        </div>
                    </div>
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Category</h2>
                        <div className="card-body">
                            <h4  className="card-text fw-2">{data?.TotalCategories}</h4>
                        </div>
                    </div>
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Requests</h2>
                        <div className="card-body">
                            <h4  className="card-text fw-2">{data?.TotalRequests}</h4>
                        </div>
                    </div>

                </div>



            </div>

            <div className="row m-2">
                <div className="col-12 d-flex justify-content-between">
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Reviews</h2>
                        <div className="card-body">
                            <h4  className="card-text fw-2">{data?.TotalReviews}</h4>
                        </div>
                    </div>
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Services</h2>
                        <div className="card-body">
                            <h4  className="card-text fw-2">{data?.TotalServices}</h4>
                        </div>
                    </div>
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Users</h2>
                        <div className="card-body">
                            <h4  className="card-text fw-2">{data?.TotalUsers}</h4>
                        </div>
                    </div>
                    <div className="card text-center m-2" style={{ width: "18rem" }}>
                        <h2>Total Vendors</h2>
                        <div className="card-body">
                            <h4 className="card-text fw-2">{data?.TotalVendors}</h4>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>

        </>
    )
}