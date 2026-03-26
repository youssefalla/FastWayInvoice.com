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
        <meta name="monetag" content="feba656d33f93a59fa55b3716f908a6d" />
        <script dangerouslySetInnerHTML={{ __html: `atOptions = {'key':'8e63d3f1af0412bfe02a6c2bc107990f','format':'iframe','height':300,'width':160,'params':{}};` }} />
        <script src="https://www.highperformanceformat.com/8e63d3f1af0412bfe02a6c2bc107990f/invoke.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `atOptions = {'key':'f78fdd15a2bf50601428627c4125435c','format':'iframe','height':600,'width':160,'params':{}};` }} />
        <script src="https://www.highperformanceformat.com/f78fdd15a2bf50601428627c4125435c/invoke.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `atOptions = {'key':'b5df7e16a20ac8b33b833645a5556c10','format':'iframe','height':90,'width':728,'params':{}};` }} />
        <script src="https://www.highperformanceformat.com/b5df7e16a20ac8b33b833645a5556c10/invoke.js"></script>
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
