import React from 'react';
import bootstrap from 'bootstrap';
import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom"
import TTO from '../imgs/newlogo.png'

const Navbar = () => {
    return (
        <div className='navbar'>

            
                <div className="navlinks-logo">
                <Link to='/'>
                <img src={TTO} alt="" />
                </Link>
                </div>

            <div className="lg-nav-display">
                <div className='navlinks-left'>
                   <Link to='/'>Home</Link> 
                   <Link to='/tryouts'>Try Outs</Link> 
                   <Link to='/team'>Meet The Team</Link>  
                   <Link to='/signup'>Sign Up | Log In</Link>
</div>
</div>


                <div className="dropdown nav-list">
                <button id='dropdown-btn' className='navlinks-left'>
                    <span>Sign Up | Log In</span>
                </button>
                <div className="dropdown-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tryouts'>Try Outs</Link></li> 
                    <li><Link to='/team'>Meet The Team</Link></li>  
                    <li><Link to='/signup'>Sign Up | Log In</Link></li>
                </ul>    
                </div>
                </div>

                </div>
                
                
                

    )
}

export default withRouter(Navbar)
