"use client";

import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { toggleAdded } from '../../redux/cardsSlice';

export default function Card({ 
  id,
  picture, 
  text, 
  price, 
  added,
  onClick 
}:{ 
  id: number
  picture: string; 
  text: string; 
  price: number, 
  added: boolean, 
  onClick: (event: React.MouseEvent) => void
}) {

  const dispatch = useDispatch();

  const addToShoplist = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(toggleAdded(id));
  };

  const shortText = (input: string, length: number) => {
    if (!input) return '';
    if (input.length > length) {
      return input.substring(0, length) + '...';
    }
    return input;
  }
  
  return (
    <article 
      onClick={onClick}
      className="relative w-[120px] h-[190px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] flex flex-col justify-start shadow-sm hover:shadow-lg hover:scale-105 p-[3px]"
    >
      <Image
        className="rounded-[0.25rem] object-cover w-[110px] h-[130px] object-center overflow-hidden"
        src={picture}
        alt="Bikini photo"
        width={110}
        height={130}
        priority
      />
      <h2 className="text-[9px]">{shortText(text, 40)}</h2>
      <p className="text-[12px] font-semibold mt-[5px]">{price} руб.</p>
      <Image 
        onClick={(e) => addToShoplist(id, e)}
        id="addToShopList"
        className="absolute right-[5px] bottom-[5px]"
        src={added ? "/bikini/basket_icon_active.svg" : "/bikini/basket_icon.svg"}
        alt="add to shop list button"
        width={15}
        height={15}
        priority            
      />
    </article>
  );
};