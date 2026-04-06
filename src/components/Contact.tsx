import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, CheckCircle, Building2 } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  product: string
  quantity: string
  message: string
}

// ============================================================
// EmailJS 配置 — 请替换为你自己的三个凭证
// 注册教程见下方操作步骤
// ============================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

const infoIcons = [Phone, Mail, MapPin, Building2]
const infoColors = ['#f5821e', '#00c8e0', '#34d399', '#a78bfa']

const infoColorRgb: Record<string, string> = {
  '#f5821e': '245,130,30',
  '#00c8e0': '0,200,224',
  '#34d399': '52,211,153',
  '#a78bfa': '167,139,250',
}

export default function Contact() {
  const { t, lang } = useI18n()
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_company: form.company,
          from_email: form.email,
          phone: form.phone || '-',
          product: form.product || '-',
          quantity: form.quantity || '-',
          message: form.message || '-',
          language: lang,
          submitted_at: new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
        },
        EMAILJS_PUBLIC_KEY,
      )

      if (result.status === 200) {
        setSubmitted(true)
      } else {
        setError('提交失败，请稍后重试或直接邮件联系我们。')
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('[EmailJS Error]', msg, err)
      // 判断具体错误类型
      if (msg.includes('403') || msg.includes('forbidden') || msg.includes('auth')) {
        setError('认证失败，请检查 EmailJS 凭证是否正确。')
      } else if (msg.includes('400') || msg.includes('template')) {
        setError('邮件模板配置有误，请检查 EmailJS 模板变量。')
      } else {
        setError(`发送失败：${msg}`)
      }
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(10,22,40,0.6)',
    border: '1.5px solid rgba(30,60,106,0.6)',
    borderRadius: '10px',
    color: '#f0f4ff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    color: '#8ea8cc',
    marginBottom: '6px',
    fontWeight: 500,
  }

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px 60px',
        background: 'linear-gradient(180deg, #0f1e36, #0a1628)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景光晕 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(245,130,30,0.05) 0%, transparent 70%)',
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
            {t.contact.tag}
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: '#f0f4ff',
            marginBottom: '16px',
          }}>
            {t.contact.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#8ea8cc',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t.contact.desc}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.8fr',
          gap: '32px',
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* 左：联系信息 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {t.contact.info.map((info, i) => {
              const Icon = infoIcons[i]
              const color = infoColors[i]
              const rgb = infoColorRgb[color] || '245,130,30'
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'rgba(22, 37, 64, 0.5)',
                    border: '1px solid rgba(30,60,106,0.4)',
                    borderRadius: '16px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${color}40`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(30,60,106,0.4)'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    flexShrink: 0,
                    background: `rgba(${rgb}, 0.1)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#4a6285', marginBottom: '4px' }}>{info.label}</div>
                    <div style={{ fontSize: '15px', color: '#f0f4ff', fontWeight: 600, marginBottom: '2px' }}>{info.value}</div>
                    <div style={{ fontSize: '12px', color: '#8ea8cc' }}>{info.sub}</div>
                  </div>
                </div>
              )
            })}

            {/* 承诺标签 */}
            <div style={{
              padding: '20px 24px',
              background: 'rgba(245,130,30,0.06)',
              border: '1px solid rgba(245,130,30,0.2)',
              borderRadius: '16px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#f5821e', marginBottom: '12px' }}>
                {t.contact.promise.title}
              </div>
              {t.contact.promise.items.map(item => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: '#8ea8cc',
                  marginBottom: '8px',
                }}>
                  <CheckCircle size={14} color='#34d399' />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 右：询盘表单 */}
          <div style={{
            background: 'rgba(22, 37, 64, 0.6)',
            border: '1px solid rgba(30,60,106,0.5)',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: '15%', right: '15%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #f5821e, transparent)',
            }} />

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
              }}>
                <div style={{
                  fontSize: '64px',
                  marginBottom: '16px',
                  filter: 'drop-shadow(0 0 20px rgba(52,211,153,0.5))',
                }}>
                  ✅
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#f0f4ff', marginBottom: '12px' }}>
                  {t.contact.form.successTitle}
                </h3>
                <p style={{ fontSize: '15px', color: '#8ea8cc', lineHeight: 1.7, marginBottom: '24px' }}>
                  {t.contact.form.successMsg1} <span style={{ color: '#f5821e', fontWeight: 600 }}>{t.contact.form.successHighlight}</span> {t.contact.form.successMsg2}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', company: '', email: '', phone: '', product: '', quantity: '', message: '' })
                  }}
                  style={{
                    padding: '10px 28px',
                    background: 'rgba(245,130,30,0.1)',
                    border: '1px solid rgba(245,130,30,0.4)',
                    borderRadius: '8px',
                    color: '#f5821e',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {t.contact.form.submitAnother}
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                {/* 错误提示 */}
                {error && (
                  <div style={{
                    padding: '12px 16px',
                    marginBottom: '16px',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '10px',
                    color: '#f87171',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    ⚠️ {error}
                  </div>
                )}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '16px',
                }}
                  className="form-grid"
                >
                  <div>
                    <label style={labelStyle}>{t.contact.form.name}</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePh}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#f5821e'}
                      onBlur={e => e.target.style.borderColor = 'rgba(30,60,106,0.6)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.contact.form.company}</label>
                    <input
                      required
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={t.contact.form.companyPh}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#f5821e'}
                      onBlur={e => e.target.style.borderColor = 'rgba(30,60,106,0.6)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.contact.form.email}</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPh}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#f5821e'}
                      onBlur={e => e.target.style.borderColor = 'rgba(30,60,106,0.6)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.contact.form.phone}</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phonePh}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#f5821e'}
                      onBlur={e => e.target.style.borderColor = 'rgba(30,60,106,0.6)'}
                    />
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '16px',
                }}
                  className="form-grid"
                >
                  <div>
                    <label style={labelStyle}>{t.contact.form.product}</label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      {t.contact.form.productOptions.map((opt, i) => (
                        <option key={i} value={i === 0 ? '' : ['ultra','pro','rugged','mini','industrial','custom'][i - 1]} disabled={i === 0}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>{t.contact.form.quantity}</label>
                    <select
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      {t.contact.form.quantityOptions.map((opt, i) => (
                        <option key={i} value={i === 0 ? '' : ['1k-5k','5k-20k','20k+','sample'][i - 1]} disabled={i === 0}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePh}
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '100px',
                      fontFamily: 'inherit',
                    }}
                    onFocus={e => e.target.style.borderColor = '#f5821e'}
                    onBlur={e => e.target.style.borderColor = 'rgba(30,60,106,0.6)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: loading ? 'rgba(245,130,30,0.5)' : 'linear-gradient(135deg, #f5821e, #d96a0a)',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 20px rgba(245,130,30,0.3)',
                    transition: 'all 0.2s',
                  }}
                >
                  {loading ? (
                    <>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }} />
                      {t.contact.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {t.contact.form.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
