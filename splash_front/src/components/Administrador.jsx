import React from 'react'

const Administrador = () => {
    return (
        <>
            <br />

            <div className="relative overflow-hidden shadow-md rounded-lg">
                <table className="table-fixed w-full text-left">
                    <thead className="uppercase bg-[#4c7ad4] text-white">
                        <tr>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4" contentEditable>
                                Nombre
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4" contentEditable>
                                Edad
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4" contentEditable>
                                Nivel a interes
                            </td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4" contentEditable>
                                Celular</td>

                            <td className="py-2 border border-gray-200 text-center font-bold p-4" contentEditable >
                                Correo</td>
                            <td className="py-2 border border-gray-200 text-center font-bold p-4" contentEditable >
                                Se puso en contacto ???</td>
                        </tr>
                    </thead>
                    <tbody className="bg-[#dff3f3] text-black">
                        <tr>
                            <td className="py-2 border border-gray-200 text-center p-4" contentEditable>
                                johan
                            </td>
                            <td className="py-2 border border-gray-200 text-center p-4" contentEditable>
                                25
                            </td>
                            <td className="py-2 border border-gray-200 text-center p-4" contentEditable>
                                avanzados
                            </td>
                            <td className="py-2 border border-gray-200 text-center p-4" contentEditable>
                                5510265574
                            </td>
                            <td className="py-2 border border-gray-200 text-center p-4" contentEditable>
                                jonn101544@gmail.com
                            </td>
                            <td className="py-2 border border-gray-200 text-center p-4" contentEditable>
                                NO
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <br />
        </>
    )
}

export default Administrador
