import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlexHEG - Flexible Hardware-Enabled Guarantees",
  description:
    "Advancing multilateral, privacy-preserving and trustworthy verification for AI technology governance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full bg-[#1a1f2e]/95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-white font-bold text-xl">
                  FlexHEG
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Research
                  </Link>
                  <Link
                    href="/community"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Community
                  </Link>
                  <Link
                    href="/team"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </Link>
                  <Link
                    href="/news"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    News
                  </Link>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button className="text-gray-300 hover:text-white focus:outline-none">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-[#1a1f2e]">{children}</main>
      </body>
    </html>
  );
}
