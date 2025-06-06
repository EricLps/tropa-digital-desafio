"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  const router = useRouter();

  function handleLoginSuccess() {
    router.push('/dashboard/mainPage');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f8fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}