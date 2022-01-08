import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Sai Charan</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta name="description" content="Full Stack Software Developer at Brenolabs,software developer in bangalore" />
            <meta property="og:title" content="Sai Charan,Software developer in bangalore" />
              <meta property="og:description" content="Full Stack Software Developer at Brenolabs,software developer in bangalore" />
                <meta property="og:url" content="https://saicharankr.tech" />
                <meta name="keywords" content="Sai Charan, Developer, Popular Developer,superman,saicharankr,saicharan profile"></meta>
                  <meta property="og:type" content="website"></meta>
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link
                    href="https://fonts.googleapis.com/css2?family=Averia+Libre:ital,wght@0,300;1,400&family=Kaushan+Script&family=Ubuntu:wght@300&display=swap"
                    rel="stylesheet"
                  />
                </Head>
                <body className="bg-gradient-to-r from-blue-500 to-green-500 dark:from-black-700 dark:to-white dark:text-white">
                  <Main />
                  <NextScript />
                </body>
              </Html>
              );
  }
}

              export default MyDocument;
