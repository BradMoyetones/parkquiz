import type { Metadata } from "next";
import { META_THEME_COLORS, siteConfig } from "@/lib/config";
import "@/styles/globals.css";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: ["Quiz", "Parque", "Parque Jaime Duque", "Aprende del Parque Jaime Duque", "Trivia"],
  authors: [
    {
      name: "Brad Moyetones",
      url: "https://www.instagram.com/its.bradn",
    },
  ],
  creator: "Brad Moyetones",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: "@BradMoyetones",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.jpg",
    apple: "/apple-touch-icon_parque.jpg",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "text-foreground group/body overscroll-none antialiased font-onest",
          fontVariables
        )}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
