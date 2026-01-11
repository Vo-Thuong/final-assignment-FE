import Link from "next/link";
import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";

export default function AuthPage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      
      {/* BREADCRUMB */}
      <div className="py-8">
        <nav className="text-sm bg-muted mb-2">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">–</span>
          <span >Sign In</span>
        </nav>

        <h1 className="text-3xl font-bold">Sign In</h1>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LOGIN */}
        <div className="shadow rounded-lg overflow-hidden bg-card">
          <img
            src="/assets/img/banner/login-bg.jpg"
            className="w-full h-60 object-cover"
            alt="Login"
          />

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Login Here</h2>
            <p className="text-sm text-gray-500 mb-4">
              Your personal data will be used...
            </p>

            <LoginForm />
          </div>
        </div>

        {/* REGISTER */}
        <div className="shadow rounded-lg overflow-hidden bg-card">
          <img
            src="/assets/img/banner/sign-bg.jpg"
            className="w-full h-60 object-cover"
            alt="Register"
          />

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Sign Up</h2>
            <p className="text-sm text-gray-500 mb-4">
              Your personal data will be used...
            </p>

            <RegisterForm />
          </div>
        </div>

      </div>
    </div>
  );
}
