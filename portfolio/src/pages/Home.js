import React from 'react'
import "./Home.css"
import Header from '../components/Header'
import About from "../components/About"
import Footer from '../components/Footer'
import Nav from "../components/Nav"

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
    </div>
  )
}

export default Home
