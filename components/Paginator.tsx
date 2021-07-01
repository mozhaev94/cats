import Link from 'next/link';
import { useRouter } from 'next/router'

interface PaginatorProps {
  countPages: number,
}

export default function Paginator({ countPages }: PaginatorProps): JSX.Element {
  const pages = new Array(countPages).fill('');
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <div className="border-2">
          {pages.map((page, index) => (
            <a><button className="w-12 h-8 hover:bg-green-200"
              onClick={() => {
                router.push({
                  pathname: router.pathname,
                  query: { ...router.query, p: index + 1 }
                })
              }}>{index + 1}</button></a>
          ))}
        </div>
      </div>
    </>
  )
}
