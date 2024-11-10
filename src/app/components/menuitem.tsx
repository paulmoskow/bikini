import Link from "next/link";

export default function MenuItem({ text, link }:{ text:string; link:string }) {
  return (
    <Link 
      className="w-[85px] h-[85px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex justify-center items-center font-semibold text-[11px] shadow-sm hover:shadow-lg text-center"
      href={link}
    >
      {text}
    </Link>
  );
};