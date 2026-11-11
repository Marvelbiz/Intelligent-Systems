import type { Metadata } from "next";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/layoutWrapper";

export const metadata: Metadata = {
  title: "Department of Intelligent Systems | Obafemi Awolowo University",
  description: "Official portal for the Department of Intelligent Systems at OAU Ile-Ife. AI Research, Academic Blogs, and Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}