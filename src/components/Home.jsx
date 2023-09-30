/* eslint-disable no-unused-vars */
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fff]'>
    
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#4d7cf4]'>Oi,👋 meu nome é </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Carlos Eduardo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#0a192f]'>Eu sou um desenvolvedor Full Stack.</h2>
            <p className='text-[#0a192f] py-4 max-w-[700px]'>Sou um desenvolvedor full-stack em busca de oportunidades para contribuir em projetos e aprimorar minhas habilidades junto a desenvolvedores experientes no mercado de desenvolvimento.</p>
        <div>
            <button className='text-[#0a192f] group font-bold border-2 border-[#0a192f] px-6 py-3 flex items-center hover:bg-[#0a192f] hover:text-white'>
                Veja meus projetos
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />  
            </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home