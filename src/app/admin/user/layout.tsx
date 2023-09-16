import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next@latest workbench',
  description: 'Dashboard for managing users',
};

export default function RootAdminUsers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
