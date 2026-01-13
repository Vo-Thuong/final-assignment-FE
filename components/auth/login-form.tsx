"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schema";
import { z } from "zod";
import axiosClient from "@/lib/axios";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import { User, Lock, ArrowRight } from "lucide-react";

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      let username = data.email;

      if (data.email.includes("@")) {
        if (data.email !== "emily@example.com") {
          alert("Sai tài khoản hoặc mật khẩu");
          return;
        }
        username = "emilys";
      }

      const res = await axiosClient.post("/auth/login", {
        username,
        password: data.password,
      });

      const { accessToken, refreshToken } = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      window.dispatchEvent(new Event("auth-change"));

      router.push("/");
      router.refresh();
    } catch {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <User className="w-4 h-4 text-gray-400 group-focus-within:text-[#d51243] transition-colors" />
        </div>
        <input
          {...register("email")}
          placeholder="Username / email address"
          className="w-full h-14 pl-12 pr-5 bg-white border-none rounded-md text-[15px] focus:ring-2 focus:ring-[#d51243]/20 outline-none transition-all placeholder:text-gray-400 shadow-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 ml-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Lock className="w-4 h-4 text-gray-400 group-focus-within:text-[#d51243] transition-colors" />
        </div>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="w-full h-14 pl-12 pr-5 bg-white border-none rounded-md text-[15px] focus:ring-2 focus:ring-[#d51243]/20 outline-none transition-all placeholder:text-gray-400 shadow-sm"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1 ml-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between pb-2">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-[#d51243] focus:ring-[#d51243]"
          />
          <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors font-medium">
            Remember me
          </span>
        </label>
        <button
          type="button"
          className="text-sm font-semibold text-gray-900 hover:text-[#d51243] underline transition-colors"
        >
          Forget Password
        </button>
      </div>

      <button
        disabled={isSubmitting}
        className="group w-full h-14 bg-[#d51243] text-white rounded-md font-bold text-[15px] flex items-center justify-center gap-3 hover:bg-[#b9103a] transition-all disabled:opacity-70 shadow-lg shadow-[#d51243]/20"
      >
        Login Now
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
