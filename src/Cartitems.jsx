import React, { useState } from 'react'
import { BiMinus, BiPlus } from "react-icons/bi";
import {motion} from 'framer-motion'
import CartContainer from "../src/components/CartContainer";


const cartitems = ({item}) => {
  // const [quantity,setQuantity] = useState(1)
  
  return (
    <div
                
                className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'
              >
                {/* <img 
                  src={item?.image}
                  alt="image"
                  className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                /> */}

                {/* name section */}
                <div className='flex flex-col gap-2'>
                  {/* <p className='text-base text-gray-50'>
                    {item.name}</p> */}
                  <p className='text-sm block text-gray-300 font-semibold'>
                    {/* <FaRupeeSign /> */}
                    
                    {/* {parseFloat(items.price) * quantity} */}
                  </p>
                </div>

                {/* button section */}
                <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                  <motion.div whileTap={{ scale: 0.75 }}>
                    <BiMinus className='text-gray-50' />
                  </motion.div>

                  <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>

                    {/* {quantity} */}

                  </p>

                  <motion.div whileTap={{ scale: 0.75 }}>
                    <BiPlus className='text-gray-50' />
                  </motion.div>
                </div>
              </div>
  )
}

export default cartitems