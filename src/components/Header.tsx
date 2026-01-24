import Link from "next/link";
import CartIcon from "./client/CartIcon";

// Server Component - only the CartIcon is a client component
export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition"
          >
            ShopEase
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-emerald-400 transition">
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-emerald-400 transition"
            >
              Products
            </Link>
            <Link href="/orders" className="hover:text-emerald-400 transition">
              Orders
            </Link>
            {/* Client Component for cart icon with dynamic count */}
            <CartIcon />
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Client Component for mobile cart icon */}
            <CartIcon />
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="md:hidden pb-4 flex space-x-6">
          <Link href="/" className="text-sm hover:text-emerald-400 transition">
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm hover:text-emerald-400 transition"
          >
            Products
          </Link>
          <Link
            href="/orders"
            className="text-sm hover:text-emerald-400 transition"
          >
            Orders
          </Link>
        </nav>
      </div>
    </header>
  );
}
