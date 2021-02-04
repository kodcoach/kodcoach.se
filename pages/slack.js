import Head from '../components/Head';

export default function PageSlack() {
  return (
    <>
      <Head title="Kodcoach" description="" url="https://kodcoach.se/slack/" />
      <div className="max-w-screen-sm mx-auto my-8 md:my-12 font-mono">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
            Slack
          </span>
        </h1>
        <p className="pb-2">
          En cookie är små textfiler som sparas på din dator (eller
          mobil/läsplatta) för att förbättra din användning och upplevelse av en
          webbplats. Svensk lag kräver att vi informerar om vilka cookies vi
          använder, deras syfte samt hur cookies kan undvikas. Lagen säger också
          att du som besökare måste ge samtycke till att cookies används.
        </p>
      </div>
    </>
  );
}
