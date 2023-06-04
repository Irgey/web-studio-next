import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <meta name="description" content="WebStudio site" />
        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta
          name="keywords"
          content="Webstudio, WEBSTUDIO, webstudio, Studio, studio, STUDIO, WebStudio, ВебСтудія, Вебстудія, вебстудія, розробка, сайт"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Serhii Parfentiev" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
