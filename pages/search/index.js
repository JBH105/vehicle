import React from 'react'
import { useRouter } from 'next/router'
import { BiSearchAlt } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

const search = () => {
    const router = useRouter();
    return (
        <div className='max-w-7xl w-full px-4  mx-auto'>
            <div className='my-5 mx-4 justify-center pt-7 flex items-center relative'>
                <h2 className='font-bold text-[24px] text-gray-800 text-center '>Search the Vehicle</h2>
                {/* <button onClick={() => router.back()} className='outline-none absolute right-0 focus:outline-none'><IoClose className='w-5 h-5 font-bold' /></button> */}
            </div>
            <div className='relative mx-4 max-w-2xl mx-auto'>
                <input className='shadow-lg w-full transition duration-200 focus:ring-1 ring-orange outline-none rounded-full py-2  pl-[34px] pr-3 border' placeholder='Search here' />
                <BiSearchAlt className='absolute top-[14px] left-[14px]' />
            </div>
            <div className='min-h-[calc(100vh_-_300px)] flex items-center'>
                <div className='max-w-[300px] mx-auto text-center'>
                    <p className='text-[14px]  block leading-[24px] text-gray-500'>
                        You can search for <br /> menu item names or description.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default search
