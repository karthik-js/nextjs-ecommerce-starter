"use client";

import ProductFilters from "./ProductFilters";
import ProductsGrid from "./ProductsGrid";
import type { Product } from "@/context/CartContext";

interface ProductsClientProps {
  products: Product[];
  categories: string[];
}

export default function ProductsClient({
  products,
  categories,
}: ProductsClientProps) {
  return (
    <ProductFilters categories={categories}>
      {({ selectedCategory, sortBy }) => (
        <ProductsGrid
          products={products}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
        />
      )}
    </ProductFilters>
  );
}
