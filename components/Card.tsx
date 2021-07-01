import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface CardProps {
  path: string;
  name: string;
  slug: string;
}

export default function Card({ path, name, slug }: CardProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="border-2">
        <div>
          <Image src={path}
            width={400}
            height={300}
            alt="pretty cat"
          />
        </div>
        <div className="text-center w-94 mb-2 mt-2 text-xl">
          <Link href={`/cats/${encodeURIComponent(slug)}`}><a><h1>{name}</h1></a></Link>
        </div>
      </div>
    </>
  )
}
