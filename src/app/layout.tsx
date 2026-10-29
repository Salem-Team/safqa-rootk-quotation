import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "عرض فني وتجاري — منصة صفقة | ROOTK Systems",
  description:
    "عرض فني وتجاري لتطوير الأنظمة الإدارية المخصصة لمنصة صفقة — مقدّم من ROOTK Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
