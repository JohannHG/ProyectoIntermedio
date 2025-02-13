import React, { useState } from 'react'
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaCircleXmark, FaBars } from 'react-icons/fa6'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full">
            {/* Barra superior */}
            <div className="bg-[#00124E] text-white text-sm py-2 px-6 flex justify-between items-center">
                {/* Redes sociales y botón de contacto (ahora alineados a la derecha en móviles) */}
                <div className="hidden md:flex gap-4">
                    <a href="#" className="hover:text-gray-300">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FaFacebook size={20} />
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2">
                        <FaPhone size={16} />
                        <span>5510265574</span>
                    </div>
                    <a
                        href="#"
                        className="bg-yellow-400 text-black px-4 py-2 flex items-center gap-2 rounded-md hover:bg-yellow-500"
                    >
                        <FaEnvelope size={16} />
                        Contáctanos
                    </a>
                </div>
            </div>

            {/* Menú principal */}
            <div className="bg-[#003DA5] text-white py-4 px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <span className="text-white">Splash</span>
                    <p className="text-xs text-gray-200">Natación confort</p>
                </div>

                {/* Icono de menú hamburguesa (solo en móviles) */}
                <div className="md:hidden flex items-center gap-4">
                    <a href="#" className="hover:text-gray-300">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FaFacebook size={20} />
                    </a>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaCircleXmark size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Menú de navegación (oculto en móviles) */}
                <ul className="hidden md:flex gap-6 text-sm font-semibold">
                    <li className="hover:text-gray-300 cursor-pointer">Inicio</li>
                    <li className="relative group">
                        <span className="hover:text-gray-300 cursor-pointer">Programas</span>
                        {/* Dropdown */}
                        <ul className="absolute hidden group-hover:block bg-[#003DA5] text-white mt-2 w-40 shadow-lg">
                            <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Clases normales</li>
                            <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Clases personalizadas</li>
                            <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Clases matroclases</li>
                        </ul>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer">Precios</li>
                    <li className="hover:text-gray-300 cursor-pointer">Galería</li>
                    <li className="hover:text-gray-300 cursor-pointer">Eventos</li>
                </ul>
            </div>

            {/* Menú móvil (aparece con el estado `menuOpen`) */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-[#003DA5] text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 md:hidden`}
            >
                {/* Botón de cerrar menú */}
                <div className="p-4 flex justify-end">
                    <button onClick={() => setMenuOpen(false)}>
                        <FaCircleXmark size={24} />
                    </button>
                </div>

                {/* Enlaces del menú móvil */}
                <ul className="flex flex-col gap-6 text-lg p-6">
                    <li className="hover:text-gray-300 cursor-pointer">Inicio</li>
                    <li className="hover:text-gray-300 cursor-pointer">Programas</li>
                    <li className="hover:text-gray-300 cursor-pointer">Precios</li>
                    <li className="hover:text-gray-300 cursor-pointer">Galería</li>
                    <li className="hover:text-gray-300 cursor-pointer">Eventos</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar