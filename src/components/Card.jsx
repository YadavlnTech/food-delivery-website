import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';


function Card({name,image,id,price,type}) {
  let dispatch=useDispatch()
  return (
    <div className='w-[300px]  hover:border-2 border-green-300 flex flex-col gap-3  shadow-lg rounded-lg p-3 h-[400px] bg-white '>
        
            <div className='w-[100%]  rounded-lg h-[60%] overflow-hidden'>
<img src={image} alt='' className='object-cover'></img>
            </div>
            <div className='text-2xl font-semibold '>
       {name}
            </div>
            <div className='w-full flex justify-between item-center'>
<div className='text-lg font-semibold text-green-400'>Rs {price}</div>
<div className='justify-center flex items-center gap-2 text-lg   text-green-500 '>{type==="veg"?<LuLeafyGreen/>:<GiChickenOven/>}<span>{type}</span></div>
            </div>
         <button className='w-full p-3 bg-green-300 
         text-white hover:bg-green-400 transition-all duration-500 cursor-pointer rounded-lg'
          onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
          toast.success("added item")}}>Add to dish</button>
        </div>
    
  )
}

export default Card