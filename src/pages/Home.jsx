import NavBar from "../components/Nav";
import Loader from "../components/Loader";
import img1 from "../assets/images/pexels-anjana-c-674010.jpg"
import "../css/Home.css"
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useState } from "react";



function Home(){
    // let name = "Chioma"
    // const [name, setName] = useState ("Chioma")
    // const [mine,setMine] = useState(true)

    // const handleClick = () => setName("Okeke");
    // const handleClickAgain = (name ) => console.log("Hey there Again " + name);

    return (
        <>
        {/* <p>{name}</p>

        <button onClick={handleClick}>Click me</button> */}

        {/* <button onClick = {() => handleClickAgain("Chioma")
        }>Click me again</button> */}

        {/* <NavBar/> */}
        {/* I removed  image={img1} below */}
        <Hero heading = "Welcome to my Homepage"/>
        {/* <ProductCard/> */}
        {/* <h1 className="bg-warning text-light">Welcome to my Homepage</h1> */}
        <div className="" style={{backgroundColor:"red", borderRadius:"15px"}}>
            <img src={img1} alt="" width={300}/>
        </div>
        </>
    ) 
}

export default Home