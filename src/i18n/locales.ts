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
    desc: '深圳市成晟新能源成立于2000年，专注半固态锂电池技术研发，为全球经销商、集成商提供',
    descHighlight: '高安全性、长续航、定制化',
    descAfter: '的移动电源解决方案。全系产品支持 Qi2.0/Qi2.2 无线充电认证，OEM/ODM 定制服务。',
    btnProducts: '查看产品系列',
    btnSample: '申请样品',
    stats: [
      { value: '25年+', label: '行业深耕' },
      { value: '20+', label: '专利技术' },
      { value: 'OEM/ODM', label: '定制服务' },
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
    desc: '深圳市成晟新能源技术有限公司成立于2000年，是一家专注于半固态锂电池技术研发、生产与销售的高科技企业。产品涵盖移动电源、控制板、便携储能系统、节能照明及数码周边产品，拥有20多项核心专利技术，广泛应用于LED照明、移动电源、智能家居及储能电池组领域。',
    stats: [
      { value: '25年+', label: '行业深耕', desc: '专注新能源领域' },
      { value: '20+', label: '核心专利技术', desc: '半固态电芯自主研发' },
      { value: 'OEM/ODM', label: '定制服务', desc: '专业制造中心支持' },
      { value: '全球', label: '市场覆盖', desc: '日本、美国、欧洲、中国' },
    ],
    milestones: [
      { year: '2000', event: '公司成立，专注锂电池研发与生产' },
      { year: '2010', event: '拓展移动电源产品线，进入数码配件市场' },
      { year: '2015', event: '获得多项半固态电芯核心专利技术' },
      { year: '2018', event: '建立专业OEM/ODM制造中心，配备SMT产线' },
      { year: '2020', event: '产品出口日本、美国、欧洲等高端市场' },
      { year: '2025', event: '半固态移动电源系列全面上市，通过多项国际认证' },
    ],
    timelineTitle: '发展历程',
  },

  products: {
    tag: 'Product Center',
    title: '产品中心',
    desc: '成晟 CSI 系列半固态移动电源，涵盖 5000mAh 至 10000mAh 多种容量规格，支持有线+无线双模快充，均通过 Qi2.0/Qi2.2 无线充电认证。全系产品支持 OEM/ODM 定制，满足不同市场的差异化需求。',
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
        name: 'CSI-10-1 便携充电器',
        nameEn: '10000mAh Portable Charger',
        features: ['10000mAh 半固态电芯', '45W 有线 + 25W 无线双快充', 'Qi2.2 无线充电认证', 'ABS 材质，数字电量显示'],
      },
      pro: {
        tag: '商务款',
        name: 'CSI-09-1 磁吸充电宝',
        nameEn: '5000mAh Magnetic Power Bank',
        features: ['5000mAh 半固态电芯', '22.5W 有线 + 15W 无线快充', 'Qi2.0 磁吸无线充电', '大理石纹设计，轻薄便携'],
      },
      rugged: {
        tag: '户外款',
        name: 'CSI-02 无线充电宝',
        nameEn: '10000mAh Wireless Power Bank',
        features: ['10000mAh 半固态电芯', '30W PD 快充 + 15W 无线', '双口输出 USB-C + USB-A', '塑料外壳，LED 电量指示'],
      },
      mini: {
        tag: '便携款',
        name: 'CSI-01 迷你充电宝',
        nameEn: '5000mAh Mini Power Bank',
        features: ['5000mAh 半固态电芯', '22.5W SCP 快充 + 15W 无线', '单口 USB-C 输入输出', '超轻薄设计，口袋便携'],
      },
      industrial: {
        tag: '多口款',
        name: 'CSI-08 大容量充电宝',
        nameEn: '10000mAh Multi-Port Power Bank',
        features: ['10000mAh 半固态电芯', '30W PD 多协议快充', 'USB-C + USB-A 双口输出', '塑料+铝合金材质，商务首选'],
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
      productOptions: ['请选择产品系列', 'CSI-10-1 便携充电器（旗舰款）', 'CSI-09-1 磁吸充电宝（商务款）', 'CSI-02 无线充电宝（户外款）', 'CSI-01 迷你充电宝（便携款）', 'CSI-08 大容量充电宝（多口款）', 'OEM/ODM 定制款'],
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
    desc: '深圳市成晟新能源技术有限公司成立于2000年，专注半固态锂电池技术研发与制造，为全球 B2B 客户提供更安全、更持久的移动储能产品。',
    productTitle: '产品系列',
    companyTitle: '公司',
    serviceTitle: '服务支持',
    products: ['CSI-10-1 便携充电器', 'CSI-09-1 磁吸充电宝', 'CSI-02 无线充电宝', 'CSI-01 迷你充电宝', 'CSI-08 大容量充电宝', 'OEM/ODM 定制'],
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
    desc: 'Shenzhen Chengsheng New Energy, established in 2000, specializes in semi-solid lithium battery R&D, providing global distributors and integrators with',
    descHighlight: 'high safety, long endurance, and customizable',
    descAfter: ' power bank solutions. Full series Qi2.0/Qi2.2 wireless certified, with OEM/ODM services.',
    btnProducts: 'View Product Series',
    btnSample: 'Request Sample',
    stats: [
      { value: '25+ Yrs', label: 'Industry Experience' },
      { value: '20+', label: 'Patents' },
      { value: 'OEM/ODM', label: 'Custom Services' },
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
    desc: 'Shenzhen Chengsheng New Energy Technology Co., Ltd., established in 2000, is a high-tech enterprise dedicated to the research, development, production, and sales of semi-solid lithium battery technology. Our product portfolio includes power banks, control boards, portable energy storage systems, energy-saving lighting, and digital accessories, with over 20 core patented technologies widely applied in LED lighting, mobile power, smart home, and energy storage battery packs.',
    stats: [
      { value: '25+ Yrs', label: 'Industry Experience', desc: 'Focused on new energy' },
      { value: '20+', label: 'Core Patents', desc: 'Self-developed semi-solid cells' },
      { value: 'OEM/ODM', label: 'Custom Services', desc: 'Professional manufacturing center' },
      { value: 'Global', label: 'Market Coverage', desc: 'Japan, USA, Europe, China' },
    ],
    milestones: [
      { year: '2000', event: 'Company founded, focused on Li-battery R&D and production' },
      { year: '2010', event: 'Expanded power bank product line, entered digital accessories market' },
      { year: '2015', event: 'Obtained multiple core patents for semi-solid cell technology' },
      { year: '2018', event: 'Established professional OEM/ODM manufacturing center with SMT lines' },
      { year: '2020', event: 'Products exported to premium markets including Japan, USA, and Europe' },
      { year: '2025', event: 'Semi-solid power bank series fully launched, passed multiple international certifications' },
    ],
    timelineTitle: 'Our Journey',
  },

  products: {
    tag: 'Product Center',
    title: 'Product Center',
    desc: 'Chengsheng CSI series semi-solid power banks, ranging from 5000mAh to 10000mAh, support wired + wireless dual-mode fast charging with Qi2.0/Qi2.2 wireless certification. All products support OEM/ODM customization to meet differentiated market needs.',
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
        name: 'CSI-10-1 Portable Charger',
        nameEn: '10000mAh Portable Charger',
        features: ['10000mAh semi-solid cell', '45W wired + 25W wireless dual fast charge', 'Qi2.2 wireless charging certified', 'ABS material with digital battery display'],
      },
      pro: {
        tag: 'Business',
        name: 'CSI-09-1 Magnetic Power Bank',
        nameEn: '5000mAh Magnetic Power Bank',
        features: ['5000mAh semi-solid cell', '22.5W wired + 15W wireless fast charge', 'Qi2.0 magnetic wireless charging', 'Marble pattern design, slim and portable'],
      },
      rugged: {
        tag: 'Outdoor',
        name: 'CSI-02 Wireless Power Bank',
        nameEn: '10000mAh Wireless Power Bank',
        features: ['10000mAh semi-solid cell', '30W PD fast charge + 15W wireless', 'Dual output USB-C + USB-A', 'Plastic shell with LED battery indicator'],
      },
      mini: {
        tag: 'Compact',
        name: 'CSI-01 Mini Power Bank',
        nameEn: '5000mAh Mini Power Bank',
        features: ['5000mAh semi-solid cell', '22.5W SCP fast charge + 15W wireless', 'Single USB-C input/output', 'Ultra-slim pocket-friendly design'],
      },
      industrial: {
        tag: 'Multi-Port',
        name: 'CSI-08 High-Capacity Power Bank',
        nameEn: '10000mAh Multi-Port Power Bank',
        features: ['10000mAh semi-solid cell', '30W PD multi-protocol fast charge', 'USB-C + USB-A dual output', 'Plastic + aluminum alloy, business preferred'],
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
      productOptions: ['Select a product series', 'CSI-10-1 Portable Charger (Flagship)', 'CSI-09-1 Magnetic Power Bank (Business)', 'CSI-02 Wireless Power Bank (Outdoor)', 'CSI-01 Mini Power Bank (Compact)', 'CSI-08 High-Capacity Power Bank (Multi-Port)', 'OEM/ODM Custom'],
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
    desc: 'Shenzhen Chengsheng New Energy Technology Co., Ltd., established in 2000, dedicated to semi-solid lithium battery R&D and manufacturing, providing safer and more durable mobile energy storage products for global B2B clients.',
    productTitle: 'Products',
    companyTitle: 'Company',
    serviceTitle: 'Support',
    products: ['CSI-10-1 Portable Charger', 'CSI-09-1 Magnetic Power Bank', 'CSI-02 Wireless Power Bank', 'CSI-01 Mini Power Bank', 'CSI-08 High-Capacity Power Bank', 'OEM/ODM Custom'],
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
    desc: '深セン市成晟新能源は2000年に設立され、半固体リチウム電池技術の研究開発に特化し、世界中の代理店・インテグレーターに',
    descHighlight: '高安全性・長時間駆動・カスタマイズ可能な',
    descAfter: 'モバイルバッテリーソリューションを提供。全製品Qi2.0/Qi2.2無線充電認証取得、OEM/ODMサービス対応。',
    btnProducts: '製品シリーズを見る',
    btnSample: 'サンプル申請',
    stats: [
      { value: '25年+', label: '業界実績' },
      { value: '20+', label: '特許技術' },
      { value: 'OEM/ODM', label: 'カスタムサービス' },
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
    desc: '深セン市成晟新能源技術有限公司は2000年に設立され、半固体リチウム電池技術の研究開発、生産、販売に特化するハイテク企業です。製品ラインナップにはモバイルバッテリー、制御基板、ポータブル蓄電システム、省エネ照明、デジタル周辺機器が含まれ、20以上のコア特許技術を保有し、LED照明、モバイル電源、スマートホーム、蓄電池パック分野で広く応用されています。',
    stats: [
      { value: '25年+', label: '業界実績', desc: '新エネルギー分野に特化' },
      { value: '20+', label: 'コア特許技術', desc: '半固体セルを自社開発' },
      { value: 'OEM/ODM', label: 'カスタムサービス', desc: '専門製造センター支援' },
      { value: 'グローバル', label: '市場展開', desc: '日本・米国・欧州・中国' },
    ],
    milestones: [
      { year: '2000', event: '会社設立、リチウム電池の研究開発・生産に注力' },
      { year: '2010', event: 'モバイルバッテリー製品ラインを拡張、デジタルアクセサリー市場へ参入' },
      { year: '2015', event: '複数の半固体セルコア技術特許を取得' },
      { year: '2018', event: 'SMTラインを備えた専門OEM/ODM製造センターを設立' },
      { year: '2020', event: '製品を日本、米国、欧州などの高端市場に輸出開始' },
      { year: '2025', event: '半固体モバイルバッテリーシリーズ全面発売、複数の国際認証取得' },
    ],
    timelineTitle: '沿革',
  },

  products: {
    tag: 'Product Center',
    title: '製品紹介',
    desc: '成晟CSIシリーズ半固体モバイルバッテリーは、5000mAhから10000mAhまでの多彩な容量ラインアップを展開。有線・無線デュアルモード急速充電に対応し、Qi2.0/Qi2.2無線充電認証を取得。全製品がOEM/ODMカスタマイズに対応し、異なる市場の差別化ニーズにお応えします。',
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
        name: 'CSI-10-1 ポータブル充電器',
        nameEn: '10000mAh Portable Charger',
        features: ['10000mAh 半固体セル', '45W有線 + 25W無線デュアル急速充電', 'Qi2.2無線充電認証取得', 'ABS素材、デジタル電量表示'],
      },
      pro: {
        tag: 'ビジネス',
        name: 'CSI-09-1 マグネティックバッテリー',
        nameEn: '5000mAh Magnetic Power Bank',
        features: ['5000mAh 半固体セル', '22.5W有線 + 15W無線急速充電', 'Qi2.0マグネティック無線充電', '大理石柄デザイン、薄型軽量'],
      },
      rugged: {
        tag: 'アウトドア',
        name: 'CSI-02 ワイヤレスバッテリー',
        nameEn: '10000mAh Wireless Power Bank',
        features: ['10000mAh 半固体セル', '30W PD急速充電 + 15W無線', 'USB-C + USB-A デュアル出力', 'プラスチック筐体、LED電量インジケーター'],
      },
      mini: {
        tag: 'コンパクト',
        name: 'CSI-01 ミニバッテリー',
        nameEn: '5000mAh Mini Power Bank',
        features: ['5000mAh 半固体セル', '22.5W SCP急速充電 + 15W無線', 'USB-C 入出力一体型', '超薄型ポケットサイズデザイン'],
      },
      industrial: {
        tag: 'マルチポート',
        name: 'CSI-08 大容量バッテリー',
        nameEn: '10000mAh Multi-Port Power Bank',
        features: ['10000mAh 半固体セル', '30W PDマルチプロトコル急速充電', 'USB-C + USB-A デュアル出力', 'プラスチック+アルミ合金、ビジネス向け'],
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
      productOptions: ['製品シリーズを選択', 'CSI-10-1 ポータブル充電器（フラッグシップ）', 'CSI-09-1 マグネティックバッテリー（ビジネス）', 'CSI-02 ワイヤレスバッテリー（アウトドア）', 'CSI-01 ミニバッテリー（コンパクト）', 'CSI-08 大容量バッテリー（マルチポート）', 'OEM/ODMカスタム'],
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
    desc: '深セン市成晟新能源技術有限公司は2000年に設立され、半固体リチウム電池の研究開発と製造に特化し、世界中のB2B顧客により安全で長持ちするモバイル蓄電製品を提供しています。',
    productTitle: '製品シリーズ',
    companyTitle: '会社情報',
    serviceTitle: 'サポート',
    products: ['CSI-10-1 ポータブル充電器', 'CSI-09-1 マグネティックバッテリー', 'CSI-02 ワイヤレスバッテリー', 'CSI-01 ミニバッテリー', 'CSI-08 大容量バッテリー', 'OEM/ODMカスタム'],
    company: ['会社概要', '沿革', '認証規格', 'ニュース', 'パートナー'],
    service: ['見積依頼', 'サンプル申請', '技術サポート', 'アフターサービス', 'よくある質問'],
    copyright: '© 2026 深圳市成晟新能源技術有限公司 All rights reserved.',
    legal: ['プライバシーポリシー', '利用規約', 'サイトマップ'],
  },
}

/* ===================== Export ===================== */
const locales: Record<Lang, Translations> = { zh, en, ja }

export default locales
