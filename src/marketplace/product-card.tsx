import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/lib/types";
import { Star, ArrowRight } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col overflow-hidden">
        <CardHeader className="p-0">
            <div className="relative aspect-square">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    data-ai-hint="product image"
                />
            </div>
        </CardHeader>
        <CardContent className="flex-1 p-4">
            <Badge variant="secondary" className="mb-2">{product.category}</Badge>
            <CardTitle className="mb-2 text-lg">{product.name}</CardTitle>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4 pt-0">
            <div className="flex w-full items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating.toFixed(1)}</span>
                    <span className="ml-1">({product.reviews.toLocaleString()} reviews)</span>
                </div>
            </div>
             <Button asChild className="mt-2 w-full">
                <Link href={`/marketplace/${product.id}`}>
                    View Item <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
             </Button>
        </CardFooter>
    </Card>
  );
}
