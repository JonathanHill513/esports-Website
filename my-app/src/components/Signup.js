import React from 'react'

const Signup = () => {
    return (
        <div>
            <h1 className='text-center'>Sign Up</h1>
            <form action="submit">
            <h3>Email Address</h3>
                <input type="text" />
                <br />
                <h3>Password</h3>
                <input type="text" />
            </form>
        </div>
    )
}

export default Signup
