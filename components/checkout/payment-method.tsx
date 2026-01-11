'use client';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function PaymentMethod() {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <Accordion type="single" collapsible defaultValue="bank">
        <AccordionItem value="bank">
          <AccordionTrigger>Direct Bank Transfer</AccordionTrigger>
          <AccordionContent>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cheque">
          <AccordionTrigger>Cheque Payment</AccordionTrigger>
          <AccordionContent>
            Please send your cheque to our store address.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="paypal">
          <AccordionTrigger>PayPal</AccordionTrigger>
          <AccordionContent>
            Pay via PayPal; you can pay with your credit card if you don’t have a
            PayPal account.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full bg-red-600 hover:bg-red-700">
        Place order
      </Button>
    </div>
  );
}
