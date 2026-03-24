import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fastwayinvoice.com'), // Replace with your actual production URL when deploying
  title: 'Free Online Invoice Generator (No Signup) | FastWay Invoice',
  description: 'Create professional PDF invoices instantly with our free online invoice generator. No signup required, offline-first, and 100% free forever.',
  keywords: ['invoice generator', 'free invoicing software', 'freelance invoice maker', 'PDF invoice', 'business billing tool', 'free online invoice generator no signup'],
  authors: [{ name: 'FastWay Invoice' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fastwayinvoice.com',
    siteName: 'FastWay Invoice',
    title: 'Free Online Invoice Generator (No Signup) | FastWay Invoice',
    description: 'Create professional PDF invoices instantly with our free online invoice generator. No signup required, offline-first, and 100% free forever.',
    images: [
      {
        url: '/og-image.png', // Add an actual image to your public folder later
        width: 1200,
        height: 630,
        alt: 'FastWay Invoice Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Invoice Generator (No Signup) | FastWay Invoice',
    description: 'Create professional PDF invoices instantly with our free online invoice generator. No signup required, offline-first, and 100% free forever.',
    creator: '@FastWayInvoice',
    images: ['/og-image.png'],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="04ac10ad723d865c6430e535004c341d" />
<script dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='10780420',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }} />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1D1KBYHKF3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1D1KBYHKF3');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
