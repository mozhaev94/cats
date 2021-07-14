import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Searchbox from "../components/Searchbox";

export default function layout({ children, title = "Cats World", description = "This page about cats made with soul", image_url, }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description.split("", 150).join("")} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description.split("", 150).join("")} />
        <meta property="og:image" content={image_url} />
        <meta property="og:image:width" content="968" />
        <meta property="og:image:height" content="504" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <header className="container mx-auto flex items-center mt-8">
        <div>
          <Link href="/"><a>
            <Image src="/new-logo.svg"
              width={70}
              height={70}
              alt="logo" />
          </a></Link>
        </div>
        <Link href="/"><a><span className="text-2xl font-bold">Cat World</span></a></Link>
        <div className="ml-60 w-2/3">
          <Searchbox />
        </div>
      </header>
      <div>
      </div>
      <main>
        {children}
      </main>
    </>
  )
}