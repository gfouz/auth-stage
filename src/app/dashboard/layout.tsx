import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next@latest workbench',
  description: 'Generated by create next app',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
