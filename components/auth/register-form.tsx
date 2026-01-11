'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './schema';
import { z } from 'zod';
import axiosClient from '@/lib/axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4"
    >
      <h1 className="text-2xl font-bold">Register</h1>

      {/* USERNAME */}
      <div>
        <input
          {...register('username')}
          placeholder="Username"
          className="w-full border p-2 rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">
            {errors.username.message}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <input
          {...register('email')}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* PASSWORD */}
      <div>
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* CONFIRM PASSWORD */}
      <div>
        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm Password"
          className="w-full border p-2 rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="w-full bg-black text-white py-2 rounded"
      >
        Register
      </button>

      <p className="text-sm text-center">
        Already have an account?{' '}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  );
}
