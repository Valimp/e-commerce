import Link from "next/link"

const Nav = () => {
  return (
    <header className='flex justify-between items-center w-full bg-grass-green px-6 py-4 shadow'>
        <h2>
            valimp
        </h2>
        <nav className="flex gap-6">
            <Link href='/'>home</Link>
            <Link href='/'>shop</Link>
            <Link href='/'>contact</Link>
        </nav>
    </header>
  )
}

export default Nav