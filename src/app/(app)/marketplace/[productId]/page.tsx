import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockProducts } from "@/lib/mock-data";
import { ChevronLeft, ShoppingCart, Star, Store } from "lucide-react";

export default function ProductPage({ params }: { params: { productId: string } }) {
  const product = mockProducts.find(p => p.id === params.productId);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  if (!product) {
    return (
      <div className="flex h-full min-h-0 flex-col items-center justify-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title={product.name} Icon={Store} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-4xl">
            <Button asChild variant="outline" className="mb-4">
                <Link href="/marketplace">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Marketplace
                </Link>
            </Button>
            <Card>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-6">
                        <div className="relative aspect-square overflow-hidden rounded-lg border">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover"
                            data-ai-hint="product image"
                        />
                        </div>
                    </div>
                    <div className="flex flex-col p-6">
                        <CardHeader className="p-0">
                            <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                            <CardTitle className="mt-2 text-3xl">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 p-0 mt-4">
                            <p className="text-muted-foreground">{product.description}</p>
                            <div className="mt-4 flex items-center gap-1 text-sm">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">{product.rating.toFixed(1)}</span>
                                <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                                    <AvatarFallback>{getInitials(product.seller.name)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm text-muted-foreground">Sold by</p>
                                    <p className="font-semibold">{product.seller.name}</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col items-start p-0 mt-6">
                             <p className="text-4xl font-bold">${product.price.toFixed(2)}</p>
                             <Button size="lg" className="mt-4 w-full">
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
      </main>
    </div>
  );
}
