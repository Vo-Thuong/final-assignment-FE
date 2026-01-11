'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function BillingForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Billing Details</h2>

      {/* Country */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Country <span className="text-red-500">*</span>
        </label>
        <Select defaultValue="us">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="vn">Vietnam</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="First name *" />
        <Input placeholder="Last name *" />
      </div>

      <Input placeholder="Company name (optional)" />
      <Input placeholder="Street address *" />
      <Input placeholder="Apartment, suite, unit (optional)" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="Town / City *" />
        <Input placeholder="State / County *" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="Postcode / Zip *" />
        <Input placeholder="Phone *" />
      </div>

      <Input placeholder="Email address *" />

      {/* Options */}
      <div className="flex items-center gap-2">
        <Checkbox id="create-account" />
        <label htmlFor="create-account" className="text-sm">
          Create an account?
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="ship-different" />
        <label htmlFor="ship-different" className="text-sm">
          Ship to a different address?
        </label>
      </div>

      <Textarea placeholder="Order notes (optional)" />
    </div>
  );
}
