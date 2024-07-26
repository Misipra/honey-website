import React from 'react';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from 'framer-motion';
import { RiRefreshFill } from "react-icons/ri";

import { FaRupeeSign } from "react-icons/fa";
import { useStateValue } from './context/StateProvider';
import emptyCart from '../images/cardempty-removebg-preview.png';
import Cartitem from "../Cartitems";

function CartContainer() {
  const [{ Cartshow, cartItems, user }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: "SET_CART_SHOW",
      Cartshow: !Cartshow
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    });
  };

  const getTotal = () => {
    return cartItems.reduce((amount, item) => item.price + amount, 0);
  };

  const deliveryFee = 50;
  const subTotal = getTotal();
  const total = subTotal + deliveryFee;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className='fixed top-0 right-5 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'
    >
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={showCart}
        >
          <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
        </motion.div>

        <p className='text-textColor text-lg font-semibold'>Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'
          onClick={clearCart}
        >
          Clear 
          <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
          <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
            {/* cart item */}
            {cartItems.map((item) => (
              
              <div
              key={item.id}
              className='w-full p-1 rounded-lg bg-cartItem flex items-center gap-2'
              >

                <img src={item.imageURL} 
                className='w-20 h-20 max-w-[60px] rounded-full object-contain' alt="" />

                {/* name section */}

                <div className='flex gap-2  flex-col'>

                  <p className='text-base text-gray-50'>
                    {item?.title}</p>

                  <p className='text-sm block text-gray-300 font-semibold'>
                  ₹{item?.price}</p>

                </div>

              </div>
            ))}
          </div>

          {/* cart total section */}
          <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly -mt-16 px-8 py-2'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-lg'>Sub Total</p>
              <p className='text-gray-400 text-lg'>₹ {subTotal}</p>
            </div>

            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-lg'>Delivery</p>
              <p className='text-gray-400 text-lg'>₹ {deliveryFee}</p>
            </div>

            <div className='w-full border-b border-gray-600 my-2'></div>

            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-200 text-xl font-semibold'>Total</p>
              <p className='text-gray-200 text-xl font-semibold'>
                ₹ {total}</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type='button'
                className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'
              >
                Check out
              </motion.button>
            ) : (
              <motion.button 
                whileTap={{ scale: 0.8 }}
                type='button'
                className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-6 bg-black '>
          <img src={emptyCart} className='w-500' alt='Empty Cart'/>
          <p className='text-xl text-cyan-500 font-semibold'>Your cart is Empty</p>
        </div>
        
      )}
    </motion.div>
    
  );
}

export default CartContainer;
