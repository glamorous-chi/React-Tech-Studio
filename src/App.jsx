import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './components/Nav'
import DetailPage from './pages/DetailPage'

function App() {
  // JSX allows us to combine both JS and HTML
  return (
    <>
    {/* <Home/>
    <About/>
    <Products/> */}

    {/* Routing pages */}
    <BrowserRouter>
    <NavBar/>
      <Routes>
        {/* The Home Page carries only one slash since that is the first page the user sees */}
        <Route path="/" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        {/* //the colon means things can chnage, it is dynamic*/}
        <Route path="/product/:productId" element={<DetailPage/>}/> 
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
