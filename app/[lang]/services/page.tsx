import type { Metadata } from 'next'
import type { Language } from '@/lib/i18n'
import { ServicesPageClient } from '@/components/ServicesPageClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return {
    title: lang === 'en' ? 'Our Services - SUDOOD' : 'خدماتنا - سدود',
    description: lang === 'en'
      ? 'Explore SUDOOD\'s comprehensive services: manufacturing, assembly, supply, quality assurance, and technical support.'
      : 'اكتشف خدماتنا الشاملة: التصنيع والتجميع والتوريد والجودة والدعم التقني.',
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return <ServicesPageClient lang={lang} />
}
