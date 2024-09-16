import React from 'react'
import Header from './Header.jsx'
import fundo from '../assets/Home.svg'
import lampada from '../assets/lampada.svg';
import cerebro from '../assets/cerebro.svg';
import maos from '../assets/maos.svg';

export default function Home() {

    
  return (

  <div className='min-h-screen flex flex-col justify-center items-center bg-fundo-bg'>
    <div
        className="relative rounded-lg shadow-lg w-[300px] h-[225px] top-10 lg:w-full lg:h-full lg:max-w-[82vw] lg:max-h-[100vh]   "
        style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', bzackgroundPosition: 'center' }}
      >
         <div className="absolute inset-0 bg-black xl:bg-opacity-80 bg-opacity-60 rounded-lg"></div>
         <Header></Header>
         <h1 className='relative text-white text-right font-aoboshi w-44 ml-24   lg:ml-[670px] mt-6 xl:text-5xl lg:mt-72 lg:mb-96 lg:ml-[300px] xl:ml-[1000px] lg:w-[460px] lg:h-44'>OPTI-COLOR: O FUTURO PERTENCE ÀQUELES QUE ABRAÇAM A MUDANÇA.</h1>
    </div>
       

    <div className="w-[300px] h-[400px] bg-bg-container mt-20 rounded-lg lg:w-full lg:h-full lg:max-w-[82vw] lg:h-[33vh]">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full p-6">
        
        <img src={lampada} alt="Lâmpada" className="w-36 lg:w-48 mb-6 lg:mb-0 lg:mr-48 lg:h-96 lg:w-72 " />

        <h1 className="text-white text-right text-base lg:text-3xl lg:w-[950px] font-inria">
          O Opti-Color visa ajudar pessoas com deficiência visual a se vizualizarem cores corretamente, promovendo sua inclusão e independência. O projeto busca melhorar a qualidade de vida dessas pessoas, permitindo que explorem o mundo ao seu redor com maior liberdade e segurança.
        </h1>
      </div>
    </div>

          <div className="w-[300px] h-[400px] bg-bg-container mt-20 rounded-lg lg:w-full lg:h-full lg:max-w-[82vw] lg:h-[33vh] ">
            <div className="flex flex-col lg:flex-row items-center justify-center h-full p-6">
            
              <h1 className='text-white  text-base text-left p-6 mt-20 lg:mt-0  lg:text-3xl lg:w-[950px] font-inria'>
              O Opti-Color se destaca pela integração de um sensor para fornecer informações sobre a cor apontada, algo único entre dispositivos de auxílio. Sua adaptabilidade a diferentes ambientes, tanto residenciais quanto comerciais, facilitando para os usuários.
              </h1>
              <img src={cerebro} alt="cerebro" className="w-36 lg:w-48 mb-16 lg:mb-0 lg:mr-6 mt-0 lg:ml-48 lg:h-96 lg:w-60" />
            </div>
          </div>

          <div className="w-[300px] h-[430px]  bg-bg-container mt-20 rounded-lg lg:w-full lg:h-full lg:max-w-[82vw] lg:h-[33vh] mb-20">
            <div className="flex flex-col lg:flex-row items-center justify-center h-full p-6">
              <img src={maos} alt="Lâmpada" className="w-36 lg:w-48 lg:mb-0  lg:h-96 lg:w-72 lg:mr-48" />
              <h1 className='text-white text-center text-base text-right p-6 lg:text-3xl lg:w-[950px] font-inria  '>
                O Opti-Color é um projeto inovador que ajuda pessoas com dificuldades visuais como daltonismo a identificar cores certas. Ele é um sensor de cor que transmite essas informações a um controle portátil. O controle fornece orientações em tempo real por meio de áudio.
              </h1>
            </div>
          </div>



  </div>
  )
}
