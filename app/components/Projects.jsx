import React from 'react'

const ProjectsL = [
    {
        title: 'Pathway' ,
        description: 'Website that lets you track your digital footprint' ,
        stack: 'React,NextJs,TailwindCSS'  ,
        url:'https://pathway-fawn-one.vercel.app/' ,
        code: 'https://github.com/LucasBallario/Pathway'
    } ,
    {
        title: 'Sketcha' ,
        description: 'Convert sketch into professional renders' ,
        stack: 'React,NextJs,TailwindCSS,llm models'  ,
        url:'https://sketcha-e4i4ujihg-lucas-projects1.vercel.app/' ,
        code: 'https://github.com/LucasBallario/Sketcha'
    }
]

export default function Projects() {
  return (
    <div className='ml-[15%] mt-[8%]'>
        <h2 className='text-2xl font-bold'>Projects</h2>
        {ProjectsL.map((project,index) => ( 
            <div key={index}> 
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.stack}</p>
            <p>{project.url}</p>
            <p>{project.code}</p>
            </div>
        ))}
    </div>
  )
}
