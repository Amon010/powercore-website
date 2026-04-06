import { ArrowRight, ShieldCheck, Award, Globe } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

export default function Hero() {
  const { t } = useI18n()

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

        {/* 右侧产品展示卡片 */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            width: '100%',
            maxWidth: '440px',
            background: 'rgba(22, 37, 64, 0.8)',
            border: '1px solid rgba(30,60,106,0.6)',
            borderRadius: '24px',
            padding: '32px',
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

            {/* 产品示意图 */}
            <div style={{
              width: '100%',
              height: '180px',
              background: 'linear-gradient(135deg, rgba(17,43,84,0.8), rgba(30,51,88,0.8))',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              border: '1px solid rgba(30,60,106,0.4)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '72px',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 0 20px rgba(245,130,30,0.6))',
                }}>🔋</div>
                <div style={{
                  marginTop: '8px',
                  fontSize: '13px',
                  color: '#00c8e0',
                  fontWeight: 600,
                  letterSpacing: '1px',
                }}>{t.hero.card.certLabel}</div>
              </div>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,200,224,0.03) 3px, rgba(0,200,224,0.03) 4px)',
              }} />
            </div>

            {/* 产品名称 */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#f0f4ff',
                marginBottom: '6px',
              }}>
                {t.hero.card.title}
              </div>
              <div style={{ fontSize: '13px', color: '#8ea8cc' }}>
                {t.hero.card.subtitle}
              </div>
            </div>

            {/* 参数列表 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.hero.card.specs.map(item => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'rgba(10,22,40,0.5)',
                  borderRadius: '10px',
                  border: '1px solid rgba(30,60,106,0.3)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '16px' }}>{item.icon}</span>
                    <span style={{ fontSize: '13px', color: '#4a6285' }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#8ea8cc', fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* 认证标签 */}
            <div style={{
              display: 'flex',
              gap: '8px',
              marginTop: '20px',
              flexWrap: 'wrap',
            }}>
              {[
                { icon: ShieldCheck, label: 'CE' },
                { icon: Award, label: 'RoHS' },
                { icon: Globe, label: 'FCC' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 12px',
                  background: 'rgba(0,200,224,0.08)',
                  border: '1px solid rgba(0,200,224,0.2)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  color: '#00c8e0',
                }}>
                  <Icon size={12} />
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
