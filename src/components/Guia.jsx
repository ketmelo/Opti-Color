import React from 'react'
import sirene from '../assets/sirene.svg'
import Header from './Header.jsx'

export default function Guia() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-fundo-bg'>
      <div
        className="relative rounded-lg w-[300px] h-[800px] top-10 xl:w-[1600px] xl:h-[800px] bg-verdinho/40 xl:bg-gradient-to-r xl:from-azulEscuro/60 xl:via-verdinho/100 xl:to-azulzao/60 mb-24 lg:h-screen lg:w-screen ">
         <div className="absolute inset-0 bg-black lg:bg-opacity-80 bg-opacity-60 rounded-lg"></div>
         <Header></Header>
         <h1 className='relative text-white font-aoboshi text-lg w-44 ml-[120px] mt-6 lg:text-5xl lg:mt-10 lg:ml-16  xl:mt-32'>G U I A</h1>
         
         
         
         <div className='relative text-white lg:flex font-inria '>
      <div className='lg:flex lg:flex-col  lg:text-3xl space-y-4 text-sm p-16  '>
          <p >Para usar, ligue o dispositivo conectando a bateria e ativando o botão de energia. Em seguida, emparelhe o dispositivo com o celular via Bluetooth, procurando pelo nome correspondente.</p>
          <p>Para identificar uma cor, posicione o sensor a cerca de 1 cm do objeto e pressione o botão de detecção. O dispositivo identificará e anunciará a cor detectada, seja por áudio ou por meio de um aplicativo no celular.</p>
          <p>Após o uso, desligue o dispositivo para economizar bateria.</p>
      </div>
      <img src={sirene} alt="Sino" className="lg:ml-8 lg:h-72 lg:mr-10 h-32 ml-[85px] lg:mt-12  " />

    </div>
    
    
    </div>
    
    


    </div>
  )
}