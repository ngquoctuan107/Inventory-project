import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
        <Head>
        <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" 
        integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" 
        crossorigin="anonymous" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}