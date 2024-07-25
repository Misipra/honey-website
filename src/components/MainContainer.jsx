import React,{useRef,useState,useEffect} from "react";
import HomeContainer from "./HomeContainer";
import {motion} from 'framer-motion'
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "./context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";


const MainContainer = () => {

  const [{foodItems, cartShow},dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue,cartShow]);

  const rowContainer = useRef();
  return (
    <div className="w-full h-auto flex flex-col items-center 
    justify-center ">
      <HomeContainer/>

      <section className="w-full my-6">
        <div className="w-full items-center flex justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-600 transition-all ease-in-out duration-100">
            Our Fresh and Healthy Products

          </p>


          <div className="hidden md:flex gap-3 items-center">

            <motion.div
            whileTap={{scale: 0.75}}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
            hover:shadow-lg
            transition-all ease-in-out duration-100 flex items-center justify-center"
            onClick={() => setScrollValue( -1500)}
            
            >
              <MdChevronLeft className="text-lg text-white"/>


            </motion.div>



            <motion.div
            whileTap={{scale: 0.75}}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
            hover:shadow-lg
            transition-all ease-in-out duration-100 flex items-center justify-center"
            onClick={() => setScrollValue(+ 1500)}
            >

              <MdChevronRight className="text-lg text-white"/>

            </motion.div>



          </div>

        </div>

        <RowContainer flag={true}
         scrollValue={scrollValue}
         
         data={foodItems ?.filter((n) => n.category === "honey")}/>

      </section>

      <MenuContainer/>
      {cartShow && (
        <CartContainer/>
      )}
      
      
    </div>
  );
};


export default MainContainer