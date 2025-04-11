import Footer from "./components/Footer";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

// Definindo as fontes antes da exportação
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "700", // Negrito
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
