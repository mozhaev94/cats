import Layout from "../../components/Layout";
import Image from "next/image";
import { toSnakeCaseDescription } from "../../mapper/map";

interface CatProps {
  cat: Cat,
  description: []
}

interface Cat {
  id: number,
  name: string,
  slug: string,
  imageUrl: string,
  description: string,
}

function splitWord(str: string): string {
  return str.replace(/[а-я][А-Я]/gm, (a: string): string => {
    return a[0] + " " + a[1];
  })
}

function renderDescriptionCat(text: string, index: number): JSX.Element {

  if (text.startsWith("Длина")) {
    return (
      <>
        <h2 key={index + 1} className="mb-2 mt-2 font-medium text-2xl">Длина шерсти</h2>
        <div key={index + 1} className="border-b-2 border-black mb-2 w-1/5"></div>
        <p key={index + 1} className="text-lg mb-2">{splitWord(text)}</p>
      </>
    )
  }
  if (text.startsWith("Описание")) {
    return (
      <>
        <h2 key={index + 1} className="mb-2 font-medium text-2xl">Описание породы</h2>
        <div key={index + 1} className="border-b-2 border-black mb-2 w-1/5"></div>
        <p key={index + 1} className="text-lg mb-2">{splitWord(text)}</p>
      </>
    )
  }
  if (text.length === 0) {
    return (
      <>
        <br></br>
      </>
    )
  }
  return (
    <>
      <p key={index + 1} className="text-lg mb-2">{splitWord(text)}</p>
    </>
  )
}

export default function Cat({ cat, description }: CatProps): JSX.Element {

  return (
    <>
      <Layout title={cat.name} description={cat.description} imageUrl={cat.imageUrl}>
        <div className="container mx-auto bg-gray-100 p-10 mt-8 rounded-t-3xl">
          <h1 className="flex justify-center text-3xl font-bold">{cat.name}</h1>
          <div className="border-b-2 border-black mt-4 mb-4"></div>
          <div className="w-auto inline-block h-1/3 float-right pl-8">
            <Image
              src={cat.imageUrl}
              height={500}
              width={500}
              alt={cat.name}
              className="object-contain " />
          </div>
          <span className="w-2/3 p-2">
            {description.map((e: string, index: number) => {
              return renderDescriptionCat(e, index);
            }
            )}
          </span>
          <div className="mb-16">

          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`${process.env.API_URL}/${encodeURIComponent(params.slug)}`, {
    method: "GET",
  })
  const cat = toSnakeCaseDescription(await res.json());
  const description = cat.description.split("\n");
  console.log(cat)
  return {
    props: {
      cat,
      description,
    }
  }
}

