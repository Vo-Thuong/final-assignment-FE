"use client";

import { useCart } from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext, Controller } from "react-hook-form";

export default function CombinedOrderSummary() {
  const { cart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  const { control } = useFormContext();

  return (
    <div className="w-full font-light">
      <div className="bg-[#f7f6f7] border-t border-[#d3ced2] p-4 mb-10 flex items-center gap-2 text-[13px] text-[#666]">
        <span>Have a coupon?</span>
        <button
          type="button"
          className="text-zinc-800 hover:underline font-normal"
        >
          Click here to enter your code
        </button>
      </div>

      <div className="border border-zinc-200 p-8">
        <h2 className="text-[22px] font-normal text-[#333] tracking-tight pb-3 border-b border-zinc-100 uppercase mb-6">
          Your order
        </h2>

        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 text-[#333] text-[12px] tracking-widest uppercase">
              <th className="py-2 text-left font-semibold">Product</th>
              <th className="py-2 text-right font-semibold">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {cart.map((item) => (
              <tr key={item.id} className="text-[#666]">
                <td className="py-4">
                  {item.name}{" "}
                  <span className="text-[#333] font-normal ml-1">
                    × {item.quantity}
                  </span>
                </td>
                <td className="py-4 text-right text-[#333] font-normal">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="text-[#333]">
              <td className="py-4 font-medium">Subtotal</td>
              <td className="py-4 text-right font-normal text-[#666]">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="py-4 font-medium text-[#333] align-top">
                Shipping
              </td>
              <td className="py-4 text-right">
                <Controller
                  name="shippingMethod"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-2 inline-flex flex-col items-end"
                    >
                      <div className="flex items-center gap-2">
                        <Label
                          htmlFor="flat-rate"
                          className="text-[13px] font-light cursor-pointer"
                        >
                          Flat Rate: $7.00
                        </Label>
                        <RadioGroupItem
                          value="flat-rate"
                          id="flat-rate"
                          className="w-3.5 h-3.5 border-zinc-300"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Label
                          htmlFor="free-shipping"
                          className="text-[13px] font-light cursor-pointer"
                        >
                          Free Shipping
                        </Label>
                        <RadioGroupItem
                          value="free-shipping"
                          id="free-shipping"
                          className="w-3.5 h-3.5 border-zinc-300"
                        />
                      </div>
                    </RadioGroup>
                  )}
                />
              </td>
            </tr>
            <tr className="text-[16px] border-t border-zinc-200">
              <td className="py-6 font-medium text-[#333]">Total</td>
              <td className="py-6 text-right font-semibold text-[#d61c4e] text-xl">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <Accordion
                type="single"
                collapsible
                value={field.value}
                onValueChange={field.onChange}
                className="border-none"
              >
                <AccordionItem value="bank" className="border-none mb-2">
                  <AccordionTrigger className="hover:no-underline font-medium text-[#333] text-[13px] py-3 uppercase tracking-wider">
                    Direct Bank Transfer
                  </AccordionTrigger>
                  <AccordionContent className="text-[#888] font-light leading-relaxed bg-[#fbfbfb] p-4 text-[13px]">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order wont be
                    shipped until the funds have cleared in our account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cheque" className="border-none mb-2">
                  <AccordionTrigger className="hover:no-underline font-medium text-[#333] text-[13px] py-3 uppercase tracking-wider">
                    Cheque Payment
                  </AccordionTrigger>
                  <AccordionContent className="text-[#888] font-light bg-[#fbfbfb] p-4 text-[13px]">
                    Please send your cheque to our store address.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="paypal" className="border-none">
                  <AccordionTrigger className="hover:no-underline font-medium text-[#333] text-[13px] py-3 uppercase tracking-wider">
                    PayPal
                  </AccordionTrigger>
                  <AccordionContent className="text-[#888] font-light bg-[#fbfbfb] p-4 text-[13px]">
                    Pay via PayPal; you can pay with your credit card if you
                    dont have a PayPal account.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full h-[54px] mt-8 bg-[#d61c4e] hover:bg-[#b51741] text-white font-semibold rounded-xl text-[16px] transition-all shadow-md shadow-red-100 border-none normal-case tracking-normal"
        >
          Place order
        </Button>
      </div>
    </div>
  );
}
