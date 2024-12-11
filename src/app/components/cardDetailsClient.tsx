"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toggleAdded } from "@/redux/cardsSlice";

export default function CardDetailsClient({ 
  card 
}: { 
  card: {
      id: number;
      picture: string;
      name: string;
      price: number;
      added: boolean;      
  }}) {
      
  const router = useRouter();
  const dispatch = useDispatch();  

  //dev mode checking card properties from localStorage  
  const [isAdded, setIsAdded] = React.useState(card.added);
  React.useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      const parsedCards = JSON.parse(savedCards);
      const savedCard = parsedCards.find((item: typeof card) => item.id === card.id);
      if (savedCard) {
        setIsAdded(savedCard.added);
      }
    }
  }, [card.id, dispatch])

  const handleGoBack = () => {
    router.back();
  };

  const addToShoplist = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(toggleAdded(id));
    setIsAdded((prev) => !prev);
  };

  return (
    <article 
        className="relative w-[220px] h-[350px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex flex-col justify-start items-center shadow-sm bg-white p-[7px]"
    >
      <Image
        className="rounded-[0.25rem] object-cover w-[200px] h-[230px] object-center overflow-hidden mb-[5px]"
        src={card.picture}
        alt="Bikini photo"
        width={200}
        height={230}
        priority
      />
      <h2 className="text-[11px] self-start">{card.name}</h2>
      <p className="text-[14px] font-semibold my-[10px] self-start">{card.price} руб.</p>
      <Image 
        onClick={(e) => addToShoplist(card.id, e)}
        id="addToShopList"
        className="absolute right-[5px] bottom-[5px]"
        src={isAdded ? "/bikini/basket_icon_active.svg" : "/bikini/basket_icon.svg"}
        alt="Add to shop list"
        width={15}
        height={15}
        priority            
      />
    <p onClick={handleGoBack} className="text-[12px] absolute left-[5px] bottom-[5px] cursor-pointer">&larr; go back</p> 
  </article>
  );
}
