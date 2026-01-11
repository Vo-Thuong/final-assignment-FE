'use client';

import { useCart } from '@/components/cart/cart-summary';

export default function OrderSummary() {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Your Order</h2>

      <div className="space-y-3 text-sm">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <hr />

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">Free shipping</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
