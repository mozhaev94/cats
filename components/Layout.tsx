import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

export default function layout({ children, title = 'Cats World', description = 'This page about cats', image_url, }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image_url} />
        <meta property="og:image:width" content="968" />
        <meta property="og:image:height" content="504" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <div className="bg-red-50">
        <header className="container mx-auto pt-8">
          <div className="flex items-center justify-between">
            <Link href="/"><a>
              <Image src="/favicon.svg"
                width={140}
                height={100} />
            </a></Link>
            <h1 className="font-sans text-4xl">Cats world! Find the cat of your dreams.</h1>
            <div className="">
              <div className="flex flex-col">
                <h1 className="text-xl">Contacts :</h1>
                <a href="tel: +74951234567" className="text-xl">+7 (495) 123-45-67</a>
                <a href="mailto: catsfun@cats.ru" className="text-xl">catsfun@cats.ru</a>
              </div>
            </div>
          </div>
          <div className="border-b-4 mt-6"></div>
        </header>
      </div>
      <main className="container mx-auto">
        {children}
      </main>
    </>
  )
}