import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Router from './layout/Router'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
