// app/layout.tsx
import "./global.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "React App",
  description: "Migrated from CRA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* AuthProvider envuelve absolutamente todo */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
