import ProductsClient from "@/components/client/ProductsClient";
import { getProducts, getCategories } from "@/lib/db";

// This is a Server Component - fetches data from database
// Interactive filtering and products grid are composed via Client Components
export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Static header content - rendered on server */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse our collection of quality products
          </p>
        </div>

        {/* Client Component for interactive filtering and grid */}
        <ProductsClient products={products} categories={categories} />
      </div>
    </div>
  );
}
