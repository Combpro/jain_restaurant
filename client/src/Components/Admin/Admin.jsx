import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { message } from 'antd';

const Admin = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    function adminLogoutHandle() {
        localStorage.removeItem("authToken");
        message.success("Logout Successfully");
        navigate("/adminlogin");
    }

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch('http://localhost:5000/product/getProducts');
            const data = await response.json();

            setItems(data);
        }

        fetchDetails();
    }, [items])

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5000/product/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })

        const data = await response.json();
        console.log(data)
        setItems(data.products);
    }

    if (localStorage.getItem("token")) {
        return (
            <div>
                <div className='heading'>
                    <h1 className='text-center'>Food Items/Products</h1>
                    <Link to='/addproduct'><button className='text-center button btn btn-primary'>Add products</button></Link>

                    <button onClick={adminLogoutHandle} className='button btn btn-primary'>Logout</button>
                </div>
                <div className='all-pdts p-2 mx-auto w-[80%] mdm:w-full'>
                    {
                        items && items.map((item) => (
                            <div className='item flex justify-between smm:justify-start items-center bg-gray-200 shadow-md p-2 rounded-md my-8 hover:shadow-xl mdm:space-x-6'>
                                <div className='pdt-desc flex space-x-4 items-center mdm:justify-between w-[80%] mdm:w-1/2'>
                                    <img className='h-8 w-20 smm:w-10 rounded-full border-r-2 border-black vsmmm:hidden' src={item.productImage} alt={item.productName} />
                                    <h6 className='h-8 w-[20%] flex justify-center items-center font-semibold mdm:text-sm'>{item.productName}</h6>
                                    <h6 className='h-8 w-[20%] flex justify-center items-center font-semibold mdm:hidden'>{item.productCategory}</h6>
                                    <h6 className='h-8 w-[10%] flex justify-center items-center mdm:text-sm'>₹{item.productPrice}/{item.productQuantity == 1 ? "" : item.productQuantity}{item.productQuantityPiece}</h6>
                                </div>
                                <div className='pdt-modify w-[16%]'>
                                    <ul className='flex space-x-4 mdm:space-x-2 text-xl items-center cursor-pointer'>
                                        <Link to = {`/editProduct/${item._id}`}><li className='text-black bg-green-300 px-2 py-1 rounded-md hover:bg-green-400'><FiEdit className='mdm:text-sm'/></li></Link>
                                        <li className='bg-red-300 px-2 py-1 rounded-md hover:bg-red-400' onClick={() => handleDelete(item._id)}><MdDelete className='mdm:text-sm'/></li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    } else {
        return <Navigate to="/adminlogin" />;
    }

}

export default Admin