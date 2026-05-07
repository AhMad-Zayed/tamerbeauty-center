import type { Metadata } from 'next'
import { StorePageClient } from './StorePageClient'

export const metadata: Metadata = {
  title: 'المتجر الإلكتروني | تامر بيوتي سنتر',
  description:
    'اكتشف متجر منتجات تامر للعناية بالرجال. مجموعة حصرية من أفضل منتجات العناية بالبشرة والجسم والشعر والعطور الفاخرة.',
  keywords: ['متجر تامر', 'عناية بالبشرة للرجال', 'منتجات حلاقة', 'عطور رجالية', 'تامر بيوتي سنتر'],
  openGraph: {
    title: 'المتجر الإلكتروني | تامر بيوتي سنتر',
    description: 'تسوق أفضل منتجات العناية بالرجل، من السيرومات المجددة إلى العطور الفاخرة.',
    type: 'website',
  },
}

export default function StorePage() {
  return <StorePageClient />
}
