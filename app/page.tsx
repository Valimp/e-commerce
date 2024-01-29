import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="h-[45rem] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-10 mx-2">
          <h1 className="relative text-6xl sm:text-8xl text-deep-green">valimp</h1>
          <p className="text-2xl sm:text-4xl text-deep-green text-center">
            Votre site e-commerce
              <span className="before:-z-10 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sun-orange relative inline-block">
                <span className="relative px-2"> eco-responsable </span>
              </span> 
            sur mesure
          </p>
          <Link className="flex items-center shadow text-deep-green border hover:border-sun-orange rounded-xl px-3 py-2 border-deep-green text-lg sm:text-xl" href="/Contact">
            <FaPhoneAlt className="inline-block mr-4 animate-bounce" />
            Prenons rendez-vous
          </Link>
        </div>
      </main>
      
    </>
  );
}