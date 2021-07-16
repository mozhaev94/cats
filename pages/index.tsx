import Layout from "../components/Layout";
import Card from "../components/Card";
import Paginator from "../components/Paginator";
import { toSnakeCase } from "../mapper/map";

const ITEMS_ON_PAGE_COUNT: number = 10;

export interface CatsProps {
  cats: Cats[],
  countPages: number,
  parameter: number,
}
export interface Cats {
  id: number,
  name: string,
  slug: string,
  imageUrl: string,
}

export default function Home({ cats, countPages, parameter }: CatsProps): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-8 mt-8">
          {cats.map((cat) => (
            <Card path={cat.imageUrl} name={cat.name} key={cat.id} slug={cat.slug}></Card>
          ))}
        </div>
        <Paginator countPages={countPages} parameter={parameter}></Paginator>
        <div className="mb-8"></div>
      </div>
    </Layout >
  )
}


export async function getServerSideProps(params: any) {
  const parameter = Number(params.query.p === undefined ? 1 : params.query.p);
  const res = await fetch(`${process.env.API_URL}?p=${parameter}`, {
    method: "GET",
  });
  const countCats: number = Number(res.headers.get("cats-count"));
  const cats = toSnakeCase(await res.json());
  const countPages: number = Math.ceil(countCats / ITEMS_ON_PAGE_COUNT);

  return {
    props: {
      cats,
      countPages,
      parameter,
    },
  }
}