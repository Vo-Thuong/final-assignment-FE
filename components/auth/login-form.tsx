'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './schema';
import { z } from 'zod';
import axiosClient from '@/lib/axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

    // nhập email → map sang user demo
    if (data.email.includes('@')) {
      if (data.email !== 'emily@example.com') {
        alert('Sai tài khoản hoặc mật khẩu');
        return;
      }
      username = 'emilys';
    }

    const res = await axiosClient.post('/auth/login', {
      username,
      password: data.password,
    });

    const { accessToken, refreshToken } = res.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    window.dispatchEvent(new Event('auth-change'));

    // redirect để reset layout
    window.location.href = '/';
  } catch {
    alert('Sai tài khoản hoặc mật khẩu');
  }
};





  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4"
    >
      <h1 className="text-2xl font-bold">Login</h1>

      <div>
        <input
          {...register('email')}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

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

      <button
        disabled={isSubmitting}
        className="w-full bg-black text-white py-2 rounded"
      >
        Login
      </button>
      <p className="text-sm text-center">
        Don't have an account?{' '}
        <Link href="/register" className="underline">
            Register
        </Link>
        </p>
    </form>
  );
}