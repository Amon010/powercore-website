export type Lang = 'zh' | 'en' | 'ja'

export const langNames: Record<Lang, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
}

export const langFlags: Record<Lang, string> = {
  zh: '🇨🇳',
  en: '🇺🇸',
  ja: '🇯🇵',
}

export type Translations = typeof zh

/* ===================== 中文 ===================== */
const zh = {
  nav: {
    home: '首页',
    about: '关于我们',
    products: '产品中心',
    advantages: '核心优势',
    contact: '联系我们',
    cta: '立即询价',
  },

  hero: {
    badge: '半固态电芯技术先行者',
    title1: '新一代',
    title2: '半固态移动电源',
    title3: '专业B2B供应商',
    desc: '深耕半固态锂电池技术，为全球经销商、集成商提供',
    descHighlight: '高安全性、长续航、定制化',
    descAfter: '的移动电源解决方案。最小起订量 1000 件，快速交付，一对一技术支持。',
    btnProducts: '查看产品系列',
    btnSample: '申请样品',
    stats: [
      { value: '50+', label: '合作客户' },
      { value: '26年', label: '行业深耕' },
      { value: '50+', label: '专利技术' },
    ],
    card: {
      title: '半固态锂电移动电源',
      subtitle: 'Semi-Solid State Power Bank Series',
      specs: [
        { label: '容量范围', value: '3,000 ~ 50,000 mAh', icon: '⚡' },
        { label: '安全等级', value: '国标新3C认证 / PSE认证', icon: '🛡️' },
        { label: '充电功率', value: '最高 140W 快充', icon: '🔌' },
        { label: '最小起订', value: '1,000 件', icon: '📦' },
      ],
      certLabel: 'SEMI-SOLID STATE',
    },
  },

  about: {
    tag: 'About Us',
    title: '关于我们',
    desc: '我们是一家专注于半固态锂电池研发与制造的高科技企业，致力于为全球 B2B 客户提供更安全、更持久的移动储能产品。',
    stats: [
      { value: '26年+', label: '深耕锂电行业', desc: '专注移动储能领域' },
      { value: '50+', label: '核心专利技术', desc: '半固态电芯自主研发' },
      { value: '50+', label: '全球B2B客户', desc: '覆盖30+国家和地区' },
      { value: '500万+', label: '年产能（件）', desc: '支持大批量快速交付' },
    ],
    milestones: [
      { year: '2000', event: '公司成立，专注锂电池研发' },
      { year: '2012', event: '获得首批半固态电芯专利技术' },
      { year: '2016', event: '通过 ISO 9001 质量体系认证' },
      { year: '2020', event: '半固态移动电源量产，出口 30+ 国' },
      { year: '2025', event: '国标新3C认证通过，针刺测试不起火不冒烟，B2B 合作伙伴 50+' },
    ],
    timelineTitle: '发展历程',
  },

  products: {
    tag: 'Product Center',
    title: '产品中心',
    desc: '五大系列覆盖从商务到户外全场景需求，均支持 OEM/ODM 定制，满足不同目标市场的差异化竞争需求。',
    specTitle: '技术规格',
    btnQuote: '立即询价',
    btnSample: '申请样品',
    specLabels: {
      capacity: '电芯容量',
      power: '充电功率',
      weight: '净重',
      size: '尺寸',
      ports: '接口',
      safety: '认证标准',
      moq: '最小起订量',
    },
    series: {
      ultra: {
        tag: '旗舰款',
        name: 'PowerCore Ultra S1',
        nameEn: 'Semi-Solid Ultra Series',
        features: ['半固态电芯，零泄漏风险', '支持 PD3.1 / PPS 协议', '双向快充，笔记本可充', '内置自检电路，过温保护'],
      },
      pro: {
        tag: '商务款',
        name: 'PowerCore Pro P2',
        nameEn: 'Professional Business Series',
        features: ['超薄卡包设计，18mm 厚度', '兼容 Magsafe 磁吸充电', '航空铝外壳，高端商务礼品', 'OEM 品牌定制专属款'],
      },
      rugged: {
        tag: '户外款',
        name: 'PowerCore Rugged R3',
        nameEn: 'Outdoor Rugged Series',
        features: ['IP67 防尘防水，户外专用', '内置 LED 探照灯', '兼容太阳能充电板', '支持笔记本/无人机供电'],
      },
      mini: {
        tag: '便携款',
        name: 'PowerCore Mini M4',
        nameEn: 'Compact Mini Series',
        features: ['信用卡尺寸超薄设计', '内置 Lightning / Type-C 线', '支持航空携带规定', '最热销礼品促销款'],
      },
      industrial: {
        tag: '工业款',
        name: 'PowerCore Industrial I5',
        nameEn: 'Industrial Power Series',
        features: ['大容量工业级电芯', '支持多设备同时供电', '宽温域 -20°C~60°C 工作', '适用于安防、巡检、储能等工业场景'],
      },
    },
  },

  advantages: {
    tag: 'Why Choose Us',
    title: '核心优势',
    desc: '从技术研发到供应链，我们构建了一套完整的 B2B 服务体系，帮助合作伙伴在移动电源市场建立竞争壁垒。',
    items: [
      {
        title: '半固态安全技术',
        desc: '相比传统液态锂电，半固态电解质大幅降低热失控风险，通过针刺、挤压等严苛安全测试，让您的产品更具竞争力。',
      },
      {
        title: '超高能量密度',
        desc: '自研半固态电芯能量密度高达 350Wh/kg，较市场主流产品提升 30%，同体积下续航更长，轻量化优势明显。',
      },
      {
        title: '柔性定制生产',
        desc: '支持 OEM/ODM 全链路定制：外观、容量、充电协议、品牌 Logo 均可按需配置，专属产品方案 7 天内出设计稿。',
      },
      {
        title: '全球认证体系',
        desc: '产品通过 CE、FCC、RoHS、UN38.3、IEC 62133 等主流国际认证，无缝进入欧美、东南亚市场，降低客户合规成本。',
      },
      {
        title: '敏捷供应链',
        desc: '自建年产 500 万件产线，库存充足。标准款 15 天交货，定制款 30 天，支持海运/空运/快递多种物流方案。',
      },
      {
        title: '专属客户支持',
        desc: '为每位 B2B 客户配备专属客户经理 + 技术工程师，提供选型咨询、认证协助、售后跟进全流程服务。',
      },
    ],
  },

  contact: {
    tag: 'Contact Us',
    title: '联系我们',
    desc: '填写询盘表单，我们的专属客户经理将在 24 小时内与您联系，提供报价方案和免费样品申请。',
    info: [
      { label: '联系电话', value: '+86 151-7240-4461', sub: '工作日 09:00 - 19:00' },
      { label: '商务邮箱', value: 'amon.fang@csnewenergy.com', sub: '24小时内回复' },
      { label: '办公地址', value: '深圳市宝安区石岩街道塘头社区塘头1号路8号创维创新谷2#楼B0906-B0911号', sub: '欢迎预约参观' },
      { label: '工厂地址', value: '广东省珠海市香洲区唐家湾镇金园一路6号2栋4楼', sub: '欢迎预约参观工厂' },
    ],
    promise: {
      title: '我们承诺',
      items: ['24小时内专人回复', '免费寄送产品样品', '定制方案 7 天出稿', '全程一对一服务'],
    },
    form: {
      name: '您的姓名 *',
      namePh: '请输入姓名',
      company: '公司名称 *',
      companyPh: '请输入公司名称',
      email: '邮箱地址 *',
      emailPh: 'example@company.com',
      phone: '联系电话',
      phonePh: '+86 / WhatsApp',
      product: '感兴趣的产品',
      productPh: '请选择产品系列',
      productOptions: ['请选择产品系列', 'PowerCore Ultra S1（旗舰款）', 'PowerCore Pro P2（商务款）', 'PowerCore Rugged R3（户外款）', 'PowerCore Mini M4（便携款）', 'PowerCore Industrial I5（工业款）', 'OEM/ODM 定制款'],
      quantity: '预计采购量',
      quantityPh: '请选择数量范围',
      quantityOptions: ['请选择数量范围', '1,000 ~ 5,000 件', '5,000 ~ 20,000 件', '20,000 件以上', '仅申请样品'],
      message: '补充说明',
      messagePh: '请描述您的具体需求，如定制要求、目标市场、认证需求等...',
      submit: '提交询盘',
      submitting: '提交中...',
      successTitle: '询盘已提交！',
      successMsg1: '感谢您的咨询，我们的商务团队将在',
      successHighlight: '24小时内',
      successMsg2: '与您联系。如有紧急需求，请直接拨打上方联系电话。',
      submitAnother: '提交新询盘',
    },
  },

  footer: {
    desc: '专注半固态锂电池技术研发与制造，为全球 B2B 客户提供更安全、更持久的移动储能产品。',
    productTitle: '产品系列',
    companyTitle: '公司',
    serviceTitle: '服务支持',
    products: ['PowerCore Ultra S1', 'PowerCore Pro P2', 'PowerCore Rugged R3', 'PowerCore Mini M4', 'PowerCore Industrial I5', 'OEM/ODM 定制'],
    company: ['关于我们', '发展历程', '资质认证', '新闻动态', '合作伙伴'],
    service: ['获取报价', '申请样品', '技术支持', '售后服务', '常见问题'],
    copyright: '© 2026 深圳市成晟新能源技术有限公司 版权所有',
    legal: ['隐私政策', '服务条款', '网站地图'],
  },
}

