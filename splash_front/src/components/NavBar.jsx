import React, { useState } from 'react'
import { FaSquareWhatsapp, FaFacebook, FaPhone, FaEnvelope, FaCircleXmark, FaBars } from 'react-icons/fa6'
import splashLogo from "../img/splash.jpg";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full">
            {/* Barra superior */}
            <div className="bg-[#00124E] text-white text-sm py-2 px-6 flex justify-between items-center">
                {/* Redes sociales y botón de contacto (ahora alineados a la derecha en móviles) */}
                <div className="hidden md:flex gap-4">

                    <a href="#" className="hover:text-gray-300">
                        <FaFacebook size={35} />
                    </a>
                </div>

                <div className="flex items-center gap-4">

                    <img className="rounded-md" alt="Vista previa del logotipo" src={splashLogo} width="59"></img>

                    <a
                        href="https://wa.me/5215562170243?text=Hola%20quiero%20información%20acerca%20de%20las%20clases%20de%20natación."
                        className="bg-green-500 text-black px-4 py-2 flex items-center gap-2 rounded-md hover:bg-green-400"
                    >
                        <FaSquareWhatsapp size={28} />
                        Contáctanos
                    </a>
                </div>
            </div>

            {/* Menú principal */}
            <div className="bg-[#003DA5] text-white py-4 px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <span className="text-white">Splash</span>
                    <p className="text-sm text-gray-200">Natación confort</p>
                </div>

                {/* Icono de menú hamburguesa (solo en móviles) */}
                <div className="md:hidden flex items-center gap-4">

                    <a href="#" className="hover:text-gray-300">
                        <FaFacebook size={35} />
                    </a>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaCircleXmark size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Menú de navegación (oculto en móviles) */}
                <ul className="hidden md:flex gap-6 text-lg font-semibold">
                    <li className="hover:text-gray-300 cursor-pointer">
                        <Link to="/">Inicio</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer">
                        <Link to="/horarios-precios">Horarios y Precios</Link></li>
                    <li className="relative group">
                        <span className="hover:text-gray-300 cursor-pointer">
                            <Link to="/niveles">Niveles</Link></span>
                        
                    </li>

                    <li className="hover:text-gray-300 cursor-pointer">
                        <Link to="/galeria">Galería</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer">
                        <Link to="/eventos"> Eventos</Link></li>
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
                    <li className="hover:text-gray-300 cursor-pointer"><Link to="/">Inicio</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link to="/horarios-precios">Horarios y Precios</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link to="/niveles">Niveles</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link to="/galeria">Galería</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link to="/eventos"> Eventos</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar