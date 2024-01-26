export default function Home() {
  return (
    <>
      <main className="h-[45rem] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-10">
          <h1 className="relative text-6xl sm:text-8xl text-deep-green">valimp</h1>
          <p className="text-2xl sm:text-4xl text-deep-green text-center">
            La solution tech 
              <span className="before:-z-10 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sun-orange relative inline-block">
                <span className="relative px-2"> sur mesure </span>
              </span> 
            pour votre entreprise
          </p>
        </div>
      </main>
      
    </>
  );
}