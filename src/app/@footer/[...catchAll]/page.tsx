import Footer from "@/components/Footer";

// Catch-all: Full footer for all routes except checkout/confirmation
export default async function CatchAllFooter() {
  "use cache";
  return <Footer />;
}
