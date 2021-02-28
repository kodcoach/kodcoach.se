import { Head, Content, Link } from '../components';

export default function PageAboutCookies() {
  return (
    <>
      <Head
        title="Kodcoach"
        description="En cookie är små textfiler som sparas på din dator (eller mobil/läsplatta) för att förbättra din användning och upplevelse av en webbplats"
        url="https://kodcoach.se/om-cookies/"
      />
      <Content title="Om cookies">
        <p className="mb-4">
          En cookie är små textfiler som sparas på din dator (eller
          mobil/läsplatta) för att förbättra din användning och upplevelse av en
          webbplats. Svensk lag kräver att vi informerar om vilka cookies vi
          använder, deras syfte samt hur cookies kan undvikas. Lagen säger också
          att du som besökare måste ge samtycke till att cookies används.
        </p>
        <p className="mb-4">
          Läs mer om cookies på Post- och Telestyrelsens hemsida{' '}
          <Link href="https://www.pts.se/cookies">
            https://www.pts.se/cookies
          </Link>
        </p>
        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          Hur används cookies på webbplatsen?
        </h2>
        <p className="mb-4">
          Denna webbplats använder sig bland annat av Google Analytics, som
          använder cookies för att spåra besökares användning av webbplatsen.
          Programmet kommer att spara en cookie till din dators hårddisk för att
          spåra och övervaka din användning av webbplatsen, men kommer inte att
          lagra, spara eller samla in personuppgifter.
        </p>
        <p className="mb-4">
          Du kan läsa Googles sekretesspolicy{' '}
          <Link href="https://policies.google.com/privacy">här</Link> för mer
          information.
        </p>
        <h2 className="text-2xl font-sans text-purple-400 mb-4 mt-10">
          Hur kan jag neka Cookies?
        </h2>
        <p className="mb-4">
          Vill du inte att din dator tar emot och lagrar cookies kan du ställa
          in så att den automatiskt nekar till lagring av cookies, eller
          informerar varje gång en webbplats begär att få lagra en cookie. Genom
          webbläsaren kan också tidigare lagrade cookies raderas.
        </p>
        <p className="mb-4">
          Har din webbläsare stöd för ett så kallat "inkognitoläge" eller ett
          "privatläge" kan du aktivera det för att automatiskt radera alla
          cookies varje gång du stänger din webbläsare.
        </p>
        <p className="mb-4">
          Varje typ av webbläsare tillhandahåller dessa funktioner på olika
          sätt, se din webbläsares hjälpsidor för mer information.
        </p>
      </Content>
    </>
  );
}
