import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import Banner from './banner'
import Header from './Header'
import Footer from './Footer'
import RegisterPlan from './RegisterPlan'




function App() {

  return (
    <>
      <div className='topBar'></div>
      <Header/>
      <Menu></Menu>
      <Banner className="banner" textCalss="textdiv"  Header="KERPENTER IS A FLEXIBLE,
       ECONOMICAL AND SCALABLE SAAS (SOFTWARE AS A SERVICE) SOLUTION!" 
       Parra="The world of custom carpentry is evolving rapidly and KERPENTER is at the head of this revolution.
       We are proud to introduce the solution that is radically transforming the way carpenters interact with their customers and create custom furniture of exceptional quality.
       Forget tedious meetings with paper and pencil. With KERPENTER, design the project directly with your client from the first meeting,
       thus speeding up the trial and error phase and allowing rapid order signing."> </Banner>
      
      <Footer/>
      {/* <RegisterPlan/> */}
    </>
  )
}

export default App
