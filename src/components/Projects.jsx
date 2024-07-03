import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
// import project1 from "../assets/projects/project-1.jpg";

const Projects = () => {
    
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 
            whileInView={{y:0,opacity:1}}
            initial={{y:-100,opacity:0}}
            transition={{duration:1}}
            className='my-20 text-center text-4xl'>Projects</motion.h1>
            {PROJECTS.map((project, index) =>
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{x:0,opacity:1}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                        <img  src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded'/>
                    </motion.div>
                    <motion.div 
                    whileInView={{x:0,opacity:1}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <a href={project.link} target='_blank' rel="noreferrer">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        </a>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>

                        <div className='flex flex-wrap'>
                        {project.technologies.map((tech,index)=>
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>)}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default Projects