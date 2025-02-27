import React from 'react'
import video from '../img/fondo.mp4';

function HorariosPrecios() {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        />

        {/* Capa oscura */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#003DA5] opacity-50"></div>

        {/* Contenido principal */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <h1 className="text-white text-4xl font-bold">Horarios y precios</h1>
        </div>
      </div>


      {/* Horarios de clases (Lunes a Viernes) */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Horarios de clases
        </h2>
        <p className="text-lg text-center text-gray-800 mb-4">
          Lunes a Viernes
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 p-2 text-left">HORARIOS</th>
                <th className="border border-gray-300 p-2 text-left">GRUPOS</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['06:00 - 06:50', 'Adultos 15 años en adelante'],
                ['07:00 - 07:50', 'Adultos 15 años en adelante'],
                ['08:00 - 08:50', 'Adultos 15 años en adelante'],
                ['09:00 - 09:50', 'Adultos 15 años en adelante'],
                ['10:00 - 10:50', 'Adultos 15 años en adelante'],
                ['11:00 - 11:50', 'Adultos 15 años en adelante (Promoción cupo limitado)'],
                ['12:00 - 12:50', 'Adultos 15 años en adelante (Promoción cupo limitado)'],
                ['13:00 - 13:50', 'Capacidades diferentes y Adultos 15 años (Promoción cupo limitado)'],
                ['14:00 - 14:50', 'Capacidades diferentes y Adultos 15 años (Promoción cupo limitado)'],
                ['15:00 - 15:50', '5 años 1/2 cumplidos a 15 años (Grupal y Matroclase: 1 a 5 1/2 años)'],
                ['16:00 - 16:50', '5 años 1/2 cumplidos a 15 años (Grupal y Matroclase: 1 a 5 1/2 años)'],
                ['17:00 - 17:50', '5 años 1/2 cumplidos a 15 años (Grupal y Matroclase: 1 a 5 1/2 años)'],
                ['18:00 - 18:50', '5 años 1/2 cumplidos a 15 años (Grupal)'],
                ['19:00 - 19:50', 'Adultos 15 años en adelante'],
                ['20:00 - 20:50', 'Adultos 15 años en adelante'],
                ['21:00 - 21:50', 'Adultos 15 años en adelante'],
              ].map(([hora, grupo], index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  <td className="border border-gray-300 p-2">{hora}</td>
                  <td className="border border-gray-300 p-2">{grupo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Horarios de clases (Sábados y Domingos) */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Horarios de clases
        </h2>
        <p className="text-lg text-center text-gray-800 mb-4">Sábados y Domingos</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 p-2 text-left">HORARIOS</th>
                <th className="border border-gray-300 p-2 text-left">GRUPOS</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['07:00 - 07:50', 'Adultos 15 años en adelante'],
                ['08:00 - 08:50', 'Adultos 15 años en adelante'],
                ['09:00 - 09:50', 'Adultos 15 años en adelante'],
                ['10:00 - 10:50', '5 años 1/2 cumplidos a 15 años (Grupal y Matroclase: 1 a 5 1/2 años)'],
                ['11:00 - 11:50', '5 años 1/2 cumplidos a 15 años (Grupal y Matroclase: 1 a 5 1/2 años)'],
                ['12:00 - 12:50', '5 años 1/2 cumplidos a 15 años (Grupal y Matroclase: 1 a 5 1/2 años)'],
                ['13:00 - 13:50', '5 años 1/2 cumplidos a 15 años (Grupal y Matroclase: 1 a 5 1/2 años)'],
              ].map(([hora, grupo], index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  <td className="border border-gray-300 p-2">{hora}</td>
                  <td className="border border-gray-300 p-2">{grupo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-800">
            <li>Temperatura de alberca de 29 a 30 grados</li>
            <li>Temperatura de regaderas de 36 grados</li>
            <li><strong>No hay reposición de clases</strong></li>
          </ul>
        </div>
      </section>

      {/* Lista de precios 2025 */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Lista de precios 2025
        </h2>
        <p className="text-lg text-center text-gray-800 mb-4">
          Vigente del 01 de enero al 31 de diciembre 2025
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 p-2 text-left">CLASES</th>
                <th className="border border-gray-300 p-2 text-left">MENSUAL</th>
                <th className="border border-gray-300 p-2 text-left">BIMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">TRIMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">SEMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">ANUAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 Clase por semana (4C X 1M)', '$622.00', '$1,208.00', '$1,791.00', '$3,508.00', '$6,735.00'],
                ['2 Clases por semana (8C x 1M)', '$1,080.00', '$2,098.00', '$3,113.00', '$6,096.00', '$11,074.00'],
                ['3 Clases por semana (12C x 1M)', '$1,494.00', '$2,898.00', '$4,307.00', '$8,430.00', '$16,185.00'],
                ['4 Clases por semana (16C x 1M)', '$1,810.00', '$3,509.00', '$5,210.00', '$10,201.00', '$19,587.00'],
                ['5 Clases por semana (20C x 1M)', '$2,073.00', '$4,020.00', '$5,972.00', '$11,697.00', '$22,457.00'],
                ['6 Clases por semana (24C x 1M)', '$2,308.00', '$4,476.00', '$6,647.00', '$13,016.00', '$24,989.00'],
              ].map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  {row.map((col, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Lista de precios 2025 (horario promoción) */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Lista de precios 2025 (horario promoción 11:00 a 14:00 de Lunes a Viernes)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 p-2 text-left">CLASES</th>
                <th className="border border-gray-300 p-2 text-left">MENSUAL</th>
                <th className="border border-gray-300 p-2 text-left">BIMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">TRIMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">SEMESTRAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 Clase por semana (4C X 1M)', '$468.00', '$906.00', '$1,344.00', '$2,631.00'],
                ['2 Clases por semana (8C x 1M)', '$622.00', '$1,208.00', '$1,791.00', '$3,508.00'],
                ['3 Clases por semana (12C x 1M)', '$622.00', '$1,208.00', '$1,791.00', '$3,508.00'],
                ['4 Clases por semana (16C x 1M)', '$622.00', '$1,208.00', '$1,791.00', '$3,508.00'],
                ['5 Clases por semana (20C x 1M)', '$622.00', '$1,208.00', '$1,791.00', '$3,508.00'],
                ['6 Clases por semana (24C x 1M)', '$622.00', '$1,208.00', '$1,791.00', '$3,508.00'],
              ].map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  {row.map((col, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Lista de precios 2025 (matroclase) */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Lista de precios 2025 (matroclase)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 p-2 text-left">CLASES</th>
                <th className="border border-gray-300 p-2 text-left">MENSUAL</th>
                <th className="border border-gray-300 p-2 text-left">BIMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">TRIMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">SEMESTRAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 Clase por semana (4C X 1M)', '$908.00', '$1,761.00', '$2,617.00', '$5,124.00'],
                ['2 Clases por semana (8C x 1M)', '$1,601.00', '$3,107.00', '$4,611.00', '$9,026.00'],
                ['3 Clases por semana (12C x 1M)', '$2,206.00', '$4,282.00', '$6,353.00', '$12,440.00'],
                ['4 Clases por semana (16C x 1M)', '$2,685.00', '$5,208.00', '$7,730.00', '$15,138.00'],
                ['5 Clases por semana (20C x 1M)', '$3,103.00', '$6,020.00', '$8,936.00', '$17,501.00'],
              ].map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  {row.map((col, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Lista de precios 2025 (personalizada) */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Lista de precios 2025 (personalizada)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 p-2 text-left">CLASES</th>
                <th className="border border-gray-300 p-2 text-left">MENSUAL</th>
                <th className="border border-gray-300 p-2 text-left">BIMESTRAL</th>
                <th className="border border-gray-300 p-2 text-left">TRIMESTRAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 Clase por semana (4C X 1M)', '$1,122.00', '$2,131.00', '$2,866.00'],
                ['2 Clases por semana (8C x 1M)', '$2,000.00', '$3,798.00', '$5,133.00'],
                ['3 Clases por semana (12C x 1M)', '$2,809.00', '$5,339.00', '$7,209.00'],
                ['4 Clases por semana (16C x 1M)', '$3,414.00', '$6,484.00', '$8,761.00'],
                ['5 Clases por semana (20C x 1M)', '$3,947.00', '$7,500.00', '$10,156.00'],
              ].map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  {row.map((col, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Material y contacto */}
      <section className="py-12 px-4 bg-gray-100">
        <p className="text-xl text-center text-gray-800 font-semibold mb-4">
          Los días elegidos <strong>no se podrán</strong> cambiar hasta tu siguiente mensualidad
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg mb-6">
            <thead>
              <tr className="bg-gray-300">
                <th className="border border-gray-300 p-2 text-left">Concepto</th>
                <th className="border border-gray-300 p-2 text-left">Clave</th>
                <th className="border border-gray-300 p-2 text-left">Monto</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Inscripción anual por persona', 'INS', '$508.00'],
                ['Credencial de acceso', 'CRD', '$132.00'],
                ['Reinscripción anual', 'REINS', '$338.00'],
                ['Renta de locker', 'LOCKER', '$282.00'],
                ['Reposición credencial', 'REPCRE', '$65.00'],
                ['Clase visita NO alumno (50 min)', '1C x 1D', '$365.00'],
                ['Clase visita inscrito (50 min)', '1C x 1D', '$190.00'],
              ].map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  {row.map((col, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-lg text-gray-800">
            <strong>Material necesario para tomar clases de natación:</strong> Traje de baño de licra de color
            negro o azul marino (hombres tipo short o calzoncillo y mujeres traje completo, no bikini), gorra de
            licra o silicón (según el nivel que indique el profesor), googles, sandalias y toalla.
          </p>
        </div>
      </section>


    </>
  )
}

export default HorariosPrecios