import { orders } from "@/data/orders";
import ChatPageClient from "./ChatPageClient";

export function generateStaticParams() {
	return orders.map((order) => ({ id: String(order.id) }));
}

export default async function ChatPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	return <ChatPageClient orderId={id} />;
}
