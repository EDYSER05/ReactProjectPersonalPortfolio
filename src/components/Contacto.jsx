import { useState, useEffect } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [numeroComentarios, setNumeroComentarios] = useState(1);

  useEffect(() => {
    const comments = localStorage.getItem("mensajes-contacto");
    if (comments) {
      setComentarios(JSON.parse(comments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mensajes-contacto", JSON.stringify(comentarios));
  }, [comentarios]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoComentario = {
      id: numeroComentarios,
      nombre,
      email,
      mensaje,
      fecha: new Date().toLocaleString()
    };
    setNumeroComentarios(numeroComentarios + 1);
    //Cambia Comentarios y salta el use effect
    setComentarios(comentarios => [...comentarios, nuevoComentario]);

    alert(`Hola ${nombre}, el formulario ha sido enviado correctamente!! Recibirá una respuesta lo antes posible a su correo ${email}. Muchas Gracias!`);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <section className="w-full py-10 flex flex-col items-center" id='contacto'>
      <br /><br />
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contacto</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-md w-full space-y-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <p className="text-gray-700">
          <span className="font-semibold">¿Estas interesado en contactar conmigo?</span> Rellena el siguiente formulario
        </p>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" required />
          <input type="email" placeholder="Tu email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" required />
          <textarea placeholder="Tu mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" rows={4} required ></textarea>
          <button type="submit" className="bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition">Enviar</button>
        </form>
      </div>
    </section>
  );
}
