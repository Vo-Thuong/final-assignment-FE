'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.dispatchEvent(new Event('auth-change'));
    router.push('/');
    router.refresh(); 
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left text-red-600 hover:bg-gray-50 px-4 py-2"
    >
      Logout
    </button>
  );
}