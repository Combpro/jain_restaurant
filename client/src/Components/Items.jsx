import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';
import {FaSort} from 'react-icons/fa';

const Items = () => {
    const [textHover, setTextHover] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const handleDropdown = () => {
        setDropDown(!dropdown);
    }
    const [items, setItems] = useState([]);
    const sortPriceAsc = () => {
        if(items){
            items.sort(function(pdtA, pdtB){
                return pdtA.price - pdtB.price;
            })
            setItems([...items]);
        }
    }

    const sortPriceDesc = () => {
        if(items){
            items.sort(function(pdtA, pdtB){
                return pdtB.price - pdtA.price;
            })
            setItems([...items]);
        }
       
    }

    return (
        <div className='items bg-gray-200 font-mono p-2 overflow-y-hidden flex flex-col justify-center items-center'>
            <div className='heading'>
                <h1 className='text-center text-6xl smm:text-lg font-semibold mb-4 text-orange-500 mdm:text-lg'>Delicious Items</h1>
            </div>
            <div className='scroll flex smm:flex-col smm:space-y-2 items-center justify-evenly w-[90%] cursor-pointer text-xl smm:text-sm'>
                <div className='flex space-x-8 smm:space-x-4'>
                    <div className='hover:text-orange-500 hover:scale-105'>All</div>
                    <div className='hover:text-orange-500 hover:scale-105'>Sweet</div>
                    <div className='hover:text-orange-500 hover:scale-105'>Namkeen</div>
                </div>
                <div className='filter-option flex flex-col smm:text-xs'>
                    <div className='filter text-lg mdm:text-sm text-gray-500 border-2 border-gray-300 py-1 px-2 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white' onClick={handleDropdown}>
                        <h4 className='flex items-center justify-center gap-1'><FaSort />Sort By: Default</h4>
                    </div>
                    {
                        dropdown && <div className='dropdown p-2 shadow-xl mt-2 bg-white rounded-md duration-150'>
                            <ul className='items text-lg smm:text-sm text-gray-500 cursor-pointer'>
                                <li className='border-b-2 border-gray-400 hover:text-black mt-1' onClick={sortPriceAsc}>Price - Low to High</li>
                                <li className='hover:text-black mt-1' onClick={sortPriceDesc}>Price - High to Low</li>
                            </ul>
                        </div>
                    }
                </div>
                <h6 className={` text-xs bg-black text-white rounded-md p-1 ${textHover ? 'relative' : 'hidden'}`}>Sort By Price</h6>
            </div>
            <div className='items flex flex-wrap justify-center items-center w-[80%] smm:w-full'>
                <div className='pdt-card m-6 w-72 shadow-xl py-4 px-2 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md hover:scale-110 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer'>
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-4 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
                        <p className='flex items-center gap-1 text-red-500'>5 <AiFillStar /></p>
                    </div>
                    <div className='image'>
                        <img className='h-40 w-48 smm:h-24 smm:w-24' src='https://www.seekpng.com/png/full/252-2525440_sweets-jalebi-rabdi-png.png' alt='jalebi' />
                    </div>
                    <div className='pdt-details text-xl smm:text-lg font-semibold'>
                        <h3 className='uppercase text-yellow-500'>Jalebi</h3>
                    </div>
                    <div className='pdt-price text-xl smm:text-base'>
                        <h4 className='text-yellow-600'>₹240/kg</h4>
                    </div>
                </div>
                <div className='pdt-card m-6 w-72 shadow-xl py-4 px-2 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md hover:scale-110 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer'>
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-4 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
                        <p className='flex items-center gap-1 text-red-500'>5 <AiFillStar /></p>
                    </div>
                    <div className='image'>
                        <img className='h-40 w-48 mdm:h-24 smm:w-24' src='https://www.seekpng.com/png/full/252-2525440_sweets-jalebi-rabdi-png.png' alt='jalebi' />
                    </div>
                    <div className='pdt-details text-xl smm:text-lg font-semibold'>
                        <h3 className='uppercase text-yellow-500'>Jalebi</h3>
                    </div>
                    <div className='pdt-price text-xl smm:text-base'>
                        <h4 className='text-yellow-600'>₹240/kg</h4>
                    </div>
                </div>
                <div className='pdt-card m-6 w-72 shadow-xl px-2 py-4 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md hover:scale-110 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer'>
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-4 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
                        <p className='flex items-center gap-1 text-red-500'>5 <AiFillStar /></p>
                    </div>
                    <div className='image'>
                        <img className='h-40 w-48 mdm:h-24 smm:w-24' src='https://www.seekpng.com/png/full/252-2525440_sweets-jalebi-rabdi-png.png' alt='jalebi' />
                    </div>
                    <div className='pdt-details text-xl smm:text-lg font-semibold'>
                        <h3 className='uppercase text-yellow-500'>Jalebi</h3>
                    </div>
                    <div className='pdt-price text-xl smm:text-base'>
                        <h4 className='text-yellow-600'>₹240/kg</h4>
                    </div>
                </div>
                <div className='pdt-card m-6 w-72 shadow-xl px-2 py-4 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md hover:scale-110 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer'>
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-4 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
                        <p className='flex items-center gap-1 text-red-500'>5 <AiFillStar /></p>
                    </div>
                    <div className='image'>
                        <img className='h-40 w-48 mdm:h-24 smm:w-24' src='https://www.seekpng.com/png/full/252-2525440_sweets-jalebi-rabdi-png.png' alt='jalebi' />
                    </div>
                    <div className='pdt-details text-xl smm:text-lg font-semibold'>
                        <h3 className='uppercase text-yellow-500'>Jalebi</h3>
                    </div>
                    <div className='pdt-price text-xl smm:text-base'>
                        <h4 className='text-yellow-600'>₹240/kg</h4>
                    </div>
                </div>
                <div className='pdt-card m-6 w-72 shadow-xl px-2 py-4 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md hover:scale-110 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer'>
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-4 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
                        <p className='flex items-center gap-1 text-red-500'>5 <AiFillStar /></p>
                    </div>
                    <div className='image'>
                        <img className='h-40 w-48 mdm:h-24 smm:w-24' src='https://www.seekpng.com/png/full/252-2525440_sweets-jalebi-rabdi-png.png' alt='jalebi' />
                    </div>
                    <div className='pdt-details text-xl smm:text-lg font-semibold'>
                        <h3 className='uppercase text-yellow-500'>Jalebi</h3>
                    </div>
                    <div className='pdt-price text-xl smm:text-base'>
                        <h4 className='text-yellow-600'>₹240/kg</h4>
                    </div>
                </div>
                <div className='pdt-card m-6 w-72 shadow-xl px-2 py-4 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md hover:scale-110 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer'>
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-4 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
                        <p className='flex items-center gap-1 text-red-500'>5 <AiFillStar /></p>
                    </div>
                    <div className='image'>
                        <img className='h-40 w-48 mdm:h-24 smm:w-24' src='https://www.seekpng.com/png/full/252-2525440_sweets-jalebi-rabdi-png.png' alt='jalebi' />
                    </div>
                    <div className='pdt-details text-xl smm:text-lg font-semibold'>
                        <h3 className='uppercase text-yellow-500'>Jalebi</h3>
                    </div>
                    <div className='pdt-price text-xl smm:text-base'>
                        <h4 className='text-yellow-600'>₹240/kg</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Items