import Head from 'next/head';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Header } from '@/components/Header';
import { Loading } from '@/components/Loading';
import useUserStore from '@/stores/users';

const TITLE = 'MedConnect';

interface PageProps {
  loading?: boolean;
  errorMessage?: string;
  admin?: boolean;
  ariaLabel?: string;
}

export function PageMeta({
  ariaLabel,
  children,
}: {
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-label={ariaLabel}
      className="min-h-screen bg-gray-100"
      role="container"
    >
      {children}
    </div>
  );
}

function Page({
  children,
  loading,
  admin,
  ariaLabel,
}: PropsWithChildren<PageProps>) {
  const router = useRouter();
  const { role } = useUserStore((state) => state.user);

  useEffect(() => {
    if (admin && role !== 'ADMIN') {
      toast.error('You do not have enough permission.');
      router.replace('/');
    }
  }, [role, admin]);

  let content = (
    <>
      {admin && <Header />}
      {children}
    </>
  );

  if (loading) {
    content = <Loading size="large" />;
  }

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta key="title" property="og:title" content="My page title" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <PageMeta ariaLabel={ariaLabel}>{content}</PageMeta>
    </>
  );
}

export default Page;
