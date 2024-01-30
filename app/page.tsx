import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import GlassCard from "./components/GlassCard";
import Separator from "./components/Separator";
import UpButton from "./components/UpButton";

export default function Home() {
  return (
    <>
      <UpButton />
      <main className="h-[42rem] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-10 mx-2 px-24">
          <h1 className="relative text-6xl sm:text-8xl text-deep-green">valimp</h1>
          <p className="text-2xl sm:text-4xl text-deep-green text-center">
            Votre ordinateur sur mesure et votre site web
              <span className="before:-z-10 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sun-orange relative inline-block">
                <span className="relative px-2"> eco-responsable </span>
              </span> 
            respectueux de vos valeurs.
          </p>
          <Link className="flex items-center shadow text-deep-green border hover:border-sun-orange rounded-xl px-3 py-2 border-deep-green text-lg sm:text-xl" href="/Contact">
            <FaPhoneAlt className="inline-block mr-4 animate-bounce" />
            Prenons rendez-vous
          </Link>
        </div>
      </main>
      <div className="h-[42rem] bg-homepage-background bg-cover bg-center flex justify-center items-center">
        <GlassCard>
          <h2 className="text-2xl sm:text-4xl text-egg-white mb-10">Parce que c'est possible</h2>
          <p className="text-lg sm:text-2xl text-egg-white leading-7">
            Boostez votre activité avec des ordinateurs sur mesure éco-responsables.
          </p>
          <Separator horizontal="40px" />
          <p className="text-lg sm:text-2xl text-egg-white leading-7">
            Démarquez-vous en ligne avec un site qui respecte vos valeurs.
          </p>
        </GlassCard>
      </div>
    </>
  );
}