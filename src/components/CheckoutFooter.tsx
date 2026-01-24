import Link from "next/link";

// Minimal distraction-free footer for checkout flow
export default function CheckoutFooter() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/products" className="hover:text-white transition">
              Continue Shopping
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition">
              Help
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition">
              Privacy
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm">SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
