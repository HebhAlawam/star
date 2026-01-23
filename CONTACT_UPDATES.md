# تحديثات صفحة التواصل (Contact Page)

## ملخص التغييرات

تم ترقية صفحة التواصل (`contact.html`) إلى مستوى احترافي للمنظمات غير الحكومية مع إضافة أقسام جديدة شاملة.

## الأقسام المضافة

### 1. قسم "معلومات التواصل" (`contact-info-section`)

**الموقع**: بعد Hero section مباشرة

**المحتوى**:
- **الموقع العام**: سوريا – الصبورة
- **الهاتف**: +963 959 869 575
- **البريد**: support@star.com
- **زر واتساب**: "تواصل عبر واتساب"
- **ملاحظة أمان**: "نحافظ على خصوصية موقع الملجأ حرصًا على سلامة الفريق والحيوانات."

**التعديل**: 
- البحث عن `<section class="contact-info-section">`
- تحديث المعلومات في العناصر داخل `.contact-info-list`
- تحديث رابط واتساب في `.contact-info-card` إذا لزم الأمر

### 2. نموذج "راسلنا" (`contact-form`)

**الموقع**: في العمود الثاني من قسم "معلومات التواصل"

**الحقول**:
- الاسم (required)
- البريد الإلكتروني أو رقم الهاتف (required)
- نوع الرسالة: استفسار عام، بلاغ حالة، تطوع، شراكة (required)
- الرسالة (textarea, required)
- زر "إرسال الرسالة"

**التعديل**:
- البحث عن `<form class="contact-form">`
- تحديث `action` في `<form>` إذا كان هناك backend
- تعديل خيارات `<select id="contact-type">` حسب الحاجة

### 3. Highlight Box - "بلاغ حالة طارئة؟" (`emergency-alert-section`)

**الموقع**: بعد قسم معلومات التواصل مباشرة

**المحتوى**:
- نص توضيحي عن حالات الطوارئ
- زر "بلاغ طارئ عبر واتساب" يفتح واتساب مع رسالة جاهزة

**التعديل**:
- البحث عن `.emergency-alert-section`
- تحديث رابط واتساب في الزر إذا لزم الأمر

### 4. قسم FAQ - "أسئلة شائعة" (`contact-faq-section`)

**الموقع**: بعد Highlight Box

**الأسئلة الحالية**:
- متى يتم الرد على الرسائل؟
- هل يمكن التطوع عن بُعد؟
- كيف أبلّغ عن حالة؟

**التعديل**:
- البحث عن `<section class="contact-faq-section">`
- إضافة/تعديل/حذف أسئلة في `.faq-item` divs
- كل سؤال في `<div class="col-lg-4 col-md-6">`

## CSS المخصص

جميع الأنماط موجودة داخل `<style>` tag قبل `</body>` ومحددة بـ `.contact-page`.

**الأنماط الرئيسية**:
- `.contact-info-card`: بطاقة معلومات التواصل
- `.contact-form-wrapper`: غلاف النموذج
- `.emergency-alert-box`: صندوق التنبيه الطارئ
- `.faq-item`: عناصر FAQ

**التعديل**:
- البحث عن `<style>` tag قبل `</body>`
- جميع الأنماط محددة بـ `.contact-page` فلا تؤثر على باقي الصفحات

## المسافات (Spacing)

- **Desktop**: 48px padding (top/bottom) للأقسام الرئيسية
- **Mobile**: 32px padding (top/bottom)
- استخدام Bootstrap utilities (`py-5`, `py-4`, `mb-4`, إلخ)

## RTL (Right-to-Left)

جميع العناصر محسّنة لـ RTL:
- Bootstrap classes مع دعم RTL (`me-2`, `text-start`, إلخ)
- `<bdi>` tags للأرقام الإنجليزية
- `dir="rtl"` على `<html>`

## Accessibility

- `aria-label` لجميع الأزرار ذات الأيقونات فقط
- `aria-hidden="true"` للأيقونات الزخرفية
- Focus states واضحة (outline: 2px solid #0192dc)
- Semantic HTML (`<section>`, `<form>`, `<label>`, إلخ)

## ملاحظات مهمة

1. **النموذج Static**: النموذج حاليًا static (لا يوجد backend). تحتاج لتحديث `action` في `<form>` عند ربطه بالـ backend.

2. **أرقام التواصل**: جميع أرقام الهواتف والبريد الإلكتروني موجودة في قسم "معلومات التواصل" - يمكن تحديثها من مكان واحد.

3. **روابط واتساب**: جميع روابط واتساب تستخدم نفس الرقم (+963 959 869 575) - تحديث من مكان واحد يؤثر على الكل.

4. **أيقونات**: جميع الأيقونات من Font Awesome 6 - لا حاجة لمكتبات إضافية.

## مواقع التعديل السريع

### تغيير معلومات التواصل:
```html
<!-- في .contact-info-section -->
سوريا – الصبورة          <!-- الموقع -->
+963 959 869 575         <!-- الهاتف -->
support@star.com         <!-- البريد -->
```

### تغيير خيارات نوع الرسالة:
```html
<!-- في .contact-form -->
<option value="general">استفسار عام</option>
<option value="report">بلاغ حالة</option>
<option value="volunteer">تطوع</option>
<option value="partnership">شراكة</option>
```

### تغيير أسئلة FAQ:
```html
<!-- في .contact-faq-section -->
<div class="col-lg-4 col-md-6">
  <div class="faq-item h-100 p-4 bg-light rounded">
    <h5>سؤالك هنا</h5>
    <p>إجابتك هنا</p>
  </div>
</div>
```

