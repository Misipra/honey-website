import React,{useEffect} from 'react'
import { Header } from './components'
import { Route, Routes } from 'react-router-dom'
import { MainContainer,  CreateContainer } from './components'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from '../src/components/context/StateProvider'
import { actionType } from './components/context/reducer'
import {useDispatch} from 'react-redux'
import { getAllFoodItems } from './utils/firebasefunction'

// import Header from './components/Header'

function App() {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchdata = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }

  useEffect(() => {
    fetchdata()
  },[])



  return (
    <AnimatePresence mode='exitBeforeEnter'>
    <div className="w-screen h-auto flex flex-col">
      <Header/>

      <main className="mt-14  md:mt-20 px-4 md:px-16  py-2 w-full">
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/CreateItem' element={<CreateContainer/>}/>
        </Routes>
      </main>
    
    </div>
    </AnimatePresence>
  )
}

export default App