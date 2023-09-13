import React, { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { BsCart3 } from 'react-icons/bs';
import { RiMenu2Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { VscSearchStop } from 'react-icons/vsc';
import logo from '../Jain Jalebi Logo.png'
import { useNavigate, Link } from 'react-router-dom';
import { message } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "antd"
import { getCartTotal } from "../features/cartSlice";


const Navbar = () => {
    const [isNavbar, setIsNavbar] = useState(false);
    const [search, setSearch] = useState(false);
    const [showCategory, setShowCategory] = useState(false);

    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);


    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/");
    };

    let loggedIN = localStorage.getItem('token') === null;

    return (
        <div>
            <div className='nav flex p-3 bg-gray-100 justify-center smm:justify-start items-center relative z-50'>
                <div className='logo w-1/6 flex justify-start'>
                    <img className='h-10 w-40 rounded-full' src={logo} alt='Jain logo' />
                </div>
                <div className='w-3/5'>
                    <ul className='flex justify-evenly items-center cursor-pointer ease-in-out uppercase font-medium mdm:hidden text-base mb-0'>
                        <li className='hover:text-orange-500'><Link to='/'>Home</Link></li>
                        <li className='hover:text-orange-500'>About</li>
                        <li className='' onClick={() => setShowCategory(!showCategory)}>
                            <h5 className='hover:text-orange-500 text-base m-0 flex items-center'>Categories <span><svg
                                width="6"
                                height="4"
                                className="ml-2 overflow-visible inline"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0 0L3 3L6 0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>
                            </svg></span></h5>
                            <ul className={`${showCategory ? 'visible' : 'hidden'} absolute mt-4 mr-36 pl-0 normal-case bg-gray-100 rounded-md flex flex-col justify-center items-center`}>
                                <li className='p-1 w-28 text-center border-b-2 border-gray-300 hover:text-orange-500'>Sweet</li>
                                <li className='p-1 w-28 text-center hover:text-orange-500'>Namkeen</li>
                            </ul>
                        </li>
                        <li className={`hover:text-orange-500 ${loggedIN ? 'visible' : 'hidden'}`} onClick={() => { navigate("/register") }}>Sign Up</li>
                        <li className={`hover:text-orange-500 ${loggedIN ? 'visible' : 'hidden'}`} onClick={() => { navigate("/login") }}>Sign In</li>
                        <li className={`hover:text-orange-500 ${loggedIN ? 'hidden' : ''}`} onClick={handleLogout}>Log Out</li>
                        <li className='hover:text-orange-500'>Contact</li>

                    </ul>
                    <div className='flex flex-col space-y-1 items-start ml-4 cursor-pointer duration-200 ease-in-out mdsb:hidden' onClick={() => setIsNavbar(!isNavbar)}>
                        {
                            !isNavbar ? <RiMenu2Line className='text-xl font-semibold' /> : <RxCross2 className='text-xl font-semibold' />
                        }

                    </div>
                </div>
                <div className='w-[10%] smm:w-[22%] icons flex items-center justify-end space-x-6 smm:space-x-2 text-xl cursor-pointer z-50'>
                    <div className='search smm:p-1 flex space-x-4 items-center'>
                        <input className={`outline-none p-1 w-40 smm:w-24 rounded-md h-7 ${search ? 'visible' : 'hidden'} outline-orange-200 text-sm z-50`} type='text' name='search' placeholder='Search' />
                        {!search ? <GoSearch className='font-medium' onClick={() => setSearch(!search)} /> : <VscSearchStop className='font-medium' onClick={() => setSearch(!search)} />}
                    </div>
                    <div className='cart smm:p-1 flex'>
                        <Badge count={totalQuantity}
                            onClick={() => {
                                navigate("/Cart");
                            }}
                        >
                            <BsCart3 className='font-medium text-xl' />
                        </Badge>
                    </div>

                </div>
            </div>
            {
                isNavbar ? <div className={`h-[90%] bg-yellow-400 w-[60%]  absolute animate-fade-in z-50`}>
                    <ul className='flex flex-col items-center space-y-8 cursor-pointer ease-in-out font-medium text-xl smm:text-base text-white p-2 pt-6 z-50'>
                        <li className='hover:text-orange-500'>Home</li>
                        <li className='hover:text-orange-500'>About</li>
                        <li>
                            <div className='' onClick={() => setShowCategory(!showCategory)}>
                                <h5 className='hover:text-orange-500 text-xl smm:text-base flex items-center'>
                                    Categories 
                                <span >
                                    <svg
                                    width="6"
                                    height="4"
                                    className="ml-2 overflow-visible inline"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M0 0L3 3L6 0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg></span></h5>
                                <ul className={`${showCategory ? 'visible' : 'hidden'} relative mt-6 normal-case rounded-md`}>
                                    <li className='p-1 w-28 text-center border-b-2 rounded-md border-gray-300 bg-red-400 hover:text-orange-500'>Sweet</li>
                                    <li className='p-1 w-28 text-center rounded-md bg-red-400 hover:text-orange-500'>Namkeen</li>
                                </ul>
                            </div>
                        </li>



                        <li className='hover:text-orange-500'>Sign Up</li>
                        <li className='hover:text-orange-500'>Sign In</li>

                        <li className='hover:text-orange-500'>Contact</li>
                    </ul>
                </div> : ""
            }

        </div>
    )
}

export default Navbar