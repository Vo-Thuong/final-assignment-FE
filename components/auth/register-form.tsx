"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schema";
import { z } from "zod";
import axiosClient from "@/lib/axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";

type RegisterValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterValues) => {
    try {
      const payload = {
        username: data.email.split("@")[0],
        password: data.password,
        email: data.email,
      };

      await axios.post("https://dummyjson.com/users/add", payload);

      alert("Đăng ký thành công!");
      router.push("/auth");
    } catch (error: unknown) {
      console.error("Register error:", error);

      let message = "Đăng ký thất bại. Vui lòng thử lại.";
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }

      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Mail
            className={`w-4 h-4 transition-colors ${
              errors.email
                ? "text-red-400"
                : "text-gray-400 group-focus-within:text-[#d51243]"
            }`}
          />
        </div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email address"
          className={`w-full h-14 pl-12 pr-5 bg-white border-none rounded-md text-[15px] focus:ring-2 outline-none transition-all placeholder:text-gray-400 shadow-sm ${
            errors.email
              ? "focus:ring-red-200 ring-2 ring-red-100"
              : "focus:ring-[#d51243]/20"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1.5 ml-1 animate-in fade-in slide-in-from-left-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Lock
            className={`w-4 h-4 transition-colors ${
              errors.password
                ? "text-red-400"
                : "text-gray-400 group-focus-within:text-[#d51243]"
            }`}
          />
        </div>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className={`w-full h-14 pl-12 pr-5 bg-white border-none rounded-md text-[15px] focus:ring-2 outline-none transition-all placeholder:text-gray-400 shadow-sm ${
            errors.password
              ? "focus:ring-red-200 ring-2 ring-red-100"
              : "focus:ring-[#d51243]/20"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1.5 ml-1 animate-in fade-in slide-in-from-left-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="pb-2">
        <Link
          href="/login"
          className="text-sm font-semibold text-gray-900 hover:text-[#d51243] underline transition-colors"
        >
          Already Have Account?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full h-14 bg-black text-white rounded-md font-bold text-[15px] flex items-center justify-center gap-3 hover:bg-gray-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Register Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
