import { orders } from "@/data/orders";
import OrderPageClient from "./OrderPageClient";

export function generateStaticParams() {
	return orders.map((order) => ({ id: String(order.id) }));
}

export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	return <OrderPageClient orderId={id} />;
}
