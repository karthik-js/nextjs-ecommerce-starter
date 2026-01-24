"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: Product;
  variant?: "default" | "icon";
}

export default function AddToCartButton({
  product,
  variant = "default",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  if (variant === "icon") {
    return (
      <button
        onClick={() => addToCart(product)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add to Cart
      </button>
    );
  }

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm transition"
    >
      Add to Cart
    </button>
  );
}
