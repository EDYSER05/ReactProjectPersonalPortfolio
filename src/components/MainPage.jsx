import Presentacion from "./Presentacion.jsx";
import ProyectosRealizados from "./ProyectosRealizados.jsx";
import Contacto from "./Contacto.jsx";
import NewsLetter from "./NewsLetter.jsx";

export default function MainPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
      <div className="w-full max-w-6xl space-y-6">
        <Presentacion />
        <ProyectosRealizados />
        <Contacto />
        <NewsLetter />
      </div>
    </main>
  );
}