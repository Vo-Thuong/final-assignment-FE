import Link from "next/link";
import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";
import { Lock, Briefcase } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="bg-white pb-24">
      <div
        className="relative bg-[#F3F5F9] overflow-hidden mb-20"
        style={{
          backgroundImage: `url('/assets/img/banner/breadcrumb-01.jpg')`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-[1400px] px-6 md:px-10 py-[26px]">
          <nav className="flex items-center text-[15px] mb-4 font-medium">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#D2153D] transition-colors"
            >
              Home
            </Link>
            <span className="mx-3 text-gray-300 font-light">—</span>
            <span className="text-gray-400">Sign In</span>
          </nav>

          <h1 className="text-[54px] font-bold text-[#111111] leading-tight tracking-tight">
            Sign In
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[#F9F9F9] rounded-xl overflow-hidden shadow-sm">
            <div className="h-[280px] w-full overflow-hidden">
              <img
                src="/assets/img/banner/login-bg.jpg"
                className="w-full h-full object-cover"
                alt="Login"
              />
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
                  <Lock className="w-5 h-5 text-[#D2153D]" />
                </div>
                <div>
                  <h2 className="text-[26px] font-bold text-gray-900 mb-2">
                    Login Here
                  </h2>
                  <p className="text-[10px] text-gray-400 leading-relaxed max-w-[440px]">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account.
                  </p>
                </div>
              </div>

              <LoginForm />
            </div>
          </div>

          <div className="bg-[#F9F9F9] rounded-xl overflow-hidden shadow-sm">
            <div className="h-[280px] w-full overflow-hidden">
              <img
                src="/assets/img/banner/sign-bg.jpg"
                className="w-full h-full object-cover"
                alt="Register"
              />
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
                  <Briefcase className="w-5 h-5 text-[#D2153D]" />
                </div>
                <div>
                  <h2 className="text-[26px] font-bold text-gray-900 mb-2">
                    Sign Up
                  </h2>
                  <p className="text-[10px] text-gray-400 leading-relaxed max-w-[440px]">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account.
                  </p>
                </div>
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
