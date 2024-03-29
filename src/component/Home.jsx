import React from 'react'
import Navbar from '../platform/Navbar'
import Layar from '../platform/Layar'
import bg from "../asset/TanamsLogo.jpeg"
import Plan from '../platform/Plan'
// import Navbar2 from '../platform/Navbar2'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Layar
        dName="layar"
        layarIMG={bg}
        titlle="TANAMS RENT"
        text="Choose Your Favorite PLan"
        buttonText="TANAMS RENT"
        url="/signup"
        btnClass="show"
        />
        <Plan/>
    </div>
  )
}

export default Home
