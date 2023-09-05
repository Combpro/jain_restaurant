import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Items = () => {

    const items = useSelector((item)=>{})

    return (
        <div className='products bg-gray-200 font-mono p-2 overflow-y-hidden flex flex-col justify-center items-center'>
            <div className='heading'>
                <h1 className='text-center text-6xl smm:text-lg font-semibold mb-4 text-orange-500 mdm:text-lg'>Delicious Items</h1>
            </div>
            <div className='scroll flex space-x-8 text-xl'>
                <div>ALL</div>
                <div>SWEET</div>
                <div>NAMKEEN</div>
            </div>
            <div className='products flex flex-wrap justify-center items-center w-[80%] smm:w-full'>
                <div className='pdt-card m-6 w-72 shadow-xl py-4 px-2 flex flex-col justify-center items-center space-y-4 bg-yellow-50 rounded-md hover:scale-110 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer'>
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-6 h-8 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
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
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-6 h-8 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
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
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-6 h-8 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
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
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-6 h-8 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
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
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-6 h-8 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
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
                    <div className='rating bg-orange-100 px-2 py-1 rounded-md relative -top-6 h-8 -right-[122px] vsmsbs:-right-20 vsmm:-right-24 smm:text-sm'>
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