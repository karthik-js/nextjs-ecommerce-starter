"use server";

import { createOrder, getOrders, type OrderItem, type Order } from "@/lib/db";

export async function placeOrder(
  items: OrderItem[],
  subtotal: number,
  tax: number,
  total: number,
): Promise<{ success: boolean; orderNumber?: string; error?: string }> {
  try {
    if (items.length === 0) {
      return { success: false, error: "Cart is empty" };
    }

    const order = createOrder(items, subtotal, tax, total);

    return {
      success: true,
      orderNumber: order.order_number,
    };
  } catch (error) {
    console.error("Failed to place order:", error);
    return {
      success: false,
      error: "Failed to place order. Please try again.",
    };
  }
}

export async function fetchOrders(): Promise<Order[]> {
  try {
    return getOrders();
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
}
