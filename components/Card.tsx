import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface CardProps {
  path: string;
  name: string;
  slug: string;
}

export default function Card({ path, name, slug }: CardProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="border-2 rounded-3xl">
        <div>
          <Link href={`/cats/${encodeURIComponent(slug)}`}><a><Image src={path} className="object-contain rounded-t-3xl"
            width={400}
            height={400}
            alt={name}
          /></a></Link>
        </div>
        <div className="text-center w-86 mb-2 mt-2 text-xl">
          <Link href={`/cats/${encodeURIComponent(slug)}`}><a><h2 className="p-2">{name}</h2></a></Link>
        </div>
      </div>
    </>
  )
}
