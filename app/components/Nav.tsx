"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {

  const pathname = usePathname();

  return (
    <header className='flex flex-col sm:flex-row gap-3 justify-between items-center w-full bg-grass-green px-6 py-4 shadow'>
        <div className="flex items-center gap-5">
          <img className="w-12 h-12" src="/images/logo.png" />
          <h2>valimp</h2>
        </div>
        <nav className="flex gap-6">
            <Link className={pathname === "/" ? "text-sun-orange":""} href='/'>accueil</Link>
            <Link className={pathname === "/Shop" ? "text-sun-orange":""} href='/Shop'>nos offres</Link>
            <Link className={pathname === "/Contact" ? "text-sun-orange":""} href='/Contact'>nous contacter</Link>
        </nav>
    </header>
  )
}

export default Nav