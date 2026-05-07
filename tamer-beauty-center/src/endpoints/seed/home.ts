import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
  expertsIds: number[]
  servicesIds: number[]
  offersIds: number[]
  reviewsIds: number[]
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
  expertsIds,
  servicesIds,
  offersIds,
  reviewsIds,
}) => {
  return {
    title: 'الرئيسية',
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'heroSlider',
      slides: [
        {
          title: 'عيادة تامر',
          subtitle: 'للتميز السريري',
          desc: 'صناعة الثقة من خلال العلم والدقة السريرية بأحدث تقنيات الليزر والعناية بالبشرة في بيئة مصممة لراحتك المطلقة.',
          img: heroImage.id,
        },
        {
          title: 'أكاديمية تامر',
          subtitle: 'صناعة القادة',
          desc: 'برامج تدريب مهني عالمية في التجميل، الأمان الرقمي، والتسويق لرفع كفاءة أعمالكم في العصر الرقمي.',
          img: metaImage.id,
        },
        {
          title: 'تجهيز العريس',
          subtitle: 'بلمسة VIP',
          desc: 'رحلة شهر كامل من التحول والاهتمام بالتفاصيل لتكون في أوج تألقك وثقتك في ليلة العمر.',
          img: heroImage.id,
        },
      ],
    },
    layout: [
      {
        blockName: 'Experts Orbit',
        blockType: 'expertsOrbit',
        heading: 'مركز القيادة والخبرات',
        subheading: 'Architects of Excellence',
        centerImage: heroImage.id,
        experts: expertsIds,
      },
      {
        blockName: 'Why Choose Us',
        blockType: 'whyChooseUs',
        heading: 'لماذا تامر بيوتي سنتر؟',
        description: 'نحن ندمج الفن مع أحدث التقنيات لتقديم تجربة استثنائية تفوق توقعاتك.',
        features: [
          { title: 'أمان وثقة', text: 'أجهزة طبية وتجميلية معتمدة عالمياً', icon: 'ShieldCheck' },
          { title: 'فريق محترف', text: 'خبراء متخصصين ومدربين على أعلى مستوى', icon: 'UserCheck' },
          { title: 'نتائج مضمونة', text: 'نستخدم أفضل المنتجات لتحقيق النتائج المرجوة', icon: 'CheckCircle2' },
        ],
      },
      {
        blockName: 'Active Offers',
        blockType: 'offersBlock',
        heading: 'العروض الحالية',
        subheading: 'Limited Exclusives',
        offers: offersIds,
      },
      {
        blockName: 'Services Catalog',
        blockType: 'servicesCatalog',
        heading: 'قائمة الخدمات الكاملة',
        subheading: 'دليل الخدمات الشامل',
        services: servicesIds,
      },
      {
        blockName: 'Groom Journey',
        blockType: 'groomJourney',
        heading: 'رحلة العريس الملكية',
        subheading: 'Groom Preparation',
        image: heroImage.id,
        journeySteps: [
          {
            title: 'الاستشارة والتقييم',
            description: 'جلسة لتحديد الاحتياجات ورسم خطة العناية.',
            icon: 'Calendar',
          },
          {
            title: 'جلسات الليزر والبشرة',
            description: 'علاجات متقدمة لضمان النضارة والإشراق.',
            icon: 'Zap',
          },
          {
            title: 'اللمسات النهائية',
            description: 'حلاقة، تسريح، ومساج للاسترخاء قبل الزفاف.',
            icon: 'Scissors',
          },
        ],
      },
      {
        blockName: 'Academy Grid',
        blockType: 'academyGrid',
        heading: 'أكاديمية تامر',
        subheading: 'Future Leaders',
        courses: [
          {
            title: 'دبلوم الحلاقة الشامل',
            category: 'برنامج مهني',
            tag: 'فنون الحلاقة',
            tagColor: '#c3f400',
            description: 'تعلم فنون الحلاقة من الصفر للاحتراف.',
            icon: 'Scissors',
            duration: '3 أشهر',
            level: 'مبتدئ إلى محترف',
            link: '/academy/barbering',
          },
          {
            title: 'دبلوم الليزر والعناية بالبشرة',
            category: 'تجميل طبي',
            tag: 'تجميل طبي',
            tagColor: '#ff4444',
            description: 'تدريب عملي على أحدث أجهزة الليزر.',
            icon: 'Activity',
            duration: 'شهران',
            level: 'متقدم',
            link: '/academy/laser',
          },
        ],
      },
      {
        blockName: 'Store Showcase',
        blockType: 'storeShowcase',
        heading: 'متجر تامر بيوتي',
        subheading: 'Luxury Products',
        featuredProducts: [
          {
            name: 'مجموعة العناية باللحية',
            category: 'عناية بالرجل',
            price: 150,
            currency: 'شيكل',
            image: metaImage.id,
          },
          {
            name: 'سيروم نضارة البشرة',
            category: 'عناية بالبشرة',
            price: 250,
            currency: 'شيكل',
            image: metaImage.id,
            isGift: true,
          },
        ],
      },
      {
        blockName: 'Reviews Section',
        blockType: 'reviewsBlock',
        heading: 'ثقة تتحدث.',
        reviews: reviewsIds,
      },
      {
        blockName: 'Location & Contact',
        blockType: 'locationContact',
        heading: 'حدد موعدك اليوم',
        subheading: 'Your Private Sanctuary',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13511.042698744574!2d34.98132924151743!3d32.1158580549495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3b07ebf0592b%3A0xe67db5d947231c6a!2sKfar%20Qasem!5e0!3m2!1sen!2sil!4v1714856000000!5m2!1sen!2sil',
        workingHours: [
          { day: 'السبت - الخميس', hours: '10:00 ص - 10:00 م' },
          { day: 'الجمعة', hours: '2:00 م - 10:00 م' },
        ],
        contactInfo: [
          { type: 'phone', value: '+972 52 7815671', icon: 'Phone' },
          { type: 'email', value: 'contact@tamerbeauty.com', icon: 'Mail' },
          { type: 'location', value: 'كفر قاسم، الشارع الرئيسي', icon: 'MapPin' },
        ],
      },
    ],
    meta: {
      title: 'الرئيسية | تامر بيوتي سنتر',
      description: 'مركز العناية الفاخرة للتميز السريري',
      image: metaImage.id,
    },
  }
}
