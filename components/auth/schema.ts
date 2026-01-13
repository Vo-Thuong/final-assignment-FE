import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, 'Vui lòng nhập username hoặc email hợp lệ'),
  password: z.string().min(6, 'Tối thiểu 6 ký tự'),
});

export const registerSchema = z.object({
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, "Tối thiểu 6 ký tự"),
});