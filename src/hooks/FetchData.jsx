//UseEffect Application
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
// import BlogCard from '../components/BlogCard'


const FetchData = () => {
    //Hooks
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    // Fetching blogs with axios
    const fetchBlogs = async () => {
        const url = "https://blogg-api-v1.onrender.com/blogs/all"
        try {
            setLoading(true)
            const response = await axios.get(url) //use axios to fetch the data
            const data = await response?.data // data is coming from axios

            if (data) {
                setBlogs(data?.blogs)
                setLoading(false)
            }

            // console.log(data);
            console.log(data?.blogs);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])
    // console.log(blogs);
    return (
        <div>
            <h1>Fetch Data</h1>
            {loading ? (<Loader />) : (<>
                <div className="row d-flex gap-3 justify-content-center align-items-center">
                    {blogs.map((items) => {
                        return (
                            <div className="col-12 col-md-4 col-lg-3 rounded " style={{ height: "400px", backgroundColor: "wheat" }} key={items._id}>
                                {/* <BlogCard blog= {items}/> */}
                                <div className="card-img">
                                    <img src={items.imageUrl} alt="" style={{ width: "100%", height: "200px" }} />
                                </div>
                                <div className="text-start" >
                                    <b>{items.title}</b>
                                    <p>{items.content.slice(0, 30)}</p>
                                    <p>{items.author}</p>
                                    <p>{items.read_time}min</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </>
            )
                // if(loading){
                //     return(
                //         <Loader/>
                //     )
                // }

            }
        </div>
    )

}

export default FetchData