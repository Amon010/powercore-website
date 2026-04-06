import { Building2, FlaskConical, Users, TrendingUp } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

const icons = [Building2, FlaskConical, Users, TrendingUp]

export default function About() {
  const { t } = useI18n()

  return (
    <section
      id="about"
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
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,200,224,0.04) 0%, transparent 70%)',
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
            {t.about.tag}
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: '#f0f4ff',
            marginBottom: '16px',
          }}>
            {t.about.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#8ea8cc',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t.about.desc}
          </p>
        </div>

        {/* 数字卡片 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '72px',
        }}
          className="stats-grid"
        >
          {t.about.stats.map((stat, i) => {
            const Icon = icons[i]
            return (
              <div
                key={stat.label}
                style={{
                  padding: '28px 24px',
                  background: 'rgba(22, 37, 64, 0.6)',
                  border: '1px solid rgba(30,60,106,0.5)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(245,130,30,0.4)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(30,60,106,0.5)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(245,130,30,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <Icon size={24} color="#f5821e" />
                </div>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#f0f4ff',
                  marginBottom: '4px',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', color: '#f5821e', fontWeight: 600, marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '12px', color: '#4a6285' }}>
                  {stat.desc}
                </div>
              </div>
            )
          })}
        </div>

        {/* 发展历程 */}
        <div style={{
          background: 'rgba(22, 37, 64, 0.5)',
          border: '1px solid rgba(30,60,106,0.4)',
          borderRadius: '24px',
          padding: '48px',
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: 700,
            color: '#f0f4ff',
            marginBottom: '36px',
            textAlign: 'center',
          }}>
            {t.about.timelineTitle}
          </h3>
          <div style={{
            position: 'relative',
            paddingLeft: '32px',
          }}>
            {/* 竖线 */}
            <div style={{
              position: 'absolute',
              left: '8px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: 'linear-gradient(180deg, #f5821e, rgba(245,130,30,0.1))',
            }} />

            {t.about.milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  marginBottom: i < t.about.milestones.length - 1 ? '28px' : 0,
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-28px',
                  top: '4px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: i === t.about.milestones.length - 1 ? '#f5821e' : '#1a3a6b',
                  border: `2px solid ${i === t.about.milestones.length - 1 ? '#f5821e' : 'rgba(245,130,30,0.4)'}`,
                  boxShadow: i === t.about.milestones.length - 1 ? '0 0 12px rgba(245,130,30,0.6)' : 'none',
                }} />

                <div style={{
                  minWidth: '52px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: i === t.about.milestones.length - 1 ? '#f5821e' : '#4a6285',
                }}>
                  {m.year}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: i === t.about.milestones.length - 1 ? '#f0f4ff' : '#8ea8cc',
                  lineHeight: 1.6,
                }}>
                  {m.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
