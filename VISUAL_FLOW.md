# Visual Flow & Component Structure

## User Journey Flow

```
Product Page (e.g., /en/products/1)
         ↓
    View Product Details
         ↓
    Click "Contact Sales" Button
         ↓
    QuoteModal Opens
    ├─ Product Info Pre-filled
    │  ├─ Product Name: "Industrial Gate Valve Series 100"
    │  ├─ Category: "Water Valves"
    │  └─ Series: "GV SERIES"
    ↓
    User Fills Form
    ├─ Name: "John Smith" (required)
    ├─ Company: "ABC Water Services" (optional)
    ├─ Email: "john@abc.com" (required)
    ├─ Phone: "+1-555-0100" (required)
    ├─ Quantity: "5" (optional, default: 1)
    └─ Notes: "Urgent order needed..." (optional)
    ↓
    Click "Submit Request"
    ├─ Button shows loading spinner
    ├─ Form disabled during submission
    └─ POST request sent to /api/send-quote
    ↓
POST /api/send-quote (Backend)
    ├─ Validate form data
    ├─ Create email templates
    ├─ Send Business Email
    │  └─ To: info@sudood.com
    │     Subject: "New Quote Request: Industrial Gate Valve Series 100"
    │     Includes: All customer and product details
    ├─ Send Customer Email
    │  └─ To: john@abc.com
    │     Subject: "Quote Request Received - SUDOOD"
    │     Includes: Confirmation and reference info
    └─ Return Success Response
    ↓
    Modal Shows Success Message
    ├─ Green checkmark icon
    ├─ "Quote Request Sent!"
    └─ Auto-close after 2 seconds
    ↓
    Modal Closes
    User Returns to Product Page
```

## Component Hierarchy

```
ProductDetailsPage ([id]/page.tsx)
├─ ProductHero
│  └─ Displays main product image & basic info
├─ TechSpecs
│  └─ Technical specifications table
├─ "Contact Sales" Button
│  └─ Opens QuoteModal
├─ Related Products
│  └─ ProductCard (multiple)
│     ├─ Image Display (FIXED)
│     ├─ Product Info
│     └─ View Details Link
└─ QuoteModal (Portal)
   ├─ Header
   │  ├─ Title: "Request Quote" / "طلب عرض سعر"
   │  └─ Close Button
   ├─ Content (Conditional)
   │  ├─ If Loading/Submitting:
   │  │  └─ Loading Spinner
   │  ├─ If Success:
   │  │  └─ Success Message + Icon
   │  └─ If Form:
   │     ├─ Product Info Display
   │     │  ├─ Product Name
   │     │  ├─ Category
   │     │  └─ Series
   │     ├─ Form Fields (Grid 2-col on desktop)
   │     │  ├─ Name (required)
   │     │  ├─ Company
   │     │  ├─ Email (required)
   │     │  ├─ Phone (required)
   │     │  ├─ Quantity
   │     │  └─ Notes (textarea)
   │     └─ Submit Button
   │        └─ Loading state with spinner
   └─ Background Overlay (click to close)
```

## Data Flow

### Form State Management
```typescript
formData = {
  name: "string",              // User input
  company: "string",           // User input
  email: "string",             // User input
  phone: "string",             // User input
  productName: "string",       // Pre-filled from product
  productId: "string",         // Pre-filled from product
  category: "string",          // Pre-filled from product
  series: "string",            // Pre-filled from product
  quantity: "string",          // User input, default: "1"
  notes: "string"              // User input
}
```

### Email Template Structure

#### Business Email
```
Subject: New Quote Request: [Product Name]
To: info@sudood.com (from BUSINESS_EMAIL env var)

Body:
├─ Header: "New Quote Request"
├─ Product Information Section
│  ├─ Product: [name]
│  ├─ Category: [category]
│  ├─ Series: [series]
│  └─ Quantity: [quantity]
├─ Customer Information Section
│  ├─ Name: [name]
│  ├─ Company: [company]
│  ├─ Email: [email]
│  └─ Phone: [phone]
├─ Additional Notes Section (if provided)
│  └─ [notes]
└─ Footer: Automated message notification
```

#### Customer Email
```
Subject: Quote Request Received - SUDOOD
To: [customer email]
Reply-To: Not set (one-way notification)

Body:
├─ Header: "Quote Request Received"
├─ Greeting: "Dear [name],"
├─ Product Summary
│  ├─ Product Name: [name]
│  └─ Quantity: [quantity]
├─ Information Box
│  ├─ Email: [email]
│  ├─ Phone: [phone]
│  └─ Company: [company]
├─ Message: Response time & next steps
└─ Footer: Business signature
```

