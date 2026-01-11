'use client';

import { useEffect, useState } from 'react';
import axiosClient from '@/lib/axios';

type User = {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  const syncAuth = async () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      setUser(null);
      setIsReady(true);
      return;
    }

    try {
      const res = await axiosClient.get('/auth/me');
      setUser(res.data);
    } catch {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    syncAuth();
    window.addEventListener('auth-change', syncAuth);

    return () => {
      window.removeEventListener('auth-change', syncAuth);
    };
  }, []);

  return {
    user,
    isLoggedIn: !!user,
    isReady,
  };
}
