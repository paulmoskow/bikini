import Image from "next/image";

export default function Card({ picture, text, price }:{ picture:string; text:string; price:number }) {
  return (
    <article 
      className="relative w-[120px] h-[190px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex flex-col justify-center items-start shadow-sm hover:shadow-lg p-[3px]"
    >
      <Image
        className="rounded-[0.25rem] object-cover w-[110px] h-[130px] object-center overflow-hidden"
        src={picture}
        alt="Bikini photo"
        width={110}
        height={130}
        priority
      />
      <h2 className="text-[9px]">{text}</h2>
      <p className="text-[12px] font-semibold">{price} руб.</p>
      <Image 
        className="absolute right-[5px] bottom-[5px]"
        src="/bikini/basket_icon.svg"
        alt="menu button"
        width={15}
        height={15}
        priority            
      />
    </article>
  );
};