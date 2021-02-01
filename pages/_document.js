import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleAnalytics() {
    return {
      __html: `
        <!-- Google Analytics -->
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('set', 'anonymizeIP', true);
        ga('create','G-2EZ0E2FK48','auto');
        ga('send','pageview');
        `,
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Serif:bold|Roboto:300,400,500&amp;display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
            </>
          )}
        </body>
      </Html>
    );
  }
}
