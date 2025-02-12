import React from 'react'
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa6'

const NavBar = () => {
    return (
        <nav className='w-full'>
            {/*Barra superior */}
            <div className='bg-[#00124E] text-white text-sm py-2 px-6
        flex justify-between items-center'>
                { /*Redes sociales */}
                <div className='flex gap-4'>
                    <a href="#" className='hover:text-gray-300'>
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <FaFacebook size={20} />
                    </a>
                </div>
                {/*Telefono y boton de contacto */}
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <FaPhone size={16}/>
                        <span>5510265574</span>
                    </div>
                    <a href="#"
                    className='bg-yellow-400 text-black px-4 py-2 flex items-center
                    gap-2 rounded-md hover:bg-yellow-500'>
                        <FaEnvelope size={16}/>
                        Contactanos
                    </a>
                </div>
            </div>

            {/*MENU PRINCIPAL */}
            <div className='bg-[#003DA5] text-white py-4 px-6 flex justify-between items-center'>
                {/*logo*/}
                <div className='text-xl font-bold'>
                    <span className='text-white'>Splash</span>
                    <p className='text-xs text-gray-200'>Natación confort</p>
                </div>

                {/*Menú de navegación */}
                <ul className='flex gap-6 text-sm font-semibold'>
                    <li className='hover:text-gray-300 cursor-pointer'>Inicio</li>
                    <li className='relative group'>
                        <span className='hover:text-gray-300 cursor-pointer'>
                            Programas
                        </span>
                        {/*Dropdown */}
                        <ul className='absolute hidden group-hover:block bg-[#003DA5]
                        text-white mt-2 w-40 shadow-lg'>
                            <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>Clases normales</li>
                            <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>Clases personalizadas</li>
                            <li className='px-4 py-2 hover:bg-blue-700 cursor-pointer'>Clases matroclases</li>
                        </ul>
                    </li>
                    <li className='hover:text-gray-300 cursor-pointer'>Precios</li>
                    <li className='hover:text-gray-300 cursor-pointer'>Galeria</li>
                    <li className='hover:text-gray-300 cursor-pointer'>Eventos</li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar