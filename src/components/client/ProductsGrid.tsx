"use client";

import Image from "next/image";
import type { Product } from "@/context/CartContext";
import AddToCartButton from "./AddToCartButton";

interface ProductsGridProps {
  products: Product[];
  selectedCategory: string;
  sortBy: string;
}

export default function ProductsGrid({
  products,
  selectedCategory,
  sortBy,
}: ProductsGridProps) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  if (sortedProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No products found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sortedProducts.map((product: Product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-5">
            <span className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
              {product.category}
            </span>
            <h3 className="font-semibold text-lg mt-1 mb-2">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-emerald-600">
                ${product.price}
              </span>
              <AddToCartButton product={product} variant="icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
