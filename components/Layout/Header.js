const Header = () => {
  return (
    <header className="bg-white text-gray-600 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="font-mono font-bold text-xl text-gray-900 uppercase mb-4 md:mb-0 md:mr-5">
          <span className="text-indigo-600">Kod</span>Coach
        </a>
        <nav className="flex-grow flex flex-wrap items-center text-base my-auto">
          <a href="#" className="hover:text-gray-700">
            Hur funkar det?
          </a>
        </nav>
        <button className="inline-flex items-center text-gray-700 border-0 py-1 px-3 rounded text-base mt-4 md:mt-0 md:ml-5
          bg-green-300 hover:bg-green-400 transition-colors">
          Anmäl dig som mentor!
        </button>
      </div>
    </header>
  );
};

export default Header;
