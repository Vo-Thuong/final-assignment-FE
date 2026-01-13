"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import BillingForm from "@/components/checkout/form-billing";
import OrderSummary from "@/components/checkout/your-oder";
import { useAuth } from "@/lib/use-auth";
import { useCart } from "@/components/cart/cart-summary";

const checkoutSchema = z.object({
  country: z.string().min(1, "Vui lòng chọn quốc gia"),
  firstName: z.string().min(1, "Vui lòng nhập họ"),
  lastName: z.string().min(1, "Vui lòng nhập tên"),
  companyName: z.string().optional(),
  address: z.string().min(1, "Vui lòng nhập địa chỉ"),
  apartment: z.string().optional(),
  city: z.string().min(1, "Vui lòng nhập thành phố"),
  state: z.string().min(1, "Vui lòng nhập tỉnh/thành"),
  postcode: z.string().min(1, "Vui lòng nhập mã bưu chính"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  orderNotes: z.string().optional(),
  shippingMethod: z.string().min(1),
  paymentMethod: z.string().min(1),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { isLoggedIn, isReady } = useAuth();
  const { cart } = useCart();

  const methods = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "us",
      address: "",
      apartment: "",
      city: "",
      state: "",
      postcode: "",
      phone: "",
      email: "",
      orderNotes: "",
      shippingMethod: "flat-rate",
      paymentMethod: "bank",
    },
  });

  useEffect(() => {
    if (!isReady) return;
    if (!isLoggedIn) {
      router.replace("/auth");
    }
  }, [isLoggedIn, isReady, router]);

  useEffect(() => {
    if (isReady && cart.length === 0) {
      router.replace("/cart");
    }
  }, [cart, router, isReady]);

  const onSubmit: SubmitHandler<CheckoutValues> = (data) => {
    console.log("Dữ liệu đơn hàng:", data);
    alert("Đặt hàng thành công!");
  };

  if (!isLoggedIn || cart.length === 0) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <BillingForm />
            <OrderSummary />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
