import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/lib/models/User';

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();
    await connectDB();

    const existed = await User.findOne({ email });
    if (existed) {
      return NextResponse.json(
        { message: 'Email đã tồn tại' },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashed });

    return NextResponse.json({ message: 'Đăng ký thành công' });
  } catch {
    return NextResponse.json(
      { message: 'Lỗi server' },
      { status: 500 }
    );
  }
}