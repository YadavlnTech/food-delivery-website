import React from 'react'
import image1 from "../assets/Image1.avif"
import { IoTrashBin } from "react-icons/io5"
import { QueryStatus } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice'
function Card2({ name, id, price, image, qty }) {
  let dispatch=useDispatch()
  return (
    <div className='w-full flex justify-between items-center  p-2 h-[120px] '>
        <div  className='w-[60%] gap-5 flex h-full '>
            <div className='w-[50%] rounded-lg h-full overflow-hidden'>
         <img className='object-cover' src={image} alt=''></img>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
               <div className='text-lg text-gray-600 font-bold' >
                {name}
               </div>
               <div className='w-[110px] border-2 border-green-400 font-semibold text-xl rounded-lg overflow-hidden shadow-lg flex h-[50px] bg-white'>
<button className='w-[30%] flex  cursor-pointer justify-center items-center text-green-400 h-full bg-white' onClick={()=>{
  qty>1?dispatch(DecrementQty(id)):1
}}>-</button>
<span  className='w-[40%] flex text-green-400 justify-center items-center h-full bg-slate-200'>{qty}</span>
<button  className='w-[30%]flex text-green-400 justify-center cursor-pointer items-center h-full bg-white' onClick={()=>{
  dispatch(IncrementQty(id))
}}>+</button>
               </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
 <span className='text-xl text-green-400 font-semibold'>Rs{price}</span>
 <IoTrashBin className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))} />
        </div>

    </div>
  )
}

export default Card2