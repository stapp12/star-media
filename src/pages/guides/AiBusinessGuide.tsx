import { useLang } from '../../context/LangContext'
import GuidePage from './GuidePage'

export default function AiBusinessGuide() {
  const { lang } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  return (
    <GuidePage
      emoji="🤖"
      badge="paid"
      title={L('AI לעסקים - מ-0 ליחידים', 'AI for Business - Zero to Expert')}
      subtitle={L('המדריך המקיף לצמיחת עסק עם בינה מלאכותית', 'The Complete Guide to Growing Your Business with AI')}
      description={L(
        'למד איך להשתמש בכלי AI מתקדמים כדי לחסוך זמן, להגדיל הכנסות ולקחת את העסק שלך לשלב הבא.',
        'Learn how to use advanced AI tools to save time, increase revenue and take your business to the next level.'
      )}
      sections={[
        {
          emoji: '🎯',
          title: L('למה AI הוא חובה לכל עסק ב-2025?', 'Why AI is Essential for Every Business in 2025'),
          content: L(
            'עסקים שמשתמשים ב-AI חוסכים בממוצע 30% מזמן העבודה השגרתי. מה שלקח שעות - לוקח עכשיו דקות.\n\nלא מדובר בטכנולוגיה עתידית - זו המציאות של היום. העסקים שלא יאמצו AI יישארו מאחור.',
            'Businesses using AI save an average of 30% of routine work time. What used to take hours now takes minutes.\n\nThis is not future technology - this is today\'s reality. Businesses that don\'t adopt AI will fall behind.'
          ),
        },
        {
          emoji: '🛠️',
          title: L('כלי ה-AI שכל עסק חייב', 'AI Tools Every Business Needs'),
          content: L(
            '• ChatGPT / Claude - כתיבה, מחקר, ניתוח\n• Midjourney / DALL·E - עיצוב ותמונות\n• HeyGen / Runway - סרטוני וידאו AI\n• Make / Zapier - אוטומציות חכמות\n• Notion AI - ניהול ידע וסיכומים\n• ElevenLabs - קריינות AI מקצועית',
            '• ChatGPT / Claude - writing, research, analysis\n• Midjourney / DALL·E - design and images\n• HeyGen / Runway - AI video\n• Make / Zapier - smart automations\n• Notion AI - knowledge management and summaries\n• ElevenLabs - professional AI voiceover'
          ),
        },
        {
          emoji: '📈',
          title: L('איך AI מגדיל הכנסות', 'How AI Increases Revenue'),
          content: L(
            '• שיווק: יצירת תוכן ב-10% מהזמן הרגיל\n• מכירות: AI chatbot שעונה ללקוחות 24/7\n• שירות לקוחות: מענה אוטומטי לשאלות נפוצות\n• ניתוח נתונים: תובנות שלוקחות לך ימים - בדקות\n• פרסונליזציה: תוכן מותאם לכל לקוח',
            '• Marketing: content creation in 10% of the normal time\n• Sales: AI chatbot that answers customers 24/7\n• Customer service: automatic answers to FAQs\n• Data analysis: insights that take days - in minutes\n• Personalization: content tailored to every customer'
          ),
        },
        {
          emoji: '⚡',
          title: L('תהליך עבודה עם AI', 'Working Process with AI'),
          content: L(
            '1. הגדר בבירור מה אתה רוצה (prompt ברור = תוצאה טובה)\n2. תן הקשר: מי אתה, מי הקהל, מה המטרה\n3. בקש פורמט ספציפי\n4. חזור ושפר - AI לומד מהפידבק שלך\n5. שמור prompt מוצלחים לשימוש חוזר',
            '1. Define clearly what you want (clear prompt = good result)\n2. Provide context: who you are, who the audience is, what the goal is\n3. Request a specific format\n4. Iterate and improve - AI learns from your feedback\n5. Save successful prompts for reuse'
          ),
        },
        {
          emoji: '🏆',
          title: L('תוצאות אמיתיות מלקוחות שלנו', 'Real Results from Our Clients'),
          content: L(
            'לקוח 1: חסך 15 שעות שבועיות על כתיבת תוכן\nלקוח 2: הכפיל את המכירות עם chatbot AI\nלקוח 3: הוריד עלויות פרסום ב-40% עם קריאייטיב AI\nלקוח 4: צוות של 2 אנשים מפיק כמו צוות של 10\n\nזה לא מזל - זו שיטה שניתן ללמוד.',
            'Client 1: saved 15 hours per week on content writing\nClient 2: doubled sales with an AI chatbot\nClient 3: reduced advertising costs by 40% with AI creatives\nClient 4: a team of 2 produces like a team of 10\n\nThis is not luck - it\'s a method that can be learned.'
          ),
        },
        {
          emoji: '🚀',
          title: L('איך להתחיל עכשיו', 'How to Start Now'),
          content: L(
            '• שבוע 1: בחר כלי אחד ולמד אותו לעומק\n• שבוע 2: יישם על משימה אחת חוזרת בעסק\n• שבוע 3-4: הוסף כלי שני, בנה תהליך\n• חודש 2: אוטומציה של 3 תהליכים מרכזיים\n• חודש 3: מדוד את ההשפעה ושכלל',
            '• Week 1: choose one tool and learn it deeply\n• Week 2: apply it to one recurring business task\n• Week 3-4: add a second tool, build a process\n• Month 2: automate 3 core processes\n• Month 3: measure the impact and refine'
          ),
        },
      ]}
    />
  )
}
