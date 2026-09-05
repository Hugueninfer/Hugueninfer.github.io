import type { Metadata } from 'next';
import ReferenceSite from './reference-site';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pedro Huguenin — Engenharia de Software e IA Aplicada',
  description: 'Backend, projetos full stack e transição para engenharia de software com IA aplicada.',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/index-sXIK4by5.css" />
        <link rel="stylesheet" href="/assets/theme-DOAwoE7X.css" />
        <link rel="stylesheet" href="/assets/custom/interface-palette.css" />
        <link rel="stylesheet" href="/assets/custom/personal-content.css" />
      </head>
      <body><ReferenceSite />{children}</body>
    </html>
  );
}
