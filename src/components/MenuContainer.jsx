import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { categories } from '../utils/data';
import Tablet from '../images/Tabletimage.png';
import capsule from '../images/Capsuleimage.png';
import shanemard from '../images/shanemardimage.png';
import AboutUs from './context/AboutUs';
import Footer from './context/Footer';

function MenuContainer() {
  return (
    <section className="w-full my-6" id='menu'>
  <div className="w-full flex flex-col items-center justify-center">
    <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-600 transition-all ease-in-out duration-100 mr-auto'>
      Our Mumtaz Nightrider Products
    </p>

    <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
      {categories && categories.map((category) => (
        <div
          key={category.id}
          className='group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl hover:bg-red-600 flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out'
        >
          <div className='w-10 h-10 rounded-full bg-cartNumBg group-hover:bg-card flex items-center justify-center'>
            <IoFastFood className='text-card group-hover:text-textColor text-lg' />
          </div>
          <p className='text-sm text-textColor group-hover:text-white'>
            {category.name}
          </p>
        </div>
      ))}
    </div>

    {/* Benefits Section */}
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <p className='text-xl font-semibold capitalize text-headingColor mb-4'>
        Product Benefits
      </p>

      <div className='w-full flex flex-wrap items-center justify-center gap-8'>
        {/* Box 1 */}
        <div className='w-72 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col items-center'>
          <img src={Tablet} alt="Tablet" className='w-24 h-24 object-cover rounded-full mb-4' />
          <h3 className='text-lg font-semibold text-center mb-2'>Benefit of Tablet</h3>
          <p className='text-sm text-gray-600 text-center'>
            This pill is effective in removing masculine weakness and is effective in removing all sexual problems. It is beneficial in stimulating and strengthening the specific organs of a man, makes marital life happy, helps in removing all the diseases like low libido, impotence, lack of sperm, premature ejaculation, premature ejaculation, thinning semen, sleep disorders etc. It creates enthusiasm and agility and provides relief from physical weakness. It also strengthens the nerves and tendons. The interesting thing is that it has no side effects.
            <br />
            <br />
            <span className='text-black'><b>time to take tablets</b></span>
            <br />
            <br />
            Have a light dinner, after an hour take one tablet and one capsule with milk, after that have no food.
            <br />
            <span className='text-orange-500'>Note: Only for men.</span>
            <br />
            <br />
            GUJARAT Mufti Ismail Mahi
            9879180349
            <br />
            MUMBAI
            Mo. A. Majid
            7021587331.

            <br />
            <br />

            <p><span className='text-sm text-red-500 font-semibold'>Price:₹</span><span className='text-sm text-headingColor font-semibold'> 300</span></p>
            
          </p>
        </div>

        {/* Box 2 */}
        <div className='w-72 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col items-center'>
          <img src={capsule} alt="Capsule" className='w-24 h-24 object-cover rounded-full mb-4' />
          <h3 className='text-lg font-semibold text-center mb-2'>Benefit of Capsule</h3>
          <p className='text-sm text-gray-600 text-center'>
            This pill is effective in removing masculine weakness and is effective in removing all sexual problems. It is beneficial in stimulating and strengthening the specific organs of a man, makes marital life happy, helps in removing all the diseases like low libido, impotence, lack of sperm, premature ejaculation, premature ejaculation, thinning semen, sleep disorders etc. It creates enthusiasm and agility and provides relief from physical weakness. It also strengthens the nerves and tendons. The interesting thing is that it has no side effects.
            <br />
            <br />
            <span className='text-black'><b>time to take tablets</b></span>
            <br />
            <br />
            Have a light dinner, after an hour take one tablet and one capsule with milk, after that have no food.
            <br />
            <span className='text-orange-500'>Note: Only for men.</span>
            <br />
            <br />
            GUJARAT Mufti Ismail Mahi
            9879180349
            <br />
            MUMBAI
            Mo. A. Majid
            7021587331.

            <br />
            <br />

            <p><span className='text-sm text-red-500 font-semibold'>Price:₹</span><span className='text-sm text-headingColor font-semibold'> 300</span></p>
          </p>
        </div>

        {/* Box 3 */}
        <div className='w-72 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col items-center'>
          <img src={shanemard} alt="Shan-e-mard" className='w-24 h-24 object-cover rounded-full mb-4' />
          <h3 className='text-lg font-semibold text-center mb-2'>Benefit of Shan-e-mard</h3>
          <p className='text-sm text-gray-600 text-center'>
            This pill is effective in removing masculine weakness and is effective in removing all sexual problems. It is beneficial in stimulating and strengthening the specific organs of a man, makes marital life happy, helps in removing all the diseases like low libido, impotence, lack of sperm, premature ejaculation, premature ejaculation, thinning semen, sleep disorders etc. It creates enthusiasm and agility and provides relief from physical weakness. It also strengthens the nerves and tendons. The interesting thing is that it has no side effects.
            <br />
            <br />
            <span className='text-black'><b>time to take tablets</b></span>
            <br />
            <br />
            Have a light dinner, after an hour take one tablet and one capsule with milk, after that have no food.
            <br />
            <span className='text-orange-500'>Note: Only for men.</span>
            <br />
            <br />
            GUJARAT Mufti Ismail Mahi
            9879180349
            <br />
            MUMBAI
            Mo. A. Majid
            7021587331.

            <br />
            <br />

            <p><span className='text-sm text-red-500 font-semibold'> Price :₹</span><span className='text-sm text-headingColor font-semibold'> 440</span></p>
          </p>
        </div>
      </div>
    </div>
    <AboutUs/>
    <Footer/>
  </div>
</section>

  )

  
}

export default MenuContainer