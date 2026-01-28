import Header from "@/components/Header";

// Catch-all: Full header for all routes except checkout/confirmation
export default async function CatchAllHeader() {
  "use cache";
  return <Header />;
}
