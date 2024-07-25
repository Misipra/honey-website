import React, { useState } from 'react'
import Logo from'../images/logo2.png'
import { IoMdBasket } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Avatar from"../images/login-profile.png"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import { IoMdLogOut } from "react-icons/io";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../../src/Firebase.config'
import { useStateValue } from './context/StateProvider';
import  {actionType}  from './context/reducer';

function Header() {

 
  const [isMenu, setIsMenu] = useState(false)



  const [{user,cartShow,cartItems},dispatch] = useStateValue()

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  

  const login =  async () => {
    if(!user){
      const {user : {refreshToken,providerData}} = await signInWithPopup(firebaseAuth, provider);
  
      dispatch({
        type:actionType.SET_USER,
        user:providerData[0],
      })
      localStorage.setItem("user",JSON.stringify(providerData[0]))
      
    }else{
      setIsMenu(!isMenu)
    }
    
  }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user:null
    })
  };
 
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow
    })
  }


  return (
    <header className="fixed z-50 w-screen  bg-cyan-600 md:p-2 px-4 md:px-16 ">
      {/* desktop and tablet  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">

        <Link to={'/'} classname='flex items-center gap-2'
        >
          <img className=' w-20 object-cover ' src={Logo} alt="logo"/>
          <p className='text-red-900 text-xl font-bold'>Mumtaz Gold</p>
          
          </Link>


        <div className='flex items-center gap-8'>
        <motion.ul
        initial={{opacity:0, x:200}}
        animate={{opacity:1, x:1}} 
        exit={{opacity:0, x:200}} 


        
        className="flex gap-4  items-center">
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer' >Home</li>
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer'>menu</li>
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer'>Services</li>
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer'>About Us</li>
        </motion.ul>

        <div className='relative flex items-center justify-center'
        onClick={showCart}
        >
          <IoMdBasket className='text-black text-2xl cursor-pointer'/>
          {cartItems && cartItems.length > 0 && (
            <p className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-lime-300 flex items-center justify-center text-black text-xs">{cartItems.length}</p>
          )}
          
        </div>

        <div className='relative'>
          <motion.img  onClick={login}  whileTap={{scale: 0.6}} src={user ? user.photoURL : Avatar} className=' rounded-full w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer' alt="userProfile" />

        


          {isMenu && (
            <motion.div initial={{opacity :0 ,scale:0.6}}
            animate={{opacity :1.5 ,scale:1}}
            exit={{opacity :0 ,scale:0.6}}
            
            
            
            className='w-40 bg-white shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2 '>


            {user && user.email === "sadmad9898@gmail.com" && 
            <Link to={"/CreateItem"}>
              
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-gray-600 text-base'
              onClick = { () => setIsMenu(false)}
              
              >New Item <IoMdAdd/> </p></Link>}


            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-gray-600 text-bas'
            onClick={logout}>LogOut <IoMdLogOut/></p>
          </motion.div>
          )}
        </div>



      
        </div>
      </div>



      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">

      <div className='relative flex items-center justify-center' onClick={showCart}>
          <IoMdBasket className='text-black text-2xl  cursor-pointer'/>
          {cartItems && cartItems.length > 0 && (
            <p className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-lime-300 flex items-center justify-center text-black text-xs">{cartItems.length}</p>
          )}
          
        </div>
      <Link to={'/'} classname='flex  items-center gap-2'
        >
          <img className=' w-20 object-cover  ' src={Logo} alt="logo"/>
          <p className='text-red-900 text-xl font-bold'>Mumtaz Gold</p>
          
          </Link>

          

          <div className='relative'>
          <motion.img  onClick={login}  whileTap={{scale: 0.6}} src={user ? user.photoURL : Avatar} className=' rounded-full w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer' alt="userProfile" />


          {isMenu && (
            <motion.div initial={{opacity :0 ,scale:0.6}}
            animate={{opacity :1.5 ,scale:1}}
            exit={{opacity :0 ,scale:0.6}}
            
            
            
            className='w-40 bg-white shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2 '>


            {user && user.email === "sadmad9898@gmail.com" && 
            <Link to={"/CreateItem"}><p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-gray-600 text-base'>New Item <IoMdAdd/> </p></Link>}


      <ul className="flex    flex-col">
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2' >Home</li>
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2'>menu</li>
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>Services</li>
          <li className='text-base text-black hover:text-red-600 duration-200 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>About Us</li>
      </ul>


            <p className='m-2 p-2 rounded-md shadow-md justify-center bg-gray-200 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-200 ease-in-out text-gray-600 text-base' onClick={logout}>LogOut <IoMdLogOut/></p>
          </motion.div>
          )}
        </div>
      </div>
      
      
      </header>
  )
}

export default Header