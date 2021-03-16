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

        <h2 className="text-xl sm:text-2xl font-mono tracking-tight text-purple-400 mb-4 mt-10">
          1. Kontakta en mentor
        </h2>
        <p className="mb-4">
          På <Link href="/">startsidan</Link> hittar du en lista av mentorer som erbjuder sin hjälp.
          Ta kontakt med en mentor över mejl eller direkt via{' '}
          <Link href="/slack">Slack</Link>. När du kontaktar en mentor bör du ange:
        </p>

        <ul className="list-disc mb-4 ml-5 space-y-4">
          <li>
            Lite om din bakgrund inom utveckling t.ex. om du pluggar just nu eller
            om du kanske redan har jobbat som utvecklare 1-2 år
          </li>
          <li>Vad du hoppas att du ska få ut av ett mentorskap</li>
          <li>Hur ofta du vill ha kontakt med din mentor</li>
          <li>Hur mycket tid du vill/kan lägga på din egen utveckling mellan kontakttillfällen</li>
          <li>Hur du helst har kontakt med din mentor t.ex. chat eller ljudsamtal</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-mono tracking-tight text-purple-400 mb-4 mt-10">
          2. Kom överens om ett upplägg
        </h2>

        <p className="mb-4">
          Tillsammans sätter ni mål för relationens fokus och struktur utifrån önskemål,
          förväntningar och den tid som båda är villiga att lägga.
          Det är viktigt att ni båda är överens om en plan som passar er båda.
        </p>

        <p className="mb-4">
          Tänk på att ni båda har rätt att avböja/avsluta ett mentorskap oavsett anledning.
        </p>

        <h2 className="text-xl sm:text-2xl font-mono tracking-tight text-purple-400 mb-4 mt-10">
          3. Grattis! Ni har nu påbörjat ett mentorskap
        </h2>

        <p className="mb-4">
          För ett lyckat mentorskap behöver mentor och adept visa ömsesidigt respekt, ha tålamod,
          samt kommunicera tydligt och ärligt. Det här bra att regelbundet utvärdera sitt mentorskap,
          det ska bara fortsätta så länge båda parterna tycker att det känns givande.
        </p>

        <p className="mb-4">
          Vi tror att ni klarar er alldelse utmärkt själva, men vi finns alltid
          på <Link href="/slack">Slack</Link> och <Link href="mailto:info@kodcoach.se">mejl</Link> om
          ni är osäkra på ert upplägg eller har andra frågor.
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