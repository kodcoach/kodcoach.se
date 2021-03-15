export default function Content({ title, children }) {
  return (
    <div className="max-w-prose mx-auto mb-8 sm:my-8 md:my-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl sm:text-center font-bold font-mono tracking-tight">
        <span className="block pb-1 max-w-max sm:mx-auto bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
          {title}
        </span>
      </h1>
      <div class="font-sans font-light sm:text-lg">
        {children}
      </div>
    </div>
  );
}
