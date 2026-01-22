import type { Metadata } from 'next'
import type { Language } from '@/lib/i18n'
import { AIFuturePageClient } from '@/components/AIFuturePageClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return {
    title: lang === 'en' ? 'Smart Thread Ball Valve - SUDOOD' : 'الصمام الذكي - سدود',
    description: lang === 'en'
      ? 'Discover SUDOOD\'s innovative Smart Thread Ball Valve with remote control, smart alerts, and IoT connectivity.'
      : 'اكتشف الصمام الذكي من سدود مع التحكم عن بعد والإنذارات الذكية واتصال IoT.',
  }
}

export default async function AIFuturePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: paramLang } = await params
  const lang = (paramLang as Language) || 'en'

  return <AIFuturePageClient lang={lang} />
}
