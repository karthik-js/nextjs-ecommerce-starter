import CartContents from "@/components/client/CartContents";

// This is a Server Component - static shell
// Cart contents with interactivity is a composed Client Component
export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Static page title - rendered on server */}
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {/* Client Component for interactive cart management */}
        <CartContents />
      </div>
    </div>
  );
}
