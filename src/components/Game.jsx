import React from 'react'
import Header from "./Header"

export default function Game() {
  return (
    <div  className='min-h-screen flex flex-col justify-center items-center bg-fundo-bg'>
        <div
        className="relative rounded-lg w-[300px] h-[700px] top-10 lg:w-[1300px] lg:h-[850px] xl:w-[1600px] bg-verdinho/40 xl:bg-gradient-to-r xl:from-azulEscuro/60 xl:via-verdinho/100 xl:to-azulzao/60 mb-24">
         <div className="absolute inset-0 bg-black xl:bg-opacity-80 bg-opacity-60 rounded-lg"></div>
         <Header></Header>
         <h1 className='text-white text-center relative mt-16 font-aoboshi text-xl lg:text-5xl'>GAME</h1>

         <div className="relative w-60 mt-20 pb-[50.25%]  lg:w-[760px] lg:h-[450px] lg:ml-[400px] lg:pb-[315px] ml-8">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/SFq_NKxChuY?si=eAsZr6_xm3WIs0wm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
    </div>
    </div>
  )
}
