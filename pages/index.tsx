import Layout from '../components/Layout'
import Card from '../components/Card'
import Paginator from '../components/Paginator'
import Searchbox from '../components/Searchbox'

const ITEMS_ON_PAGE_COUNT: number = 10;

interface CatsProps {
  cats: Cats[],
  countPages: number,
  breedSlug: string,
}
interface Cats {
  id: number,
  name: string,
  slug: string,
  image_url: string,
  created_at: string,
  updated_at: string,
}

export default function Home({ cats, countPages }: CatsProps): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-8 mt-8">
          {cats.map((cat) => (
            <Card path={cat.image_url} name={cat.name} key={cat.id} slug={cat.slug}></Card>
          ))}
        </div>
        <Paginator countPages={countPages} ></Paginator>
        <div className="mb-8"></div>
      </div>
    </Layout >
  )
}


export async function getServerSideProps(params: any) {
  const parameter = params.query.p === undefined ? 1 : params.query.p;
  const res = await fetch(`https://cats-api.strsqr.cloud/cats?p=${parameter}`, {
    method: 'GET',
  });
  const countCats: number = Number(res.headers.get('cats-count'));
  const cats = await res.json();
  const countPages: number = Math.ceil(countCats / ITEMS_ON_PAGE_COUNT);

  return {
    props: {
      cats,
      countPages,
    },
  }
}