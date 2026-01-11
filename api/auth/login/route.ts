import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/lib/models/User';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'Sai email hoặc mật khẩu' },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: 'Sai email hoặc mật khẩu' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Đăng nhập thành công',
      user: { email: user.email },
    });
  } catch {
    return NextResponse.json(
      { message: 'Lỗi server' },
      { status: 500 }
    );
  }
}