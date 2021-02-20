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
        <p className="pb-6">
          Kodcoach.se drivs helt ideellt av en grupp som delar passion av teknik och communityn.
          Vi har byggt en brygga för att hjälpa utvecklare att hitta en mentor (kodcoach).
        </p>

        <h2 className="text-3xl font-sans">1. Kontakta en kodcoach</h2>
        <p className="pb-8">
          På startsidan hittar du en lista av kodcoacher som erbjuder sin hjälp.  
          Ta kontakt med en kodcoach så över mejl eller direkt via <Link href="/slack">Slack</Link>.
        </p>

        <h2 className="text-3xl font-sans">2. Kom överens om ett upplägg</h2>
        <p className="pb-8">
          Du kanske behöver mycket hjälp, eller bara kunna stämma av någon gång i veckan? Ni bestämmer tillsammans!
          Det viktiga är att ni båda är överens om en plan.
        </p>

        <h2 className="text-3xl font-sans">3. Anslut till Slack</h2>
        <p className="pb-8">
          Anslut över <Link href="/slack">Slack</Link> för att snabbt kunna hitta varandra.
        </p>

        <p className="pb-8">
          Så enkelt är det?! Vi tror att ni klarar er alldelse utmärkt själva, men vi finns alltid till hands om ni är osäkra på ert upplägg eller andra frågor.
        </p>

        <p className="pb-8">
          Vi har nolltolerans mot coacher som uppför sig dåligt. Skriv till oss <Link href="mailto:info@kodcoach.se">info@kodcoach.se</Link>!
        </p>
      </Content>
    </>
  );
}
