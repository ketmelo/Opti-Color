import React from 'react'
import Header from './Header.jsx'
import ketlyn from '../assets/ketlyn-icon.svg'
import mariana from '../assets/mariana-icon.svg'
import nelson from '../assets/nelson-icon.svg'
import rafaella from '../assets/rafaella-icon.svg'
import linkedin from '../assets/linkedin-logo.svg'
import instagram from '../assets/instagram-logo.svg'


export default function Participantes() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-fundo-bg'>
      <div
        className="relative rounded-lg w-[300px] h-[1950px] top-10 xl:w-[1600px] xl:h-[800px] bg-verdinho/40 xl:bg-gradient-to-r xl:from-azulEscuro/60 xl:via-verdinho/100 xl:to-azulzao/60 mb-24 lg:h-screen lg:w-screen">
        <div className="absolute inset-0 bg-black xl:bg-opacity-80 bg-opacity-60 rounded-lg"></div>
        <Header></Header>
        <h1 className='text-white text-center relative mt-16 mb-5 font-aoboshi text-xl lg:text-5xl'>PARTICIPANTES</h1>
      </div>


      <div className='absolute text-white top-56 flex flex-wrap flex-col xl:flex-row justify-center gap-8 flex flex-wrap justify-center lg:mt-20'>


        <div className='w-44 h-80 bg-fundo-bg rounded-2xl rounded-t-[30px] flex flex-col font-aoboshi items-center relative mt-20 a '>
          <div>
            <img src={mariana} alt="" className='-top-12 relative' />
            <h1 className='text-xl text-bold text-center font-bold'>Mariana Ribeiro</h1>
            <h2 className='text-base text-center  font-bold '>17 anos</h2>
           <div className='flex mt-5 items-center justify-center'>
           <a href="https://www.linkedin.com/in/mariana-ribeiro-ab48912b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt="" className='h-7 '/></a>
           <a href="https://www.instagram.com/maryrmdss/"><img src={instagram} alt="" className='h-7 ml-5' /></a>
           </div>
          </div>
        </div>



        <div className='w-44 h-80 bg-fundo-bg rounded-2xl rounded-t-[30px] flex flex-col font-aoboshi items-center relative mt-20 xl:ml-10 xl:ml-20'>
          <div>
            <img src={ketlyn} alt="" className='-top-12 relative' />
            <h1 className='text-xl text-bold text-center font-bold'>Ketlyn Melo</h1>
            <h2 className='text-base text-center  font-bold '>18 anos</h2>
            <div className='flex mt-5 items-center justify-center'>
            <a href="https://www.linkedin.com/in/ketlyn-de-melo-73a0a0221/-ab48912b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt="" className='h-7 '/></a>
            <a href="https://www.instagram.com/melooketlyn/"><img src={instagram} alt="" className='h-7 ml-5' /></a>
           </div>
          </div>
        </div>


        <div className='w-44 h-80 bg-fundo-bg rounded-2xl rounded-t-[30px] flex flex-col font-aoboshi items-center relative mt-20 xl:ml-20'>
          <div>
            <img src={nelson} alt="" className='-top-12 relative' />
            <h1 className='text-xl text-bold text-center font-bold'>Jõao Nelson</h1>
            <h2 className='text-base text-center  font-bold '>17 anos</h2>
            <div className='flex mt-5 items-center justify-center'>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-nelson-24ba0b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkedin} alt="" className='h-7 '/></a>
            <a href="https://www.instagram.com/joao.nls/"><img src={instagram} alt="" className='h-7 ml-5' /></a>
           </div>
          </div>
        </div>


        <div className='w-44 h-80 bg-fundo-bg rounded-2xl rounded-t-[30px] flex flex-col items-center font-aoboshi relative mt-20  xl:ml-20'>
          <div>
            <img src={rafaella} alt="" className='-top-12 relative' />
            <h1 className='text-xl text-center font-bold'>Rafaella Silveira</h1>
            <h2 className='text-base text-center font-bold '>17 anos</h2>
            <div className='flex mt-5 items-center justify-center'>
           <a href="https://www.linkedin.com/in/rafaella-silveira-da-silva-58048b2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt="" className='h-7 '/></a>
           <a href="https://www.instagram.com/rafa.ellasilveira_/"><img src={instagram} alt="" className='h-7 ml-5' /></a>
           
           </div>
          </div>
        </div>




      </div>


    </div>


  )
}
