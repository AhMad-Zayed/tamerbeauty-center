import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
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

export default async function StorePage() {
  const payload = await getPayload({ config: configPromise })

  const productsRes = await payload.find({
    collection: 'products',
    depth: 1,
    limit: 100,
  })

  const categoriesRes = await payload.find({
    collection: 'store-categories',
    depth: 0,
    limit: 100,
  })

  const products = productsRes.docs
  const categories = categoriesRes.docs.map((doc) => doc.title)

  return <StorePageClient initialProducts={products} initialCategories={categories} />
}
