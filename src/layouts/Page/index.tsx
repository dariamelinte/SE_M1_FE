import Head from 'next/head';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Header } from '@/components/Header';
import { Loading } from '@/components/Loading';
import useCredentialStore from '@/stores/credential';

const TITLE = 'MedConnect';

interface PageProps {
  title?: string;
  loading?: boolean;
  errorMessage?: string;
  admin?: boolean;
}

export function PageMeta({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-gray-100">{children}</div>;
}

function Page({
  children,
  title = TITLE,
  loading,
  admin,
}: PropsWithChildren<PageProps>) {
  const router = useRouter();
  const { role } = useCredentialStore((state) => state.credential);

  useEffect(() => {
    if (admin && role !== 'ADMIN') {
      toast.error('You do not have enough permission.');
      router.replace('/');
    }
  }, [role, admin]);

  let content = (
    <>
      {admin && <Header />}
      {/* <Navbar /> */}
      {children}
    </>
  );

  if (loading) {
    content = <Loading size="large" />;
  }

  return (
    <>
      <Head>
        {title && (
          <title>{title === TITLE ? TITLE : `${title} - ${TITLE}`}</title>
        )}
        <meta key="title" property="og:title" content="My page title" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <PageMeta>{content}</PageMeta>
    </>
  );
}

export default Page;
