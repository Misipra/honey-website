import React, { useRef, useEffect, useState } from 'react'
import { MdShoppingBasket } from "react-icons/md";
import {motion} from 'framer-motion'
import honey from '../images/h3image.png'
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';


function RowContainer({flag ,data,scrollValue}) {
  // console.log( data);
  const rowContainer = useRef();

    
  

  const [{cartItems}, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const addToCart = () => {
   
    dispatch({
      type: actionType.SET_CARTITEMS  ,
      cartItems : items, 
    
    });
      

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };


  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue
  },[scrollValue])
  

  useEffect(() => {
    addToCart();
  },[items])

  
  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center gap-3  my-12
    scroll-smooth bg-orange-100
     ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"}

     }`}>


      {data && data.map(item => (
        <div key={item.id}

         className=' w-300 min-w-[300px]
        md:min-w-[340px] md:w-340  h-[350px] bg-cardOverlay rounded-lg p-2 flex-col items-center justify-between flex hover:drop-shadow-lg my-12 backdrop-blur-lg ' >
        <div className=' w-full items-center  flex justify-between'>


          <motion.img
          whileHover={{scale: 1.2}} 
          src={item?.imageURL}
         
          alt=" "
          className='w-40 drop-shadow-2xl mt-1'
          
          />

          <motion.div
           
           className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
           whileTap={{scale: 0.75}}
           onClick={() =>  setItems([...cartItems, item])}
           
           >

            <MdShoppingBasket className='text-white '/>
          </motion.div>

        </div>

        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>{item?.title}
          </p>

          <p className=' mt-1 text-sm text-gray-500'>
            calories:{item?.calories}

          </p>

          <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor 
            font-semibold'>
              <span className='text-sm text-red-500'>₹</span>  price:{item?.price}

            </p>

          </div>


        </div>

      </div>
      ))}

     </div>
  )
}

export default RowContainer