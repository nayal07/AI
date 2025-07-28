import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Automation Hub - Master AI-Powered Automation",
  description: "Learn how to automate repetitive tasks using AI with step-by-step tutorials, videos, and real-world examples. From basics to advanced automation techniques.",
  keywords: ["AI automation", "machine learning", "programming tutorials", "RPA", "Python automation", "AI tools"],
  authors: [{ name: "AI Automation Hub" }],
  creator: "AI Automation Hub",
  publisher: "AI Automation Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-automation-hub.com'),
  openGraph: {
    title: "AI Automation Hub - Master AI-Powered Automation",
    description: "Learn how to automate repetitive tasks using AI with step-by-step tutorials, videos, and real-world examples.",
    url: 'https://ai-automation-hub.com',
    siteName: 'AI Automation Hub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Automation Hub - Master AI-Powered Automation",
    description: "Learn how to automate repetitive tasks using AI with step-by-step tutorials, videos, and real-world examples.",
    creator: '@aiautomationhub',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
