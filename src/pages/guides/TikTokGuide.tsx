import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function TikTokGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="🎵"
      badge="free"
      title={L('מדריך TikTok', 'TikTok Guide')}
      subtitle={L('פרוץ לטיקטוק ובנה קהל אדיר', 'Break Into TikTok and Build a Massive Audience')}
      description={L(
        'TikTok היא הפלטפורמה עם הצמיחה הכי מהירה בעולם. למד איך לנצל אותה כדי להגיע לקהל חדש ולהצמיח את העסק שלך.',
        'TikTok is the fastest-growing platform in the world. Learn how to leverage it to reach new audiences and grow your business.'
      )}
      sections={[
        {
          emoji: '📊',
          title: L('למה TikTok בשנת 2025?', 'Why TikTok in 2025?'),
          content: L(
            'TikTok היא הפלטפורמה היחידה שבה חשבון עם 0 עוקבים יכול להגיע למיליון צפיות בוידאו הראשון.\n\nהאלגוריתם של TikTok לא מבוסס על עוקבים - הוא מבוסס על עניין! זאת אומרת:\n• כולם מתחילים שווים\n• תוכן טוב יגיע לאנשים הנכונים\n• הצמיחה מהירה פי 10 מאינסטגרם',
            'TikTok is the only platform where an account with 0 followers can reach one million views on the first video.\n\nTikTok\'s algorithm is not based on followers - it\'s based on interest! That means:\n• Everyone starts equal\n• Good content reaches the right people\n• Growth is 10x faster than Instagram'
          ),
        },
        {
          emoji: '🎬',
          title: L('מה עובד ב-TikTok', 'What Works on TikTok'),
          content: L(
            '✓ וידאו בין 15-60 שניות (sweet spot: 30 שניות)\n✓ 3 שניות ראשונות = הכל (Hook חזק)\n✓ כתוביות - 80% צופים ללא קול\n✓ טרנד + Twist אישי\n✓ POV videos\n✓ "Would you rather" ו-"Tell me without telling me"\n✓ תגובה לתגובות עם וידאו\n✓ Duet עם וידאו פופולרי',
            '✓ Video between 15-60 seconds (sweet spot: 30 seconds)\n✓ First 3 seconds = everything (strong Hook)\n✓ Captions - 80% watch without sound\n✓ Trend + personal Twist\n✓ POV videos\n✓ "Would you rather" and "Tell me without telling me"\n✓ Reply to comments with video\n✓ Duet with a popular video'
          ),
        },
        {
          emoji: '🔥',
          title: L('מבנה TikTok מנצח', 'Winning TikTok Structure'),
          content: L(
            '0-3 שניות: HOOK - "הסוד שאף אחד לא מספר לך..."\n3-10 שניות: הבטחה - "אם תראה עד הסוף תקבל..."\n10-25 שניות: הערך - תוכן מהיר וממוקד\n25-30 שניות: CTA - "עקוב לעוד כזה"\n\nהוסף:\n• טקסט בתחתית\n• מוזיקה טרנדית\n• Hashtags ממוקדים (3-5)',
            '0-3 seconds: HOOK - "The secret nobody tells you..."\n3-10 seconds: Promise - "If you watch to the end you\'ll get..."\n10-25 seconds: Value - fast and focused content\n25-30 seconds: CTA - "Follow for more like this"\n\nAdd:\n• Text overlay\n• Trending music\n• Targeted hashtags (3-5)'
          ),
        },
        {
          emoji: '📈',
          title: L('אסטרטגיית הצמיחה', 'Growth Strategy'),
          content: L(
            'שבוע 1-2: 1-3 סרטונים ביום, בדוק מה עובד\nשבוע 3-4: הכפל את מה שעבד\nחודש 2: שתף פעולה עם חשבונות אחרים\nחודש 3: צור series (סדרת תוכן)\n\nכלל: Quantity leads to Quality בתחילת הדרך.\nהעלה 30 סרטונים לפני שאתה שופט.',
            'Week 1-2: 1-3 videos per day, test what works\nWeek 3-4: double down on what worked\nMonth 2: collaborate with other accounts\nMonth 3: create a content series\n\nRule: Quantity leads to Quality at the start.\nPost 30 videos before you judge.'
          ),
        },
        {
          emoji: '💰',
          title: L('מונטיזציה ב-TikTok', 'Monetization on TikTok'),
          content: L(
            '• TikTok Creator Fund: תשלום על צפיות\n• Live Gifts: מתנות מהצופים בשידור חי\n• Brand Deals: שיתופי פעולה עם מותגים\n• Link in Bio: הובלת תנועה לאתר/מוצר\n• קורסים ומוצרים דיגיטליים\n• Affiliate Marketing\n\nהמפתח: בנה קהל נאמן - הפוך אותו ללקוחות.',
            '• TikTok Creator Fund: payment per views\n• Live Gifts: gifts from viewers in live streams\n• Brand Deals: brand collaborations\n• Link in Bio: driving traffic to website/product\n• Courses and digital products\n• Affiliate Marketing\n\nThe key: build a loyal audience - turn them into customers.'
          ),
        },
        {
          emoji: '🛠️',
          title: L('כלים חיוניים', 'Essential Tools'),
          content: L(
            '• CapCut: עריכה מהירה עם AI (חינם)\n• TikTok Creative Center: טרנדים ומוזיקה\n• Canva: גרפיקה לכתוביות\n• ChatGPT: רעיונות ותסריטים\n• ManyChat: אוטומציה לDMs\n• Metricool: ניתוח ביצועים',
            '• CapCut: fast AI editing (free)\n• TikTok Creative Center: trends and music\n• Canva: graphics for captions\n• ChatGPT: ideas and scripts\n• ManyChat: DM automation\n• Metricool: performance analytics'
          ),
        },
      ]}
    />
  )
}
