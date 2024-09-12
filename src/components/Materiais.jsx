import React from 'react'
import Header from './Header.jsx'
import moduloBT from '../assets/moduloBT.svg';
import arduino from '../assets/arduino.svg';
import sensor from '../assets/sensorCor.svg';
import placa from '../assets/placaProtoboard.svg';
import moduloDF from '../assets/moduloDF.svg';
import fios from '../assets/fios.svg'
import bateria from '../assets/bateria.svg'
import autofalante from '../assets/autofalante.svg'

export default function Materiais() {
      return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-fundo-bg'>
      <div
        className="relative rounded-lg w-[300px] h-[3700px] top-10 lg:w-[1300px] lg:h-[1200px] xl:w-[1600px] bg-gradient-to-r from-azulEscuro/60 via-verdinho/100 to-azulzao/60 mb-24">
         <div className="absolute inset-0 bg-black xl:bg-opacity-80 bg-opacity-60 rounded-lg"></div>
         <Header></Header>
         <h1 className='text-white text-center relative mt-10 font-aoboshi text-xl lg:text-5xl'>MATERIAIS</h1>
    </div>


    <div className='absolute text-xl text-center text-white top-56 flex flex-wrap flex-col xl:flex-row justify-center gap-8 flex flex-wrap justify-center'>

      
    <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20 '>
        <div>
          <img src={sensor} alt="" className='-top-12 relative' />
          <h1>SENSOR DE COR</h1>
          <h2>R$</h2>
        </div>
      </div>



      <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20 xl:ml-32'>
        <div>
          <img src={moduloBT} alt="" className='-top-12 relative' />
          <h1>MODULO BLUETOOTH</h1>
          <h2>R$</h2>
        </div>
      </div>


      <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20 xl:ml-32'>
        <div>
          <img src={arduino} alt="" className='-top-12 relative' />
          <h1>ARDUINO</h1>
          <h2>R$</h2>
        </div>
      </div>


      <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20 xl:ml-32'>
        <div>
          <img src={placa} alt="" className='-top-12 relative' />
          <h1>PLACA PROTOBOARD</h1>
          <h2>R$</h2>
        </div>
      </div>


     

     </div>

     <div className='absolute text-xl text-center text-white top-56 flex flex-wrap flex-col xl:flex-row justify-center gap-8 flex flex-wrap justify-center mt-[1700px] xl:mt-[450px]'
     >
     <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20'>
        <div>
          <img src={moduloDF} alt="" className='-top-12 relative' />
          <h1>MODULO DF</h1>
          <h2>R$</h2>
        </div>
      </div>


      <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20 xl:ml-32'>
        <div>
          <img src={fios} alt="" className='-top-12 relative' />
          <h1>FIOS JUMPPERS</h1>
          <h2>R$</h2>
        </div>
      </div>


      <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20 xl:ml-32'>
        <div>
          <img src={autofalante} alt="" className='-top-12 relative' />
          <h1>AUTO FALANTE</h1>
          <h2>R$</h2>
        </div>
      </div>


      <div className='w-44 h-80 bg-fundo-bg rounded-lg flex flex-col items-center relative mt-20 xl:ml-32'>
        <div>
          <img src={bateria} alt="" className='-top-12 relative' />
          <h1>BATERIA</h1>
          <h2>R$</h2>
        </div>
      </div>
    </div>



      </div>
  

  )
}
