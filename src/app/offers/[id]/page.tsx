"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { toggleAdded } from "@/redux/cardsSlice";

export default function CardDetails({}) {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const card = useSelector((state: RootState) =>
    state.cards.cards.find((card) => card.id === Number(id))
  );

  const handleGoBack = () => {
    router.back();
  };

  if (!card) {
    return <h3>Loading...</h3>;
  }

  const addToShoplist = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(toggleAdded(id));
  };

  return (
    <article 
        className="relative w-[220px] h-[290px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex flex-col justify-start items-center shadow-sm bg-white p-[3px]"
    >
      <Image
        className="rounded-[0.25rem] object-cover w-[110px] h-[130px] object-center overflow-hidden"
        src={card.picture}
        alt="Bikini photo"
        width={110}
        height={130}
        priority
      />
      <h2 className="text-[9px]">{card.name}</h2>
      <p className="text-[12px] font-semibold mt-[5px]">{card.price} руб.</p>
      <Image 
        onClick={(e) => addToShoplist(card.id, e)}
        id="addToShopList"
        className="absolute right-[5px] bottom-[5px]"
        src={card.added ? "/bikini/basket_icon_active.svg" : "/bikini/basket_icon.svg"}
        alt="add to shop list button"
        width={15}
        height={15}
        priority            
      />
    <p onClick={handleGoBack}>&larr; go back</p> 
  </article>
  );
}
