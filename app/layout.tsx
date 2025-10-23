import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Forêt Connectée - Transmettons la nature vosgienne",
  description: "Proposition concrète de traçabilité et valorisation du bois vosgien. Du sapin à l'objet artisanal, une initiative pour les Vosges.",
  keywords: "Vosges, forêt, traçabilité, artisanat, bois, développement durable, Vosj'innove",
  authors: [{ name: "Vosj'innove" }],
  openGraph: {
    title: "La Forêt Connectée - Transmettons la nature vosgienne",
    description: "Proposition de traçabilité et valorisation du bois vosgien",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

