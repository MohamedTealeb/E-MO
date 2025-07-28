// app/layout.js
import { Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-spectral",
  display: "swap",
});
export const metadata = {
  title: "E&Mo",
  description: "Solutions de rénovation modernes pour maisons et appartements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${spectral.variable} bg-gray-200`}
        style={{ fontFamily: "var(--font-spectral)" }}
      >
        {children}
      </body>
    </html>
  );
}
