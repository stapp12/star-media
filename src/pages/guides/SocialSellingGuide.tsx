import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function SocialSellingGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="💰"
      badge="paid"
      title={L('Social Selling', 'Social Selling')}
      subtitle={L('מכירות דרך רשתות חברתיות - השיטה שעובדת', 'Selling Through Social Media - The Method That Works')}
      description={L(
        'למד למכור בצורה טבעית ואותנטית דרך Instagram, LinkedIn וTikTok - בלי להרגיש ספאמר.',
        'Learn to sell naturally and authentically through Instagram, LinkedIn and TikTok - without feeling like a spammer.'
      )}
      sections={[
        {
          emoji: '🎯',
          title: L('מה זה Social Selling ולמה זה עובד?', 'What is Social Selling and Why Does it Work?'),
          content: L(
            'Social Selling הוא תהליך בניית קשרים ואמון עם לקוחות פוטנציאליים דרך רשתות חברתיות - לפני שאתה מנסה למכור להם.\n\n78% מהמוכרים שמשתמשים ב-Social Selling מוכרים יותר מאלה שלא. הסיבה: אנשים קונים מאנשים שהם סומכים עליהם.',
            'Social Selling is the process of building relationships and trust with potential clients through social media - before you try to sell to them.\n\n78% of sellers who use Social Selling outsell those who don\'t. The reason: people buy from people they trust.'
          ),
        },
        {
          emoji: '🏗️',
          title: L('בניית הפרופיל המוכר', 'Building the Selling Profile'),
          content: L(
            '• תמונת פרופיל מקצועית - לא סלפי\n• Bio שמסביר מה אתה עושה ולמי\n• Highlights עם הוכחות חברתיות: המלצות, תוצאות, עבודות\n• קישור לדף נחיתה או ווצאפ\n• פוסט "עלי" שמספר את הסיפור שלך\n\nהפרופיל שלך הוא כרטיס הביקור החדש.',
            '• Professional profile photo - not a selfie\n• Bio that explains what you do and for whom\n• Highlights with social proof: testimonials, results, work samples\n• Link to landing page or WhatsApp\n• "About me" post that tells your story\n\nYour profile is the new business card.'
          ),
        },
        {
          emoji: '📝',
          title: L('תוכן שמוכר בלי למכור', 'Content That Sells Without Selling'),
          content: L(
            'נוסחת 4-1-1:\n• 4 פוסטים של ערך (טיפים, מידע, השראה)\n• 1 פוסט שיתוף תוכן של אחרים\n• 1 פוסט שיווקי ישיר\n\nסוגי תוכן שעובדים:\n• Case studies: לקוח שהצלחנו\n• Behind the scenes: איך אתה עובד\n• Tips: ידע מקצועי בחינם\n• Mistakes: טעויות נפוצות בתחום',
            'The 4-1-1 formula:\n• 4 value posts (tips, information, inspiration)\n• 1 post sharing others\' content\n• 1 direct promotional post\n\nContent types that work:\n• Case studies: a client we helped succeed\n• Behind the scenes: how you work\n• Tips: free professional knowledge\n• Mistakes: common mistakes in your field'
          ),
        },
        {
          emoji: '🤝',
          title: L('בניית קשרים אמיתיים', 'Building Genuine Relationships'),
          content: L(
            '• הגב לתגובות תוך שעה - בצורה אמיתית ולא generic\n• שלח DM אישי ומותאם (לא copy-paste)\n• כן לתת value לפני שמבקשים משהו\n• הגב לפוסטים של לקוחות פוטנציאליים\n• השתתף בקבוצות ופורומים רלוונטיים\n\nכלל: תן 10 פעמים לפני שאתה לוקח פעם אחת.',
            '• Reply to comments within an hour - genuinely, not generically\n• Send personal, tailored DMs (not copy-paste)\n• Give value before asking for anything\n• Comment on potential clients\' posts\n• Participate in relevant groups and forums\n\nRule: give 10 times before you take once.'
          ),
        },
        {
          emoji: '💬',
          title: L('DM שמביא לפגישות', 'DMs That Lead to Meetings'),
          content: L(
            'תבנית מנצחת:\n1. התחל עם משהו אישי/ספציפי\n2. הצג ערך (לא "הי, מה שלומך?")\n3. שאל שאלה אחת בלבד\n4. קצר - עד 3 שורות\n\nדוגמה: "ראיתי את הפוסט שלך על [נושא] - נקודה מעולה. אנחנו עזרנו ל-[עסק דומה] להגדיל מכירות ב-40% בשיטה דומה. רלוונטי לשוחח?"',
            'Winning template:\n1. Start with something personal/specific\n2. Present value (not "Hey, how are you?")\n3. Ask only one question\n4. Short - up to 3 lines\n\nExample: "Saw your post about [topic] - great point. We helped [similar business] increase sales by 40% using a similar method. Relevant to chat?"'
          ),
        },
        {
          emoji: '📊',
          title: L('מדדים ומטרות', 'Metrics and Goals'),
          content: L(
            'מה למדוד:\n• Profile views בשבוע\n• Connection requests שנשלחו vs התקבלו\n• DMs שנשלחו vs שהגיעו לשיחה\n• שיחות שהגיעו לפגישה\n• פגישות שנסגרו כעסקה\n\nיעד מציאותי לחודש ראשון: 5-10 שיחות איכותיות.',
            'What to measure:\n• Profile views per week\n• Connection requests sent vs received\n• DMs sent vs that led to conversation\n• Conversations that led to a meeting\n• Meetings that closed as deals\n\nRealistic goal for first month: 5-10 quality conversations.'
          ),
        },
      ]}
    />
  )
}
