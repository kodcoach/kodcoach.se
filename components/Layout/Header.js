import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="font-mono font-bold text-xl text-gray-900 uppercase mb-4 md:mb-0 md:mr-5">
            <span className="text-indigo-600">Kod</span>Coach
          </a>
        </Link>
        <nav className="flex-grow flex flex-wrap items-center text-base my-auto">
          <Link href="/hur-fungerar-det">
            <a className="hover:text-gray-700">Hur fungerar det?</a>
          </Link>
        </nav>
        <button
          className="inline-flex items-center border-0 py-1 px-3 rounded text-base mt-4 md:mt-0 md:ml-5
          text-white focus:outline-none font-bold bg-purple-500"
        >
          Anmäl dig som mentor
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
