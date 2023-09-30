

const About = () => {
  return (
    <div name='sobre mim' className='w-full h-screen bg-white text-[#0a192f]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#E5D283]">Sobre mim</p>
                </div>
                <div></div>
            </div>

            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>Oi. Eu sou o Carlos Eduardo, valeu pela visita ao site, fique a vontade </p>
                </div>
                <div>
                    <p>Sou um apaixonado por tecnologia e conheci o mundo do desenvolvimento web aos 17 anos, Sou graduado em Ciência da Computação pela Faculdade Estácio de Teresina, Sou um pessoa que curte aprender novas tecnologias e sou bem diferente das maioria dos devs pois não curto tomar café e nas horas quando não estou programando ou estudando estou jogando ou assistindo series, podcasts e principalmente assistindo os jogos do flamengo 🔴⚫ </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About