import React from 'react';
import splash from "../img/splash.jpg";  // o splashLogo, pero que coincida el nombre
import { Link } from "react-router-dom";

function Recuperar() {
    return (
        <>
            <div className="flex flex-row items-center justify-center px-2 w-3/4 2xl:w-2/4 mx-auto mt-8 py-2 lg:py-12">
                <img
                    className="rounded-md"
                    alt="Vista previa del loguito"
                    src={splash} // <- variable que importaste
                    width="250"
                />

                <div className="ml-2">
                    <div className="text-4xl font-light pb-2">Enviaremos tu nueva contraseña a tu correo.</div>

                    <form className="flex flex-col p-2 gap-2">
                        {/* Etiqueta label bien cerrada */}
                        <label htmlFor="email" className="block text-sm font-medium">
                            Correo
                        </label>
                        <input
                            type="email"
                            className="border px-2 py-1 md:text-sm"
                            id="email"
                            name="email"
                        />



                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Enviar
                        </button>
                    </form>


                </div>
            </div>
        </>
    );
}

export default Recuperar;
