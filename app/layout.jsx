import { Montserrat, Tinos } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const tinos = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "English Solution | Inglês que transforma. Resultados que te levam mais longe.",
    template: "%s | English Solution",
  },
  description:
    "Escola de inglês em Valparaíso de Goiás. Metodologia conversacional, ambiente acolhedor e foco em destravar sua fala desde a primeira aula.",
  metadataBase: new URL("https://english-solution-sigma.vercel.app"),
  openGraph: {
    title: "English Solution | Inglês que transforma",
    description:
      "Aprenda inglês conversando desde a primeira aula. Aula experimental gratuita.",
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
      <head>
        <meta
          name="facebook-domain-verification"
          content="am0z9anc242hdyj8f4gv8ebkbf593m"
        />
      </head>
      <body className="bg-[var(--bg-base)] text-[var(--text-primary)] font-sans overflow-x-hidden antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
