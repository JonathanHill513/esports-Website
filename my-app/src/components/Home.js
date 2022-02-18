import React from 'react'
import '../App.css'
import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom"

const Home = () => {
    return (
        <div>
        <div className="main-body text-center">
            <h1>Team Thunder Orion</h1>

            <Link to='/contact'>
            <div className="link-container" id='sfv'>
                <span>STREET FIGHTER</span>
                
            </div>
            </Link>

            <Link to='/contact'>
            <div className="link-container" id='ssbu'>
                <span>SMASH ULTIMATE</span>
                
            </div>
            </Link>


            </div>
            <div className="small-container">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi fugit ex error sint aliquid voluptates vitae esse possimus unde sed soluta dicta at sequi, tempore eum nemo eveniet corrupti.</p>
            </div>
            <div className="small-container">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi fugit ex error sint aliquid voluptates vitae esse possimus unde sed soluta dicta at sequi, tempore eum nemo eveniet corrupti.</p>
            </div>
        </div>
    )
}

export default Home
