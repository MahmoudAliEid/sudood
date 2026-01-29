export type Language = 'en' | 'ar'

export const LANGUAGES = {
  en: 'English',
  ar: 'العربية',
} as const

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      ai: 'AI Products',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    // CTA
    cta: {
      requestQuote: 'Request Quote',
      learnMore: 'Learn More',
      viewProducts: 'View Products',
    },
    // Home
    home: {
      title: 'SUDOOD — High-Quality Water & Gas Valves',
      subtitle: 'SUDOOD is a Saudi brand specialized in manufacturing and assembling high-quality water and gas valves. Our products meet international and Saudi standards and are engineered for durability in GCC conditions.',
      hero: 'Certified Excellence in Water & Gas Solutions',
      heroDesc: 'Leading Saudi manufacturer of premium brass valves with international certifications',
      badges: {
        experience: '20+ Years Excellence',
        quality: 'Premium Materials',
        certified: 'SASO Certified'
      }
    },
    // About
    about: {
      title: 'About SUDOOD',
      description: 'SUDOOD is a Saudi company focusing on supplying and manufacturing high-purity brass valves engineered for long life and resistance to harsh water conditions. Production and inspection are overseen by a Saudi engineering team and certified to SASO, UL, CSA, FM and ISO9001.',
      mission: 'Our Mission',
      missionDesc: 'To provide premium quality valves that meet the highest international standards while supporting regional infrastructure and industrial growth.',
      vision: 'Our Vision',
      visionDesc: 'To be the preferred partner for water and gas valve solutions across the GCC region.',
    },
    // Services
    services: {
      title: 'Our Services',
      service1: 'Custom Manufacturing & Assembly',
      service1Desc: 'Manufacturing and assembly of valves according to project specifications.',
      service2: 'Supply to Contractors & Retailers',
      service2Desc: 'Supply to contractors, plumbing retailers, and industrial projects.',
      service3: 'Technical Support & Integration',
      service3Desc: 'Technical support and smart product integration solutions.',
      service4: 'Quality Testing & Certification',
      service4Desc: 'Quality testing, inspection, and certification compliance.',
    },
    // Products
    products: {
      title: 'Our Products',
      subtitle: 'Wide range of high-quality valves engineered for durability',
      filterAll: 'All',
      smart: 'Smart Valves',
      standard: 'Standard Valves',
      viewDetails: 'View Details',
      category: 'Category',
      series: 'Series',
      certifications: 'Certifications',
      specifications: 'Technical Specifications',
      applications: 'Applications',
      relatedProducts: 'Related Products',
      downloadDatasheet: 'Download Datasheet',
      requestQuote: 'Request Quote',
      needHelp: 'Need Help?',
      needHelpDesc: 'Our engineering team is ready to assist you with selection and sizing.',
      contactSales: 'Contact Sales',
      downloads: 'Downloads',
      technicalDatasheet: 'Technical Datasheet (PDF)',
      installationManual: 'Installation Manual',
      bimObjects: 'BIM Objects',
      certifiedBy: 'Certified & Approved By',
      waterDistribution: 'Water Distribution Networks',
      waterTreatment: 'Water Treatment Plants',
      pumpStations: 'Pump Stations',
      fireProtection: 'Fire Protection Systems',
      viewAllProducts: 'View All Products',
    },
    // Contact
    contact: {
      title: 'Contact & Request Quote',
      description: 'Submit your inquiry and our team will respond within 24 hours.',
      form: {
        company: 'Company Name',
        contact: 'Contact Person',
        email: 'Email Address',
        phone: 'Phone Number',
        address: 'Project Address (Optional)',
        product: 'Product Name',
        quantity: 'Quantity',
        notes: 'Additional Notes',
        submit: 'Send Request',
        success: 'Request sent successfully! We will contact you soon.',
        error: 'Failed to send request. Please try again.',
      },
    },
    // Certifications
    certifications: {
      title: 'Quality Certifications',
      description: 'SUDOOD products meet leading global certifications in safety and quality.',
    },
    // Footer
    footer: {
      address: 'Saudi Arabia',
      email: 'info@sudood.sa',
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      products: 'منتجاتنا',
      ai: 'منتجات المستقبل',
      certifications: 'الشهادات',
      contact: 'تواصل معنا',
    },
    // CTA
    cta: {
      requestQuote: 'اطلب عرض سعر',
      learnMore: 'تعرف على المزيد',
      viewProducts: 'عرض المنتجات',
    },
    // Home
    home: {
      title: 'سدود — محابس و صمامات مياه و غاز بجودة عالية',
      subtitle: 'سدود علامة سعودية متخصصة في تصنيع و تجميع محابس المياه و الصمامات و ملحقاتها وفق أعلى معايير الجودة العالمية و السعودية.',
      hero: 'التميز المعتمد في حلول المياه والغاز',
      heroDesc: 'الشركة السعودية الرائدة في تصنيع محابس النحاس الفاخرة بشهادات دولية',
      badges: {
        experience: '+20 عاماً من التميز',
        quality: 'مواد متميزة',
        certified: 'معتمد من SASO'
      }
    },
    // About
    about: {
      title: 'عن سدود',
      description: 'سودود شركة سعودية تركز على توريد و تصنيع محابس و صمامات مياه و غاز من مواد عالية النقاء (نحاس برونز) وتصاميم تتحمل الملوحة والمياه العسرة. جميع العمليات تحت إشراف فريق هندسي سعودي مع شهادات جودة عالمية.',
      mission: 'مهمتنا',
      missionDesc: 'تقديم محابس و صمامات بجودة عالمية تحقق أعلى المعايير الدولية مع دعم النمو الإقليمي للبنية التحتية والقطاع الصناعي.',
      vision: 'رؤيتنا',
      visionDesc: 'أن نكون الشريك المفضل لحلول محابس و صمامات المياه والغاز في منطقة الخليج.',
    },
    // Services
    services: {
      title: 'خدماتنا',
      service1: 'التصنيع والتجميع المخصص',
      service1Desc: 'تصنيع و تجميع محابس و صمامات وفق مواصفات المشروع.',
      service2: 'التوريد للمقاولين والمتاجر',
      service2Desc: 'توريد لمقاولين و متاجر السباكة و المشاريع العامة و الصناعية.',
      service3: 'الدعم الفني والتكامل الذكي',
      service3Desc: 'دعم تقني و تركيب للمنتجات الذكية و التكاملات المتقدمة.',
      service4: 'الاختبار والشهادات',
      service4Desc: 'اختبارات و فحص جودة و مطابقة شهادات دولية.',
    },
    // Products
    products: {
      title: 'منتجاتنا',
      subtitle: 'تشكيلة واسعة من المحابس و الصمامات عالية الجودة المصممة لتدوم',
      filterAll: 'الكل',
      smart: 'المحابس الذكية',
      standard: 'محابس قياسية',
      viewDetails: 'التفاصيل',
      category: 'الفئة',
      series: 'السلسلة',
      certifications: 'الشهادات',
      specifications: 'المواصفات الفنية',
      applications: 'التطبيقات',
      relatedProducts: 'منتجات ذات صلة',
      downloadDatasheet: 'تحميل البيانات الفنية',
      requestQuote: 'اطلب عرض سعر',
      needHelp: 'هل تحتاج مساعدة؟',
      needHelpDesc: 'فريقنا الهندسي جاهز لمساعدتك في الاختيار والتحجيم.',
      contactSales: 'تواصل مع المبيعات',
      downloads: 'التنزيلات',
      technicalDatasheet: 'البيانات الفنية (PDF)',
      installationManual: 'دليل التركيب',
      bimObjects: 'ملفات BIM',
      certifiedBy: 'معتمد من قبل',
      waterDistribution: 'شبكات توزيع المياه',
      waterTreatment: 'محطات معالجة المياه',
      pumpStations: 'محطات الضخ',
      fireProtection: 'أنظمة الحماية من الحرائق',
      viewAllProducts: 'عرض جميع المنتجات',
    },
    // Contact
    contact: {
      title: 'تواصل معنا واطلب عرض سعر',
      description: 'قدم استفسارك وسيتواصل معك الفريق خلال 24 ساعة.',
      form: {
        company: 'اسم الشركة',
        contact: 'اسم جهة الاتصال',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        address: 'عنوان المشروع (اختياري)',
        product: 'اسم المنتج',
        quantity: 'الكمية',
        notes: 'ملاحظات إضافية',
        submit: 'إرسال الطلب',
        success: 'تم إرسال طلبك بنجاح! سيتواصل معك الفريق قريباً.',
        error: 'فشل إرسال الطلب. يرجى المحاولة مرة أخرى.',
      },
    },
    // Certifications
    certifications: {
      title: 'شهادات الجودة',
      description: 'منتجات سدود تستوفي أعلى الشهادات الدولية في السلامة والجودة.',
    },
    // Footer
    footer: {
      address: 'المملكة العربية السعودية',
      email: 'info@sudood.sa',
      rights: 'جميع الحقوق محفوظة',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
  },
};

export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}
