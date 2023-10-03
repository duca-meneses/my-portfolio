

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import Django from '../assets/django.png';
import Flask from '../assets/flask.png';
import PostgreSql from '../assets/postgresql.png';
import Github from '../assets/github.png';
import Bootstrap from '../assets/bootstrap.png';


const Skills = () => {
  return (
    <div name='Skills' className='w-full h-screen bg-white text-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#E5D283]'>Skills</p>
          {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <p className='py-4'>// Essas são as tecnologias que eu tenho conhecimento </p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="logo do Python "/>
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="logo do JavaScript "/>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="logo do Html "/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="logo do Css "/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Django} alt="logo do Django "/>
            <p className='my-4'>Django</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="logo do React "/>
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Flask} alt="logo do Flask "/>
            <p className='my-4'>Flask</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Bootstrap} alt="logo do Bootstrap "/>
            <p className='my-4'>Bootstrap</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={PostgreSql} alt="logo do PostgreSql "/>
            <p className='my-4'>PostgreSql</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="logo do Github "/>
            <p className='my-4'>Github</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills