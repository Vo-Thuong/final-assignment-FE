"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BillingForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full text-[#666] font-light">
      <div className="bg-[#f7f6f7] border-t border-[#d3ced2] p-4 mb-10 flex items-center gap-2 text-[13px]">
        <span>Returning customer?</span>
        <button
          type="button"
          className="text-zinc-800 hover:underline font-normal"
        >
          Click here to login
        </button>
      </div>

      <div className="space-y-6">
        <h2 className="text-[22px] font-normal text-[#333] tracking-tight pb-3 border-b border-zinc-100 uppercase">
          Billing Details
        </h2>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-[#444]">
              Country *
            </label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    className={`h-10 rounded-none border-[#e5e5e5] focus:ring-0 w-full font-light shadow-none ${
                      errors.country ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="vn">Vietnam</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.country.message as string}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-[#444]">
                First Name *
              </label>
              <Input
                {...register("firstName")}
                className={`h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.firstName.message as string}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-[#444]">
                Last Name *
              </label>
              <Input
                {...register("lastName")}
                className={`h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.lastName.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-[#444]">
              Company Name
            </label>
            <Input
              {...register("companyName")}
              className="h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-[#444]">
              Address *
            </label>
            <div className="space-y-2">
              <Input
                {...register("address")}
                placeholder="Street address"
                className={`h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0 ${
                  errors.address ? "border-red-500" : ""
                }`}
              />
              <Input
                {...register("apartment")}
                placeholder="Apartment, suite, unit etc. (optional)"
                className="h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0"
              />
            </div>
            {errors.address && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.address.message as string}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-[#444]">
                Town / City *
              </label>
              <Input
                {...register("city")}
                className={`h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0 ${
                  errors.city ? "border-red-500" : ""
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.city.message as string}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-[#444]">
                Postcode / Zip *
              </label>
              <Input
                {...register("postcode")}
                className={`h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0 ${
                  errors.postcode ? "border-red-500" : ""
                }`}
              />
              {errors.postcode && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.postcode.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-[#444]">
                Email Address *
              </label>
              <Input
                {...register("email")}
                className={`h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-[#444]">
                Phone *
              </label>
              <Input
                {...register("phone")}
                className={`h-10 rounded-none border-[#e5e5e5] shadow-none font-light focus-visible:ring-0 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.phone.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 flex items-center gap-2">
            <Checkbox
              id="diff-addr"
              className="rounded-none border-zinc-300 shadow-none"
            />
            <label
              htmlFor="diff-addr"
              className="text-sm font-normal text-[#333] cursor-pointer"
            >
              Ship to a different address?
            </label>
          </div>

          <div className="space-y-1.5 pt-2">
            <label className="block text-[13px] font-medium text-[#444]">
              Order Notes
            </label>
            <Textarea
              {...register("orderNotes")}
              className="min-h-[100px] rounded-none border-[#e5e5e5] shadow-none font-light resize-none focus-visible:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
