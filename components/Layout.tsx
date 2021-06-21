import Head from 'next/head';
import Image from 'next/image'

export default function layout({ children }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Cats World</title>
        <meta charSet="utf-8" />
        <meta name="description" content="This page about cats" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <header className="container mx-auto">
        <h1>Шапка</h1>
      </header>
      <main className="container mx-auto">
        {children}
      </main>
      <footer>
        <h1 className="container mx-auto">Футер</h1>
      </footer>
    </>
  )
}