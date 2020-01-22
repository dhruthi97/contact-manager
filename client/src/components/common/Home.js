import React from 'react'
import images from './images.png'

function Home(props){
        return (
            <div className="text-center mt-3">
                <h2 className="mb-5">Welcome To Contact-Manager</h2>
                <img className = "ml-4" src={images} alt="Images of notes"/>
            </div>
        )
}
    
export default Home