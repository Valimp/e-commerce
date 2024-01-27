"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {

  const pathname = usePathname();

  return (
    <header className='flex flex-col sm:flex-row gap-3 justify-between items-center w-full bg-grass-green px-6 py-4 shadow'>
        <h2>
            valimp
        </h2>
        <nav className="flex gap-6">
            <Link className={pathname === "/" ? "text-sun-orange":""} href='/'>accueil</Link>
            <Link className={pathname === "/Shop" ? "text-sun-orange":""} href='/Shop'>nos offres</Link>
            <Link className={pathname === "/Contact" ? "text-sun-orange":""} href='/Contact'>nous contacter</Link>
        </nav>
    </header>
  )
}

export default Nav