import React from 'react'
import { CONTACT } from '../constants'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h1 
            whileInView={{y:0,opacity:1}}
            initial={{y:-100,opacity:0}}
            transition={{duration:0.5}}
            className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
            <div className='text-center tracking-tighter'>
            
                {/* <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <a href="#" className='border-b'>{CONTACT.email}</a> */}


                <motion.div 
                whileInView={{x:0,opacity:1}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}}
                className='flex justify-center items-center gap-2'>
                    <div className='item-center text-center justify-items-center'>
                    <FaLocationDot />
                    </div>
                    <div>
                    <p className=''>{CONTACT.address}</p>
                    </div>
                </motion.div>

                <a href="tel:+919099963682">
                <motion.div 
                whileInView={{x:0,opacity:1}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                className='flex justify-center items-center gap-2'>
                    <div className='item-center text-center justify-items-center'>
                    <IoMdCall />
                    </div>
                    <div>
                    <p className='my-4'>{CONTACT.phoneNo}</p>
                    </div>
                </motion.div>
                </a>


                <a href="mailto:dhanani51@gmail.com" target="_blank" rel="noopener noreferrer">
                <motion.div 
                whileInView={{x:0,opacity:1}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}}
                className='flex justify-center items-center gap-2'>
                    <div className='item-center text-center justify-items-center'>
                    <MdEmail />
                    </div>
                    <div>
                    <p className=''>{CONTACT.email}</p>
                    </div>
                </motion.div>
                </a>

            </div>
        </div>
    )
}

export default Contact