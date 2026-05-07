import type { Metadata } from 'next'
import { AcademyPageClient } from './AcademyPageClient'

export const metadata: Metadata = {
  title: 'الأكاديمية | مركز تامر للتجميل',
  description:
    'أكاديمية تامر للتدريب الاحترافي — برامج مكثفة في الحلاقة الرجالية، العناية بالبشرة، صبغ الشعر، التسويق الرقمي وأكثر. اصنع مستقبلك في عالم العناية والمظهر.',
  keywords: ['أكاديمية تامر', 'دورات حلاقة', 'تدريب مهني', 'تجميل', 'تسويق رقمي'],
  openGraph: {
    title: 'الأكاديمية | مركز تامر للتجميل',
    description: 'نحن نؤهل نخبة المحترفين لإعادة صياغة مفاهيم العناية بالرجل والجمال السريري.',
    type: 'website',
  },
}

export default function AcademyPage() {
  return <AcademyPageClient />
}
