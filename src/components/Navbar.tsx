import { useState, useEffect, useRef } from 'react'
import { Menu, X, Zap, Globe, Check } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { type Lang, langNames, langFlags } from '../i18n/locales'

export default function Navbar() {
  const { lang, setLang, t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 移动端菜单打开时锁定 body 滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // 点击外部关闭语言选择
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setLangOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#products', label: t.nav.products },
    { href: '#advantages', label: t.nav.advantages },
    { href: '#contact', label: t.nav.contact },
  ]

  const langOptions: Lang[] = ['zh', 'en', 'ja']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(10, 22, 40, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30, 60, 106, 0.6)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
            onClick={() => handleNavClick('#home')}>
            <div style={{
              width: '38px', height: '38px',
              background: 'linear-gradient(135deg, #f5821e, #ff9a3c)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px rgba(245,130,30,0.4)',
            }}>
              <Zap size={20} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#f0f4ff', lineHeight: 1.2 }}>PowerCore</div>
              <div style={{ fontSize: '10px', color: '#f5821e', letterSpacing: '2px', textTransform: 'uppercase' }}>Energy Tech</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
            className="hidden-mobile">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  border: 'none',
                  color: '#8ea8cc',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#f0f4ff'
                  ;(e.target as HTMLElement).style.background = 'rgba(30, 60, 106, 0.5)'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#8ea8cc'
                  ;(e.target as HTMLElement).style.background = 'transparent'
                }}
              >
                {link.label}
              </button>
            ))}

            {/* 语言切换器 */}
            <div ref={langRef} style={{ position: 'relative', marginLeft: '4px' }}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 12px',
                  background: 'rgba(30, 60, 106, 0.3)',
                  border: '1px solid rgba(30, 60, 106, 0.5)',
                  borderRadius: '8px',
                  color: '#8ea8cc',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(245,130,30,0.5)'
                  e.currentTarget.style.color = '#f0f4ff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(30, 60, 106, 0.5)'
                  e.currentTarget.style.color = '#8ea8cc'
                }}
              >
                <Globe size={15} />
                {langFlags[lang]} {langNames[lang]}
              </button>

              {/* 语言下拉菜单 */}
              {langOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  right: 0,
                  minWidth: '160px',
                  background: 'rgba(16, 30, 56, 0.98)',
                  border: '1px solid rgba(30, 60, 106, 0.6)',
                  borderRadius: '12px',
                  padding: '6px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(16px)',
                }}>
                  {langOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => { setLang(option); setLangOpen(false) }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '10px 14px',
                        background: lang === option ? 'rgba(245,130,30,0.1)' : 'transparent',
                        border: 'none',
                        borderRadius: '8px',
                        color: lang === option ? '#f5821e' : '#8ea8cc',
                        fontSize: '14px',
                        fontWeight: lang === option ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => {
                        if (lang !== option) {
                          e.currentTarget.style.background = 'rgba(30, 60, 106, 0.3)'
                          e.currentTarget.style.color = '#f0f4ff'
                        }
                      }}
                      onMouseLeave={e => {
                        if (lang !== option) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = '#8ea8cc'
                        }
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>{langFlags[option]}</span>
                      <span style={{ flex: 1, textAlign: 'left' }}>{langNames[option]}</span>
                      {lang === option && <Check size={14} color="#f5821e" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('#contact')}
              style={{
                marginLeft: '8px',
                padding: '9px 22px',
                background: 'linear-gradient(135deg, #f5821e, #d96a0a)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(245,130,30,0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(245,130,30,0.5)'
                ;(e.target as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.boxShadow = '0 4px 12px rgba(245,130,30,0.3)'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            className="show-mobile">
            {/* 移动端语言切换 */}
            <button
              onClick={() => {
                const idx = langOptions.indexOf(lang)
                setLang(langOptions[(idx + 1) % langOptions.length])
              }}
              style={{
                padding: '6px 10px',
                background: 'rgba(30, 60, 106, 0.3)',
                border: '1px solid rgba(30, 60, 106, 0.5)',
                borderRadius: '6px',
                color: '#8ea8cc',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              {langFlags[lang]}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? (lang === 'zh' ? '关闭菜单' : lang === 'ja' ? 'メニューを閉じる' : 'Close menu') : (lang === 'zh' ? '打开菜单' : lang === 'ja' ? 'メニューを開く' : 'Open menu')}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#f0f4ff',
                cursor: 'pointer',
                padding: '8px',
                display: 'none',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            borderTop: '1px solid rgba(30,60,106,0.5)',
            paddingBottom: '16px',
            background: 'rgba(10,22,40,0.98)',
          }}>
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px 16px',
                  background: 'transparent',
                  border: 'none',
                  color: '#8ea8cc',
                  fontSize: '15px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                {link.label}
              </button>
            ))}

            {/* 移动端语言选择行 */}
            <div style={{
              display: 'flex',
              gap: '8px',
              padding: '8px 16px 4px',
            }}>
              {langOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setLang(option)}
                  style={{
                    flex: 1,
                    padding: '10px 0',
                    background: lang === option ? 'rgba(245,130,30,0.15)' : 'rgba(30, 60, 106, 0.3)',
                    border: lang === option ? '1px solid rgba(245,130,30,0.5)' : '1px solid rgba(30, 60, 106, 0.5)',
                    borderRadius: '8px',
                    color: lang === option ? '#f5821e' : '#8ea8cc',
                    fontSize: '13px',
                    fontWeight: lang === option ? 600 : 400,
                    cursor: 'pointer',
                  }}
                >
                  {langFlags[option]} {langNames[option]}
                </button>
              ))}
            </div>

            <div style={{ padding: '8px 16px' }}>
              <button
                onClick={() => handleNavClick('#contact')}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #f5821e, #d96a0a)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
