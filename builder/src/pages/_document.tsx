import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }
  render() {
    // const { locale } = this.props.__NEXT_DATA__;
    // const dir = getDirection(locale);
    return (
      // <Html dir={dir}>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link href="/src/assets/favicon.ico" rel="icon" type="image/svg+xml" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            key="twitter:title"
            name="twitter:title"
            content="ILLA Builder - An open-source low-code Platform for Developers."
          />
          <meta
            key="og:title"
            property="og:title"
            content="ILLA Builder - An open-source low-code Platform for Developers."
          />
          <title>
            ILLA Builder - An open-source low-code Platform for Developers.
          </title>
        </head>
      </html>

    );
  }
}



