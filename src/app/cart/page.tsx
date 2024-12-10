"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();

  const cards = useSelector((state: RootState) =>
    state.cards.cards.filter((card) => card.added === true)
  );

  const handleGoBack = () => {
    router.back();
  }
  
  const finalPrice = cards.reduce((total, card) => total + card.price, 0);

  return (
    <section className="flex flex-col">
      <ol>
        {cards.map((card) => (
          <li className="text-[14px]" key={card.id}>{card.name} за {card.price} рублей</li>
        ))}
      </ol> 
      <p>Итоговая стоимость: {finalPrice} рублей</p>
      <p className="my-[20px]">Оформить покупку</p>
      <p onClick={handleGoBack} className="text-[12px] cursor-pointer">&larr; go back</p> 
    </section>


  )
}