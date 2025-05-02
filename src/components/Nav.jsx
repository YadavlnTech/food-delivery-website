// import React,{ useContext } from 'react'
// import { MdFastfood } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";
// import { LuShoppingBag } from "react-icons/lu";
// import { dataContext } from '../context/UserContext';


// const Nav = () => {

//    let{input,setInput,cate,setCate}=useContext(dataContext)
//   useEffect(()=>{
//    let newlist= food_items.filter((item)=>item.food_name.includes(input))
//    setCate(newlist)
//   },[input]) 
//   return (
//     <div className='w-fll md:px-8 h-[100px]  
//     flex justify-between items-center px-8'>
//         <div className='w-[60px] h-[60px] shadow-xl bg-white flex rounded-md items-center justify-center '>
//         <MdFastfood className='w-[30px] h-[30px] text-green-400' />
//         </div>
//         <form onSubmit={(e)=>e.preventDefault()} className='w-[45%] md:w-[70%] h-[60px] rounded-md shadow-xl bg-white flex items-center gap-5 px-5 '>
//             <IoSearch className='text-green-400 w-[20px] h-[20px] '/>
//             <input value={input} onChange={(e)=>setInput(e.target.value)} className='w-full outline-none text-[16px] md:text-[20px]' type="text" placeholder='enter text'/>
//         </form>
//         <div className='w-[60px] h-[60px] bg-white 
//         flex justify-center items-center rounded-md relative shadow-xl '>
//             <span className='font-bold absolute top-0 right-2 text-green-400 '>0</span>
//         <LuShoppingBag className='w-[30px] h-[30px]  text-green-400' />
//         </div>

//     </div>
//   )
// }

// export default Nav


import React, { useContext, useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { input, setInput, setCate ,setShowCart} = useContext(dataContext);

  useEffect(() => {
    const newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newlist);
  }, [input, setCate]);

   let items=useSelector(state=>state.cart)
      

  return (
    <div className='w-full md:px-8 h-[100px] flex justify-between items-center px-8'>
      <div className='w-[60px] h-[60px] shadow-xl bg-white flex rounded-md items-center justify-center '>
        <MdFastfood className='w-[30px] h-[30px] text-green-400' />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-[45%] md:w-[70%] h-[60px] rounded-md shadow-xl bg-white flex items-center gap-5 px-5 '
      >
        <IoSearch className='text-green-400 w-[20px] h-[20px]' />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='w-full outline-none text-[16px] md:text-[20px]'
          type='text'
          placeholder='Enter food name...'
        />
      </form>

      <div className='w-[60px] cursor-pointer h-[60px] bg-white flex justify-center items-center rounded-md relative shadow-xl' onClick={()=>{
        setShowCart(true)
      }}>
        <span className='font-bold absolute top-0 right-2 text-green-400'>{items.length}</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-400' />
      
      </div>
    </div>
  );
};

export default Nav;
