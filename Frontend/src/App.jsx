import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./layout/Master";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./admin/components/Dashboard";
import AdminMaster from "./admin/layout/AdminMaster";
import ManageCategory from "./admin/components/ManageCategory";
import AddCategory from "./admin/components/AddCategory";
import EditCategory from "./admin/components/EditCategory";

export default function App() {
   return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Master/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Route>
      <Route path="/admin" element={<AdminMaster/>}>
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/category/manage" element={<ManageCategory/>} />
        <Route path="/admin/category/add" element={<AddCategory/>} />
        <Route path='/admin/category/edit/:id' element={<EditCategory/>} />
      </Route>
      

    </Routes>
    </BrowserRouter>
    </>
  )
}
