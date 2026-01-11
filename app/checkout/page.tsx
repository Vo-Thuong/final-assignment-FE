'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import BillingForm from '@/components/checkout/billing-form';
import OrderSummary from '@/components/checkout/order-summary';
import PaymentMethod from '@/components/checkout/payment-method';

import { useAuth } from '@/lib/use-auth';
import { useCart } from '@/components/cart/cart-summary';

export default function CheckoutPage() {
  const router = useRouter();
  const { isLoggedIn, isReady } = useAuth();
  const { cart } = useCart();

  // 🔐 Chưa login → về login
  useEffect(() => {
  if (!isReady) return;

  if (!isLoggedIn) {
    router.replace('/auth');
  }
}, [isLoggedIn, isReady, router]);

  // 🛒 Cart rỗng → về cart
  useEffect(() => {
    if (cart.length === 0) {
      router.replace('/cart');
    }
  }, [cart, router]);

  if (!isLoggedIn || cart.length === 0) return null;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Billing */}
        <div className="lg:col-span-2">
          <BillingForm />
        </div>

        {/* Order */}
        <div className="space-y-6">
          <OrderSummary />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}
