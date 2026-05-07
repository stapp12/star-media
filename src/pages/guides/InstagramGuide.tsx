import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function InstagramGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="📱"
      badge="free"
      title={L('מדריך אינסטגרם', 'Instagram Guide')}
      subtitle={L('מאפס לסטארס - המדריך המלא', 'From Zero to Stars - The Complete Guide')}
      description={L(
        'כל מה שצריך לדעת כדי לבנות נוכחות חזקה באינסטגרם, להגדיל עוקבים ולהפוך את הפרופיל שלך למכונת מכירות.',
        'Everything you need to know to build a strong Instagram presence, grow followers and turn your profile into a sales machine.'
      )}
      sections={[
        {
          emoji: '🎯',
          title: L('למה אינסטגרם חשוב לעסק שלך?', 'Why Instagram Matters for Your Business'),
          content: L(
            'אינסטגרם היא הפלטפורמה עם הפוטנציאל הגבוה ביותר לעסקים קטנים ובינוניים. מעל מיליארד משתמשים פעילים, ורוב הרכישות מתחילות בגילוי ברשת.\n\nהנתונים מדברים בעד עצמם: 70% מהמשתמשים גילו מוצר חדש באינסטגרם, ו-130 מיליון אנשים לוחצים על פוסטים עם תגי קניה בכל חודש.',
            'Instagram is the platform with the highest potential for small and medium businesses. Over one billion active users, and most purchases start with discovery online.\n\nThe numbers speak for themselves: 70% of users discovered a new product on Instagram, and 130 million people tap on shopping posts every month.'
          ),
        },
        {
          emoji: '⚙️',
          title: L('הגדרת הפרופיל הנכונה', 'Setting Up Your Profile Correctly'),
          content: L(
            '• שם משתמש: קצר, ברור, קשור לעסק\n• תמונת פרופיל: לוגו ברזולוציה גבוהה\n• Bio: 150 תווים שמסבירים מה אתה עושה + Call to Action + קישור\n• Highlights: ארגן Stories לקטגוריות (שירותים, המלצות, עבודות)\n• קישור בBio: השתמש בlinktr.ee או דף נחיתה ייעודי',
            '• Username: short, clear, business-related\n• Profile photo: high-resolution logo\n• Bio: 150 characters explaining what you do + Call to Action + link\n• Highlights: organize Stories into categories (services, testimonials, work)\n• Link in Bio: use linktr.ee or a dedicated landing page'
          ),
        },
        {
          emoji: '📸',
          title: L('תוכן שעובד', 'Content That Works'),
          content: L(
            '• Reels: ה-algorithm מעדיף וידאו קצר - 15-30 שניות, עם הוק חזק ב-3 שניות הראשונות\n• Carousels: שמירה גבוהה ומעורבות - מושלם למדריכים וטיפים\n• Stories: יומיות, אותנטיות, עם סקרים ושאלות\n• Posts: 3-5 בשבוע, באיכות גבוהה\n\nכלל הזהב: 80% ערך + 20% מכירות',
            '• Reels: the algorithm favors short video - 15-30 seconds with a strong hook in the first 3 seconds\n• Carousels: high saves and engagement - perfect for guides and tips\n• Stories: daily, authentic, with polls and questions\n• Posts: 3-5 per week, high quality\n\nGolden rule: 80% value + 20% sales'
          ),
        },
        {
          emoji: '📅',
          title: L('לוח תוכן שבועי מנצח', 'Winning Weekly Content Calendar'),
          content: L(
            'ראשון: טיפ מקצועי (Carousel)\nשני: Behind the scenes (Story)\nשלישי: Reel מרתק\nרביעי: המלצת לקוח\nחמישי: Reel חינוכי\nשישי: פוסט השראה\nשבת: שאלה/סקר ב-Stories',
            'Sunday: Professional tip (Carousel)\nMonday: Behind the scenes (Story)\nTuesday: Engaging Reel\nWednesday: Customer testimonial\nThursday: Educational Reel\nFriday: Inspiration post\nSaturday: Question/poll in Stories'
          ),
        },
        {
          emoji: '📊',
          title: L('ניתוח ביצועים', 'Performance Analysis'),
          content: L(
            'מדדים שחשוב לעקוב אחריהם:\n• Reach: כמה אנשים ראו את התוכן\n• Engagement Rate: (לייקים+תגובות+שיתופים)/עוקבים × 100\n• Saves: אינדיקטור חזק לאיכות התוכן\n• Profile Visits: כמה עברו לפרופיל\n• Follower Growth: גדילה שבועית/חודשית\n\nמינימום 3-4% engagement rate זה טוב. מעל 6% - מעולה.',
            'Key metrics to track:\n• Reach: how many people saw the content\n• Engagement Rate: (likes+comments+shares)/followers × 100\n• Saves: strong indicator of content quality\n• Profile Visits: how many visited your profile\n• Follower Growth: weekly/monthly growth\n\nMinimum 3-4% engagement rate is good. Above 6% - excellent.'
          ),
        },
        {
          emoji: '🚀',
          title: L('טיפים לצמיחה מהירה', 'Tips for Fast Growth'),
          content: L(
            '• השתמש ב-3-5 hashtags ממוקדים (לא 30 כלליים)\n• הגב לכל תגובה ב-60 דקות הראשונות\n• שתף פעולה עם חשבונות בתחום שלך\n• פרסם בשעות שהקהל שלך פעיל (בד"כ 7-9 בבוקר, 12-14, 19-21)\n• Cross-promote: שתף את הreels ב-TikTok וFacebook',
            '• Use 3-5 targeted hashtags (not 30 generic ones)\n• Reply to every comment within the first 60 minutes\n• Collaborate with accounts in your niche\n• Post when your audience is active (usually 7-9am, 12-2pm, 7-9pm)\n• Cross-promote: share Reels on TikTok and Facebook'
          ),
        },
      ]}
    />
  )
}
