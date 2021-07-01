export default function Searchbox(): JSX.Element {
  return (
    <>
      <form action="http://localhost:3000/search">
        <div className="flex justify-end">
          <input type="text" placeholder="Порода" className="border-2" name="q" />
        </div>
      </form>
    </>
  )
}
