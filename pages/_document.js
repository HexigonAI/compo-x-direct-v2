import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,800;0,900;1,900&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet"/>
      <body>
        <Main />
        <NextScript />
        <div id="portal"></div>
      </body>
    </Html>
  )
}
