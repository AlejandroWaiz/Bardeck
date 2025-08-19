// app/layout.tsx
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created using Next.js (migrated from CRA)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Aquí puedes meter links extra si no caben en metadata */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
