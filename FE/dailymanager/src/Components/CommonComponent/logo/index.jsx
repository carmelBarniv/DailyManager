
import React from 'react'
import "./Logo.css"
import logo from './The-Daily-logo.png'

function CreateLogo() {
    return (
        <div className="container">
            <div className="centered">
                <img src={logo} alt="logo" id="logo" />
            </div>
        </div> 
    )
}

export default CreateLogo;