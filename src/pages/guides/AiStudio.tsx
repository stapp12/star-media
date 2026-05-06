import GuidePage from './GuidePage'

export default function AiStudio() {
  return (
    <GuidePage
      emoji="🎬"
      badge="paid"
      title="קורס AI Studio"
      subtitle="יצירת וידאו מקצועי עם כלי AI"
      description="הקורס שלמד לך ליצור סרטוני שיווק, תוכן ואווטאר AI ברמה סטודיו — בלי מצלמה, בלי ציוד, בלי ניסיון."
      sections={[
        {
          emoji: '🎥',
          title: 'מה תוצר הסופי?',
          content: 'בסיום הקורס תוכל לייצר:\n✓ סרטוני שיווק מלאים עם אווטאר AI\n✓ תוכן TikTok ו-Reels אוטומטי\n✓ פודקאסטים ויידאו Podcast\n✓ Explainer Videos לעסק שלך\n✓ מודעות וידאו לפייסבוק ואינסטגרם',
        },
        {
          emoji: '🛠️',
          title: 'הכלים שנלמד',
          content: '• HeyGen: אווטאר AI שמדבר בכל שפה\n• RunwayML: עריכת וידאו עם AI\n• ElevenLabs: קולות AI מציאותיים\n• Pika Labs: יצירת וידאו מטקסט\n• CapCut AI: עריכה אוטומטית וכתוביות\n• Synthesia: מצגות וידאו עם אווטאר',
        },
        {
          emoji: '📋',
          title: 'מבנה הקורס',
          content: 'מודול 1: בסיסי AI Video — מה אפשרי היום\nמודול 2: HeyGen מאפס לאווטאר מלא\nמודול 3: Script Writing עם AI\nמודול 4: Voice Cloning ב-ElevenLabs\nמודול 5: עריכה ב-CapCut AI\nמודול 6: הפצה ואופטימיזציה\nמודול 7: אוטומציה של כל התהליך',
        },
        {
          emoji: '💡',
          title: 'למה זה שווה את זה?',
          content: 'סטודיו וידאו מקצועי עולה 5,000-15,000 ₪ לסרטון.\n\nעם AI Studio תוכל:\n• לייצר סרטון מקצועי תוך שעה\n• לחסוך 90% מהעלות\n• לייצר תוכן בכמות שלא תדמיין\n• לשנות שפות ואווטארים בדקות\n\nROI ממוצע: הקורס מחזיר את עצמו ב-3 שבועות.',
        },
      ]}
      ctaText="לרכישת הקורס"
      ctaHref="/#contact"
    />
  )
}
