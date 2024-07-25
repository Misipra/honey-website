import React from 'react';
import Delivery from "../images/deliveryimage.png";
import herobg from '../images/heroBg.png';
import { heroData } from '../utils/data';


function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id='home'>
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center rounded-full px-4 py-2 bg-orange-100">
          <p className="text-base text-orange-500 font-semibold">Courier Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img src={Delivery} alt="delivery" className="w-full h-full object-contain" />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
        </p>

        <p className="text-base md:w-[80%] text-textColor text-center md:text-left">
          At Mumtaz-Gold Company, we pride ourselves on providing the fastest and most reliable delivery service in your city. 
          Whether you're ordering essentials or indulging in your favorite treats, we guarantee swift delivery right to your 
          doorstep. Our state-of-the-art logistics system and dedicated team of couriers work around the clock to ensure your 
          orders reach you in record time, no matter where you are. Experience unparalleled convenience and speed with Mumtaz-Gold 
          Company, where your satisfaction is our top priority.
        </p>

        <button 
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now!
        </button>
      </div>

      <div className="py-2 flex-1 flex  items-center relative ">

        <img 
        src={herobg}
        alt="herobg"
        className="ml-auto h-420 w-full lg:w-auto lg:h-650 "  />


        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-2 flex-wrap ">

          {heroData && heroData.map(n => (
            <div  key={n.id} 
            className='lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center '>

            <img
             src={n.imageSrc} 
             alt="bestimage" 
             className=' w-20 lg:w-40 -mt-10 lg:-mt-25' />
            <p className='lg:text-xl text-base font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>

            <p className=' text-[12px] lg:text-sm  text-gray-500
            font-semibold my-1 lg:my-3'>{n.decp}</p>

            <p><span className='text-sm text-red-500 font-semibold'>₹</span><span className='text-sm text-headingColor font-semibold'>{n.price}</span></p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
