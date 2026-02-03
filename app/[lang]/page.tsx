import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { HomePageClient } from '@/components/HomePageClient'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: paramLang } = await params
  const validLangs: Language[] = ['en', 'ar']
  const lang = validLangs.includes(paramLang as Language) ? (paramLang as Language) : 'en'
  const t = translations[lang]

  return {
    title: t.home.title,
    description: t.home.subtitle,
    keywords: lang === 'en'
      ? ['water valves', 'gas valves', 'SUDOOD', 'Saudi manufacturer', 'SASO', 'quality valves']
      : ['محابس مياه', 'صمامات غاز', 'سدود', 'تصنيع سعودي', 'جودة عالية'],
    openGraph: {
      title: t.home.title,
      description: t.home.subtitle,
      type: 'website',
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return <HomePageClient lang={lang} />
}
