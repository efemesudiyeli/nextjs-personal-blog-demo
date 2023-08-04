import "../styles/reset.css";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "efemesudiyeli.dev",
  description: "Efe Mesudiyeli kişisel portfolyo ve iletişim web sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
