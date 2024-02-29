import Hero from "../components/Hero"
import NavBar from "../components/Nav"
// import "../css/About.css"
import img2 from "../assets/images/pexels-james-wheeler-414612.jpg"
function About() {

  const myJsx = <h3>This is an awesome JSX</h3>
  const myFavFood = <ul>
    <li>Jollof Rice</li>
    <li>Spaghetti</li>
    <li>Fried Rice</li>
    <li>Yam</li>
  </ul>
  const food = ["amala", "tuwo", "Jollof Rice", "Spaghetti", "Yam"]
  const myStyle = { listStyle: "none", color: "tomato", backgroundColor: "#eee" }
  return (
    <div>
      {/* <NavBar/> */}
      <Hero heading="Welcome to my About Page" image={img2} />
      <h1>Welcome to my tech app 1.0</h1>
      {/* To render the code */}
      {myJsx}
      {myFavFood}

      {/* Looping through the food array */}
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
            <p>My favourite food is {f}</p>
          </div>
        )
      })}
    </div>)
}


export default About

// TUESDAY, 20th of February, 2024
// Embedding/Nesting one componnet in another component