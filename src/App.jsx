import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import Products from './components/Products'
import Demo from './components/Demo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ValueProposition />
      <Products />
      <Demo />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
