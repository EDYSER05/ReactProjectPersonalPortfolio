import proyectosData from "../assets/data/proyectos.json";
import Proyecto1 from "../assets/img/Proyecto1.png";
import Proyecto2 from "../assets/img/Proyecto2.png";
import Proyecto3 from "../assets/img/Proyecto3.png";
import Proyecto4 from "../assets/img/Proyecto4.png";

const imagenes = {
  "Proyecto1": Proyecto1,
  "Proyecto2": Proyecto2,
  "Proyecto3": Proyecto3,
  "Proyecto4": Proyecto4,
};

export default function ProyectosRealizados() {
  return (
    <section className="w-full py-10 flex flex-col items-center" id="proyectosRealizados">
      <br /><br />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Proyectos Realizados
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {proyectosData.map((proyecto, index) => (
          <div key={index} className="bg-gray-75 rounded-xl shadow p-4 flex flex-col items-center w-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={imagenes[proyecto.imagen]} alt={proyecto.titulo} className="rounded-xl mb-4 max-w-full h-auto object-cover" style={{ maxHeight: '250px' }} />
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{proyecto.titulo}</h2>
            <p className="text-gray-600 text-sm text-center">{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
