import Layout from '../../components/Layout'
import Image from 'next/image';

interface CatProps {
  cat: Cat
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

export default function Cat({ cat }: CatProps): JSX.Element {
  console.log(cat)
  return (
    <>
      <Layout title={cat.name}>
        <div className="flex justify-center mt-8">
          <Image
            src={cat.image_url}
            height={400}
            width={400}
            alt="pretty cat" />
        </div>
        <h1>{cat.name}</h1>
        <h1>{cat.description}</h1>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`https://cats-api.strsqr.cloud/cats/${encodeURIComponent(params.slug)}`, {
    method: 'GET',
  })
  const cat = await res.json()
  return {
    props: {
      cat,
    }
  }
}

