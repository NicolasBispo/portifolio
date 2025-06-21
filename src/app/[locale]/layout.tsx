import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import { type Locale } from "@/i18n/routing";
import Navbar from "@/components/shared/navbar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  console.log('locale', locale)
  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LanguageProvider>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
