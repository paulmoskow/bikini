import CardDetailsClient from "@/app/components/cardDetailsClient";
import { items } from "@/app/utils/constants";

export async function generateStaticParams() {
  return items.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function CardDetails({ params }: { params: { id: string}}) {
  const cardId = parseInt(params.id, 10);
  const card = items.find((item) => item.id === cardId);

  if (!card) {
    return <h3>Loading...</h3>;
  }

  return <CardDetailsClient card={card}/>
}
