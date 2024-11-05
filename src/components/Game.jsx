import React from 'react'
import Header from "./Header"

export default function Game() {
  return (
    <div  className='min-h-screen flex flex-col justify-center items-center bg-fundo-bg'>
        <div
        className="relative rounded-lg w-[300px] h-[700px] top-10 lg:w-[1300px] lg:h-[850px] xl:w-[1600px] bg-verdinho/60 xl:bg-gradient-to-r xl:from-azulEscuro/60 xl:via-verdinho/100 xl:to-azulzao/100 mb-24">
         <div className="absolute inset-0 bg-black xl:bg-opacity-80 bg-opacity-60 rounded-lg"></div>
         <Header></Header>
         <h1 className='text-white text-center relative mt-16 font-aoboshi text-xl lg:text-5xl'>GAME</h1>

         <div className="relative w-[270px] pb-[56.25%] mt-20 lg:w-[560px] lg:pb-[315px] mx-auto">
         
         <iframe src="https://www.youtube.com/embed/SFq_NKxChuY?si=LAAsqIjR7qHanyvT" title="Game" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="absolute top-0 left-0 w-full h-full rounded-3xl"></iframe>
         
         
         
         </div>
    </div>
    </div>
  )
}
