import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  path: string;
  name: string;
}

export default function Card({ path, name }: CardProps): JSX.Element {
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
          <Link href="/"><a><h1>{name}</h1></a></Link>
        </div>
      </div>
    </>
  )
}