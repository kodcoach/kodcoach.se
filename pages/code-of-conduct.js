import { Head, Content, Link } from '../components';

export default function PageCodeOfConduct() {
  return (
    <>
      <Head
        title="Kodcoach"
        description=""
        url="https://kodcoach.se/code-of-conduct/"
      />
      <Content title="Uppförandekod">
        <p className="mb-4">
          Mentorskap är relationen mellan en mentor och en adept, där båda parterna för en dialog och gemensamt sätter mål för relationens fokus och struktur.
          För ett lyckat mentorskap behöver mentor och adept visa ömsesidigt respekt, ha tålamod, samt kommunicera tydligt och ärligt.
          Det här bra att regelbundet utvärdera sitt mentorskap, det ska bara fortsätta så länge båda parterna tycker att det känns givande.
        </p>

        <p className="mb-4">
          Vi har nolltolerans mot dåligt uppförande. Skriv till oss på{' '}
          <Link href="mailto:info@kodcoach.se">info@kodcoach.se</Link> om det
          skulle vara något!
        </p>

        <p className="mb-4">
          Vid dåligt uppförande kan alla återgärder som anses lämpliga vidtas,
          till och med utvisning från Kodcoach-slacken, borttagning från webbplatsen,
          samt offentligt identifiera någon som vi har fått klagomål om.
        </p>

        <p className="mb-4">
          Dåligt uppförande inkluderar men är inte begränsat till:
        </p>

        <ul className="list-disc mt-8 mb-8 ml-5 space-y-4">
          <li>Stötande kommentarer relaterade till kön, könsidentitet och uttryck, sexuell läggning, funktionsvariation, psykisk sjukdom, neuro (a) typiska, fysiskt utseende, kroppsstorlek, ålder, ras eller religion.</li>
          <li>Oönskade kommentarer angående en persons livsstilsval och praxis, inklusive de som rör mat, hälsa, föräldraskap, droger och anställning.</li>
          <li>Medveten felkön eller användning av ”döda” eller avvisade namn</li>
          <li>Simulerad fysisk kontakt (t.ex. textbeskrivningar som "kram" eller "backrub") utan samtycke eller efter en begäran om att sluta.</li>
          <li>Oönskad sexuell uppmärksamhet, som sexuella bilder, eller beteenden i utrymmen där de inte är lämpliga.</li>
          <li>Hot om våld</li>
          <li>Uppmaning till våld mot någon individ, inklusive att uppmuntra en person att begå självmord eller att skada sig själv</li>
          <li>Medvetet försöka skrämma någon</li>
          <li>Stalking eller förföljelse</li>
          <li>Fortsatt en-till-en-kommunikation efter begäran om att kommunikation ska upphöra</li>
          <li>Offentliggörande av icke-trakasserande privat kommunikation</li>
          <li>Fotografering eller inspelning, inklusive loggning på nätet med trakasserier.</li>
        </ul>

        <p className="mb-4">
          Denna uppförandekod är baserad på Annalee Flower Hornes Sample Slack Code of Conduct,
          som i sin tur bygger på Geek Feminism's Community Anti-Trakasseringspolicy.
          Vi har anpassat uppförandekoden för vårt eget bruk enligt villkoren i Creative Commons Attribution License.
        </p>
      </Content>
    </>
  );
}