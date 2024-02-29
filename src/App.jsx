import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './components/Nav'
import DetailPage from './pages/DetailPage'
import MyHook from './hooks/MyHook'
import FetchData from './hooks/FetchData'
import PageNotFound from './pages/404Page'
// import BlogCard from './components/BlogCard'
import Login from './pages/Login'
// import Register from './pages/Register'
import RegisterPage from './pages/RegisterPage'
// import BlogPage from './pages/BlogPage'

function App() {
  // JSX allows us to combine both JS and HTML
  return (
    <div className='container'>
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
        <Route path="/hook" element={<MyHook/>}/> 
        <Route path="/fetchdata" element={<FetchData/>}/> 
        <Route path="/*" element={<PageNotFound/>}/> 
        {/* <Route path="/blog" element={<BlogCard/>}/>  */}
        <Route path="/login" element={<Login/>}/> 
        {/* <Route path="/register" element={<Register/>}/>  */}
        <Route path="/registerpage" element={<RegisterPage/>}/> 
        {/* <Route path="/blogpage" element={<BlogPage/>}/>  */}
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
