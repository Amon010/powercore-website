import { useI18n } from '../i18n/I18nProvider'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer style={{
      background: '#060f1e',
      borderTop: '1px solid rgba(30,60,106,0.4)',
      padding: '60px 24px 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '48px',
        }}
          className="footer-grid"
        >
          {/* 品牌信息 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img
                src="/images/logo-footer.png"
                alt="PowerCore Logo"
                style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p style={{
              fontSize: '13px',
              color: '#4a6285',
              lineHeight: 1.8,
              marginBottom: '20px',
              maxWidth: '260px',
            }}>
              {t.footer.desc}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['LinkedIn', 'WeChat', 'WhatsApp'].map(platform => (
                <div
                  key={platform}
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(30,60,106,0.5)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    color: '#8ea8cc',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(245,130,30,0.2)'
                    e.currentTarget.style.color = '#f5821e'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(30,60,106,0.5)'
                    e.currentTarget.style.color = '#8ea8cc'
                  }}
                >
                  {platform[0]}
                </div>
              ))}
            </div>
          </div>

          {/* 产品系列 */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4ff', marginBottom: '20px' }}>
              {t.footer.productTitle}
            </div>
            {t.footer.products.map(link => (
              <div
                key={link}
                style={{
                  fontSize: '13px',
                  color: '#4a6285',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8ea8cc'}
                onMouseLeave={e => e.currentTarget.style.color = '#4a6285'}
              >
                {link}
              </div>
            ))}
          </div>

          {/* 公司 */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4ff', marginBottom: '20px' }}>
              {t.footer.companyTitle}
            </div>
            {t.footer.company.map(link => (
              <div
                key={link}
                style={{
                  fontSize: '13px',
                  color: '#4a6285',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8ea8cc'}
                onMouseLeave={e => e.currentTarget.style.color = '#4a6285'}
              >
                {link}
              </div>
            ))}
          </div>

          {/* 服务 */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4ff', marginBottom: '20px' }}>
              {t.footer.serviceTitle}
            </div>
            {t.footer.service.map(link => (
              <div
                key={link}
                style={{
                  fontSize: '13px',
                  color: '#4a6285',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8ea8cc'}
                onMouseLeave={e => e.currentTarget.style.color = '#4a6285'}
              >
                {link}
              </div>
            ))}
          </div>
        </div>

        {/* 底部版权 */}
        <div style={{
          borderTop: '1px solid rgba(30,60,106,0.3)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ fontSize: '13px', color: '#2a4f7f' }}>
            {t.footer.copyright}
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {t.footer.legal.map(item => (
              <span
                key={item}
                style={{
                  fontSize: '12px',
                  color: '#2a4f7f',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8ea8cc'}
                onMouseLeave={e => e.currentTarget.style.color = '#2a4f7f'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
