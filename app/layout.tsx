import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mộc Nhiên Hotel | Khách sạn tại Liên Chiểu Đà Nẵng",
  description:
    "Landing page đặt phòng cho Mộc Nhiên Hotel, tối ưu mobile, có nút gọi lễ tân, chat Zalo và xem phòng nhanh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}