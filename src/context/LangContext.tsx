import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'he' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  dir: 'rtl' | 'ltr'
}

const translations: Record<Lang, Record<string, string>> = {
  he: {
    // Nav
    'nav.home': 'בית',
    'nav.services': 'שירותים',
    'nav.courses': 'קורסים',
    'nav.guides': 'מדריכים',
    'nav.about': 'אודות',
    'nav.contact': 'צור קשר',
    'nav.cta': 'התחל עכשיו',

    // Hero
    'hero.badge': 'סוכנות שיווק דיגיטלי מובילה',
    'hero.title1': 'מהפכת השיווק',
    'hero.title2': 'הדיגיטלי שלך',
    'hero.sub': 'אנחנו הופכים עסקים לאגדות. שיווק חכם, תוכן שמוכר, טכנולוגיה שעובדת.',
    'hero.cta1': 'התחל עכשיו',
    'hero.cta2': 'צפה בקורסים',
    'hero.stat1': 'לקוחות מרוצים',
    'hero.stat2': 'פרויקטים',
    'hero.stat3': 'שביעות רצון',
    'hero.stat4': 'שנות ניסיון',

    // Services
    'services.title': 'השירותים שלנו',
    'services.sub': 'הכל תחת קורת גג אחת - מאסטרטגיה ועד ביצוע',
    'services.s1.title': 'ניהול סושיאל מדיה',
    'services.s1.desc': 'ניהול מקצועי של כל ערוצי הסושיאל - תוכן, זמינות ומעורבות.',
    'services.s2.title': 'בניית אתרים',
    'services.s2.desc': 'אתרים מרהיבים ומהירים שממירים גולשים ללקוחות.',
    'services.s3.title': 'ניהול עמודים',
    'services.s3.desc': 'ניהול יומיומי של עמודי האינסטגרם, פייסבוק, טיקטוק ועוד.',
    'services.s4.title': 'קורסים ומדריכים',
    'services.s4.desc': 'יצירה, הפצה ומכירה של קורסים דיגיטליים ומדריכים מקצועיים.',
    'services.s5.title': 'שיווק חכם',
    'services.s5.desc': 'אסטרטגיית שיווק מבוססת נתונים שמניעה צמיחה אמיתית.',
    'services.s6.title': 'בינה מלאכותית',
    'services.s6.desc': 'שילוב כלי AI מתקדמים בתהליכי השיווק שלך.',
    'services.s7.title': 'יצירת וידאו AI',
    'services.s7.desc': 'סרטוני שיווק ותוכן עם כלי בינה מלאכותית חדשניים.',
    'services.s8.title': 'מיתוג ועיצוב',
    'services.s8.desc': 'עיצוב זהות מותג חזקה שנחרטת בזיכרון.',

    // Courses
    'courses.title': 'קורסים ומדריכים',
    'courses.sub': 'תוכן מקצועי שמקדם אותך קדימה',
    'courses.free': 'חינם',
    'courses.paid': 'פרימיום',
    'courses.cta': 'לצפייה',
    'courses.c1.title': 'מדריך אינסטגרם',
    'courses.c1.desc': 'כל מה שצריך לדעת על אינסטגרם - מאפס לסטארס.',
    'courses.c2.title': 'מדריך מצגות',
    'courses.c2.desc': 'צור מצגות מרשימות שמוכרות ומשכנעות.',
    'courses.c3.title': 'קורס Claude Design',
    'courses.c3.desc': 'עיצוב מתקדם עם בינה מלאכותית - הקורס המלא.',
    'courses.c4.title': 'המדריך הסודי',
    'courses.c4.desc': 'תוכן בלעדי שרק אנשים מיוחדים מקבלים.',
    'courses.c5.title': 'קורס AI Studio',
    'courses.c5.desc': 'יצור תוכן וידאו מקצועי עם כלי AI.',
    'courses.c6.title': 'מדריך ChatGPT לעסקים',
    'courses.c6.desc': 'איך להשתמש בChatGPT כדי לצמוח ולחסוך זמן.',
    'courses.c7.title': 'מדריך יצירת תוכן',
    'courses.c7.desc': 'נוסחאות תוכן שעובדות - לכל פלטפורמה.',
    'courses.c8.title': 'מדריך TikTok',
    'courses.c8.desc': 'פרוץ לטיקטוק ובנה קהל עוקבים אדיר.',

    // Instagram
    'ig.title': 'עקוב באינסטגרם',
    'ig.sub': 'תוכן יומיומי, טיפים, השראה ועדכונים',
    'ig.follow': 'עקוב עכשיו @starmedia994',
    'ig.posts': 'פוסטים',
    'ig.followers': 'עוקבים',
    'ig.following': 'עוקב אחרי',

    // Contact
    'contact.title': 'בואו נעשה עסקים',
    'contact.sub': 'השאר פרטים ונחזור אליך תוך 24 שעות',
    'contact.name': 'שם מלא',
    'contact.phone': 'טלפון',
    'contact.email': 'אימייל',
    'contact.service': 'מה מעניין אותך?',
    'contact.message': 'ספר לנו על הפרויקט',
    'contact.send': 'שלח הודעה',
    'contact.sending': 'שולח...',
    'contact.success': 'ההודעה נשלחה! נחזור אליך בקרוב.',
    'contact.error': 'שגיאה בשליחה, נסה שוב.',

    // Footer
    'footer.rights': 'כל הזכויות שמורות',
    'footer.tagline': 'שיווק ויזואלי שעובד בשבילך',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.courses': 'Courses',
    'nav.guides': 'Guides',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',

    'hero.badge': 'Leading Digital Marketing Agency',
    'hero.title1': 'Your Digital',
    'hero.title2': 'Marketing Revolution',
    'hero.sub': 'We turn businesses into legends. Smart marketing, content that sells, technology that works.',
    'hero.cta1': 'Get Started',
    'hero.cta2': 'View Courses',
    'hero.stat1': 'Happy Clients',
    'hero.stat2': 'Projects',
    'hero.stat3': 'Satisfaction',
    'hero.stat4': 'Years Experience',

    'services.title': 'Our Services',
    'services.sub': 'Everything under one roof - from strategy to execution',
    'services.s1.title': 'Social Media Management',
    'services.s1.desc': 'Professional management of all social channels - content, availability and engagement.',
    'services.s2.title': 'Website Development',
    'services.s2.desc': 'Stunning, fast websites that convert visitors into customers.',
    'services.s3.title': 'Page Management',
    'services.s3.desc': 'Daily management of Instagram, Facebook, TikTok and more.',
    'services.s4.title': 'Courses & Guides',
    'services.s4.desc': 'Create, distribute and sell digital courses and professional guides.',
    'services.s5.title': 'Smart Marketing',
    'services.s5.desc': 'Data-driven marketing strategy that drives real growth.',
    'services.s6.title': 'Artificial Intelligence',
    'services.s6.desc': 'Integrate advanced AI tools into your marketing processes.',
    'services.s7.title': 'AI Video Creation',
    'services.s7.desc': 'Marketing and content videos with innovative AI tools.',
    'services.s8.title': 'Branding & Design',
    'services.s8.desc': 'Strong brand identity design that stays in memory.',

    'courses.title': 'Courses & Guides',
    'courses.sub': 'Professional content that moves you forward',
    'courses.free': 'Free',
    'courses.paid': 'Premium',
    'courses.cta': 'View',
    'courses.c1.title': 'Instagram Guide',
    'courses.c1.desc': 'Everything you need to know about Instagram - from zero to star.',
    'courses.c2.title': 'Presentation Guide',
    'courses.c2.desc': 'Create impressive presentations that sell and persuade.',
    'courses.c3.title': 'Claude Design Course',
    'courses.c3.desc': 'Advanced design with artificial intelligence - the full course.',
    'courses.c4.title': 'The Secret Guide',
    'courses.c4.desc': 'Exclusive content only special people receive.',
    'courses.c5.title': 'AI Studio Course',
    'courses.c5.desc': 'Create professional video content with AI tools.',
    'courses.c6.title': 'ChatGPT for Business',
    'courses.c6.desc': 'How to use ChatGPT to grow and save time.',
    'courses.c7.title': 'Content Creation Guide',
    'courses.c7.desc': 'Content formulas that work - for every platform.',
    'courses.c8.title': 'TikTok Guide',
    'courses.c8.desc': 'Break into TikTok and build a massive following.',

    'ig.title': 'Follow on Instagram',
    'ig.sub': 'Daily content, tips, inspiration and updates',
    'ig.follow': 'Follow Now @starmedia994',
    'ig.posts': 'Posts',
    'ig.followers': 'Followers',
    'ig.following': 'Following',

    'contact.title': "Let's Do Business",
    'contact.sub': 'Leave your details and we\'ll get back to you within 24 hours',
    'contact.name': 'Full Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.service': "What are you interested in?",
    'contact.message': 'Tell us about your project',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent! We\'ll get back to you soon.',
    'contact.error': 'Error sending, please try again.',

    'footer.rights': 'All rights reserved',
    'footer.tagline': 'Visual marketing that works for you',
  }
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('he')

  const t = (key: string) => translations[lang][key] ?? key

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir: lang === 'he' ? 'rtl' : 'ltr' }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
