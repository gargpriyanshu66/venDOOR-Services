import axios from "axios"
export var BaseURL = "http://localhost:3000/"

class ApiServices{
    getToken(){
        let obj = {Authorization:sessionStorage.getItem("token")}
        return obj
    }
    CategoryAll(){
        return axios.post(BaseURL+"api/category/all")
    }
    Login(data){
        return axios.post(BaseURL+"api/user/login",data)
    }
    AddCategory(data){
        return axios.post(BaseURL+"api/category/add",data)
    }
    UpdateCategory(data){
        return axios.post(BaseURL+"api/category/update",data,{headers:this.getToken()})
    }
    UpdateVendor(data){
        return axios.post(BaseURL+"api/vendor/update",data,{headers:this.getToken()})
    }
    Category(data){
        return axios.post(BaseURL+"api/category/update",data,{headers:this.getToken()})
    }

}
export default new ApiServices