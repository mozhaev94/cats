import Head from 'next/head';
import Link from 'next/link';
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
        <div className="flex items-center">
          <Link href="/"><a>
            <Image src="/cats.svg"
              width={200}
              height={150} />
          </a></Link>
          <h1 className="font-sans">Cats world! Find the cat of your dreams</h1>
        </div>
        <div className="border-b-2"></div>
      </header>
      <main className="container mx-auto">
        {children}
      </main>
      <footer className="container mx-auto">
        <div className="border-t-2 mt-12">Хееей</div>
        <h1>Футер</h1>
        <div className="bg-catty-paws"></div>
      </footer>
    </>
  )
}