import React from 'react'
import splashLogo from "../img/splash.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-[#00124E] text-[#e5e7eb] px-8 py-12">

            {/* 
        1) En lugar de "flex flex-row", usa "flex flex-col md:flex-row"
        para que en móvil sea columna (todo apilado) y en pantallas md+ sea fila.
      */}
            <div className="flex flex-col md:flex-row w-full">

                {/* 
          2) Primera columna (logo, etc.). 
             Dale ancho completo en móvil (w-full), 
             y 35% en md+ (md:w-[35%]).
        */}
                <div className="flex flex-row gap-2 justify-around w-full md:w-[35%]">
                    <div className="grid grid-cols-2 gap-9">
                        <div className="flex flex-col gap-2">
                            <div className="font-bold uppercase text-[#9ca3af] pb-3">
                                Información
                            </div>
                            <a className="hover:underline"><Link to="/">Inicio</Link></a>
                            <a className="hover:underline"><Link to="/horarios-precios">Horarios y Precios</Link></a>
                            <a className="hover:underline"><Link to="/niveles">Niveles</Link></a>
                            <a className="hover:underline"><Link to="/galeria">Galería</Link></a>
                            <a className="hover:underline"><Link to="/eventos"> Eventos</Link></a>
                        </div>
                    </div>
                    <div className="flex items-end w-full gap-4">
                        <img
                            className="rounded-md"
                            alt="Vista previa del logotipo"
                            src={splashLogo}
                            width="300"
                        />
                    </div>
                </div>

                {/* 
          3) Segunda columna (links + formulario). 
             Igual, w-full en móvil, y md:w-[65%] en pantallas grandes.
        */}
                <div className="flex flex-col w-full md:w-[65%] justify-end gap-16 text-nowrap mt-8 md:mt-0">
                    {/* Sección de información / links */}


                    {/* Formulario */}
                    <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#003DA5] rounded-2xl shadow-xl">
                        <div className="flex flex-row gap-3 pb-4">
                            <h1 className="text-3xl font-bold text-white my-auto">Contáctanos</h1>
                        </div>

                        <form className="flex flex-col">
                            <div className="pb-2">
                                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-[#ffffff]">
                                    Nombre
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border
                               focus:border-transparent border-gray-300 sm:text-sm
                               rounded-lg ring-3 ring-transparent focus:ring-1
                               focus:outline-hidden focus:ring-gray-400 block
                               w-full p-2.5 py-3 px-4"
                                        placeholder="Johan Hernández"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="edad" className="block mb-2 text-sm font-medium text-[#ffffff]">
                                    Edad
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="number"
                                        name="edad"
                                        id="edad"
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border
                               focus:border-transparent border-gray-300 sm:text-sm
                               rounded-lg ring-3 ring-transparent focus:ring-1
                               focus:outline-hidden focus:ring-gray-400 block
                               w-full p-2.5 py-3 px-4"
                                        placeholder="25"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="nivel" className="block mb-2 text-sm font-medium text-[#ffffff]">
                                    Nivel a interés
                                </label>
                                <div className="relative text-gray-400">
                                    <select
                                        name="nivel"
                                        id="nivel"
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border
                               focus:border-transparent border-gray-300 sm:text-sm
                               rounded-lg ring-3 ring-transparent focus:ring-1
                               focus:outline-hidden focus:ring-gray-400 block
                               w-full p-2.5 py-3 px-4"
                                    >
                                        <option value="Principiante A">Principiante A</option>
                                        <option value="Principiante B">Principiante B</option>
                                        <option value="Intermedio A">Intermedio A</option>
                                        <option value="Intermedio B">Intermedio B</option>
                                        <option value="Avanzado">Avanzado</option>
                                        <option value="Matroclase">Matroclase</option>
                                        <option value="Personalizada">Personalizada</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="celular" className="block mb-2 text-sm font-medium text-[#ffffff]">
                                    Celular
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="number"
                                        name="celular"
                                        id="celular"
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border
                               focus:border-transparent border-gray-300 sm:text-sm
                               rounded-lg ring-3 ring-transparent focus:ring-1
                               focus:outline-hidden focus:ring-gray-400 block
                               w-full p-2.5 py-3 px-4"
                                        placeholder="5510265574"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-[#ffffff]">
                                    Correo
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="email"
                                        name="correo"
                                        id="correo"
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border
                               focus:border-transparent border-gray-300 sm:text-sm
                               rounded-lg ring-3 ring-transparent focus:ring-1
                               focus:outline-hidden focus:ring-gray-400 block
                               w-full p-2.5 py-3 px-4"
                                        placeholder="jonn101544@gmail.com"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-black bg-yellow-400
                           focus:ring-4 focus:outline-hidden focus:ring-primary-300
                           font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-gray-500 my-8"></div>
            <div className="text-center">
                © 2025 Splash - Todos los derechos reservados.
            </div>
        </div>
    )
}

export default Footer
