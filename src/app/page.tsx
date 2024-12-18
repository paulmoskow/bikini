import Link from 'next/link';

export default function Home() {
  
  return (
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
  );
}
