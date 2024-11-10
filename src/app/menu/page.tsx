import Link from "next/link";

export default function Menu() {
  return (
    <section className="relative w-full max-w-[1140px] min-h-[200px] bg-white mx-auto border border-[rgba(0,0,0,0.15)] rounded-[0.5rem] p-[20px] flex flex-wrap gap-[20px] justify-center items-center">
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Новинки
      </Link>
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Premium товары
      </Link>
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Скидки
      </Link>
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Раздельные купальники
      </Link>
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Слитные купальники
      </Link>
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Туники
      </Link>
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Шляпы
      </Link>
      <Link 
        className="w-[100px] h-[100px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[12px] sm:text-[12px] mb-[-1px] shadow-sm hover:shadow-lg text-center"
        href="/offers"
      >
        Очки
      </Link>
    </section>
  );
};