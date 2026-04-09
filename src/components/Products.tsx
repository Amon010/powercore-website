import { useState } from 'react'
import { MessageSquare, ChevronRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

/* 产品规格数据（不随语言变化） */
const productSpecs = {
  ultra: { capacity: '10,000 mAh', power: '45W + 25W无线', weight: '约220g', size: '110×69.8×18.9mm', ports: 'USB-C × 2', safety: 'Qi2.2 / 新3C / CE', moq: '1,000', tagColor: '#f5821e', image: '/images/product-csi-10.png' },
  pro: { capacity: '5,000 mAh', power: '22.5W + 15W无线', weight: '约150g', size: '110×69.8×11mm', ports: 'USB-C × 1 + USB-A × 1', safety: 'Qi2.0 / 新3C / CE', moq: '2,000', tagColor: '#00c8e0', image: '/images/product-csi-09.png' },
  rugged: { capacity: '10,000 mAh', power: '30W + 15W无线', weight: '约200g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / CE / PSE', moq: '1,000', tagColor: '#34d399', image: '/images/product-csi-02.png' },
  mini: { capacity: '5,000 mAh', power: '22.5W + 15W无线', weight: '约120g', size: 'TBD', ports: 'USB-C × 1', safety: '新3C / CE / PSE', moq: '3,000', tagColor: '#a78bfa', image: '/images/product-csi-01.png' },
  industrial: { capacity: '10,000 mAh', power: '30W PD', weight: '约230g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / PSE / CE', moq: '1,000', tagColor: '#f472b6', image: '/images/product-csi-08.png' },
} as const

type ProductId = keyof typeof productSpecs
const productIds: ProductId[] = ['ultra', 'pro', 'rugged', 'mini', 'industrial']

function colorToRgb(hex: string) {
  if (hex === '#f5821e') return '245,130,30'
  if (hex === '#00c8e0') return '0,200,224'
  if (hex === '#34d399') return '52,211,153'
  if (hex === '#f472b6') return '244,114,182'
  return '167,139,250'
}

export default function Products() {
  const { t } = useI18n()
  const [active, setActive] = useState<ProductId>('ultra')
  const spec = productSpecs[active]
  const series = t.products.series[active]
  const rgb = colorToRgb(spec.tagColor)

  const specRows = [
    { label: t.products.specLabels.capacity, value: spec.capacity },
    { label: t.products.specLabels.power, value: spec.power },
    { label: t.products.specLabels.weight, value: spec.weight },
    { label: t.products.specLabels.size, value: spec.size },
    { label: t.products.specLabels.ports, value: spec.ports },
    { label: t.products.specLabels.safety, value: spec.safety },
    { label: t.products.specLabels.moq, value: spec.moq },
  ]

  return (
    <section
      id="products"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #0a1628, #0f1e36)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* 标题 */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: '#f5821e',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            {t.products.tag}
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: '#f0f4ff',
            marginBottom: '16px',
          }}>
            {t.products.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#8ea8cc',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t.products.desc}
          </p>
        </div>

        {/* 产品切换 Tab */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          {productIds.map(id => {
            const p = productSpecs[id]
            const s = t.products.series[id]
            const isActive = active === id
            const pRgb = colorToRgb(p.tagColor)
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: `1.5px solid ${isActive ? p.tagColor : 'rgba(30,60,106,0.6)'}`,
                  background: isActive
                    ? `rgba(${pRgb}, 0.12)`
                    : 'transparent',
                  color: isActive ? p.tagColor : '#8ea8cc',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {s.name}
              </button>
            )
          })}
        </div>

        {/* 产品详情卡 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '32px',
          alignItems: 'start',
        }}
          className="prod-detail-grid"
        >
          {/* 左：产品视觉 */}
          <div style={{
            background: 'rgba(22, 37, 64, 0.7)',
            border: '1px solid rgba(30,60,106,0.5)',
            borderRadius: '24px',
            padding: '40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: '15%', right: '15%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${spec.tagColor}, transparent)`,
            }} />

            {/* 系列标签 */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: `rgba(${rgb}, 0.15)`,
              border: `1px solid ${spec.tagColor}40`,
              borderRadius: '100px',
              padding: '4px 14px',
              fontSize: '12px',
              color: spec.tagColor,
              fontWeight: 700,
              marginBottom: '28px',
            }}>
              ● {series.tag}
            </div>

            {/* 产品图示 */}
            <div style={{
              width: '280px',
              height: '280px',
              margin: '0 auto 28px',
              background: `radial-gradient(circle, rgba(${rgb}, 0.1), transparent)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '24px',
              border: `1px solid ${spec.tagColor}20`,
              overflow: 'hidden',
            }}>
              <img
                src={spec.image}
                alt={series.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '16px',
                }}
              />
            </div>

            <h3 style={{
              fontSize: '22px',
              fontWeight: 800,
              color: '#f0f4ff',
              marginBottom: '4px',
            }}>
              {series.name}
            </h3>
            <div style={{ fontSize: '13px', color: '#4a6285', marginBottom: '24px' }}>
              {series.nameEn}
            </div>

            {/* 核心亮点 */}
            <div style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {series.features.map(f => (
                <div key={f} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '13px',
                  color: '#8ea8cc',
                }}>
                  <ChevronRight size={14} color={spec.tagColor} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* 右：规格参数 */}
          <div>
            <div style={{
              background: 'rgba(22, 37, 64, 0.5)',
              border: '1px solid rgba(30,60,106,0.4)',
              borderRadius: '20px',
              padding: '32px',
              marginBottom: '20px',
            }}>
              <h4 style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#f5821e',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                {t.products.specTitle}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {specRows.map(row => (
                  <div key={row.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(30,60,106,0.3)',
                  }}>
                    <span style={{ fontSize: '13px', color: '#4a6285' }}>{row.label}</span>
                    <span style={{ fontSize: '14px', color: '#f0f4ff', fontWeight: 500 }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              <button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  padding: '14px',
                  background: 'linear-gradient(135deg, #f5821e, #d96a0a)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 20px rgba(245,130,30,0.3)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(245,130,30,0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,130,30,0.3)'
                }}
              >
                <MessageSquare size={16} />
                {t.products.btnQuote}
              </button>
              <button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  padding: '14px',
                  background: 'transparent',
                  border: '1.5px solid rgba(30,60,106,0.7)',
                  borderRadius: '12px',
                  color: '#8ea8cc',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#f5821e'
                  e.currentTarget.style.color = '#f5821e'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(30,60,106,0.7)'
                  e.currentTarget.style.color = '#8ea8cc'
                }}
              >
                {t.products.btnSample}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prod-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
