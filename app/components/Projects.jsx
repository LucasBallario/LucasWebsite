import React from 'react'

const ProjectsL = [
    {
        title: 'Pathway' ,
        description: 'OSINT search engine that tracks your digital footprint' ,
        stack: 'Next.js • React • Tailwind CSS • API Integration'  ,
        info: 'View project',
        info2: 'Code',
        url:'https://pathway-fawn-one.vercel.app/' ,
        code: 'https://github.com/LucasBallario/Pathway'
    } ,
    {
        title: 'Sketcha' ,
        description: 'Convert sketch into professional renders' ,
        stack: 'Next.js • React • Tailwind CSS • Supabase • Stripe • AI Image Generation • Credit-Based System • Secure Auth'  ,
        info: 'View project',
        info2: 'Code',
        url:'https://sketcha-e4i4ujihg-lucas-projects1.vercel.app/' ,
        code: 'https://github.com/LucasBallario/Sketcha'
    }
]

export default function Projects() {
  return (
    <div className='ml-[15%] mt-[8%]'>
        <h2 className='text-2xl font-bold mb-10'>Projects</h2>
        {ProjectsL.map((project,index) => ( 
            <div key={index} className='flex flex-col gap-3'> 
            <h3 className='font-bold'>{project.title}</h3>
            <p>{project.description}</p>
            <p className='max-w-lg'>{project.stack}</p>
            <a href={project.url}><p className='text-[#D3CFCE] hover:text-gray-300'>{project.info}</p></a>
            <a href={project.code}><p className='mb-10 text-[#D3CFCE]'>{project.info2}</p></a>
            </div>
        ))}
    </div>
  )
}
