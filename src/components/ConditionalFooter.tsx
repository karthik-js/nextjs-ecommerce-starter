"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import CheckoutFooter from "./CheckoutFooter";

// Routes that should use the minimal checkout footer
const CHECKOUT_ROUTES = ["/checkout", "/confirmation"];

export default function ConditionalFooter() {
  const pathname = usePathname();

  const isCheckoutFlow = CHECKOUT_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  return isCheckoutFlow ? <CheckoutFooter /> : <Footer />;
}
