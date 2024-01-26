import Link from "next/link"

const Nav = () => {
  return (
    <header className='flex flex-col sm:flex-row gap-3 justify-between items-center w-full bg-grass-green px-6 py-4 shadow'>
        <h2>
            valimp
        </h2>
        <nav className="flex gap-6">
            <Link href='/'>accueil</Link>
            <Link href='/Shop'>nos offres</Link>
            <Link href='/Contact'>nous contacter</Link>
        </nav>
    </header>
  )
}

export default Nav