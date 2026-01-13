'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
  onClose?: () => void;
}

export default function CartItem({
  item,
  onRemove,
  onClose,
}: CartItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="relative">
        <div className="relative w-20 h-20 flex-shrink-0 bg-[#f7f7f7] rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-2"
          />
        </div>

        <Button
          onClick={() => onRemove(item.id)}
          className="absolute -top-2 -left-2 z-10 w-7 h-7 rounded-full border-[2.5px] border-[#e91e63] text-[#e91e63] flex items-center justify-center hover:bg-[#e91e63] hover:text-white transition-all duration-300 shadow-lg p-0"
        >
          <X className="w-3.5 h-3.5 stroke-[3.5px]" />
        </Button>
      </div>

      <div className="flex-1 min-w-0 pt-1">
        <Link
          href="/shop-details"
          onClick={onClose}
          className="font-bold text-[#2d3436] hover:text-[#e91e63] block mb-1 text-base transition-colors"
        >
          {item.name}
        </Link>

        <div className="flex items-center gap-1.5 text-[15px]">
          <span className="text-gray-500 font-medium">{item.quantity}</span>
          <span className="text-gray-400">×</span>
          <span className="text-[#e91e63] font-bold">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
