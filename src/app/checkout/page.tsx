import CheckoutSummary from "@/components/client/CheckoutSummary";

// This is a Server Component - minimal static shell
// All checkout interactivity is in the composed Client Component
export default function CheckoutPage() {
  return (
    <div className="min-h-[60vh] py-12">
      {/* Client Component handles checkout summary and payment */}
      <CheckoutSummary />
    </div>
  );
}
