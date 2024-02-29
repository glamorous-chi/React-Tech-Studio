import React, {useState, useEffect} from 'react'

// Hooks include useState, useEffect,useContext, useRef, custom hooks

const MyHook = () => {

    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState({
        bg: "",
        color: ""
    })
    
    // UseEffect Hook
    // useEffect(() => {
    //     console.log("Use effect did mount");
    // })

    // Run only once page loads - It listens to any change
    useEffect(() => {
        console.log("Use effect component did mount"), []; // The empty array signifies component did mount, it will run once (componentDidMount)
    })

    //useffect hook as componentDidUpdate
    useEffect(() => {
        if (count === 5){
            setTheme({
                bg: "black",
                color: "white"
            })
        }
        
    }, [count])
   
    const handleIncrease = () => {
       setCount(count+1)
    }
    const handleDecrease = () => {
        count - 1;
        setCount(count-1)
    }
  
    // const handleClick = () => {
    //     setTheme("Green")
    // }
    const handleClick = () => {

    }
  return (
    <div  style={{backgroundColor:theme.bg, color:theme.color}}>
        <h1>My Hook Component</h1>
        <div className="">
            <button className="btn btn-outline-danger" onClick={handleDecrease}>-</button>
            <span className='mx-4 fw-bold'>{count}</span>
            <button className="btn btn-outline-success" onClick={handleIncrease}>+</button>
        </div>

        <p>{theme.color}</p>

        <button onClick = {() => {setTheme(
            {
                bg:"yellow",
                color: "tomato"
            }
        )}} className='btn btn-outline-warning'>Yellow</button>

        <button onClick={() => {setTheme({
            
            bg:"green",
            color: "white"
        })}} className='btn btn-outline-success ms-3'>Green</button>
    </div>
  )
}

export default MyHook