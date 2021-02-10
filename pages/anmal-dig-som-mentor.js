import { Head, Content } from '../components';

export default function PageSubmitYouAsMentor() {
  return (
    <>
      <Head
        title="Kodcoach"
        description=""
        url="https://kodcoach.se/anmal-dig-som-mentor/"
      />
      <Content title="Anmäl dig som mentor">
        <p className="pb-2">
          En cookie är små textfiler som sparas på din dator (eller
          mobil/läsplatta) för att förbättra din användning och upplevelse av en
          webbplats. Svensk lag kräver att vi informerar om vilka cookies vi
          använder, deras syfte samt hur cookies kan undvikas. Lagen säger också
          att du som besökare måste ge samtycke till att cookies används.
        </p>
      </Content>
    </>
  );
}
