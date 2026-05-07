export const expertsData = [
  { name: 'تامر شحادة', title: 'المدير العام', bio: 'خبير في إدارة مراكز التجميل لأكثر من 15 عاماً', experienceYears: 15 },
  { name: 'أحمد محمود', title: 'خبير ليزر', bio: 'متخصص في إزالة الشعر بالليزر بأحدث التقنيات', experienceYears: 8 },
  { name: 'سارة علي', title: 'خبيرة بشرة', bio: 'أخصائية علاج مشاكل البشرة والعناية الفائقة', experienceYears: 6 },
  { name: 'خالد مصطفى', title: 'مصمم 3D', bio: 'فنان في الحلاقة والتصميم بأسلوب عصري', experienceYears: 10 },
  { name: 'منى جمال', title: 'مدرب أكاديمي', bio: 'مدربة معتمدة في مجالات العناية والتجميل', experienceYears: 12 },
  { name: 'يوسف أحمد', title: 'خبير تسويق', bio: 'متخصص في التسويق الرقمي وإدارة العلامات التجارية', experienceYears: 7 },
]

export const servicesData = [
  { title: 'إزالة الشعر بالليزر', category: 'laser', icon: 'Zap', shortDescription: 'أحدث تقنيات الليزر لبشرة ناعمة خالية من الشعر', fullDescription: 'نستخدم أفضل أجهزة الليزر العالمية لضمان نتائج فعالة وآمنة لجميع أنواع البشرة.' },
  { title: 'علاجات البشرة المتقدمة', category: 'skin', icon: 'Sparkles', shortDescription: 'تنظيف عميق، هيدرافيشال، وعلاج التصبغات', fullDescription: 'نقدم مجموعة متكاملة من علاجات البشرة باستخدام منتجات فاخرة وتقنيات حديثة.' },
  { title: 'تجهيز العرسان VIP', category: 'other', icon: 'UserCheck', shortDescription: 'باقات متكاملة للعريس ليوم زفافه', fullDescription: 'برنامج شامل يتضمن العناية بالبشرة، الحلاقة، والمساج.' },
  { title: 'العناية بالشعر', category: 'hair', icon: 'Scissors', shortDescription: 'قص، تسريح، وبروتينات علاجية', fullDescription: 'فريق متخصص في أحدث قصات الشعر والعلاجات لاستعادة حيوية شعرك.' },
]

export const offersData = [
  { title: 'باقة العريس المتكاملة', description: 'تجهيز كامل للعريس بخصم خاص', expirationDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), newPrice: 500, oldPrice: 800 },
  { title: 'جلسات ليزر كامل الجسم', description: 'احصل على 3 جلسات ليزر بسعر جلستين', expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), newPrice: 1200, oldPrice: 1800 },
  { title: 'هيدرافيشال VIP', description: 'تنظيف وتوريد البشرة بأحدث التقنيات', expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), newPrice: 350, oldPrice: 500 },
]

export const reviewsData = [
  { name: 'محمد عبدالله', service: 'تجهيز عريس', rating: 5, text: 'تجربة رائعة جداً، طاقم عمل محترف واهتمام بأدق التفاصيل. شكراً لتامر بيوتي سنتر.', status: 'published' },
  { name: 'أحمد سعيد', service: 'ليزر', rating: 5, text: 'نتائج ممتازة من أول جلسة، أجهزة حديثة وتعامل راقي جداً.', status: 'published' },
  { name: 'ياسر محمد', service: 'عناية بالبشرة', rating: 4, text: 'مكان نظيف ومرتب، الخدمة ممتازة والأسعار مناسبة.', status: 'published' },
]
