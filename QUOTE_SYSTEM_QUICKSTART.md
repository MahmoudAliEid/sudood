# Quick Start Guide - Quote System Setup

## 30-Second Setup

### Step 1: Add Email Configuration
1. Open `.env.local` in the project root
2. Fill in your email credentials:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@sudood.com
BUSINESS_EMAIL=info@sudood.com
```

### Step 2: Using Gmail (Recommended for Testing)

1. Go to: https://myaccount.google.com/apppasswords
2. Select Mail and Windows Computer
3. Copy the generated 16-character password
4. Paste into `EMAIL_PASSWORD` in `.env.local`
5. Make sure 2FA is enabled on your Google account first!

### Step 3: Test It
1. Run: `npm run dev`
2. Go to: http://localhost:3000/en/products/1
3. Click "Contact Sales" button
4. Fill the form and submit
5. Check your email inbox!

## Common Configurations

### Gmail with 2FA
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx (app password)
```

### Outlook/Office 365
```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

### Custom SMTP Server
```env
EMAIL_HOST=mail.yourdomain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=admin@yourdomain.com
EMAIL_PASSWORD=your-password
```

## Troubleshooting

**"Failed to send quote"** → Check email credentials in `.env.local`

**"SMTP Connection timeout"** → Check EMAIL_HOST and EMAIL_PORT are correct

**"Authentication failed"** → For Gmail, use App Password, not regular password

**No email received** → Check spam/junk folder, verify BUSINESS_EMAIL address

## File Locations

- **Email Configuration:** `.env.local`
- **API Endpoint:** `app/api/send-quote/route.ts`
- **Form Component:** `components/products/details/QuoteModal.tsx`
- **Documentation:** `QUOTE_SYSTEM.md`

## Next Steps

✅ Quote system is ready!

Optional:
- Add reCAPTCHA for spam protection
- Set up SendGrid for production emails
- Create quote tracking dashboard
- Add PDF generation for quotes
