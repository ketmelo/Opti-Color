import React from 'react'
import Header from './Header.jsx'
import livro from '../assets/icon-livro.svg'



export default function Ref() {
      return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-fundo-bg lg:h-screen lg:w-screen '>
      <div
        className="relative rounded-lg w-[300px] h-[1950px] top-10 xl:w-[1600px] xl:h-[800px] bg-verdinho/60 xl:bg-gradient-to-r xl:from-azulEscuro/60 xl:via-verdinho/100 xl:to-azulzao/60 mb-24 lg:h-screen lg:w-screen ">
         <div className="absolute inset-0 bg-black xl:bg-opacity-80 bg-opacity-60 rounded-lg"></div>
         <Header></Header>
         <h1 className='text-white text-center relative mt-10 font-aoboshi text-xl lg:text-5xl xl:mt-20'>REFERÊNCIAS</h1>
         <h1 className='text-white text-center relative mt-10 font-aoboshi text-xl lg:text-5xl'>BIBLIOGRÁFICAS</h1>
    </div>


    <div className='absolute text-white top-56 flex flex-wrap flex-col xl:flex-row justify-center gap-8 flex flex-wrap justify-center xl:mt-40'>

      
    <div className='xl:w-56 h-80 bg-fundo-bg bg-opacity-60 rounded-3xl flex flex-col items-center relative mt-20 w-44'>
        <div>
          
          <h1 className='xl:text-2xl text-center xl:mt-10 text-sm font-aoboshi mt-20'>Daltonismo e as percepções das cores</h1>
          
          <img src={livro} alt="" className='  relative ml-12 mt-10 lg:ml-[70px]' />
        </div>
      </div>



      <div className='xl:w-56 h-80 bg-fundo-bg rounded-3xl bg-opacity-60 flex flex-col items-center relative mt-20 xl:ml-20 w-44 '>
      <div>
          
          <h1 className='xl:text-2xl text-center xl:mt-10 text-sm font-aoboshi mt-20'>Diferentes maneiras de viver essas 
          diferenças</h1>
          
          <img src={livro} alt="" className='  relative ml-12 mt-10 lg:ml-[70px] ' />
        </div>
      </div>


      <div className='xl:w-56 h-80 bg-fundo-bg rounded-3xl bg-opacity-60 flex flex-col items-center relative mt-20 xl:ml-20 w-44'>
      <div>
          
          <h1 className='xl:text-2xl text-center xl:mt-10 text-sm font-aoboshi mt-20'>Acessibilidade em jogos para portadores</h1>
          
          <img src={livro} alt="" className='  relative ml-12 mt-10 lg:ml-[70px]' />
        </div>
      </div>


      <div className='xl:w-56 h-80 bg-fundo-bg rounded-3xl bg-opacity-60 flex flex-col items-center xl:ml-20 relative mt-20 w-44'>
      <div>
          
          <h1 className='xl:text-2xl text-center xl:mt-10 text-sm font-aoboshi mt-20'>Guia de boas práticas sobre daltonismo</h1>
          <img src={livro} alt="" className=' relative ml-12 mt-10 lg:ml-[70px] ' />
        </div>
      </div>


     

     </div>


      </div>
  

  )
}

