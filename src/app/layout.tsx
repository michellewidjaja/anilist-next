import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AniList",
  description: "AniList is a platform for tracking and discovering anime and manga."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} antialiased relative`}
      >
        <div className="relative z-10">
          <Header />
          <div className="max-w-5xl mx-auto p-6 rounded shadow mt-8">
            {children}
          </div>
        </div>
        <div className="fixed top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-700 to-pink-500 opacity-30 blur-3xl rounded-full z-0"></div>

        <footer className="max-w-5xl mx-auto text-center my-4 text-sm p-6">
          &copy; {new Date().getFullYear()} <span className="text-blue">Michelle Lee Widjaja.</span><br />Built as a test project and personal showcase. Anime data powered by <a href="https://anilist.co" target="_blank" rel="noopener noreferrer" className="underline">AniList</a>.
        </footer>
      </body>
    </html>
  );
}
