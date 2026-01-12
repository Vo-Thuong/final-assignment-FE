'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './schema';
import { z } from 'zod';
import axiosClient from '@/lib/axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from "lucide-react";

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

const onSubmit = async (data: RegisterForm) => {
  try {
    await axiosClient.post('/users/add', {
      firstName: data.username,
      lastName: 'User',
      username: data.username,
      password: data.password,
      email: data.email,
      gender: 'male',
    });

    alert('Đăng ký thành công. Vui lòng đăng nhập.');
  } catch {
    alert('Đăng ký thất bại');
  }
};




  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Mail className="w-4 h-4 text-gray-400 group-focus-within:text-[#d51243] transition-colors" />
        </div>
        <input
          {...register("email")}
          placeholder="Email address"
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

      <div className="pb-2">
        <Link
          href="/login"
          className="text-sm font-semibold text-gray-900 hover:text-[#d51243] underline transition-colors"
        >
          Already Have Account?
        </Link>
      </div>

      <button
        disabled={isSubmitting}
        className="group w-full h-14 bg-black text-white rounded-md font-bold text-[15px] flex items-center justify-center gap-3 hover:bg-gray-800 transition-all disabled:opacity-70 shadow-lg"
      >
        Register Now
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
