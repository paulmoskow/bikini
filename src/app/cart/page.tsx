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
    <section className="flex flex-col bg-white border border-[rgba(0,0,0,0.15)] rounded-[0.5rem] px-[50px]">
      <h2 className="px-[20px] py-[20px]">Твои покупки:</h2>
      <ol className="list-decimal mb-2">
        {cards.map((card) => (
          <li className="text-[14px] relative pr-16 mb-2.5" key={card.id}>{card.name} <span className="absolute top-0 right-0"><span className="font-bold">{card.price}</span> руб.</span></li>
        ))}
      </ol>    
      <p>Итоговая стоимость<span className="mx-10">&bull;</span><span className="font-bold ml-4">{finalPrice}</span> рублей</p>
      <p className="my-[20px]">Оформить покупку</p>
      <p onClick={handleGoBack} className="text-[12px] mb-7 cursor-pointer">&larr; на предыдущую страницу</p> 
    </section>
  )
}


