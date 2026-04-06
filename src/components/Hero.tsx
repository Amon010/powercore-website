import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowRight, ShieldCheck, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

/* 轮播图片列表 */
const carouselImages = [
  '/images/hero-product.png',
  '/images/product-lineup.png',
]

export default function Hero() {
  const { t } = useI18n()
  const [slideIdx, setSlideIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const next = useCallback(() => {
    setSlideIdx(prev => (prev + 1) % carouselImages.length)
  }, [])
  const prev = useCallback(() => {
    setSlideIdx(prev => (prev - 1 + carouselImages.length) % carouselImages.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, paused])

  const handleScroll = (href: string) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px 60px',
      }}
    >
      {/* 背景装饰 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0a1628 0%, #0f1e36 40%, #112b54 70%, #0a1628 100%)',
        zIndex: 0,
      }} />

      {/* 光晕效果 */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(245,130,30,0.08) 0%, transparent 70%)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,200,224,0.06) 0%, transparent 70%)',
        zIndex: 1,
      }} />

      {/* 网格背景 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(30,60,106,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30,60,106,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 1,
      }} />

      {/* 主内容 */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* 左侧文字 */}
        <div>
          {/* 标签 */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245,130,30,0.12)',
            border: '1px solid rgba(245,130,30,0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '24px',
            fontSize: '13px',
            color: '#f5821e',
            fontWeight: 500,
          }}>
            <div style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: '#f5821e',
              animation: 'pulse 2s infinite',
            }} />
            {t.hero.badge}
          </div>

          {/* 主标题 */}
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '20px',
            color: '#f0f4ff',
          }}>
            {t.hero.title1}
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #f5821e, #ff9a3c, #00c8e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {t.hero.title2}
            </span>
            <span style={{ fontSize: '70%', color: '#8ea8cc', fontWeight: 600 }}>
              {t.hero.title3}
            </span>
          </h1>

          {/* 副标题 */}
          <p style={{
            fontSize: '17px',
            color: '#8ea8cc',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '480px',
          }}>
            {t.hero.desc}
            <span style={{ color: '#f0f4ff', fontWeight: 500 }}> {t.hero.descHighlight} </span>
            {t.hero.descAfter}
          </p>

          {/* CTA 按钮 */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button
              onClick={() => handleScroll('#products')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #f5821e, #d96a0a)',
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(245,130,30,0.35)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 12px 32px rgba(245,130,30,0.5)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 8px 24px rgba(245,130,30,0.35)'
              }}
            >
              {t.hero.btnProducts}
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'transparent',
                border: '1.5px solid rgba(30,60,106,0.8)',
                borderRadius: '12px',
                color: '#8ea8cc',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = '#f5821e'
                el.style.color = '#f5821e'
                el.style.background = 'rgba(245,130,30,0.06)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(30,60,106,0.8)'
                el.style.color = '#8ea8cc'
                el.style.background = 'transparent'
              }}
            >
              {t.hero.btnSample}
            </button>
          </div>

          {/* 数字指标 */}
          <div style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            {t.hero.stats.map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#f5821e',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: '#4a6285', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：图片轮播 + 产品卡片 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
          {/* 图片轮播 */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{
              width: '100%',
              maxWidth: '480px',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(30,60,106,0.5)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
            }}>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%',
              overflow: 'hidden',
              background: 'rgba(15,30,54,0.9)',
            }}>
              {carouselImages.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`Product showcase ${i + 1}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: i === slideIdx ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                  }}
                />
              ))}
              {/* 左右切换按钮 */}
              <button
                onClick={prev}
                aria-label={t === undefined ? 'Previous slide' : 'Previous slide'}
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(10,22,40,0.7)',
                  color: '#8ea8cc',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,130,30,0.3)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,22,40,0.7)'; e.currentTarget.style.color = '#8ea8cc' }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(10,22,40,0.7)',
                  color: '#8ea8cc',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,130,30,0.3)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,22,40,0.7)'; e.currentTarget.style.color = '#8ea8cc' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
            {/* 指示点 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '6px',
              padding: '12px 0',
              background: 'rgba(10,22,40,0.6)',
            }}>
              {carouselImages.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === slideIdx ? 'true' : undefined}
                  onKeyDown={(e) => e.key === 'Enter' && setSlideIdx(i)}
                  style={{
                    width: i === slideIdx ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: i === slideIdx ? '#f5821e' : 'rgba(142,168,204,0.3)',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>

          {/* 产品规格卡片 */}
          <div style={{
            width: '100%',
            maxWidth: '480px',
            background: 'rgba(22, 37, 64, 0.8)',
            border: '1px solid rgba(30,60,106,0.6)',
            borderRadius: '20px',
            padding: '24px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* 顶部光条 */}
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #f5821e, transparent)',
            }} />

            {/* 产品名称 */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#f0f4ff',
                marginBottom: '4px',
              }}>
                {t.hero.card.title}
              </div>
              <div style={{ fontSize: '12px', color: '#8ea8cc' }}>
                {t.hero.card.subtitle}
              </div>
            </div>

            {/* 参数列表（紧凑双列） */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
            }}>
              {t.hero.card.specs.map(item => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  background: 'rgba(10,22,40,0.5)',
                  borderRadius: '10px',
                  border: '1px solid rgba(30,60,106,0.3)',
                }}>
                  <span style={{ fontSize: '14px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: '#4a6285' }}>{item.label}</div>
                    <div style={{ fontSize: '13px', color: '#8ea8cc', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 认证标签 */}
            <div style={{
              display: 'flex',
              gap: '8px',
              marginTop: '16px',
              flexWrap: 'wrap',
            }}>
              {[
                { icon: ShieldCheck, label: 'CCC' },
                { icon: Award, label: 'PSE' },
                { icon: Globe, label: 'CE' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '4px 10px',
                  background: 'rgba(0,200,224,0.08)',
                  border: '1px solid rgba(0,200,224,0.2)',
                  borderRadius: '100px',
                  fontSize: '11px',
                  color: '#00c8e0',
                }}>
                  <Icon size={11} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
