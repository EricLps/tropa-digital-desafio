"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  const router = useRouter();

  // Função chamada após login simulado
  function handleLoginSuccess() {
    router.push('/dashboard/mainPage'); // ajuste o caminho conforme sua estrutura
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