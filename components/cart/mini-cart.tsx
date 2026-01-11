
'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useCart } from '@/components/cart/cart-summary';
import CartItem from '@/components/cart/cart-item'


interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

  
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900">YOUR CART</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

 
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
            <Link
              href="/shop"
              onClick={onClose}
              className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.map((item) => (
              <CartItem
                key={String(item.id)}
                item={{ ...item, id: String(item.id) }}
                onRemove={(id: string) => removeFromCart(Number(id))}
                onClose={onClose}
         />
              ))}
            </div>

           
            <div className="px-6 py-6 border-t bg-white flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-gray-700">SUBTOTAL:</span>
                <span className="text-2xl font-bold text-pink-600">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <div className="space-y-3">
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="block w-full py-3 text-center border-2 border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors"
                >
                  VIEW CART
                </Link>
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="block w-full py-3 text-center bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors"
                >
                  CHECKOUT
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
