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
        <script src="https://5gvci.com/act/files/tag.min.js?z=10787994" data-cfasync="false" async></script>

        <script dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='10788014',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='10788021',s.src='https://izcle.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }} />
        <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="433270"></script>
        <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="433279"></script>
        <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="433280"></script>
        <meta name="monetag" content="feba656d33f93a59fa55b3716f908a6d" />
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
        <div data-banner-id="1485355"></div>
        <div data-banner-id="1485368"></div>
      </body>
    </html>
  );
}
