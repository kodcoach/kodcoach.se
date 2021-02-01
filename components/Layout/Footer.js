const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="font-mono font-bold text-xl text-gray-900 uppercase mb-4 md:mb-0 md:mr-2">
          <span className="text-indigo-600">Kod</span>Coach
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Kodcoach —
          <span
            className="text-gray-600 ml-1"
          >
            Skapad och förvaltad av @frozzare, @sanlin och @marcustisater
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
