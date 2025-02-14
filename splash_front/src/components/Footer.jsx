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

                    <div class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#003DA5] rounded-2xl shadow-xl">
                        <div class="flex flex-row gap-3 pb-4">
                            
                            <h1 class="text-3xl font-bold text-[#4B5563] text-[#4B5563] my-auto">Your Company</h1>

                        </div>
                        
                        <form class="flex flex-col">
                            <div class="pb-2">
                                <label for="email" class="block mb-2 text-sm font-medium text-[#ffffff]">Email</label>
                                <div class="relative text-gray-400"><span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span>
                                    <input type="email" name="email" id="email" class="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="name@company.com" autocomplete="off"></input>
                                </div>
                            </div>
                            <div class="pb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-[#ffffff]">Password</label>
                                <div class="relative text-gray-400"><span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 8v8"></path><path d="m8.5 14 7-4"></path><path d="m8.5 10 7 4"></path></svg></span>
                                    <input type="password" name="password" id="password" placeholder="••••••••••" class="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="new-password"></input>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-[#d8b1b1] bg-[#d9e536] focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Login</button>
                            <div class="text-sm font-light text-[#6B7280] ">Don't have an accout yet? <a href="#" class="font-medium text-[#d9e536] hover:underline">Sign Up</a>

                            </div>
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