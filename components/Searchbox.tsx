import Link from 'next/link'
import { useState } from "react";

export default function Searchbox(): JSX.Element {

  const [searchParam, setSearchParam] = useState('');

  function handleChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchParam(e.target.value)
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Порода..." className="border-2 w-2/3 outline-none mr-4 p-2 rounded-full bg-gray-100" name="q" onChange={handleChangeEvent} />
        <Link href={`http://localhost:3000/search?q=${searchParam}`}><button type="submit" className="active: outline-none rounded-full"></button></Link>
      </form>
    </>
  )
}
