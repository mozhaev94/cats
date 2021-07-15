import Layout from "../components/Layout";
import Card from "../components/Card";
import Paginator from "../components/Paginator";
import Image from "next/image";
import { useRouter } from "next/router";
import { CatsProps } from "./index"

const ITEMS_ON_PAGE_COUNT: number = 10;

export default function Search({ cats, count_pages, parameter }: CatsProps) {
  const router = useRouter();
  if (cats.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto">
          <div className="mt-8 ">
            <div className="flex flex-col justify-center">
              <h1 className="text-center text-4xl">К сожалению по вашему запросу "{router.query.q}" ничего не нашлось :(</h1>
              <Image
                src="/sad.svg"
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
        </div>
      </Layout >
    )
  }
  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4 mb-8 mt-8">
            {cats.map((cat) => (
              <Card path={cat.image_url} name={cat.name} key={cat.id} slug={cat.slug}></Card>
            ))}
          </div>
          <Paginator count_pages={count_pages} parameter={parameter}></Paginator>
        </div>
      </Layout >
  )
    </>
  )
}

export async function getServerSideProps(params: any) {
  const parameter = Number(params.query.p === undefined ? 1 : params.query.p);
  const searchParam = (params.query.q).toLowerCase().trim();
  const res = await fetch(`${process.env.API_URL}?q=${encodeURIComponent(searchParam)}&p=${parameter}`, {
    method: "GET",
  });
  const countCats: number = Number(res.headers.get("cats-count"));
  const cats = await res.json();
  const countPages: number = Math.ceil(countCats / ITEMS_ON_PAGE_COUNT);
  return {
    props: {
      cats,
      countPages,
      parameter,
    }
  }
}

