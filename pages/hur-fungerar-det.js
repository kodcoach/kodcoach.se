import { Head, Content, Link } from '../components';

export default function PageHowItWorks() {
  return (
    <>
      <Head
        title="Kodcoach"
        description=""
        url="https://kodcoach.se/hur-fungerar-det/"
      />
      <Content title="Hur fungerar det?">
        <p className="mb-4">
          Kodcoach.se drivs helt ideellt av en grupp som delar passion för
          teknik och communityn. Vi har byggt en brygga för att hjälpa
          utvecklare att hitta sig en mentor (kodcoach).
        </p>

        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          1. Kontakta en mentor
        </h2>
        <p className="mb-4">
          På startsidan hittar du en lista av mentorer som erbjuder sin hjälp.
          Ta kontakt med en mentor över mejl eller direkt via{' '}
          <Link href="/slack">Slack</Link>.
        </p>

        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          2. Kom överens om ett upplägg
        </h2>
        <p className="mb-4">
          Du kanske behöver mycket hjälp, eller bara kunna stämma av någon gång
          i veckan? Ni bestämmer tillsammans! Det viktiga är att ni båda är
          överens om en plan som passar er båda.
        </p>

        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          3. Anslut till Slack
        </h2>
        <p className="mb-4">
          Anslut över <Link href="/slack">Slack</Link> för att snabbt kunna
          hitta varandra.
        </p>

        <p className="mb-4">
          Vi tror att ni klarar er alldelse utmärkt själva, men vi finns alltid
          här om ni är osäkra på ert upplägg eller andra frågor.
        </p>

        <p className="mb-4">
          Vi har nolltolerans mot dåligt uppförande. Skriv till oss på{' '}
          <Link href="mailto:info@kodcoach.se">info@kodcoach.se</Link> om det
          skulle vara något. <Link href="/code-of-conduct">Läs vår uppförandekod!</Link>
        </p>
      </Content>
    </>
  );
}