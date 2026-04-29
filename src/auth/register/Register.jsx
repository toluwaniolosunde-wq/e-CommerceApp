import React from 'react'
import {Link} from 'react-router'
import Login from '../login/Login'
const Register = () =>{
    return(
        <>
        <div>Register</div>
        <span>Have an account? <a href="">login</a></span>
        <span>Have an account from edu? <Link to="/login">login</Link></span>
        </>
    )
}

export default Register 