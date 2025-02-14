import React from 'react'

const Footer = () => {
    return (
        <div class="flex flex-col w-full h-fit bg-[#00124E] text-[#e5e7eb] px-28 py-12">
            <div class="flex flex-row">
                <div class="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
                    <div class="flex items-center w-full gap-4">

                        <img alt="Vista previa del logotipo" src="https://tailwind-generator.b-cdn.net/favicon.png" width="100"></img>

                    </div>

                </div>
                <div class="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
                    <div class="grid grid-cols-1 gap-9">

                        <div class="flex flex-col gap-2">
                            <div class="font-bold uppercase text-[#9ca3af] pb-3"><font><font >Legal</font></font>
                            </div> <a href="#xxx" class="hover:underline"><font ><font >Imprimir</font></font></a>  <a href="#xxx" class="hover:underline"><font ><font >política de privacidad</font></font></a>  <a href="#xxx" class="hover:underline"><font ><font >Condiciones de uso</font></font></a>

                        </div>

                    </div>

                    <div class="flex flex-col gap-2">
                        <div class="font-bold uppercase text-[#9ca3af] pb-3"><font><font >Hoja informativa</font></font>
                        </div>
                        <p class="text-[#e5e7eb] mb-2"><font><font >Suscríbete a nuestro boletín.</font></font>
                        </p>
                        <form class="flex items-center">
                            <input type="email" name="email" placeholder="Ingresa tu correo electrónico" class="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4 focus:outline-hidden focus:ring-purple-600 focus:border-transparent" autocomplete="off" required=""></input>
                                <button type="submit" class="bg-[#7e22ce] text-[#ffffff] font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300"><font><font >Suscribir</font></font>
                                </button>
                        </form>
                    </div>

                </div>
            </div>

            <div class="w-full border-t border-gray-500 my-8"></div>
            <div class="text-center"><font><font >© 2025 Your Companys - Todos los derechos reservados.</font></font>
            </div>

        </div>
    )
}

export default Footer