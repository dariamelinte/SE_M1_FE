import Head from 'next/head';
import type { PropsWithChildren } from 'react';
import React from 'react';

import { Footer, Loading, Navbar } from '@/components';

const TITLE = 'FiiCode';

interface PageProps {
  title?: string;
  loading?: boolean;
  errorMessage?: string;
}

export function PageMeta({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100">{children}</div>;
}

function Page({
  children,
  title = TITLE,
  loading,
  errorMessage,
}: PropsWithChildren<PageProps>) {
  let content = (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  if (loading) {
    content = <Loading size="large" />;
  }

  if (errorMessage) {
    content = <PageMeta>{errorMessage}</PageMeta>;
  }

  return (
    <>
      <Head>
        {title && (
          <title>{title === TITLE ? TITLE : `${title} - ${TITLE}`}</title>
        )}
        <meta key="title" property="og:title" content="My page title" />
      </Head>
      <PageMeta>{content}</PageMeta>
    </>
  );
}

export default Page;