## Image Display Architecture

### Before (Broken)
```
motion.div (relative, w-full, h-full)
  └─ Image (fill layout)
     Result: Image not visible because:
     - fill requires positioned parent
     - parent sizing was ambiguous
     - object-contain applied but no visible area
```

### After (Fixed)
```
motion.div (relative, w-full, h-full, flex centered)
  └─ Image (width={300}, height={300})
     ├─ className: "object-contain drop-shadow-lg w-full h-full"
     ├─ priority: true
     └─ Result: Image displays correctly!
```

## API Endpoint Architecture

```
POST /api/send-quote

Input:
{
  name: string,
  company: string,
  email: string,
  phone: string,
  productName: string,
  productId: string,
  category: string,
  series: string,
  quantity: string,
  notes: string
}

Processing:
├─ 1. Validate required fields
├─ 2. Create Nodemailer transporter
├─ 3. Generate business email HTML
├─ 4. Generate customer email HTML
├─ 5. Send business email
├─ 6. Send customer email
├─ 7. Log success with details
└─ 8. Return response

Output:
Success (200):
{
  success: true,
  message: "Quote request sent successfully..."
}

Error (400/500):
{
  error: "Error description",
  details: "Additional info"
}
```

## State Management

### QuoteModal Component States

```
State: isOpen
├─ false → Modal not visible
└─ true → Modal visible with overlay

State: isSubmitting
├─ false → Form interactive, button enabled
└─ true → Form disabled, loading spinner, button disabled

State: isSuccess
├─ false → Show form
└─ true → Show success message (2 second auto-close)

State: formData
├─ Initial state: empty strings with defaults
├─ On input change: update specific field
├─ On submit success: reset to initial state
└─ Product data updates: automatic on modal open
```

## Bilingual Support

### Language Routing
```
/en/products/1     → English page
/ar/products/1     → Arabic page

lang parameter → passed to QuoteModal → affects:
├─ Form labels (Arabic/English)
├─ Placeholders (Arabic/English)
├─ Product name display (ar property vs en property)
├─ Button text (Arabic/English)
├─ Category display (ar property vs en property)
└─ Email content (English only in current version)
```

### RTL Implementation
```
Direction: RTL (right-to-left)
Applied to: Main modal container when lang="ar"
├─ Text alignment: right
├─ Input fields: right-aligned
├─ Button icons: appropriate position
└─ Labels: positioned for Arabic reading
```

## Error Handling Flow

```
Form Submit
    ↓
Try Block
├─ Fetch /api/send-quote
├─ Check response.ok
│  ├─ true → Success path
│  │  ├─ Show success message
│  │  ├─ Auto-close after 2s
│  │  └─ Reset form
│  └─ false → Throw error
└─ Catch Block
   ├─ Log error
   ├─ Show alert: "Failed to send quote..."
   └─ Reset isSubmitting state
```

## Environment Variable Usage

```
.env.local
├─ EMAIL_HOST → SMTP server address
├─ EMAIL_PORT → SMTP port (587 or 465)
├─ EMAIL_SECURE → SSL/TLS flag
├─ EMAIL_USER → SMTP username
├─ EMAIL_PASSWORD → SMTP password
├─ EMAIL_FROM → Sender email address
└─ BUSINESS_EMAIL → Quote recipient email

API Route (send-quote/route.ts) reads these variables
    ↓
Creates transporter with credentials
    ↓
Sends authenticated SMTP emails
```

## Browser Events

```
QuoteModal Open
├─ onClose(): Called when:
│  ├─ User clicks X button
│  ├─ User clicks background overlay
│  └─ Auto-close after success (via setTimeout)
└─ Modal state updates parent component

Form Submission
├─ preventDefault() on form element
├─ All validations (HTML5)
└─ API call to /api/send-quote

Loading During Submit
├─ Button disabled: true
├─ Form inputs disabled: false (but form is locked)
├─ Spinner animation: rotate continuously
└─ No user interaction allowed

Success Notification
├─ setTimeout(2000) to auto-close
├─ onClose() called
└─ Modal closes automatically
```

---

**Visual Guide Version:** 1.0.0
**Last Updated:** 2024
