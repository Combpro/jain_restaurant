import React, {useEffect, useState} from 'react';
import { AiFillStar } from 'react-icons/ai';
import {FaSort} from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";


const Items = () => {

    const [textHover, setTextHover] = useState(false);
    const [dropdown, setDropDown] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch('http://localhost:5000/product/getProducts');
            const data = await response.json();
            
            setItems(data);
            console.log(data);
        }

        fetchDetails();
    }, [])

    const handleDropdown = () => {
        setDropDown(!dropdown);
    }

    const dispatch = useDispatch();
    const sortPriceAsc = () => {
        if(items){
            items.sort(function(pdtA, pdtB){
                return pdtA.productPrice - pdtB.productPrice;
            })
            setItems([...items]);
        }
    }

    const sortPriceDesc = () => {
        if(items){
            items.sort(function(pdtA, pdtB){
                return pdtB.productPrice - pdtA.productPrice;
            })
            setItems([...items]);
        }

    }

    return (
        <div className='products bg-gray-200 font-mono p-2 overflow-y-hidden flex flex-col justify-center items-center'>
            <div className='heading'>
                <h1 className='text-center text-6xl smm:text-lg font-semibold mb-4 text-orange-500 mdm:text-lg'>Delicious Items</h1>
            </div>
            <div className='scroll flex smm:flex-col smm:space-y-2 justify-end w-[90%] cursor-pointer text-xl smm:text-sm'>
               
                <div className='filter-option flex flex-col smm:text-xs'>
                    <div className='filter text-lg mdm:text-sm text-gray-500 border-2 border-gray-300 py-1 px-2 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white' onClick={handleDropdown}>
                        <h4 className='flex items-center justify-center gap-1 text-lg smm:text-base  mb-0'><FaSort />Sort By: Default</h4>
                    </div>
                    {
                        dropdown && <div className='dropdown p-2 shadow-xl mt-1 bg-white rounded-md duration-150'>
                            <ul className='items text-lg smm:text-sm text-gray-500 cursor-pointer pl-0'>
                                <li className='border-b-2 border-gray-400 hover:text-black' onClick={sortPriceAsc}>Price - Low to High</li>
                                <li className='hover:text-black' onClick={sortPriceDesc}>Price - High to Low</li>
                            </ul>
                        </div>
                    }
                </div>
                <h6 className={` text-xs bg-black text-white rounded-md p-1 ${textHover ? 'relative' : 'hidden'}`}>Sort By Price</h6>
                </div>
            <div className='products flex flex-wrap justify-center items-center w-[80%] smm:w-full'>
                {
                    items && items.map((item) => (
                        <div key={item.productImage} className='pdt-card m-6 w-72 shadow-xl py-4 px-2 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md '>
                            <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-6 h-8 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
                                <p className='flex items-center gap-1 text-red-500'>{item.avgRating} <AiFillStar /></p>
                            </div>
                            <div className='image'>
                                <img className='h-40 w-48 smm:h-24 smm:w-24' src={item.productImage} alt={item.productName} />
                            </div>
                            <div className='pdt-details font-semibold'>
                                <h3 className='uppercase text-yellow-500 text-xl smm:text-lg'>{item.productName}</h3>
                            </div>
                            <div className='pdt-price'>
                                <h4 className='text-yellow-600 text-lg smm:text-base'>₹{item.productPrice}/{item.productQuantity == 1 ? "" : item.productQuantity}{item.productQuantityPiece}</h4>
                            </div>
                            <div className="button btn btn-warning">
                                <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Items