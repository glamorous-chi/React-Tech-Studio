import React from 'react'
import heroImage from "../assets/images/pexels-james-wheeler-414612.jpg"

const Hero = (props) => {
    // Destructuring the props object
    const {heading = "Welcome to my page", image} = props //Adding a fallback/Default paramter in case no argument is provided
  return (
    <div style={{backgroundColor:"wheat",color:"aqua"}}>
        <div className="">
            <img src={image} alt="" width={400}/>
        </div>
        {/* <h1>Welcome to my page</h1>  */}
        <h1>{heading}</h1>
        
    </div>
  )
}
// const Herp = (props) => {
// const {heading, image} = props
// }
// OR
// const Herp =({heading, image})

export default Hero