import React from 'react'
import splashLogo from "../img/splash.jpg";


const Footer = () => {
    return (
        <div class="flex flex-col w-full h-fit bg-[#00124E] text-[#e5e7eb] px-28 py-12">
            <div class="flex flex-row">
                <div class="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
                    <div class="flex items-center w-full gap-4">

                        <img className="rounded-md" alt="Vista previa del logotipo" src={splashLogo} width="200"></img>

                    </div>

                </div>
                <div class="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
                    <div class="grid grid-cols-1 gap-9">

                        <div class="flex flex-col gap-2">
                            <div class="font-bold uppercase text-[#9ca3af] pb-3"><font><font >Información</font></font>
                            </div> <a href="#xxx" class="hover:underline"><font ><font >Inicio</font></font></a>
                            <a href="#xxx" class="hover:underline"><font ><font >Horarios y precios</font></font></a>
                            <a href="#xxx" class="hover:underline"><font ><font >Niveles</font></font></a>
                            <a href="#xxx" class="hover:underline"><font ><font >Galeria</font></font></a>
                            <a href="#xxx" class="hover:underline"><font ><font >Eventos</font></font></a>

                        </div>

                    </div>

                    <div class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#003DA5] rounded-2xl shadow-xl">
                        <div class="flex flex-row gap-3 pb-4">

                            <h1 class="text-3xl font-bold text-white my-auto">Contactanos</h1>

                        </div>

                        <form class="flex flex-col">
                            <div class="pb-2">
                                <label for="email" class="block mb-2 text-sm font-medium text-[#ffffff]">Nombre</label>
                                <div class="relative text-gray-400">
                                    <input type="text" name="email" id="email" class="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Johan Hernández" autocomplete="off"></input>
                                </div>
                            </div>
                            <div class="pb-2">
                                <label for="email" class="block mb-2 text-sm font-medium text-[#ffffff]">Edad</label>
                                <div class="relative text-gray-400">
                                    <input type="number" name="email" id="email" class="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="25" autocomplete="off"></input>
                                </div>
                            </div>
                            <div class="pb-2">
                                <label for="nivel" class="block mb-2 text-sm font-medium text-[#ffffff]">Nivel</label>
                                <div class="relative text-gray-400">
                                    <select
                                        name="nivel"
                                        id="nivel"
                                        class="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent
             border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent
             focus:ring-1 focus:outline-hidden focus:ring-gray-400 block
             w-full p-2.5 rounded-l-lg py-3 px-4"
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

                            <div class="pb-2">
                                <label for="email" class="block mb-2 text-sm font-medium text-[#ffffff]">Celular</label>
                                <div class="relative text-gray-400">
                                    <input type="number" name="email" id="email" class="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="5510265574" autocomplete="off"></input>
                                </div>
                            </div>
                            <div class="pb-2">
                                <label for="email" class="block mb-2 text-sm font-medium text-[#ffffff]">Correo</label>
                                <div class="relative text-gray-400">
                                    <input type="email" name="email" id="email" class="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="jonn101544@gmail.com" autocomplete="off"></input>
                                </div>
                            </div>

                            <button type="submit" class="w-full text-black bg-yellow-400 focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Login</button>

                        </form>

                    </div>

                </div >
            </div >

            <div class="w-full border-t border-gray-500 my-8"></div>
            <div class="text-center"><font><font >© 2025 Splash - Todos los derechos reservados.</font></font>
            </div>

        </div >
    )
}

export default Footer