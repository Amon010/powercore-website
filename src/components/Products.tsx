import { useState } from 'react'
import { MessageSquare, ChevronRight, X, Zap, Shield, Package } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

/* ============ 产品数据 ============ */
export type CategoryId = 'all' | 'wireless' | 'standard' | 'cable' | 'lcd'

export interface ProductItem {
  id: string
  category: Exclude<CategoryId, 'all'>
  image: string
  tagColor: string
  capacity: string
  power: string
  weight: string
  size: string
  ports: string
  safety: string
  moq: string
}

export const allProducts: ProductItem[] = [
  // 磁吸/无线款
  { id: 'CSI-09', category: 'wireless', image: '/images/product-csi-09.png', tagColor: '#00c8e0', capacity: '5,000 mAh', power: '22.5W + 15W 无线', weight: '约150g', size: '110×69.8×11mm', ports: 'USB-C × 1 + USB-A × 1', safety: 'Qi2.0 / 新3C / CE', moq: '2,000' },
  { id: 'CSI-10', category: 'wireless', image: '/images/product-csi-10.png', tagColor: '#f5821e', capacity: '10,000 mAh', power: '45W + 25W 无线', weight: '约220g', size: '110×69.8×18.9mm', ports: 'USB-C × 2', safety: 'Qi2.2 / 新3C / CE', moq: '1,000' },
  { id: 'CSI-17', category: 'wireless', image: '/images/product-csi-17.png', tagColor: '#a78bfa', capacity: '10,000 mAh', power: '30W + 15W 无线', weight: '约200g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: 'Qi2.0 / 新3C / CE', moq: '1,000' },
  // 普通款
  { id: 'CSI-01', category: 'standard', image: '/images/product-csi-01.png', tagColor: '#a78bfa', capacity: '5,000 mAh', power: '22.5W', weight: '约120g', size: 'TBD', ports: 'USB-C × 1', safety: '新3C / CE / PSE', moq: '3,000' },
  { id: 'CSI-02', category: 'standard', image: '/images/product-csi-02.png', tagColor: '#34d399', capacity: '10,000 mAh', power: '30W + 15W 无线', weight: '约200g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / CE / PSE', moq: '1,000' },
  { id: 'CSI-03', category: 'standard', image: '/images/product-csi-03.png', tagColor: '#34d399', capacity: '10,000 mAh', power: '22.5W', weight: '约180g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / CE', moq: '1,000' },
  { id: 'CSI-04', category: 'standard', image: '/images/product-csi-04.png', tagColor: '#f472b6', capacity: '20,000 mAh', power: '65W PD', weight: '约380g', size: 'TBD', ports: 'USB-C × 2 + USB-A × 1', safety: '新3C / CE / PSE', moq: '500' },
  { id: 'CSI-18', category: 'standard', image: '/images/product-csi-18.png', tagColor: '#34d399', capacity: '10,000 mAh', power: '22.5W', weight: '约180g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / CE', moq: '1,000' },
  { id: 'CSI-19', category: 'standard', image: '/images/product-csi-19.png', tagColor: '#a78bfa', capacity: '5,000 mAh', power: '15W', weight: '约110g', size: 'TBD', ports: 'USB-C × 1', safety: '新3C / CE', moq: '3,000' },
  { id: 'CSI-21', category: 'standard', image: '/images/product-csi-21.png', tagColor: '#f472b6', capacity: '10,000 mAh', power: '22.5W', weight: '约190g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / CE / PSE', moq: '1,000' },
  // 带线款
  { id: 'CSI-06', category: 'cable', image: '/images/product-csi-06.png', tagColor: '#f5821e', capacity: '10,000 mAh', power: '22.5W', weight: '约200g', size: 'TBD', ports: 'USB-C Built-in', safety: '新3C / CE', moq: '1,000' },
  { id: 'CSI-07', category: 'cable', image: '/images/product-csi-07.png', tagColor: '#f5821e', capacity: '10,000 mAh', power: '30W', weight: '约210g', size: 'TBD', ports: 'USB-C Built-in + USB-A × 1', safety: '新3C / CE / PSE', moq: '1,000' },
  // LCD 款
  { id: 'CSI-05', category: 'lcd', image: '/images/product-csi-05.png', tagColor: '#00c8e0', capacity: '10,000 mAh', power: '22.5W', weight: '约200g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / CE / PSE', moq: '1,000' },
  { id: 'CSI-08', category: 'lcd', image: '/images/product-csi-08.png', tagColor: '#f472b6', capacity: '10,000 mAh', power: '30W PD', weight: '约230g', size: 'TBD', ports: 'USB-C × 1 + USB-A × 1', safety: '新3C / PSE / CE', moq: '1,000' },
]

const CATEGORY_COLORS: Record<Exclude<CategoryId, 'all'>, string> = {
  wireless: '#00c8e0',
  standard: '#34d399',
  cable: '#f5821e',
  lcd: '#a78bfa',
}

function hexToRgb(hex: string) {
  const map: Record<string, string> = {
    '#f5821e': '245,130,30',
    '#00c8e0': '0,200,224',
    '#34d399': '52,211,153',
    '#f472b6': '244,114,182',
    '#a78bfa': '167,139,250',
  }
  return map[hex] ?? '100,150,200'
}

/* ============ 产品卡片 ============ */
function ProductCard({
  product,
  categoryLabel,
  onClick,
}: {
  product: ProductItem
  categoryLabel: string
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const rgb = hexToRgb(product.tagColor)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(22,37,64,0.9)' : 'rgba(22,37,64,0.6)',
        border: `1px solid ${hovered ? product.tagColor + '60' : 'rgba(30,60,106,0.4)'}`,
        borderRadius: '20px',
        padding: '24px 20px 20px',
        cursor: 'pointer',
        transition: 'all 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 16px 40px rgba(${rgb},0.18)` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 顶部彩线 */}
      <div style={{
        position: 'absolute',
        top: 0, left: '20%', right: '20%',
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${product.tagColor}, transparent)`,
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.25s',
      }} />

      {/* 类别标签 */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        background: `rgba(${rgb},0.12)`,
        border: `1px solid ${product.tagColor}30`,
        borderRadius: '100px',
        padding: '3px 10px',
        fontSize: '11px',
        color: product.tagColor,
        fontWeight: 700,
        marginBottom: '16px',
        letterSpacing: '0.5px',
      }}>
        ● {categoryLabel}
      </div>

      {/* 产品图 */}
      <div style={{
        width: '100%',
        aspectRatio: '1',
        background: `radial-gradient(circle, rgba(${rgb},0.08), transparent)`,
        borderRadius: '14px',
        border: `1px solid ${product.tagColor}15`,
        overflow: 'hidden',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={product.image}
          alt={product.id}
          style={{ width: '85%', height: '85%', objectFit: 'contain' }}
        />
      </div>

      {/* 型号 */}
      <div style={{
        fontSize: '16px',
        fontWeight: 800,
        color: '#f0f4ff',
        marginBottom: '6px',
      }}>
        {product.id}
      </div>

      {/* 关键参数 */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontSize: '11px',
          color: '#8ea8cc',
          background: 'rgba(30,60,106,0.4)',
          borderRadius: '6px',
          padding: '3px 8px',
        }}>
          {product.capacity}
        </span>
        <span style={{
          fontSize: '11px',
          color: '#8ea8cc',
          background: 'rgba(30,60,106,0.4)',
          borderRadius: '6px',
          padding: '3px 8px',
        }}>
          {product.power}
        </span>
      </div>
    </div>
  )
}

/* ============ 产品详情弹窗 ============ */
function ProductModal({
  product,
  categoryLabel,
  onClose,
  onQuote,
}: {
  product: ProductItem
  categoryLabel: string
  onClose: () => void
  onQuote: () => void
}) {
  const rgb = hexToRgb(product.tagColor)

  const specs = [
    { icon: <Zap size={14} />, label: '电池容量', value: product.capacity },
    { icon: <Zap size={14} />, label: '充电功率', value: product.power },
    { icon: <Package size={14} />, label: '重量', value: product.weight },
    { icon: <Package size={14} />, label: '尺寸', value: product.size },
    { icon: <Package size={14} />, label: '接口', value: product.ports },
    { icon: <Shield size={14} />, label: '认证', value: product.safety },
    { icon: <Package size={14} />, label: 'MOQ', value: `${product.moq} 件` },
  ]

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5,10,20,0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'linear-gradient(145deg, #0f1e36, #0a1628)',
          border: `1px solid ${product.tagColor}40`,
          borderRadius: '28px',
          maxWidth: '860px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: `0 40px 80px rgba(${rgb},0.25)`,
        }}
      >
        {/* 顶部彩线 */}
        <div style={{
          position: 'absolute',
          top: 0, left: '10%', right: '10%',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${product.tagColor}, transparent)`,
        }} />

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(30,60,106,0.6)',
            border: '1px solid rgba(30,60,106,0.8)',
            color: '#8ea8cc',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <X size={16} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '0',
        }} className="modal-grid">
          {/* 左：图片 */}
          <div style={{
            padding: '48px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {/* 类别标签 */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: `rgba(${rgb},0.15)`,
              border: `1px solid ${product.tagColor}40`,
              borderRadius: '100px',
              padding: '5px 16px',
              fontSize: '12px',
              color: product.tagColor,
              fontWeight: 700,
              marginBottom: '28px',
              letterSpacing: '1px',
            }}>
              ● {categoryLabel}
            </div>

            <div style={{
              width: '260px',
              height: '260px',
              background: `radial-gradient(circle, rgba(${rgb},0.1), transparent)`,
              borderRadius: '20px',
              border: `1px solid ${product.tagColor}25`,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '28px',
            }}>
              <img
                src={product.image}
                alt={product.id}
                style={{ width: '85%', height: '85%', objectFit: 'contain' }}
              />
            </div>

            <div style={{ fontSize: '26px', fontWeight: 900, color: '#f0f4ff', marginBottom: '4px' }}>
              {product.id}
            </div>
            <div style={{ fontSize: '13px', color: '#4a6285' }}>
              Semi-Solid State Power Bank
            </div>
          </div>

          {/* 右：规格 */}
          <div style={{
            padding: '48px 40px 48px 24px',
            borderLeft: '1px solid rgba(30,60,106,0.3)',
          }}>
            <h3 style={{
              fontSize: '13px',
              fontWeight: 700,
              color: product.tagColor,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '24px',
            }}>
              Technical Specifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              {specs.map(s => (
                <div key={s.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(30,60,106,0.25)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4a6285', fontSize: '13px' }}>
                    <span style={{ color: product.tagColor }}>{s.icon}</span>
                    {s.label}
                  </div>
                  <span style={{ fontSize: '14px', color: '#f0f4ff', fontWeight: 500 }}>{s.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button
                onClick={onQuote}
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
                }}
              >
                <MessageSquare size={15} />
                立即询价
              </button>
              <button
                onClick={onQuote}
                style={{
                  padding: '14px',
                  background: 'transparent',
                  border: '1.5px solid rgba(30,60,106,0.7)',
                  borderRadius: '12px',
                  color: '#8ea8cc',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                申请样品
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .modal-grid { grid-template-columns: 1fr !important; }
          .modal-grid > div:last-child { border-left: none !important; border-top: 1px solid rgba(30,60,106,0.3); padding: 24px 24px 32px !important; }
        }
      `}</style>
    </div>
  )
}

/* ============ 主组件 ============ */
export default function Products() {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  const categories: { id: CategoryId; labelKey: string }[] = [
    { id: 'all', labelKey: 'all' },
    { id: 'wireless', labelKey: 'wireless' },
    { id: 'standard', labelKey: 'standard' },
    { id: 'cable', labelKey: 'cable' },
    { id: 'lcd', labelKey: 'lcd' },
  ]

  const categoryLabels: Record<CategoryId, string> = {
    all: t.products.categories?.all ?? '全部',
    wireless: t.products.categories?.wireless ?? '磁吸无线',
    standard: t.products.categories?.standard ?? '普通款',
    cable: t.products.categories?.cable ?? '带线款',
    lcd: t.products.categories?.lcd ?? 'LCD显示',
  }

  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  const getCategoryLabel = (p: ProductItem) => categoryLabels[p.category]
  const getCategoryColor = (cat: Exclude<CategoryId, 'all'>) => CATEGORY_COLORS[cat]

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
      {/* 背景装饰 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,200,224,0.04), transparent)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(245,130,30,0.04), transparent)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* 标题区 */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t.products.desc}
          </p>

          {/* 统计数字 */}
          <div style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            marginTop: '36px',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '14', label: t.products.stats?.models ?? '款产品' },
              { value: '4', label: t.products.stats?.categories ?? '大品类' },
              { value: 'OEM/ODM', label: t.products.stats?.custom ?? '定制支持' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 900, color: '#f5821e', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: '#4a6285', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 分类 Tab */}
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          {categories.map(cat => {
            const isActive = activeCategory === cat.id
            const color = cat.id === 'all' ? '#f5821e' : getCategoryColor(cat.id as Exclude<CategoryId, 'all'>)
            const rgb = hexToRgb(color)
            const count = cat.id === 'all' ? allProducts.length : allProducts.filter(p => p.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '100px',
                  border: `1.5px solid ${isActive ? color : 'rgba(30,60,106,0.5)'}`,
                  background: isActive ? `rgba(${rgb},0.12)` : 'transparent',
                  color: isActive ? color : '#8ea8cc',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {categoryLabels[cat.id]}
                <span style={{
                  fontSize: '11px',
                  background: isActive ? `rgba(${rgb},0.2)` : 'rgba(30,60,106,0.4)',
                  borderRadius: '100px',
                  padding: '1px 7px',
                  color: isActive ? color : '#4a6285',
                }}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* 产品网格 */}
        <div
          className="products-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              categoryLabel={getCategoryLabel(product)}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* 底部 CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          background: 'rgba(22,37,64,0.4)',
          borderRadius: '24px',
          border: '1px solid rgba(30,60,106,0.3)',
        }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#f0f4ff', marginBottom: '8px' }}>
            {t.products.ctaTitle ?? '找不到合适的款式？'}
          </div>
          <div style={{ fontSize: '14px', color: '#8ea8cc', marginBottom: '24px' }}>
            {t.products.ctaDesc ?? '支持 OEM/ODM 全定制，从外观到功能，我们都能实现'}
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #f5821e, #d96a0a)',
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 24px rgba(245,130,30,0.35)',
            }}
          >
            <MessageSquare size={16} />
            {t.products.btnQuote ?? '联系我们定制'}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 产品详情弹窗 */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          categoryLabel={getCategoryLabel(selectedProduct)}
          onClose={() => setSelectedProduct(null)}
          onQuote={() => {
            setSelectedProduct(null)
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      )}

      <style>{`
        @media (max-width: 1100px) {
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 760px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
