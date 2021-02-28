import { Head, Badge, Content, Link } from '../components';

export default function PageSubmitYouAsMentor() {
  return (
    <>
      <Head
        title="Kodcoach"
        description=""
        url="https://kodcoach.se/anmal-dig-som-mentor/"
      />
      <Content title="Anmäl dig som mentor">
        <p className="mb-4">
          Vad kul att du vill vara med och bidra som mentor för en eller flera
          adapter.
        </p>

        <p className="mb-4">
          Kodcoach.se drivs helt ideellt av en grupp som delar passion för
          teknik och communityn. Vi har byggt en brygga för att hjälpa
          utvecklare att hitta sig en mentor (kodcoach).
        </p>

        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          1. Lägg till din mentors-fil
        </h2>
        <p className="mb-4">
          Börja med att forka vårt repo på GitHub och kopiera{' '}
          <Badge text="_example.yml" /> filen i{' '}
          <Badge text='"mentors"-mappen' /> till en ny fil i samma mapp med ett
          eget namn, förslagsvis döper du den till samma sak som ditt
          GitHub-användarnamn.
        </p>

        <p className="mb-4">
          <Link href="https://github.com/kodcoach/kodcoach.se">
            Länk till vårt repo på GitHub
          </Link>
        </p>

        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          2. Fyll i filen med information om dig
        </h2>
        <p className="mb-4">
          I din mentors-fil så fyller du på med information om dig själv, så som
          namn, beskrivning om dig och vilka tekniker du vill hjälpa till med.
        </p>

        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          3. Gör en pull-request
        </h2>
        <p className="mb-4">
          När du är klar gör du en pull request till vårt repo på GitHub med din
          mentors-fil så kommer den att accepteras och kort därefter visas på
          kodcoach.se.
        </p>

        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          4. Anslut till Slack
        </h2>
        <p className="mb-4">
          Anslut över <Link href="/slack">Slack</Link> för att snabbt kunna
          hitta varandra.
        </p>
      </Content>
    </>
  );
}
