import { Head, Content, Link } from '../components';

export default function PageSubmitYouAsMentor() {
  return (
    <>
      <Head
        title="Kodcoach"
        description=""
        url="https://kodcoach.se/anmal-dig-som-mentor/"
      />
      <Content title="Anmäl dig som mentor">
        <p className="pb-10">
          Vad kul att du vill vara med och bidra som mentor för en eller flera
          utvecklare.
        </p>

        <p className="pb-10">
          Kodcoach.se drivs helt ideellt av en grupp som delar passion för
          teknik och communityn. Vi har byggt en brygga för att hjälpa
          utvecklare att hitta sig en mentor (kodcoach).
        </p>

        <h2 className="text-3xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
          1. Lägg till din mentors-fil
        </h2>
        <p className="pb-5">
          Börja med att forka vårt{' '}
          <Link href="https://github.com/kodcoach/kodcoach.se">repo</Link> på
          GitHub och kopiera "_example.yml" filen i "mentors"-mappen till en ny
          fil i samma mapp med ett eget namn, förslagsvis döper du den till
          samma sak som ditt GitHub-användarnamn.
        </p>

        <p className="pb-10">
          <Link href="https://github.com/kodcoach/kodcoach.se">
            Länk till vårt repo på GitHub
          </Link>
        </p>

        <h2 className="text-3xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
          2. Fyll i filen med information om dig
        </h2>
        <p className="pb-10">
          I din mentors-fil så fyller du på med information om dig själv, så som
          namn, beskrivning om dig och vilka tekniker du vill hjälpa till med.
        </p>

        <h2 className="text-3xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
          3. Gör en pull-request
        </h2>
        <p className="pb-10">
          När du är klar så gör du en pull request till vårt repo på GitHub med
          din mentors-fil så kommer den att accepteras och kort därefter visas
          på kodcoach.se.
        </p>
      </Content>
    </>
  );
}
