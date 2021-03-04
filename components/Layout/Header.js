import Link from '../Link';
import Logo from './Logo';

const menu = [
  {
    title: 'Hur fungerar det?',
    url: '/hur-fungerar-det',
  },
];

const Header = () => {
  return (
    <header className="text-white">
      <div className="container mx-auto flex flex-wrap py-5 px-3 sm:px-5 flex-row items-center justify-between md:justify-start">
        <Logo className="flex-shrink-0 flex-grow-0 mb-4 mx-2 sm:mx-0" />
        <nav className="flex-grow flex-shrink flex flex-wrap items-center justify-start text-base space-x-4 font-mono tracking-tight mb-4 px-3 sm:px-5">
          {menu.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="underline hover:text-green-300 tracking-tighter"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Link
          href="/anmal-dig-som-mentor"
          className="flex-shrink flex-grow-0 inline-flex items-center border-0 py-1 px-3 rounded text-base font-mono tracking-tight text-white mb-4 mx-2 sm:mx-0
            focus:outline-none bg-gradient-to-r transition-colors from-indigo-600 to-indigo-600 hover:to-purple-600"
        >
          Anmäl dig som mentor
          <svg
            className="w-4 h-4 ml-2"
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
        </Link>
      </div>
    </header>
  );
};

export default Header;
