import type { Metadata } from 'next'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { AboutPageClient } from '@/components/AboutPageClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return {
    title: lang === 'en' ? 'About Us - SUDOOD' : 'من نحن - سدود',
    description: lang === 'en'
      ? 'Learn about SUDOOD, a Saudi manufacturer of high-quality water and gas valves with international certifications.'
      : 'تعرف على سدود، شركة سعودية متخصصة في تصنيع محابس وصمامات مياه وغاز عالية الجودة.',
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return <AboutPageClient lang={lang} />
}