/* ===================== English ===================== */
const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    advantages: 'Advantages',
    contact: 'Contact',
    cta: 'Get Quote',
  },

  hero: {
    badge: 'Pioneer in Semi-Solid State Battery Technology',
    title1: 'Next-Gen',
    title2: 'Semi-Solid Power Banks',
    title3: 'Professional B2B Supplier',
    desc: 'Deep expertise in semi-solid lithium battery technology, providing global distributors and integrators with',
    descHighlight: 'high safety, long endurance, and customizable',
    descAfter: ' power bank solutions. MOQ 1,000 units, fast delivery, one-on-one technical support.',
    btnProducts: 'View Product Series',
    btnSample: 'Request Sample',
    stats: [
      { value: '50+', label: 'Global Clients' },
      { value: '26 Yrs', label: 'Industry Expertise' },
      { value: '50+', label: 'Patents' },
    ],
    card: {
      title: 'Semi-Solid Lithium Power Bank',
      subtitle: 'Semi-Solid State Power Bank Series',
      specs: [
        { label: 'Capacity', value: '3,000 ~ 50,000 mAh', icon: '⚡' },
        { label: 'Safety', value: 'CCC / PSE Certified', icon: '🛡️' },
        { label: 'Fast Charge', value: 'Up to 140W', icon: '🔌' },
        { label: 'Min. Order', value: '1,000 pcs', icon: '📦' },
      ],
      certLabel: 'SEMI-SOLID STATE',
    },
  },

  about: {
    tag: 'About Us',
    title: 'About Us',
    desc: 'We are a high-tech enterprise dedicated to the R&D and manufacturing of semi-solid lithium batteries, committed to providing safer and more durable mobile energy storage products for global B2B clients.',
    stats: [
      { value: '26+ Yrs', label: 'Li-Battery Expertise', desc: 'Focused on mobile energy storage' },
      { value: '50+', label: 'Core Patents', desc: 'Self-developed semi-solid cells' },
      { value: '50+', label: 'Global B2B Clients', desc: 'Covering 30+ countries' },
      { value: '5M+', label: 'Annual Capacity (pcs)', desc: 'Large-scale fast delivery' },
    ],
    milestones: [
      { year: '2000', event: 'Company founded, focused on Li-battery R&D' },
      { year: '2012', event: 'Obtained first batch of semi-solid cell patents' },
      { year: '2016', event: 'Passed ISO 9001 quality management certification' },
      { year: '2020', event: 'Mass production of semi-solid power banks, exported to 30+ countries' },
      { year: '2025', event: 'Passed new CCC certification, nail penetration test no fire no smoke, 50+ B2B partners' },
    ],
    timelineTitle: 'Our Journey',
  },

  products: {
    tag: 'Product Center',
    title: 'Product Center',
    desc: 'Five series covering all scenarios from business to industrial, all supporting OEM/ODM customization to meet differentiated market needs.',
    specTitle: 'Specifications',
    btnQuote: 'Get Quote',
    btnSample: 'Request Sample',
    specLabels: {
      capacity: 'Cell Capacity',
      power: 'Charging Power',
      weight: 'Weight',
      size: 'Dimensions',
      ports: 'Ports',
      safety: 'Certifications',
      moq: 'Min. Order Qty',
    },
    series: {
      ultra: {
        tag: 'Flagship',
        name: 'PowerCore Ultra S1',
        nameEn: 'Semi-Solid Ultra Series',
        features: ['Semi-solid cell, zero leakage risk', 'Supports PD3.1 / PPS protocols', 'Bi-directional fast charge for laptops', 'Built-in self-check circuit, over-temp protection'],
      },
      pro: {
        tag: 'Business',
        name: 'PowerCore Pro P2',
        nameEn: 'Professional Business Series',
        features: ['Ultra-thin card design, 18mm thickness', 'Compatible with MagSafe charging', 'Aviation aluminum shell, premium business gift', 'OEM brand customization available'],
      },
      rugged: {
        tag: 'Outdoor',
        name: 'PowerCore Rugged R3',
        nameEn: 'Outdoor Rugged Series',
        features: ['IP67 dustproof & waterproof', 'Built-in LED spotlight', 'Solar panel compatible', 'Powers laptops & drones'],
      },
      mini: {
        tag: 'Compact',
        name: 'PowerCore Mini M4',
        nameEn: 'Compact Mini Series',
        features: ['Credit card size ultra-thin design', 'Built-in Lightning / Type-C cable', 'Airline carry-on compliant', 'Best-selling promotional gift item'],
      },
      industrial: {
        tag: 'Industrial',
        name: 'PowerCore Industrial I5',
        nameEn: 'Industrial Power Series',
        features: ['Industrial-grade large capacity cells', 'Multi-device simultaneous power supply', 'Wide temperature range -20°C~60°C', 'For security, inspection, energy storage scenarios'],
      },
    },
  },

  advantages: {
    tag: 'Why Choose Us',
    title: 'Core Advantages',
    desc: 'From technology R&D to supply chain, we have built a comprehensive B2B service system that helps partners establish competitive barriers in the power bank market.',
    items: [
      {
        title: 'Semi-Solid Safety Technology',
        desc: 'Compared to traditional liquid lithium batteries, semi-solid electrolytes significantly reduce thermal runaway risks. Passed rigorous safety tests including nail penetration and crushing, making your products more competitive.',
      },
      {
        title: 'Ultra-High Energy Density',
        desc: 'Self-developed semi-solid cells reach 350Wh/kg energy density, 30% higher than mainstream products. Longer battery life in the same volume with clear weight reduction advantages.',
      },
      {
        title: 'Flexible Customization',
        desc: 'Full OEM/ODM customization: appearance, capacity, charging protocols, and brand logos can all be configured on demand. Exclusive product designs ready in 7 days.',
      },
      {
        title: 'Global Certification',
        desc: 'Products certified by CE, FCC, RoHS, UN38.3, IEC 62133 and more. Seamless entry to European, American, and Southeast Asian markets, reducing compliance costs.',
      },
      {
        title: 'Agile Supply Chain',
        desc: 'Self-built production line with 5 million annual capacity. Standard models delivered in 15 days, custom models in 30 days. Multiple logistics options: sea, air, and express.',
      },
      {
        title: 'Dedicated Client Support',
        desc: 'Every B2B client gets a dedicated account manager + technical engineer. Full-process service including product selection, certification assistance, and after-sales follow-up.',
      },
    ],
  },

  contact: {
    tag: 'Contact Us',
    title: 'Contact Us',
    desc: 'Fill in the inquiry form and our dedicated account manager will contact you within 24 hours with pricing and free sample options.',
    info: [
      { label: 'Phone', value: '+86 151-7240-4461', sub: 'Mon-Fri 09:00 - 19:00 (UTC+8)' },
      { label: 'Business Email', value: 'amon.fang@csnewenergy.com', sub: 'Reply within 24 hours' },
      { label: 'Office Address', value: 'RM 906-912, Bldg 2, Skyworth Innovation Valley, Tangtou, Shiyan, Baoan, Shenzhen 518108, China', sub: 'Visits by appointment' },
      { label: 'Factory Address', value: '4F, Bldg 2, No.6 Jinyuan 1st Rd, Tangjiawan, Xiangzhou, Zhuhai, Guangdong, China', sub: 'Factory tours available by appointment' },
    ],
    promise: {
      title: 'Our Promise',
      items: ['Dedicated response within 24 hours', 'Free product samples', 'Custom design draft in 7 days', 'One-on-one full-process service'],
    },
    form: {
      name: 'Your Name *',
      namePh: 'Enter your name',
      company: 'Company Name *',
      companyPh: 'Enter company name',
      email: 'Email Address *',
      emailPh: 'example@company.com',
      phone: 'Phone Number',
      phonePh: '+86 / WhatsApp',
      product: 'Product Interest',
      productPh: 'Select a product series',
      productOptions: ['Select a product series', 'PowerCore Ultra S1 (Flagship)', 'PowerCore Pro P2 (Business)', 'PowerCore Rugged R3 (Outdoor)', 'PowerCore Mini M4 (Compact)', 'PowerCore Industrial I5 (Industrial)', 'OEM/ODM Custom'],
      quantity: 'Estimated Quantity',
      quantityPh: 'Select quantity range',
      quantityOptions: ['Select quantity range', '1,000 ~ 5,000 pcs', '5,000 ~ 20,000 pcs', '20,000+ pcs', 'Sample only'],
      message: 'Additional Notes',
      messagePh: 'Describe your specific requirements, such as customization needs, target market, certification requirements...',
      submit: 'Submit Inquiry',
      submitting: 'Submitting...',
      successTitle: 'Inquiry Submitted!',
      successMsg1: 'Thank you for your inquiry. Our business team will contact you within',
      successHighlight: '24 hours',
      successMsg2: '. For urgent needs, please call the phone number above directly.',
      submitAnother: 'Submit Another Inquiry',
    },
  },

  footer: {
    desc: 'Dedicated to semi-solid lithium battery R&D and manufacturing, providing safer and more durable mobile energy storage products for global B2B clients.',
    productTitle: 'Products',
    companyTitle: 'Company',
    serviceTitle: 'Support',
    products: ['PowerCore Ultra S1', 'PowerCore Pro P2', 'PowerCore Rugged R3', 'PowerCore Mini M4', 'PowerCore Industrial I5', 'OEM/ODM Custom'],
    company: ['About Us', 'Our Journey', 'Certifications', 'News', 'Partners'],
    service: ['Get Quote', 'Request Sample', 'Tech Support', 'After-Sales', 'FAQ'],
    copyright: '© 2026 Shenzhen Chengsheng New Energy Technology Co., Ltd. All rights reserved.',
    legal: ['Privacy Policy', 'Terms of Service', 'Sitemap'],
  },
}

