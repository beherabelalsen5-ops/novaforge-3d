export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          NovaForge
        </h1>

        <div className="flex items-center gap-8 text-sm uppercase tracking-wider">
          
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Products
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Upload
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}