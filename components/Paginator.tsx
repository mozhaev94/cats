import { useRouter } from "next/router";

interface PaginatorProps {
  countPages: number,
  parameter: number,
}

export default function Paginator({ countPages, parameter }: PaginatorProps): JSX.Element {
  const pages = new Array(countPages).fill('');
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <div className="border-2">
          {pages.map((page, index) => {
            const key: number = index + 1;
            if (key === parameter) {
              return (
                <a key={key}><button className="w-12 h-8 bg-blue-200 bg-hover:bg-green-200"
                  onClick={() => {
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, p: index + 1 }
                    })
                  }}>{index + 1}</button></a>
              )
            }
            return (
              <a key={key}><button className="w-12 h-8 bg-hover:bg-green-200"
                onClick={() => {
                  router.push({
                    pathname: router.pathname,
                    query: { ...router.query, p: index + 1 }
                  })
                }}>{index + 1}</button></a>
            )
          }
          )
          }
        </div>
      </div>
    </>
  )
}
