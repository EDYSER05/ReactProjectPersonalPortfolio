import { useState } from 'react';

export default function NewsLetter() {

  const [email, setEmail] = useState("");
  const [showNews, setShowNews] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email suscrito:", email);
    setEmail("");
    setShowNews(true);
    alert("Gracias por suscribirte!");
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8" id="newsLetter">
      <div className="max-w-md mx-auto text-center bg-white p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Suscríbete a nuestra Newsletter
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Recibe noticias, actualizaciones y contenido exclusivo directamente en tu correo.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
          >
            Suscribirse
          </button>
        </form>
      </div>

      {showNews && (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Bienvenido a mi Newsletter</h3>

          <div className="border-b pb-4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Avance de la inteligencia artificial</h4>
            <p className="text-gray-600">Las nuevas tecnologias dejan sin trabajo a muchas personas...</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Integración de base de datos</h4>
            <p className="text-gray-600">Nuestro nuevo software ya cuenta con base de datos y está casi listo para salir al público...</p>
          </div>
        </div>
      )}

    </div>
  );
}
