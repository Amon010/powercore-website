import { useI18n } from '../i18n/I18nProvider'

export default function Footer() {
  const { t } = useI18n()

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Internal page section anchors mapped by display name key
  const companyLinks: Array<{ label: string; href: string }> = [
    { label: t.footer.company[0], href: '#about' },
    { label: t.footer.company[1], href: '#about' },
    { label: t.footer.company[2], href: '#advantages' },
    { label: t.footer.company[3], href: '#about' },
    { label: t.footer.company[4], href: '#contact' },
  ]

  const serviceLinks: Array<{ label: string; href: string }> = [
    { label: t.footer.service[0], href: '#contact' },
    { label: t.footer.service[1], href: '#contact' },
    { label: t.footer.service[2], href: '#contact' },
    { label: t.footer.service[3], href: '#contact' },
    { label: t.footer.service[4], href: '#faq' },
  ]

  const productLinks: Array<{ label: string; href: string }> = t.footer.products.map(name => ({
    label: name,
    href: '#products',
  }))

  const linkStyle = {
    fontSize: '13px' as const,
    color: '#4a6285',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'color 0.2s',
    textDecoration: 'none' as const,
    display: 'block',
  }

  return (
    <footer
      id="footer"
      style={{
        background: '#060f1e',
        borderTop: '1px solid rgba(30,60,106,0.4)',
        padding: '60px 24px 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
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
              <a href="https://semibattery.com/" aria-label="semibattery.com — PowerCore Energy homepage">
                <img
                  src="/images/logo-chengsheng.png"
                  alt="PowerCore Energy — semibattery.com logo"
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                />
              </a>
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
            {/* Social + contact links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {(['LinkedIn', 'WeChat', 'WhatsApp'] as const).map(platform => (
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
            {productLinks.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => { e.preventDefault(); handleScroll(item.href) }}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#8ea8cc')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a6285')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* 公司 — About / trust pages */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4ff', marginBottom: '20px' }}>
              {t.footer.companyTitle}
            </div>
            {companyLinks.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => { e.preventDefault(); handleScroll(item.href) }}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#8ea8cc')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a6285')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* 服务支持 */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4ff', marginBottom: '20px' }}>
              {t.footer.serviceTitle}
            </div>
            {serviceLinks.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => { e.preventDefault(); handleScroll(item.href) }}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#8ea8cc')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a6285')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* 底部版权 & 法律链接 */}
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
            {/* Privacy & Terms link to contact section as placeholders */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleScroll('#contact') }}
              style={{ fontSize: '12px', color: '#2a4f7f', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8ea8cc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#2a4f7f')}
            >
              {t.footer.legal[0]}
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleScroll('#contact') }}
              style={{ fontSize: '12px', color: '#2a4f7f', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8ea8cc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#2a4f7f')}
            >
              {t.footer.legal[1]}
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleScroll('#contact') }}
              style={{ fontSize: '12px', color: '#2a4f7f', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8ea8cc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#2a4f7f')}
            >
              {t.footer.legal[2]}
            </a>
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
