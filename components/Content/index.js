export default function Content({ title, children }) {
  return (
    <div className="max-w-screen-sm mx-auto my-8 md:my-12 font-mono">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-sans">
        <span className="block pb-1 max-w-max mx-auto bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
          {title}
        </span>
      </h1>
      {children}
    </div>
  );
}
