import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import locales, { type Lang, type Translations } from './locales'

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

/**
 * 根据浏览器语言偏好推断初始语言
 */
function detectBrowserLang(): Lang {
  const browserLangs = navigator.languages || [navigator.language]
  for (const lang of browserLangs) {
    const code = lang.toLowerCase().slice(0, 2)
    if (code === 'zh') return 'zh'
    if (code === 'ja') return 'ja'
    if (code === 'en') return 'en'
  }
  return 'zh' // 默认中文
}

/**
 * 从 localStorage 读取保存的语言，否则自动检测
 */
function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem('powercore-lang')
    if (saved === 'zh' || saved === 'en' || saved === 'ja') return saved
  } catch { /* ignore */ }
  return detectBrowserLang()
}

/**
 * 根据 IP 地址自动检测语言（异步，用于后续增强）
 * 
 * 实际部署时，推荐方案：
 * 1. 后端方案：服务端根据请求 IP 查询 geoIP 数据库，返回语言代码
 *    - 使用 MaxMind GeoIP2 或 ip-api.com 等 API
 *    - 例如: fetch('https://ipapi.co/json/').then(r => r.json()).then(d => d.country_code)
 * 2. CDN 方案：Cloudflare / Vercel Edge Functions 在边缘层判断
 * 3. 服务端渲染方案：在 SSR 的请求处理阶段根据 IP header 判断
 * 
 * 当前实现：页面加载后异步检测 IP，如果检测到的语言和当前不同则自动切换
 */
async function detectLangByIP(): Promise<Lang | null> {
  try {
    // 使用免费的 ip-api.com（仅限非商业用途，生产环境建议用 MaxMind）
    const res = await fetch('http://ip-api.com/json/?fields=countryCode', {
      signal: AbortSignal.timeout(3000), // 3秒超时
    })
    const data = await res.json()
    const countryCode = (data.countryCode as string || '').toUpperCase()

    // 日本 → 日语，中国/台湾/香港/新加坡 → 中文，其他 → 英语
    if (countryCode === 'JP') return 'ja'
    if (['CN', 'TW', 'HK', 'SG', 'MO'].includes(countryCode)) return 'zh'
    return 'en'
  } catch {
    // IP 检测失败，不干预当前语言
    return null
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('powercore-lang', newLang)
    } catch { /* ignore */ }
    // 更新 HTML lang 属性，对 SEO 友好
    document.documentElement.lang = newLang
  }, [])

  // 首次加载时，如果 localStorage 没有保存过语言，则根据 IP 异步检测
  useEffect(() => {
    const hasSaved = localStorage.getItem('powercore-lang')
    if (!hasSaved) {
      detectLangByIP().then(ipLang => {
        if (ipLang) setLang(ipLang)
      })
    }
  }, [setLang])

  const t = locales[lang]

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
