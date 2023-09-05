import React from 'react'
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/login.css'
import Footer from './Footer';



const Login = () => {
const navigate = useNavigate();

const onFinishHandler =async (values)=>{
    try{
        const res = await axios.post("http://localhost:5000/api/user/login", values);
        // window.location.reload(); 
        if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            message.success("Login Successfully");
            navigate("/");
          }
           else {
            message.error(res.data.message);
          }
    }
    catch(error){
        console.log(error);
        message.error("something went wrong")
    }
}

  return (
<>
    <div className="cont">

   
    <div className='form-container'>
         <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form rounded-lg"
      >
        <div className="heading">

        <h3 className="text-center text-white font-weight-bold">Login Form</h3>
        </div>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required className='text-gray-200'/>
        </Form.Item>
        <button className="btn btn-outline-light" type="submit">
          Login
        </button>
        <Link to="/register" className="m-2 text-light rounded p-2">
          Not a user? Register here
        </Link>
      
      </Form>
    </div>
    </div>
    <Footer />
</>
  )
}

export default Login