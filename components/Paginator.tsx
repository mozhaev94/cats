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
            const className = key === parameter ? "w-12 h-8 bg-blue-200 bg-hover:bg-green-200" : "w-12 h-8 bg-hover:bg-green-200";
            return (
              <a key={key}><button className={className}
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
