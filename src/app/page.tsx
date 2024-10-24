import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[65px_1fr_100px] min-h-screen mx-auto w-[98%] max-w-[1024px] font-[family-name:var(--font-exo2)]">
      <header className="flex row-start-1 items-center justify-between px-4 bg-white rounded-[0.5rem] h-[60px] mt-1 border border-[rgba(0,0,0,0.15)]">
        <Image
          className=""
          src="/bikini_logo-header.svg"
          alt="Bikini logo"
          width={120}
          height={35}
          priority
        /> 
        <nav className="flex gap-2.5 sm:gap-5 items-end">
          <a 
            className="font-semibold text-[11px] sm:text-[12px]"
            href="tel:+79056339811"
          >
            +7&nbsp;905&nbsp;633&nbsp;98&nbsp;11     
          </a>
          <a
            href="https://wa.me/79056339811"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              className=""
              src="/whatsapp-icon.svg"
              alt="WhatsApp logo"
              width={20}
              height={20}
              priority            
            />
          </a>
          <Link 
            href="/cart"
          >
            <Image 
              className=""
              src="/basket_icon.svg"
              alt="basket button"
              width={20}
              height={20}
              priority            
            />
          </Link>
          <Link 
            href="/menu"  
          >
            <Image 
              className="mb-[-5px]"
              src="/menu_icon.svg"
              alt="menu button"
              width={30}
              height={30}
              priority            
            />
          </Link>
        </nav>       
      </header>
      <main className="flex flex-col gap-1 row-start-2 align-center mx-0">
        <h1 className="text-sm text-center lowercase text-[10px] font-middle mx-0 my-2">
          Онлайн шоурум пляжной одежды 
          <Image 
            src="/map_point.svg" 
            alt="Location Pin" 
            className="inline-block mx-1" 
            width={12}
            height={12}
          />
          Москва
        </h1>

        <div className="flex items-center justify-center w-full mx-0">
          <Link
            className="relative w-full max-w-[1140px] min-h-[400px] bg-[url('/background-pic.jpg')] bg-center bg-no-repeat bg-cover mx-auto overflow-hidden z-0 border border-[rgba(0,0,0,0.1)] rounded-[0.5rem]"
            href="/offers"            
          >
            <div className="bg-[rgba(255,226,240,0.4)] w-full h-full transition-colors duration-500 absolute left-0 top-0 flex flex-col justify-center items-center">
              <h2 className="text-[2rem] font-light text-white no-underline uppercase sm:text-[4rem] md:text-[5.5rem]">
                Бестселлеры
              </h2>
            </div>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
