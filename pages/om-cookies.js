import Head from '../components/Head';
import Content from '../components/Content';

export default function PageAboutCookies() {
  return (
    <>
      <Head
        title="Kodcoach"
        description="En cookie är små textfiler som sparas på din dator (eller mobil/läsplatta) för att förbättra din användning och upplevelse av en webbplats"
        url="https://kodcoach.se/om-cookies/"
      />
      <Content title="Om cookies">
        <p className="pb-2">
          En cookie är små textfiler som sparas på din dator (eller
          mobil/läsplatta) för att förbättra din användning och upplevelse av en
          webbplats. Svensk lag kräver att vi informerar om vilka cookies vi
          använder, deras syfte samt hur cookies kan undvikas. Lagen säger också
          att du som besökare måste ge samtycke till att cookies används.
        </p>
        <p className="pb-8">
          Läs mer om cookies på Post- och Telestyrelsens hemsida{' '}
          <a href="https://www.pts.se/cookies" className="underline">
            https://www.pts.se/cookies
          </a>
        </p>
        <h3 className="text-2xl font-bold">
          Hur används cookies på webbplatsen?
        </h3>
        <p className="pb-2">
          Denna webbplats använder sig bland annat av Google Analytics, som
          använder cookies för att spåra besökares användning av webbplatsen.
          Programmet kommer att spara en cookie till din dators hårddisk för att
          spåra och övervaka din användning av webbplatsen, men kommer inte att
          lagra, spara eller samla in personuppgifter.
        </p>
        <p className="b-2 pb-8">
          Du kan läsa Googles sekretesspolicy{' '}
          <a href="https://policies.google.com/privacy" className="underline">
            här
          </a>{' '}
          för mer information.
        </p>
        <h3 className="text-2xl font-bold">Hur kan jag neka Cookies?</h3>
        <p className="pb-2">
          Vill du inte att din dator tar emot och lagrar cookies kan du ställa
          in så att den automatiskt nekar till lagring av cookies, eller
          informerar varje gång en webbplats begär att få lagra en cookie. Genom
          webbläsaren kan också tidigare lagrade cookies raderas.
        </p>
        <p className="pb-2">
          Har din webbläsare stöd för ett så kallat "inkognitoläge" eller ett
          "privatläge" kan du aktivera det för att automatiskt radera alla
          cookies varje gång du stänger din webbläsare.
        </p>
        <p className="pb-2">
          Varje typ av webbläsare tillhandahåller dessa funktioner på olika
          sätt, se din webbläsares hjälpsidor för mer information.
        </p>
      </Content>
    </>
  );
}
