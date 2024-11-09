import Link from 'next/link';
import Image from 'next/image';
import Header from './components/header';

export default function Home() {
  return (
    <div className="grid grid-rows-[65px_1fr_100px] min-h-screen mx-auto w-[98%] max-w-[1024px] font-[family-name:var(--font-exo2)]">
      <Header />
      <main className="flex flex-col gap-1 row-start-2 align-center mx-0">
        <h1 className="text-center lowercase text-[11px] font-middle mx-0 my-2">
          Онлайн шоурум пляжной одежды 
          <Image 
            src="/bikini/map_point.svg" 
            alt="Location Pin" 
            className="inline-block mx-1" 
            width={12}
            height={12}
          />
          Москва
        </h1>
        <div className="flex items-center justify-center w-full mx-0">
          <Link
          className="relative w-full max-w-[1140px] min-h-[400px] bg-[url('/bikini/background-pic.jpg')] bg-center bg-no-repeat bg-cover mx-auto overflow-hidden z-0 border border-white rounded-[0.5rem]"
          href="/offers"            
          >
            <div className="bg-[rgba(255,226,240,0.4)] w-full h-full absolute left-0 top-0 flex flex-col justify-center items-center">
              <h2 className="text-[2.75rem] font-light text-white no-underline uppercase sm:text-[4rem] md:text-[5.5rem]">
                Бестселлеры
              </h2>
            </div>
          </Link>     
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h3>footer</h3>
      </footer>
    </div> 
  );
}
