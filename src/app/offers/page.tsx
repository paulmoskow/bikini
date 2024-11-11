import Card from "../components/card";
import { items } from "../utils/constants";

export default function Offers() {
  return (
    <section className="relative w-full max-w-[1140px] min-h-[200px] bg-white mx-auto border border-[rgba(0,0,0,0.15)] rounded-[0.5rem] p-[20px] flex flex-wrap gap-[20px] justify-center items-center">
      {items.map((card) => (
        <Card
          key={card.id}
          picture={card.src}
          text={card.name}
          price={card.price}
        />
      ))}
     </section>
  );
};