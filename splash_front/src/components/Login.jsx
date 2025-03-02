import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import splashLogo from "../img/splash.jpg";

const Login = () => {
    // Estado para almacenar correo y contraseña
    const [formData, setFormData] = useState({
        correo: '',
        contrasena: ''
    });

    // Estado para errores
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Maneja el cambio de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            // Realiza una petición POST a tu endpoint de login
            const response = await fetch('http://localhost:4000/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Error en el login');
            } else {
                // Opcional: guardar el token o ID en localStorage
                // localStorage.setItem('adminToken', data.token);
                // Redirige al panel del administrador
                navigate('/administrador');
            }
        } catch (err) {
            console.error(err);
            setError('Error en el servidor, intenta más tarde.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-[#aec6ec] rounded-2xl shadow-xl">
                <div className="flex flex-row justify-center gap-3 pb-4">
                    <img className="rounded-md" alt="Vista previa del logotipo" src={splashLogo} width="159" />
                </div>
                <div className="text-sm font-light text-[#6B7280] pb-8 text-center">
                    Inicia sesión.
                </div>
                {error && (
                    <div className="text-red-500 mb-4 text-center">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="pb-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#111827]">
                            Correo
                        </label>
                        <div className="relative text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                                {/* Icono de correo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="M22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </span>
                            <input
                                type="email"
                                name="correo"
                                id="email"
                                value={formData.correo}
                                onChange={handleChange}
                                className="pl-12 mb-2 bg-gray-50 text-gray-600 border border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                placeholder="name@gmail.com"
                                autoComplete="off"
                                required
                            />
                        </div>
                    </div>
                    <div className="pb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#111827]">
                            Contraseña
                        </label>
                        <div className="relative text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                                {/* Icono de contraseña */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk">
                                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                    <path d="M12 8v8"></path>
                                    <path d="M8.5 14l7-4"></path>
                                    <path d="M8.5 10l7 4"></path>
                                </svg>
                            </span>
                            <input
                                type="password"
                                name="contrasena"
                                id="password"
                                value={formData.contrasena}
                                onChange={handleChange}
                                placeholder="••••••••••"
                                className="pl-12 mb-2 bg-gray-50 text-gray-600 border border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#6761e4] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 transition-colors hover:bg-blue-600"
                    >
                        Iniciar sesión
                    </button>
                    <div className="text-sm font-light text-[#6B7280] text-center">
                        ¿Olvidaste tu contraseña?{' '}
                        <Link to="/recuperar" className="font-medium text-[#4F46E5] hover:underline">
                            Recuperar contraseña
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
