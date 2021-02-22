import { Head, Content, Link } from '../components';

export default function PageSlack() {
  return (
    <>
      <Head title="Kodcoach" description="" url="https://kodcoach.se/slack/" />
      <Content title="Slack">
        <p className="pb-2">
          Vi använder den populära chatt tjänsten{' '}
          <Link href="https://slack.com/">Slack</Link> där man kan prata med sin
          mentor men även få hjälp från andra. Skicka mailadressen ni vill
          använda till{' '}
          <Link href="mailto:info@kodcoach.se">info@kodcoach.se</Link> så lägger
          vi till er!
        </p>
      </Content>
    </>
  );
}
