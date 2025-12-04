export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            <a href="" className="text-xl font-bold text-blue-800 hover:text-blue-500">DigitalEvolution S.A</a>

            <div className="md:flex space-x-6">
              <a href="#" className="text-blue-800 hover:text-blue-500">Inicio</a>
              <a href="#proyectosRealizados" className="text-blue-800 hover:text-blue-500">Proyectos Realizados</a>
              <a href="#contacto" className="text-blue-800 hover:text-blue-500">Contacto</a>
              <a href="#newsLetter" className="text-blue-800 hover:text-blue-500">News Letter</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
