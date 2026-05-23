import { Montserrat, Tinos } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const tinos = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "English Solution | Você fala inglês desde o primeiro dia",
    template: "%s | English Solution",
  },
  description:
    "Escola de inglês em Valparaíso de Goiás. Metodologia conversacional, ambiente acolhedor e foco em destravar sua fala desde a primeira aula.",
  metadataBase: new URL("https://englishsolution.example.com"),
  icons: {
    icon: "/brand/logo.svg",
    shortcut: "/brand/logo.png",
  },
  openGraph: {
    title: "English Solution | Você fala inglês desde o primeiro dia",
    description:
      "Aprenda inglês conversando. Sem livros caros. Aula experimental gratuita.",
    type: "website",
    locale: "pt_BR",
    images: ["/brand/logo-bg.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${tinos.variable}`}
    >
      <body className="bg-white text-brand-ink font-sans overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
