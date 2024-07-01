import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram , FaWhatsapp } from "react-icons/fa"
// import logo from "../assets/kevinRushLogo.png"
import logo from "../assets/rd.png"
const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='w-10 mx-2 cursor-pointer' src={logo} alt="logo" onClick={()=>{
                    window.location.reload()
                }} />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a className='hover:text-blue-700' href="https://www.linkedin.com/in/rohit-dhanani-0200721a9/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a className='hover:text-slate-600' href="https://github.com/rohitDhanani" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a className='hover:text-slate-600' href="https://x.com/rohitd51" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                <a className='hover:text-pink-700' href="https://www.instagram.com/rohit.dhanani/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a className='hover:text-green-500' href="https://wa.me/919099963682?text=Hello" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                
                
            </div>
        </nav>
    )
}

export default Navbar