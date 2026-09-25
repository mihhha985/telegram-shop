import { typeOrderStatus } from "@/types/orderType";

export const orders = [
  { id: 1, status: typeOrderStatus.Confirmed, address: "bc1p8k4d...q2m7" },
  { id: 2, status: typeOrderStatus["Not confirmed"], address: "bc1p4n9s...r5a1" },
  { id: 3, status: typeOrderStatus["Not confirmed"], address: "bc1p7c2v...j8x4" },
  { id: 4, status: typeOrderStatus.Dispute, address: "bc1p2f6h...w9k3" },
  { id: 5, status: typeOrderStatus.Closed, address: "bc1p9t3m...e6v2" },
  { id: 6, status: typeOrderStatus.Confirmed, address: "bc1p5r8q...n4d7" },
];

export const getOrder = (id: number) => orders.find((order) => order.id === id);
