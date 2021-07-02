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
        <div className="flex justify-center mb-6">
          <input type="text" placeholder="Порода" className="border-2 w-1/5 outline-none mr-4 p-2" name="q" onChange={handleChangeEvent} />
          <Link href={`http://localhost:3000/search?q=${searchParam}`}><button type="submit" className="border-2 active: outline-none">SEARCH</button></Link>
        </div>
      </form>
    </>
  )
}
