import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Attenance System",
  description: "Attendance System Repository 📊📅.This GitHub project leverages Next.js to create an attendance management system 📋. It simplifies the process of tracking and managing attendance records for organizations and educational institutions, making it more efficient and accurate 🚀.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
