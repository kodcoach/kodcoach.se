import CookieConsent from 'react-cookie-consent';
import Logo from './Logo';
import Link from '../Link';

const Footer = () => {
  return (
    <footer className="body-font">
      <div className="container px-5 py-8 mx-auto text-center">
        <p className="text-sm sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Kodcoach —
          <span className="ml-1">
            Skapad och förvaltad av{' '}
            <Link href="http://frozzare.com">@frozzare</Link>, @sanlin och
            @marcustisater
          </span>
        </p>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="ap"
        style={{ background: '#121B36' }}
        buttonStyle={{
          background: '#4F46E5',
          color: '#fff',
          fontSize: '13px',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
        expires={150}
      >
        <div>
          Vi använder{' '}
          <Link href="/om-cookies" className="text-white underline">
            cookies
          </Link>{' '}
          för att göra ditt presentletande så smidigt som möjligt.
        </div>
      </CookieConsent>
    </footer>
  );
};

export default Footer;
