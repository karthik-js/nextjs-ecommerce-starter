import Image from "next/image";
import type { Product } from "@/context/CartContext";
import AddToCartButton from "./client/AddToCartButton";

interface ProductCardProps {
  product: Product;
}

// This is a Server Component that composes a Client Component (AddToCartButton)
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-emerald-600 font-medium">
          {product.category}
        </span>
        <h3 className="font-semibold mt-1 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-emerald-600">
            ${product.price}
          </span>
          {/* Client Component composed within Server Component */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
