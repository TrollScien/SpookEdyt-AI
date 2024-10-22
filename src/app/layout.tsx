import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Creepster } from 'next/font/google';
import Cloudinary from "@/components/icons/cloudinary-logo";
import Midudev from "@/components/icons/midu-logo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SpookEdyt AI",
  description: "Transforma tus imágenes con el poder de la IA y el espíritu de Halloween",
};
const creepster = Creepster({ weight: "400", variable: '--font-creepster', subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${creepster.variable} antialiased`}
      >
        {children}
        <footer className="py-6 border-t bg-gray-950 text-foreground border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-300">
            <p>Spooky AI Hackathon.</p>
            <div className="text-center mb-4">
              <span>Hackathon patrocinada por</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Cloudinary width={36} height={36} />
                <span className="font-bold">Cloudinary</span>
              </div>
              <span>X</span>
              <div className="flex items-center gap-2">
                <Midudev width={36} height={36} />
                <span className="font-bold">Midudev</span>
              </div>
            </div>
            <p className="mt-2">¡Usa el poder de la IA para crear las imágenes más espeluznantes!</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
