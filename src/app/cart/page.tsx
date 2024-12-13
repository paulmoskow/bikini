"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { toggleAdded } from "../../redux/cardsSlice";
import Image from "next/image";

export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();

  const cards = useSelector((state: RootState) =>
    state.cards.cards.filter((card) => card.added === true)
  );

  const handleGoBack = () => {
    router.back();
  }

  const deleteFromShoplist = (id: number) => {
    dispatch(toggleAdded(id));
  };
  
  const finalPrice = cards.reduce((total, card) => total + card.price, 0);

  return (
    <section className="flex flex-col bg-white border border-[rgba(0,0,0,0.15)] rounded-[0.5rem] px-[50px] sm:w-[500px] w-11/12">
      <h2 className="text-center py-[20px]">
        {cards.length > 0 ? "Твои покупки:" : "В твоей корзине пока пусто"}
      </h2>
      {cards.length > 0 && (
        <ol className="list-decimal mb-2">
          {cards.map((card) => (
            <li className="text-[13px] relative pr-[70px] mb-2.5" key={card.id}>
              {card.name} 
              <span className="absolute top-0 right-0">
                <span className="font-bold">{card.price}</span> руб.
              </span>
              <Image
                onClick={() => deleteFromShoplist(card.id)}
                className="absolute top-[4px] right-[-20px] cursor-pointer"
                src="/bikini/trash.svg"
                alt="Удалить товар"
                width={11}
                height={13}
                priority
              />
            </li>
          ))}
        </ol> 
      )}
      <p className={cards.length > 0 ? "" : "hidden"}>
        Итоговая стоимость<span className="mx-6">&bull;</span>
        <span className="font-bold ml-4">{finalPrice}</span> руб.
      </p>
      <p className={cards.length > 0 ? "text-center my-[20px] border-[2px] border-[#FFE2F0] rounded-[0.5rem] cursor-pointer p-1 shadow-sm" : "hidden"}>
        Оформить покупку
      </p> 
      <p onClick={handleGoBack} className="text-[12px] mb-7 cursor-pointer text-center">&larr; на предыдущую страницу</p> 
    </section>
  )
}


