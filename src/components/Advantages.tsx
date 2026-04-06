import { Shield, Zap, Factory, Headphones, Package, Award } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

const advantageIcons = [Shield, Zap, Factory, Award, Package, Headphones]
const advantageStyles = [
  { color: '#00c8e0', bg: 'rgba(0,200,224,0.08)', border: 'rgba(0,200,224,0.2)' },
  { color: '#f5821e', bg: 'rgba(245,130,30,0.08)', border: 'rgba(245,130,30,0.2)' },
  { color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)' },
  { color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)' },
  { color: '#f472b6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.2)' },
  { color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
]

export default function Advantages() {
  const { t } = useI18n()

  return (
    <section
      id="advantages"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #0f1e36, #0a1628)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景光晕 */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(245,130,30,0.06) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* 标题 */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: '#f5821e',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            {t.advantages.tag}
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: '#f0f4ff',
            marginBottom: '16px',
          }}>
            {t.advantages.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#8ea8cc',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t.advantages.desc}
          </p>
        </div>

        {/* 优势卡片 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
          className="adv-grid"
        >
          {t.advantages.items.map((item, i) => {
            const Icon = advantageIcons[i]
            const style = advantageStyles[i]
            return (
              <div
                key={i}
                style={{
                  padding: '32px 28px',
                  background: 'rgba(22, 37, 64, 0.5)',
                  border: `1px solid rgba(30,60,106,0.5)`,
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = style.border
                  el.style.background = style.bg
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = '0 20px 48px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(30,60,106,0.5)'
                  el.style.background = 'rgba(22, 37, 64, 0.5)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: style.bg,
                  border: `1px solid ${style.border}`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <Icon size={26} color={style.color} />
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#f0f4ff',
                  marginBottom: '12px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#8ea8cc',
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .adv-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .adv-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
