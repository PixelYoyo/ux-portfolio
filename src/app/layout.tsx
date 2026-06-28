import type { Metadata } from 'next';
import { Bricolage_Grotesque, Space_Mono } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';
import type { SiteSettings } from '@/sanity/lib/types';
import { nav, footer as footerContent } from '@/content/portfolio';

config.autoAddCss = false;

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Yolandi Lehner — UX Portfolio',
  description: 'UX portfolio of Yolandi Lehner',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch<SiteSettings | null>(siteSettingsQuery);

  const navProps = settings
    ? {
        logoName: settings.logoName,
        links:    settings.navLinks,
      }
    : {
        logoName: nav.logoName,
        links:    [...nav.links],
      };

  const footerProps = settings
    ? {
        name:      settings.footerName,
        currently: { role: settings.footerRole, location: settings.footerLocation },
        contact:   {
          linkedinLabel: settings.footerLinkedinLabel,
          linkedinHref:  settings.footerLinkedinHref,
          emailLabel:    settings.footerEmailLabel,
          emailHref:     settings.footerEmailHref,
        },
        copyright: settings.footerCopyright,
      }
    : {
        name:      footerContent.name,
        currently: footerContent.currently,
        contact:   footerContent.contact,
        copyright: footerContent.copyright,
      };

  return (
    <html lang="en" className={`${bricolage.variable} ${spaceMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
        <Navigation {...navProps} />
        <main className="flex-1">{children}</main>
        <Footer content={footerProps} />
      </body>
    </html>
  );
}
