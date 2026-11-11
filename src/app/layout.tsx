import type { Metadata } from "next";
import "./globals.css";
import { layoutWrapper } from "@/components/layout/LayoutWrapper";

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
        <layoutWrapper>{children}</layoutWrapper>
      </body>
    </html>
  );
}