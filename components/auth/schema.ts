import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, 'Vui lòng nhập username hoặc email hợp lệ'),
  password: z.string().min(6, 'Tối thiểu 6 ký tự'),
});

export const registerSchema = z
  .object({
    username: z.string().min(3, "Username phải có ít nhất 3 ký tự"),
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, "Tối thiểu 6 ký tự"),
    confirmPassword: z.string().min(6, "Tối thiểu 6 ký tự"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword'],
  });