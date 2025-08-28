import { Header } from "@/components/header";
import { ProductCard } from "@/components/marketplace/product-card";
import { mockProducts } from "@/lib/mock-data";
import { Store } from "lucide-react";

export default function MarketplacePage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="Marketplace" Icon={Store} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {mockProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
