import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import { message } from 'antd';

const Admin = () => {

    const navigate = useNavigate();

function adminLogoutHandle(){
    localStorage.removeItem("authToken");
    message.success("Logout Successfully");
    navigate("/adminlogin");
}

   if (localStorage.getItem("authToken")) {
    return (
    <>
    <h1 className='text-center'>Admin Page</h1>
        <button className='text-center button btn btn-primary'>Add products</button>

        <button onClick={adminLogoutHandle} className='button btn btn-primary'>Logout</button>
    </>
        )
  } else {
    return <Navigate to="/adminlogin" />;
  }
   
}

export default Admin