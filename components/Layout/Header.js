import Link from 'next/link';
import Logo from './Logo';

const menu = [
  {
    title: 'Hur fungerar det?',
    url: '/hur-fungerar-det',
  },
  {
    title: 'Slack',
    url: '/slack',
  },
];

const Header = () => {
  return (
    <header className="text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sm:items-end">
        <Logo className="md:mr-5" />
        <nav className="flex-grow flex flex-wrap items-center text-base space-x-4 font-mono tracking-tight ">
          {menu.map((item) => (
            <Link href={item.url}>
              <a className="hover:underline hover:text-green-300">
                {item.title}
              </a>
            </Link>
          ))}
        </nav>
        <Link href="/anmal-dig-som-mentor">
          <a
            className="inline-flex items-center border-0 py-1 px-3 rounded text-base mt-4 md:mt-0 md:ml-5 font-mono tracking-tight text-white 
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
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
