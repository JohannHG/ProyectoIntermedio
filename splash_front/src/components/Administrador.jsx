import React, { useState, useEffect } from 'react';

const Administrador = () => {
    // Estado para guardar los contactos obtenidos del backend
    const [contactos, setContactos] = useState([]);

    // useEffect para hacer la petición GET al montar el componente
    useEffect(() => {
        fetch('http://localhost:4000/api/contacto')
            .then((response) => response.json())
            .then((data) => {
                // Guardamos la lista de contactos en el estado
                setContactos(data);
            })
            .catch((error) => {
                console.error('Error al obtener los contactos:', error);
            });
    }, []);

    return (
        <>
            <br />
            <div className="relative overflow-hidden shadow-md rounded-lg">
                <table className="table-fixed w-full text-left">
                    <thead className="uppercase bg-[#4c7ad4] text-white">
                        <tr>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4">
                                Nombre
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4">
                                Edad
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4">
                                Nivel a interes
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4">
                                Celular
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4">
                                Correo
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4">
                                Status
                            </td>
                        </tr>
                    </thead>
                    <tbody className="bg-[#dff3f3] text-black">
                        {contactos.map((contacto) => (
                            <tr key={contacto.id}>
                                <td className="py-2 border border-gray-200 text-center p-4">
                                    {contacto.nombre}
                                </td>
                                <td className="py-2 border border-gray-200 text-center p-4">
                                    {contacto.edad}
                                </td>
                                <td className="py-2 border border-gray-200 text-center p-4">
                                    {contacto.nivel}
                                </td>
                                <td className="py-2 border border-gray-200 text-center p-4">
                                    {contacto.celular}
                                </td>
                                <td className="py-2 border border-gray-200 text-center p-4">
                                    {contacto.correo}
                                </td>
                                <td className="py-2 border border-gray-200 text-center p-4">
                                    {contacto.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />
        </>
    );
};

export default Administrador;
