import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login Application",
  description: "DXC Online Assessment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        style={{ display: "flex",flexDirection: 'column', fontFamily: "sans-serif", justifyContent: "center", alignItems: "center", height: "100%" }}
      >
        {children}
      </body>
    </html>
  );
}
