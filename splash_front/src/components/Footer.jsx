import React, { useState } from 'react';
import splashLogo from "../img/splash.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        nivel: 'Principiante A',
        celular: '',
        correo: ''
    });

    // Estado para mostrar mensajes (éxito o error)
    const [message, setMessage] = useState('');

    // Manejador para actualizar el estado cuando el usuario cambia algún input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Manejador para el submit del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Realiza la petición POST a tu backend
            const response = await fetch('http://localhost:4000/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            setMessage(data.message || 'Datos enviados correctamente.');
            // Opcional: limpiar formulario si todo fue bien
            setFormData({
                nombre: '',
                edad: '',
                nivel: 'Principiante A',
                celular: '',
                correo: ''
            });
        } catch (error) {
            console.error(error);
            setMessage('Error en el envío, intenta de nuevo.');
        }
    };

    return (
        <div className="flex flex-col w-full h-fit bg-[#00124E] text-[#e5e7eb] px-8 py-12">
            {/* Sección de información y logo */}
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-row gap-2 justify-around w-full md:w-[35%]">
                    <div className="grid grid-cols-2 gap-9">
                        <div className="flex flex-col gap-2">
                            <div className="font-bold uppercase text-[#9ca3af] pb-3">
                                Información
                            </div>
                            <a className="hover:underline">
                                <Link to="/">Inicio</Link>
                            </a>
                            <a className="hover:underline">
                                <Link to="/horarios-precios">Horarios y Precios</Link>
                            </a>
                            <a className="hover:underline">
                                <Link to="/niveles">Niveles</Link>
                            </a>
                            <a className="hover:underline">
                                <Link to="/galeria">Galería</Link>
                            </a>
                            <a className="hover:underline">
                                <Link to="/eventos">Eventos</Link>
                            </a>
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

                {/* Formulario de contacto */}
                <div className="flex flex-col w-full md:w-[65%] justify-end gap-16 text-nowrap mt-8 md:mt-0">
                    <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#003DA5] rounded-2xl shadow-xl">
                        <div className="flex flex-row gap-3 pb-4">
                            <h1 className="text-3xl font-bold text-white my-auto">Contáctanos</h1>
                        </div>
                        {/* Manejamos el submit y los cambios en el formulario */}
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="pb-2">
                                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-white">
                                    Nombre
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                        placeholder="Johan Hernández"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="edad" className="block mb-2 text-sm font-medium text-white">
                                    Edad
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="number"
                                        name="edad"
                                        id="edad"
                                        value={formData.edad}
                                        onChange={handleChange}
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                        placeholder="25"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="nivel" className="block mb-2 text-sm font-medium text-white">
                                    Nivel a interés
                                </label>
                                <div className="relative text-gray-400">
                                    <select
                                        name="nivel"
                                        id="nivel"
                                        value={formData.nivel}
                                        onChange={handleChange}
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                    >
                                        <option value="PrincipianteA">Principiante A</option>
                                        <option value="PrincipianteB">Principiante B</option>
                                        <option value="IntermedioA">Intermedio A</option>
                                        <option value="IntermedioB">Intermedio B</option>
                                        <option value="Avanzado">Avanzado</option>
                                        <option value="Matroclase">Matroclase</option>
                                        <option value="Personalizada">Personalizada</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="celular" className="block mb-2 text-sm font-medium text-white">
                                    Celular
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="number"
                                        name="celular"
                                        id="celular"
                                        value={formData.celular}
                                        onChange={handleChange}
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                        placeholder="5510265574"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="pb-2">
                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-white">
                                    Correo
                                </label>
                                <div className="relative text-gray-400">
                                    <input
                                        type="email"
                                        name="correo"
                                        id="correo"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        className="pl-6 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                        placeholder="jonn101544@gmail.com"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-black bg-yellow-400 focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
                            >
                                Enviar
                            </button>
                        </form>
                        {/* Mostrar mensaje al usuario */}
                        {message && (
                            <p className="text-center text-white font-semibold mt-4">
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-gray-500 my-8"></div>
            <div className="text-center">
                © 2025 Splash - Todos los derechos reservados.
            </div>
        </div>
    );
};

export default Footer;
