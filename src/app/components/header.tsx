"use client"

import Image from "next/image";
import Link from 'next/link';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 

export default function Header() {
  const cards = useSelector(( state: RootState ) => 
    state.cards.cards.filter((card) => card.added === true)
  );

  return (
    <header className="flex row-start-1 items-center justify-between px-3 bg-white rounded-[0.5rem] h-[60px] mt-1 border border-[rgba(0,0,0,0.15)]">
      <Link 
        href="/"
      >
        <Image
          className=""
          src="/bikini/bikini_logo-header.svg"
          alt="Bikini logo"
          width={120}
          height={35}
          priority
        />         
      </Link>
      <nav className="flex gap-3.5 sm:gap-5 items-end">
        <a 
          className="font-semibold text-[12px] sm:text-[12px] mb-[-1px]"
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
            src="/bikini/whatsapp-icon.svg"
            alt="WhatsApp logo"
            width={17}
            height={17}
            priority            
          />
        </a>
        <Link 
          href="/cart"
        >
          <Image 
            className=""
            src={cards.length > 0? "/bikini/basket_icon_active.svg" : "/bikini/basket_icon.svg"}
            alt="basket button"
            width={17}
            height={17}
            priority            
          />
        </Link>
        <Link 
          href="/menu"  
        >
          <Image 
            className="mb-[-4px]"
            src="/bikini/menu_icon.svg"
            alt="menu button"
            width={25}
            height={25}
            priority            
          />
        </Link>
      </nav>       
    </header>
  );
}

