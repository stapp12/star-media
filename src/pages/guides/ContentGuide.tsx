import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function ContentGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="✍️"
      badge="free"
      title={L('מדריך יצירת תוכן', 'Content Creation Guide')}
      subtitle={L('תוכן שמוכר - לכל פלטפורמה', 'Content That Sells - For Every Platform')}
      description={L(
        'נוסחאות, מבנים ואסטרטגיות ליצירת תוכן שמשך, מעניין ומניע לפעולה. הפוך את עצמך לספק תוכן בלתי ניתן לעצירה.',
        'Formulas, structures and strategies for creating content that attracts, engages and drives action. Become an unstoppable content creator.'
      )}
      sections={[
        {
          emoji: '🎯',
          title: L('הנוסחה של תוכן ויראלי', 'The Viral Content Formula'),
          content: L(
            'כל תוכן שהפך לוויראלי מכיל לפחות אחד מ-3 אלמנטים:\n\n1. רגש חזק: השראה, הפתעה, כעס, צחוק\n2. שימושיות גבוהה: טיפ שאפשר ליישם מיד\n3. זהות: "זה בדיוק אני" - גורם לשיתוף\n\nדוגמה מנצחת: "3 דברים שאני מצטער שלא ידעתי לפני 10 שנים [רגש] + טיפ + זהות"',
            'Every piece of viral content contains at least one of 3 elements:\n\n1. Strong emotion: inspiration, surprise, anger, laughter\n2. High usefulness: a tip that can be applied immediately\n3. Identity: "that\'s exactly me" - drives sharing\n\nWinning example: "3 things I wish I knew 10 years ago [emotion] + tip + identity"'
          ),
        },
        {
          emoji: '📝',
          title: L('מבנה פוסט מנצח', 'Winning Post Structure'),
          content: L(
            'שורה 1 - HOOK: עצור את הגלילה\n(שאלה, הצהרה מפתיעה, מספר)\n\nשורה 2-3 - הבטחה: מה יקרה אם יקראו\n\nגוף - ערך: תוכן מוצק, ממוספר, ממוקד\n\nסוף - CTA: שאלה שמזמינה תגובה\n\n"מה הטיפ הכי טוב שקיבלת בנושא?"',
            'Line 1 - HOOK: stop the scroll\n(question, surprising statement, number)\n\nLines 2-3 - Promise: what happens if they read on\n\nBody - Value: solid, numbered, focused content\n\nEnd - CTA: a question inviting a response\n\n"What\'s the best tip you\'ve received on this topic?"'
          ),
        },
        {
          emoji: '📱',
          title: L('תוכן לכל פלטפורמה', 'Content for Every Platform'),
          content: L(
            'אינסטגרם Reels: 15-30 שניות, הוק חזק, כתוביות\nאינסטגרם פוסט: Carousel עם 5-10 שקפים\nTikTok: טרנדים + קול ייחודי\nLinkedIn: סיפורים מקצועיים, לקחים\nFacebook: תוכן ארוך, קהילה, גרופים\nYouTube Shorts: אותו תוכן כמו Reels\n\nהטריק: צור פעם אחת, הפץ לכל מקום.',
            'Instagram Reels: 15-30 seconds, strong hook, captions\nInstagram Post: Carousel with 5-10 slides\nTikTok: trends + unique voice\nLinkedIn: professional stories, lessons learned\nFacebook: long-form content, community, groups\nYouTube Shorts: same content as Reels\n\nThe trick: create once, distribute everywhere.'
          ),
        },
        {
          emoji: '📅',
          title: L('תכנון תוכן חודשי', 'Monthly Content Planning'),
          content: L(
            'שבוע 1: תוכן חינוכי (למד אותי משהו)\nשבוע 2: Behind the scenes (תראה לי איך)\nשבוע 3: הוכחה חברתית (שכנע אותי)\nשבוע 4: מכירה (קנה עכשיו)\n\nכלים לתכנון:\n• Notion - לוח תוכן מלא\n• Trello - לפי שלבי ייצור\n• Buffer/Later - תזמון אוטומטי',
            'Week 1: Educational content (teach me something)\nWeek 2: Behind the scenes (show me how)\nWeek 3: Social proof (convince me)\nWeek 4: Sales (buy now)\n\nPlanning tools:\n• Notion - full content board\n• Trello - by production stages\n• Buffer/Later - automatic scheduling'
          ),
        },
        {
          emoji: '🔑',
          title: L('10 רעיונות תוכן לכל עסק', '10 Content Ideas for Any Business'),
          content: L(
            '1. "X טעויות שרוב [הקהל] עושים"\n2. "איך עשיתי [הישג] ב-[זמן]"\n3. יום בחיים - Behind the scenes\n4. "שאלות שלקוחות שואלים תמיד"\n5. השוואה: לפני ואחרי\n6. ביקורת על דעה נפוצה\n7. Case Study של לקוח\n8. "הכלים שאני משתמש בהם כל יום"\n9. Myth Busting - שבירת מיתוסים\n10. חגיגת הישג עם לקוח',
            '1. "X mistakes most [audience] make"\n2. "How I achieved [result] in [time]"\n3. Day in the life - Behind the scenes\n4. "Questions clients always ask"\n5. Comparison: before and after\n6. Challenging a common opinion\n7. Client Case Study\n8. "Tools I use every day"\n9. Myth Busting\n10. Celebrating a client\'s success'
          ),
        },
      ]}
    />
  )
}
