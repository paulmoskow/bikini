"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setCards } from '../../redux/cardsSlice';
import { useRouter } from "next/navigation";
import Card from "../components/card";
import { items } from "../utils/constants";

export default function Offers() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.cards);

  //load cards from api, file or localStorage and prevent fallback to initial state 
  React.useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      dispatch(setCards(JSON.parse(savedCards)));
    } else {
      dispatch(setCards(items));
    }
  }, [dispatch])


  const handleCardClick = (id: number, event: React.MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.id.includes("addToShopList")) {
      return;
    }
    router.push(`/bikini/offers/${id.toString()}`); 
  };

  return (
    <section className="relative w-full max-w-[1140px] min-h-[200px] bg-white mx-auto border border-[rgba(0,0,0,0.15)] rounded-[0.5rem] p-[20px] flex flex-wrap gap-[20px] justify-center items-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          picture={card.picture}
          text={card.name}
          price={card.price}
          added={card.added}
          onClick={(event) => handleCardClick(card.id, event)}
        />
      ))}
     </section>
  );
};