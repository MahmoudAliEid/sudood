import type { Metadata } from 'next'
import type { Language } from '@/lib/i18n'
import { ContactPageClient } from '@/components/ContactPageClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return {
    title: lang === 'en' ? 'Contact Us - SUDOOD' : 'تواصل معنا - سدود',
    description: lang === 'en'
      ? 'Get in touch with SUDOOD. Contact us for inquiries, quotes, or technical support.'
      : 'تواصل مع سدود للاستفسارات وطلب عروض الأسعار والدعم التقني.',
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return <ContactPageClient lang={lang} />
}
