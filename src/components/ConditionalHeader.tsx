"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import CheckoutHeader from "./CheckoutHeader";

// Routes that should use the minimal checkout header
const CHECKOUT_ROUTES = ["/checkout", "/confirmation"];

export default function ConditionalHeader() {
  const pathname = usePathname();

  const isCheckoutFlow = CHECKOUT_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  return isCheckoutFlow ? <CheckoutHeader /> : <Header />;
}
