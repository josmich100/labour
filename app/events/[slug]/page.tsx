import { EVENTS } from "@/lib/data/events";
import EventDetailClient from "./EventDetailClient";

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export const dynamicParams = false;

interface Props {
  params: { slug: string };
}

export default function EventDetailPage({ params }: Props) {

  return <EventDetailClient params={params} />;
}
