import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/Header";
import Providers from "@/lib/providers";
import StyledComponentsRegistry from "@/lib/registry";

const defaultUrl = "http://localhost:3000";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Chat Room",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <html lang="ja">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyle />
            <Header />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
