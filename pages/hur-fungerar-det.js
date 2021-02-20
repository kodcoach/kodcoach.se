import { Head, Content } from '../components';
import Link from '../components/Link';

export default function PageHowItWorks() {
  return (
    <>
      <Head
        title="Kodcoach"
        description=""
        url="https://kodcoach.se/hur-fungerar-det/"
      />
      <Content title="Hur fungerar det?">
        <p className="pb-10">
          Kodcoach.se drivs helt ideellt av en grupp som delar passion av teknik och communityn.
          Vi har byggt en brygga för att hjälpa utvecklare att hitta sig en mentor (kodcoach).
        </p>

        <h2 className="text-3xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">1. Kontakta en kodcoach</h2>
        <p className="pb-10">
          På startsidan hittar du en lista av kodcoacher som erbjuder sin hjälp.  
          Ta kontakt med en kodcoach över mejl eller direkt via <Link href="/slack">Slack</Link>.
        </p>

        <h2 className="text-3xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">2. Kom överens om ett upplägg</h2>
        <p className="pb-10">
          Du kanske behöver mycket hjälp, eller bara kunna stämma av någon gång i veckan? Ni bestämmer tillsammans!
          Det viktiga är att ni båda är överens om en plan som passar er båda.
        </p>

        <h2 className="text-3xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">3. Anslut till Slack</h2>
        <p className="pb-10">
          Anslut över <Link href="/slack">Slack</Link> för att snabbt kunna hitta varandra.
        </p>

        <p className="pb-10">
          Vi tror att ni klarar er alldelse utmärkt själv, men vi finns alltid här om ni är osäkra på ert upplägg eller andra frågor.
        </p>

        <p className="pb-10">
          Vi har nolltolerans mot coacher som uppför sig dåligt. Skriv till oss på <Link href="mailto:info@kodcoach.se">info@kodcoach.se</Link>!
        </p>
      </Content>
    </>
  );
}
