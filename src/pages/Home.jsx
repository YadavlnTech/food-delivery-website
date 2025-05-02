import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../categories'
import Card from '../components/card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home  ()  {

   let{cate,setCate,input,showCart,setShowCart}=useContext(dataContext)
    function filter(category){
        if(category==="All"){
            setCate(food_items)
        }else{
          let newList=  food_items.filter((item)=>(
                item.food_category===category
            ))
            setCate(newList)
        }
    }
   let items=useSelector(state=>state.cart)
  let subtotal=items.reduce((total,item)=>total+item.qty* item.price,0)
  let deliveryFee=20;
  let taxes=subtotal*0.5/100;
  let total=Math.floor(subtotal+deliveryFee+taxes
   )
  return (
    <div className='bg-slate-200 
    w-full min-h-screen'><Nav/>
    {!input? <div className='flex flex-wrap w-full justify-center  items-center gap-6 '>
        {categories.map((item)=>{
            return <div className='w-[140px] 
            gap-5 flex justify-start flex-col
             p-5 items-start bg-white h-[150px] cursor-pointer 
             transition-all duration-500
         hover:bg-green-200 font-semibold text-gray-600 text-[20px] rounded-lg shadow-xl ' onClick={()=>filter(item.name)}>

            {item.name}
            {item.image}

            </div>

        })}
    </div>:null}
   

   <div className='w-full flex flex-wrap justify-center pt-8 items-center  gap-5 px-5'> 
    {cate.map((item)=>(
        <Card name={item.food_name} type={item.food_type} image={item.food_image} price={item.price} id={item.id}/>
   
   ))}
   </div>
<div className={`w-full md:w-[40vw] h-[100%] p-5 overflow-auto fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 ${showCart?"traslate-x-0":"translate-x-full"}`} >
    <header className='w-[100%] flex justify-between items-center '>
        <span className='text-green-400 font-semibold text-[18px]'>order items</span>
        <RxCross2 className='text-green-400 h-[30px] hover:text-gray-600 cursor-pointer font-semibold text-[18px]' onClick={()=>setShowCart(false)} />
    </header>
    {items.length>0?<>
    <div className='w-full mt-9 flex gap-5 flex-col '>
        {items.map((item)=>(
            <Card2 key={item.id} name={item.name} price={item.price}
                image={item.image} qty={item.qty} id={item.id} />
        ))}
    </div>


    <div className='w-full p-8 border-b-2 flex flex-col gap-4 border-t-2 mt-7 border-gray-400'>
     <div className='w-full flex justify-between items-center'>
        <span className='text-xl text-gray-700'>subtotal</span>
        <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
     </div>
     <div className='w-full flex justify-between items-center'>
        <span className='text-xl text-gray-700'>deliveryFee</span>
        <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
     </div>
     <div className='w-full flex justify-between items-center'>
        <span className='text-xl text-gray-700'>taxes</span>
        <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>
     </div>
    </div>
    <div className='w-full flex justify-between items-center'>
        <span className='text-xl text-gray-700'>total</span>
        <span className='text-green-400 font-semibold text-lg'>Rs {total}/-</span>
     </div>
     <button className='w-full p-3 bg-green-500 
         text-white hover:bg-green-400 transition-all cursor-pointer duration-500  rounded-lg' onClick={()=>{
            toast.success("order placed..")
         }}>Place order</button>
    
    </>:<div className='text-center text-2xl text-green-400 font-semibold'
    >Empty Cart</div>}
</div>

    </div>
  )
}

export default Home