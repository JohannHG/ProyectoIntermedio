import React from 'react';
import video from '../img/fondo.mp4';

const Inicio = () => {
  return (
    <>
      {/* Bloque de pantalla completa con video */}
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
        <div className="absolute top-0 left-0 w-full h-full bg-[#003DA5] opacity-50" />

        {/* Contenido sobre el video */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
          <h1 className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">
            Bienvenidos a Splash Club Acuático
          </h1>
          <p className="text-white text-xl font-medium drop-shadow-md">
            La mejor escuela de natación de la Campestre Aragón
          </p>
        </div>
      </div>





      {/* Ubicación */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Ubicación
        </h2>
        <p className="text-center text-lg text-gray-700">
          Camino del triunfo A #223, Col. Campestre Aragón. Delegación Gustavo A. Madero
        </p>
      </section>

      {/* Horarios de atención */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Horarios de atención
        </h2>
        <ul className="text-lg text-center text-gray-800 space-y-2">
          <li>
            <strong>Lunes a Viernes:</strong> 9:00 am - 9:00 pm
          </li>
          <li>
            <strong>Sábados y Domingos:</strong> 7:30 am - 1:30 pm
          </li>
        </ul>
      </section>


      {/* Formas de pago */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Formas de pago
        </h2>
        <p className="text-lg text-gray-800">
          <strong>Depósito:</strong> En cualquier sucursal de <strong>Banamex</strong> a la suc. 7018, cta.
          7443324 a nombre de: <strong>Natación Confort, S.A. DE C.V.</strong> <br />
          <strong>Transferencia:</strong> Clabe interbancaria <strong>002180701874433240</strong>. <br />
          Tarjeta de crédito y débito (no recibimos efectivo).
        </p>
      </section>

      {/* Requisitos */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Requisitos
        </h2>
        <ul className="list-disc pl-5 text-lg text-gray-800 mb-4">
          <li>Acta de nacimiento (copia) solo para menores de edad</li>
          <li>Identificación vigente (copia)</li>
          <li>Comprobante de domicilio (copia)</li>
          <li>
            Certificado médico original que contenga las leyendas{' '}
            <strong>cero micosis y apto para practicar la natación</strong>
          </li>
          <li>En caso de matroclase, copia de cartilla de vacunación</li>
        </ul>
        <p className="text-lg text-center text-gray-800 font-semibold">
          DESCUENTOS, pregunte por alguno, ¡¡¡seguro contamos con uno para ti!!!
        </p>
      </section>



      {/* Información de contacto */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 drop-shadow-sm">
          Contacto
        </h2>
        <p className="text-lg text-center text-gray-800 mb-4">
          Para más información, contáctanos:
        </p>
        <ul className="text-lg text-center text-gray-800 space-y-2">
          <li>
            WhatsApp: <a href="tel:+525562170243" className="text-blue-600 hover:underline">556217-0243</a>
          </li>
          <li>
            Correo: <a href="mailto:splash@ciencapool.com.mx" className="text-blue-600 hover:underline">splash@ciencapool.com.mx</a>
          </li>
          <li>
            Web:{' '}
            <a href="https://www.natacioncristalaragon.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              www.natacioncristalaragon.com
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Inicio;
