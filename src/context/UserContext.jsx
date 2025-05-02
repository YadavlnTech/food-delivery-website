// import React, { createContext, useState } from 'react'
// import { food_items } from '../food'
// export const dataContext=createContext()


// function UserContext({children}) {
//      let [cate,setCate]=useState(food_items)
    
//     let[input,setInput]=useState("")
//     let data={
// input,setInput,cate,setCate
//     }

//   return (
//     <div>
//         <dataContext.Provider value={data}>
//         {children}
//         </dataContext.Provider>
       
//     </div>
//   )
// }

// export default UserContext

import React, { createContext, useState } from 'react';
import { food_items } from '../food';

export const dataContext = createContext();

function UserContext({ children }) {
  const [cate, setCate] = useState(food_items);
  const [input, setInput] = useState("");
let[showCart,setShowCart]=useState(false)
  const data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart

    
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
