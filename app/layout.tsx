export const metadata = {
  title: 'NaijaWhot',
  description: 'Nigerian Whot Card Game on Base'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="fc:frame" content="v2" />
      </head>
      <body>{children}</body>
    </html>
  );
}
