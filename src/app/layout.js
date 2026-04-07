import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "AyurCare | Personalized Ayurvedic Care in the Himalayas",
  description: "Doctor-led personalized care for chronic and difficult-to-treat conditions, with medically supervised Panchakarma and structured Ayurvedic learning programs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
