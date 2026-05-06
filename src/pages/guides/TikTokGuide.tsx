import GuidePage from './GuidePage'

export default function TikTokGuide() {
  return (
    <GuidePage
      emoji="🎵"
      badge="free"
      title="מדריך TikTok"
      subtitle="פרוץ לטיקטוק ובנה קהל אדיר"
      description="TikTok היא הפלטפורמה עם הצמיחה הכי מהירה בעולם. למד איך לנצל אותה כדי להגיע לקהל חדש ולהצמיח את העסק שלך."
      sections={[
        {
          emoji: '📊',
          title: 'למה TikTok בשנת 2025?',
          content: 'TikTok היא הפלטפורמה היחידה שבה חשבון עם 0 עוקבים יכול להגיע למיליון צפיות בוידאו הראשון.\n\nהאלגוריתם של TikTok לא מבוסס על עוקבים - הוא מבוסס על עניין! זאת אומרת:\n• כולם מתחילים שווים\n• תוכן טוב יגיע לאנשים הנכונים\n• הצמיחה מהירה פי 10 מאינסטגרם',
        },
        {
          emoji: '🎬',
          title: 'מה עובד ב-TikTok',
          content: '✓ וידאו בין 15-60 שניות (sweet spot: 30 שניות)\n✓ 3 שניות ראשונות = הכל (Hook חזק)\n✓ כתוביות - 80% צופים ללא קול\n✓ טרנד + Twist אישי\n✓ POV videos\n✓ "Would you rather" ו-"Tell me without telling me"\n✓ תגובה לתגובות עם וידאו\n✓ Duet עם וידאו פופולרי',
        },
        {
          emoji: '🔥',
          title: 'מבנה TikTok מנצח',
          content: '0-3 שניות: HOOK - "הסוד שאף אחד לא מספר לך..."\n3-10 שניות: הבטחה - "אם תראה עד הסוף תקבל..."\n10-25 שניות: הערך - תוכן מהיר וממוקד\n25-30 שניות: CTA - "עקוב לעוד כזה"\n\nהוסף:\n• טקסט בתחתית\n• מוזיקה טרנדית\n• Hashtags ממוקדים (3-5)',
        },
        {
          emoji: '📈',
          title: 'אסטרטגיית הצמיחה',
          content: 'שבוע 1-2: 1-3 סרטונים ביום, בדוק מה עובד\nשבוע 3-4: הכפל את מה שעבד\nחודש 2: שתף פעולה עם חשבונות אחרים\nחודש 3: צור series (סדרת תוכן)\n\nכלל: Quantity leads to Quality בתחילת הדרך.\nהעלה 30 סרטונים לפני שאתה שופט.',
        },
        {
          emoji: '💰',
          title: 'מונטיזציה ב-TikTok',
          content: '• TikTok Creator Fund: תשלום על צפיות\n• Live Gifts: מתנות מהצופים בשידור חי\n• Brand Deals: שיתופי פעולה עם מותגים\n• Link in Bio: הובלת תנועה לאתר/מוצר\n• קורסים ומוצרים דיגיטליים\n• Affiliate Marketing\n\nהמפתח: בנה קהל נאמן → הפוך אותו ללקוחות.',
        },
        {
          emoji: '🛠️',
          title: 'כלים חיוניים',
          content: '• CapCut: עריכה מהירה עם AI (חינם)\n• TikTok Creative Center: טרנדים ומוזיקה\n• Canva: גרפיקה לכתוביות\n• ChatGPT: רעיונות ותסריטים\n• ManyChat: אוטומציה לDMs\n• Metricool: ניתוח ביצועים',
        },
      ]}
    />
  )
}