/* ===================== 日本語 ===================== */
const ja: Translations = {
  nav: {
    home: 'ホーム',
    about: '会社概要',
    products: '製品紹介',
    advantages: '強み',
    contact: 'お問い合わせ',
    cta: '見積依頼',
  },

  hero: {
    badge: '半固体電池技術のパイオニア',
    title1: '次世代',
    title2: '半固体モバイルバッテリー',
    title3: 'B2B専門サプライヤー',
    desc: '半固体リチウム電池技術に深く取り組み、世界中の代理店・インテグレーターに',
    descHighlight: '高安全性・長時間駆動・カスタマイズ可能な',
    descAfter: 'モバイルバッテリーソリューションを提供。最小ロット1,000個から、迅速配送、1対1の技術サポート。',
    btnProducts: '製品シリーズを見る',
    btnSample: 'サンプル申請',
    stats: [
      { value: '50+', label: '取引先数' },
      { value: '26年', label: '業界実績' },
      { value: '50+', label: '特許技術' },
    ],
    card: {
      title: '半固体リチウムモバイルバッテリー',
      subtitle: 'Semi-Solid State Power Bank Series',
      specs: [
        { label: '容量範囲', value: '3,000 ~ 50,000 mAh', icon: '⚡' },
        { label: '安全規格', value: '中国新3C認証 / PSE認証', icon: '🛡️' },
        { label: '急速充電', value: '最大 140W', icon: '🔌' },
        { label: '最小ロット', value: '1,000個', icon: '📦' },
      ],
      certLabel: 'SEMI-SOLID STATE',
    },
  },

  about: {
    tag: 'About Us',
    title: '会社概要',
    desc: '私たちは半固体リチウム電池の研究開発と製造に特化するハイテク企業であり、世界中のB2B顧客により安全で長持ちするモバイル蓄電製品を提供しています。',
    stats: [
      { value: '26年+', label: 'リチウム電池業界経験', desc: 'モバイル蓄電分野に特化' },
      { value: '50+', label: 'コア特許技術', desc: '半固体セルを自社開発' },
      { value: '50+', label: 'グローバルB2B顧客', desc: '30カ国以上に展開' },
      { value: '500万+', label: '年間生産能力（個）', desc: '大量注文に迅速対応' },
    ],
    milestones: [
      { year: '2000', event: '会社設立、リチウム電池研究開発に注力' },
      { year: '2012', event: '初の半固体セル特許を取得' },
      { year: '2016', event: 'ISO 9001品質マネジメント認証取得' },
      { year: '2020', event: '半固体モバイルバッテリー量産開始、30カ国以上に輸出' },
      { year: '2025', event: '中国新3C認証取得、針刺しテスト不通過で発火・発煙なし、B2Bパートナー50社以上' },
    ],
    timelineTitle: '沿革',
  },

  products: {
    tag: 'Product Center',
    title: '製品紹介',
    desc: 'ビジネスから工業用まで全シーンをカバーする5つのシリーズ。すべてOEM/ODMカスタマイズに対応し、異なる市場での差別化ニーズにお応えします。',
    specTitle: '仕様',
    btnQuote: '見積依頼',
    btnSample: 'サンプル申請',
    specLabels: {
      capacity: 'セル容量',
      power: '充電出力',
      weight: '重量',
      size: '寸法',
      ports: 'ポート',
      safety: '認証規格',
      moq: '最小発注数量',
    },
    series: {
      ultra: {
        tag: 'フラッグシップ',
        name: 'PowerCore Ultra S1',
        nameEn: 'Semi-Solid Ultra Series',
        features: ['半固体セル、液漏れリスクゼロ', 'PD3.1 / PPSプロトコル対応', '双方向急速充電、ノートPC充電対応', '内蔵自己診断回路、過熱保護'],
      },
      pro: {
        tag: 'ビジネス',
        name: 'PowerCore Pro P2',
        nameEn: 'Professional Business Series',
        features: ['超薄型カード設計、厚さ18mm', 'MagSafe磁気充電対応', '航空用アルミ筐体、高級ビジネスギフト', 'OEMブランドカスタマイズ対応'],
      },
      rugged: {
        tag: 'アウトドア',
        name: 'PowerCore Rugged R3',
        nameEn: 'Outdoor Rugged Series',
        features: ['IP67防塵防水、アウトドア専用', '内蔵LEDスポットライト', 'ソーラーパネル充電対応', 'ノートPC・ドローン給電対応'],
      },
      mini: {
        tag: 'コンパクト',
        name: 'PowerCore Mini M4',
        nameEn: 'Compact Mini Series',
        features: ['クレジットカードサイズ超薄型設計', '内蔵Lightning / Type-Cケーブル', '航空機持ち込み規格対応', '売れ行きNo.1プロモーショングッズ'],
      },
      industrial: {
        tag: '工業用',
        name: 'PowerCore Industrial I5',
        nameEn: 'Industrial Power Series',
        features: ['工業級大容量セル搭載', '複数機器同時給電対応', '広温度域 -20°C~60°C 動作', 'セキュリティ・点検・蓄電などの工業用途に'],
      },
    },
  },

  advantages: {
    tag: 'Why Choose Us',
    title: '強み',
    desc: '技術開発からサプライチェーンまで、B2Bパートナーがモバイルバッテリー市場で競争優位性を築くための包括的なサービス体制を整えています。',
    items: [
      {
        title: '半固体安全技術',
        desc: '従来の液体リチウム電池に比べ、半固体電解質は熱暴走リスクを大幅に低減。針刺し・圧縮などの厳格な安全テストを通過し、製品の競争力を高めます。',
      },
      {
        title: '超高エネルギー密度',
        desc: '自社開発の半固体セルは350Wh/kgのエネルギー密度を達成。市場主流製品より30%高く、同体積でより長い駆動時間と軽量化を実現します。',
      },
      {
        title: '柔軟なカスタマイズ生産',
        desc: 'OEM/ODMフルカスタマイズ対応：外観、容量、充電プロトコル、ブランドロゴすべてニーズに合わせて設定可能。専用製品デザインを7日以内に納品。',
      },
      {
        title: 'グローバル認証取得',
        desc: 'CE、FCC、RoHS、UN38.3、IEC 62133など主要国際認証を取得。欧米・東南アジア市場へのスムーズな参入を支援し、顧客のコンプライアンスコストを削減します。',
      },
      {
        title: '俊敏なサプライチェーン',
        desc: '年産500万個の自社工場を運営。標準品は15日、カスタム品は30日で配送。海運・空運・宅配の複数物流オプションに対応。',
      },
      {
        title: '専任カスタマーサポート',
        desc: 'B2B顧客ごとに専任のアカウントマネージャーと技術エンジニアを配置。製品選定コンサルティング、認証支援、アフターフォローの全工程をサポート。',
      },
    ],
  },

  contact: {
    tag: 'Contact Us',
    title: 'お問い合わせ',
    desc: 'お問い合わせフォームにご記入ください。専任のアカウントマネージャーが24時間以内にご連絡し、お見積りと無料サンプルのご案内をいたします。',
    info: [
      { label: '電話番号', value: '+86 151-7240-4461', sub: '平日 09:00 - 19:00（UTC+8）' },
      { label: '営業メール', value: 'amon.fang@csnewenergy.com', sub: '24時間以内に返信' },
      { label: 'オフィス住所', value: '中国広東省深セン市宝安区石岩街道塘頭社区塘頭1号路8号創维イノベーションバレー 2 号棟 B0906-B0911', sub: '見学は事前予約制' },
      { label: '工場住所', value: '中国広東省珠海市香洲区唐家湾鎮金園一路6号2棟4階', sub: '工場見学は事前予約制' },
    ],
    promise: {
      title: 'お約束',
      items: ['24時間以内に専任担当者がご返信', '無料サンプル発送', 'カスタムデザイン7日納品', '担当者による一貫サポート'],
    },
    form: {
      name: 'お名前 *',
      namePh: 'お名前を入力',
      company: '会社名 *',
      companyPh: '会社名を入力',
      email: 'メールアドレス *',
      emailPh: 'example@company.com',
      phone: '電話番号',
      phonePh: '+86 / WhatsApp',
      product: 'ご関心のある製品',
      productPh: '製品シリーズを選択',
      productOptions: ['製品シリーズを選択', 'PowerCore Ultra S1（フラッグシップ）', 'PowerCore Pro P2（ビジネス）', 'PowerCore Rugged R3（アウトドア）', 'PowerCore Mini M4（コンパクト）', 'PowerCore Industrial I5（工業用）', 'OEM/ODMカスタム'],
      quantity: '希望数量',
      quantityPh: '数量範囲を選択',
      quantityOptions: ['数量範囲を選択', '1,000 ~ 5,000個', '5,000 ~ 20,000個', '20,000個以上', 'サンプルのみ'],
      message: '補足事項',
      messagePh: 'カスタマイズ要件、ターゲット市場、認証ニーズなど具体的なご要望をご記入ください...',
      submit: '送信',
      submitting: '送信中...',
      successTitle: 'お問い合わせを受け付けました！',
      successMsg1: 'お問い合わせありがとうございます。営業チームが',
      successHighlight: '24時間以内に',
      successMsg2: 'ご連絡いたします。お急ぎの場合は上記の電話番号まで直接お電話ください。',
      submitAnother: '新規お問い合わせ',
    },
  },

  footer: {
    desc: '半固体リチウム電池の研究開発と製造に特化し、世界中のB2B顧客により安全で長持ちするモバイル蓄電製品を提供しています。',
    productTitle: '製品シリーズ',
    companyTitle: '会社情報',
    serviceTitle: 'サポート',
    products: ['PowerCore Ultra S1', 'PowerCore Pro P2', 'PowerCore Rugged R3', 'PowerCore Mini M4', 'PowerCore Industrial I5', 'OEM/ODMカスタム'],
    company: ['会社概要', '沿革', '認証規格', 'ニュース', 'パートナー'],
    service: ['見積依頼', 'サンプル申請', '技術サポート', 'アフターサービス', 'よくある質問'],
    copyright: '© 2026 深圳市成晟新能源技術有限公司 All rights reserved.',
    legal: ['プライバシーポリシー', '利用規約', 'サイトマップ'],
  },
}

/* ===================== Export ===================== */
const locales: Record<Lang, Translations> = { zh, en, ja }

export default locales
