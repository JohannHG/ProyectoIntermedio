import React from 'react'
import video from '../img/fondo.mp4';

const Eventos = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        />

        {/* Capa oscura */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#003DA5] opacity-50"></div>

        {/* Contenido principal */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <h1 className="text-white text-4xl font-bold">Eventos</h1>
        </div>
      </div>


    </>


  )
}


export default Eventos