import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Forêt Connectée - Transmettons la nature vosgienne",
  description: "Découvrez l'initiative de traçabilité et valorisation du bois vosgien. Du sapin à l'objet artisanal, suivez le parcours de nos ressources forestières.",
  keywords: "Vosges, forêt, traçabilité, artisanat, bois, développement durable",
  authors: [{ name: "La Forêt Connectée" }],
  openGraph: {
    title: "La Forêt Connectée - Transmettons la nature vosgienne",
    description: "Traçabilité et valorisation du bois vosgien",
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

