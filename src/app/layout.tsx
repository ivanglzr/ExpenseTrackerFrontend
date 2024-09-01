import "@/ui/index.css";
import { poppins } from "@/ui/styles";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Control all the mobey that you have in a single app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
