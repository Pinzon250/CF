import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin",
  description: "E-ccomerce Dropshipping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="grid grid-rows-[auto,1fr] bg-zinc-950 text-zinc-100">
          <header className="border-b border-zinc-800">
            <div className="max-w-7xl mx-auto p-4 flex items-center gap-6">
              <h1 className="font-bold">Cibercity • Admin</h1>
              <nav className="flex gap-4 text-sm">
                <Link href="/admin">Dashboard</Link>
                <Link href="/admin/catalog/products">Products</Link>
                <Link href="/admin/catalog/categories">Categories</Link>
                <Link href="/admin/catalog/brands">Brands</Link>
                <Link href="/admin/orders">Orders</Link>
              </nav>
            </div>
          </header>
          <main className="max-w-7xl mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
