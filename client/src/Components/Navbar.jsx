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
    const [searchValue, setSearchValue] = useState("");
    const [showCategory, setShowCategory] = useState(false);
    const [items, setItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);

    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch('http://localhost:5000/product/getProducts');
            const data = await response.json();

            setItems(data);
        }

        fetchDetails();
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            const productList = items.filter((item) => {
                const pdtName = item.productName.toLowerCase();
                const value = searchValue.toLowerCase();
                return pdtName.includes(value);
            })

            setFilterItems(productList);
        }
    }, [searchValue]);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        message.success("Logout Successfully");
        navigate("/");
    };

    let loggedIN = localStorage.getItem('token') === null;

    return (
        <div className='relative'>
            <div className='nav flex p-2 bg-gray-100 justify-center smm:justify-start items-center z-50'>
                <div className='logo w-1/6 flex justify-start'>
                    <img className='h-10 w-28 rounded-full' src={logo} alt='Jain logo' />
                </div>
                <div className='flex flex-col space-y-1 items-start ml-3 cursor-pointer w-[14%] duration-200 ease-in-out mdsb:hidden' onClick={() => setIsNavbar(!isNavbar)}>
                    {
                        !isNavbar ? <RiMenu2Line className='text-xl font-semibold' /> : <RxCross2 className='text-xl font-semibold' />
                    }

                </div>
                <div className='w-4/5 justify-end mdm:w-[60%]'>
                    <ul className='flex justify-end gap-8 smm:gap-2 items-center cursor-pointer ease-in-out font-medium text-base mb-0 pl-0'>
                        <li className='hover:text-orange-500 mdm:hidden pl-0' onClick={()=>{navigate('/')}} >Home</li>
                        <li className='hover:text-orange-500 mdm:hidden' onClick={()=>{navigate('/about')}} >About</li>
                        <li className=' mdm:hidden' onClick={() => setShowCategory(!showCategory)}>
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
                            <ul className={`${showCategory ? 'visible' : 'hidden'} z-10 absolute mt-4 mr-36 pl-0 normal-case bg-gray-100 rounded-md flex flex-col justify-center items-center`}>
                                <li className='p-1 w-28 text-center hover:text-orange-500 border-b-2 border-gray-300 hover:text-orange-'>Sweet</li>
                                <li className='p-1 w-28 text-center hover:text-orange-500'>Namkeen</li>
                            </ul>
                        </li>
                        <li className={`hover:text-orange-500 mdm:hidden ${loggedIN ? 'visible' : 'hidden'}`} onClick={() => { navigate("/register") }}>Sign Up</li>
                        <li className={`hover:text-orange-500 mdm:hidden ${loggedIN ? 'visible' : 'hidden'}`} onClick={() => { navigate("/login") }}>Sign In</li>
                        <li className={`hover:text-orange-500  mdm:hidden ${loggedIN ? 'hidden' : 'visible'}`} onClick={handleLogout}>Log Out</li>
                        <li className='hover:text-orange-500 mdm:hidden' onClick={()=>{navigate('/contact')}}>Contact</li>
                        <li className='icons flex items-center justify-end space-x-4 smm:space-x-2'>
                            <input className={`outline-none p-1 w-32 smm:w-24 rounded-md h-7 ${search ? 'visible' : 'hidden'} outline-orange-200 text-sm z-50`} type='text' name='search' placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />

                            <div className='absolute mt-2 top-10 bg-white shadow-xl rounded-md w-32 smm:w-24 z-10'>
                                {
                                    searchValue && <div className='search-items p-1 pl-0 '>
                                        {
                                            filterItems && filterItems.slice(0, 7).map((item) => {
                                                return <div className='item cursor-pointer border-b-2 border-gray-200 space-x-3 flex justify-center items-center p-1'>
                                                    <img className='h-6 w-6 rounded-md' src={item.productImage} alt={item.productName} />
                                                    <p className='text-black text-xs w-4/5 m-2'>{item.productName}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        </li>
                        <li className='text-xl cursor-pointer z-50'>
                            {!search ? <GoSearch className='font-medium' onClick={() => setSearch(!search)} /> : <VscSearchStop className='font-medium' onClick={() => setSearch(!search)} />}
                        </li>
                        <li className='cart smm:p-1 flex mdm:visible'>
                            <Badge count={totalQuantity}
                                onClick={() => {
                                    navigate("/Cart");
                                }}
                            >
                                <BsCart3 className='font-medium text-xl' />
                            </Badge>
                        </li>
                    </ul>

                </div>

            </div>
            {
                isNavbar ? <div className={`h-[90%] bg-yellow-400 w-[60%]  absolute animate-fade-in z-50`}>
                    <ul className='flex flex-col items-center space-y-8 cursor-pointer ease-in-out font-medium text-xl smm:text-base text-white p-2 pt-6 z-50'>
                        <li className='hover:text-orange-500' onClick={()=>{navigate('/')}}>Home</li>
                        <li className='hover:text-orange-500' onClick={()=>{navigate('/about')}} >About</li>
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

                        <li className={`hover:text-orange-500 ${loggedIN ? 'visible' : 'hidden'}`} onClick={() => { navigate("/register") }}>Sign Up</li>
                        <li className={`hover:text-orange-500 ${loggedIN ? 'visible' : 'hidden'}`} onClick={() => { navigate("/login") }}>Sign In</li>
                        <li className={`hover:text-orange-500 ${loggedIN ? 'hidden' : 'visible'}`} onClick={handleLogout}>Log Out</li>

                        <li className='hover:text-orange-500' onClick={()=>{navigate('/contact')}}>Contact</li>
                    </ul>
                </div> : ""
            }

        </div>
    )
}

export default Navbar