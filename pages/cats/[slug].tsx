import Layout from '../../components/Layout'
import Image from 'next/image';

interface CatProps {
  cat: Cat,
  description: []
}

interface Cat {
  id: number,
  name: string,
  slug: string,
  image_url: string,
  description: string,
  created_at: string,
  updated_at: string,
}

export default function Cat({ cat, description }: CatProps): JSX.Element {

  function splitWord(str: string): string {
    return str.replace(/[а-я][А-Я]/gm, (a: string): string => {
      return a[0] + ' ' + a[1];
    })
  }

  return (
    <>
      <Layout title={cat.name} description={cat.description} image_url={cat.image_url}>
        <div className="container mx-auto bg-gray-100 p-10 mt-8 rounded-t-3xl">
          <h1 className="flex justify-center text-3xl font-bold">{cat.name}</h1>
          <div className="border-b-2 border-black mt-4 mb-4 "></div>
          <div className="w-auto inline-block h-1/3 float-right pl-8">
            <Image
              src={cat.image_url}
              height={500}
              width={500}
              alt="pretty cat"
              className="object-contain " />
          </div>
          <span className="w-2/3 p-2">
            {description.map((e: string, index: number) => {
              if (e.startsWith("Длина")) {
                return (
                  <>
                    <h1 key={index + 1} className="mb-2 mt-2 font-medium text-2xl">Длина шерсти</h1>
                    <div key={index + 1} className="border-b-2 border-black mb-2 w-1/5"></div>
                    <p key={index + 1} className="text-lg mb-2">{splitWord(e)}</p>
                  </>
                )
              }

              if (e.startsWith("Описание")) {
                return (
                  <>
                    <h1 key={index + 1} className="mb-2 font-medium text-2xl">Описание породы</h1>
                    <div key={index + 1} className="border-b-2 border-black mb-2 w-1/5"></div>
                    <p key={index + 1} className="text-lg mb-2">{splitWord(e)}</p>
                  </>
                )
              }
              if (e.length === 0) {
                return (
                  <>
                    <br></br>
                  </>
                )
              }
              return (
                <>
                  <p key={index + 1} className="text-lg mb-2">{splitWord(e)}</p>
                </>
              )
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
  const res = await fetch(`https://cats-api.strsqr.cloud/cats/${encodeURIComponent(params.slug)}`, {
    method: 'GET',
  })
  const cat = await res.json()
  const description = cat.description.split("\n");
  return {
    props: {
      cat,
      description,
    }
  }
}

