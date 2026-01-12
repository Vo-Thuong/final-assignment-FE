'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/components/cart/cart-summary';

export default function CheckoutCartPage() {
  const { cart, removeFromCart, getTotalPrice } = useCart();


  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-500 mb-8">
          Your shopping cart is empty
        </p>

        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6 flex gap-6 items-center">
             
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href="/shop-details"
                    className="font-semibold text-lg hover:text-pink-600 line-clamp-2"
                  >
                    {item.name}
                  </Link>

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity:{' '}
                    <span className="font-medium">
                      {item.quantity}
                    </span>
                  </p>

                  <p className="text-pink-600 font-bold mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

         
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-500" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-pink-600">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <Button className="w-full mt-4" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
