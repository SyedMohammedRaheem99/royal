# Royal Doors & Windows - Website Documentation

## 🎨 Project Overview

A premium multi-page static website for **Royal Doors & Windows**, a uPVC windows and doors manufacturer in Bengaluru. Built with **HTML + Tailwind CSS + JavaScript** for optimal performance and ease of maintenance.

---

## 📁 Folder Structure

```
royal-doors-windows/
│
├── index.html                 # Homepage
├── about.html                 # About Us page
├── contact.html               # Contact page with form
├── services.html              # Services page
├── gallery.html               # Image gallery
│
├── products/
│   ├── index.html            # Products listing page
│   ├── sliding-windows.html
│   ├── casement-windows.html
│   ├── fixed-windows.html
│   ├── ventilators.html
│   ├── sliding-doors.html
│   ├── casement-doors.html
│   └── french-doors.html
│
├── blog/
│   ├── index.html            # Blog listing page
│   └── post-template.html    # Single blog post template
│
├── js/
│   └── main.js               # All JavaScript functionality
│
├── css/
│   └── (optional custom CSS if needed)
│
├── images/
│   ├── (product images)
│   ├── (gallery images)
│   └── (hero images)
│
├── components/
│   └── reusable-components.html  # Component library
│
├── assets/
│   ├── icons/
│   └── gallery/
│
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Robots file
└── README.md                 # This file
```

---

## 🎨 Design System

### Color Palette

```css
Emerald Green Primary: #0F5E43
Emerald Dark: #0A4232
Emerald Light: #12734F
Gold Primary: #D1A94D
Gold Dark: #B8923F
Gold Light: #E5C575
White: #FFFFFF
Off-White: #F7F7F7
Gray Dark: #1A1A1A
Gray Light: #666666
```

### Fonts

- **Display Font (Headings)**: Montserrat (400, 500, 600, 700, 800)
- **Body Font**: Inter (300, 400, 500, 600, 700)

### Tailwind Classes

Custom colors are configured in Tailwind config:
- `bg-emerald-primary`
- `bg-gold-primary`
- `text-emerald-primary`
- `text-gold-primary`

---

## 🚀 Getting Started

### Option 1: Direct Use (Recommended for Static Hosting)

1. **Extract all files** to your project folder
2. **Open `index.html`** in a browser to preview
3. **Upload to Hostinger** via FTP or File Manager
4. Done! Your site is live.

### Option 2: Local Development Server

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if live-server is installed)
npx live-server

# Using VS Code Extension
# Install "Live Server" extension and click "Go Live"
```

---

## 📝 How to Edit Content

### Changing Text Content

1. Open the HTML file you want to edit in VS Code or any text editor
2. Find the section you want to change (use Ctrl+F to search)
3. Modify the text between HTML tags
4. Save and refresh your browser

### Changing Images

1. Add your images to the `images/` folder
2. In the HTML file, find the `<img>` tag
3. Update the `src` attribute:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Changing Colors

1. Open the HTML file
2. Find the Tailwind config section in `<head>`
3. Modify the color values:
   ```javascript
   colors: {
       'emerald-primary': '#YOUR_COLOR',
       'gold-primary': '#YOUR_COLOR',
   }
   ```

### Adding New Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Rename it to your new page name
3. Update the content
4. Add a link to it in the navigation menu across all pages

---

## 📧 Contact Form Integration

The contact form (`contact.html`) is built with HTML + JavaScript validation.

### Integration Options:

#### Option 1: Google Sheets API

```javascript
// In js/main.js, uncomment and configure:
async function submitFormToAPI(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const response = await fetch('YOUR_GOOGLE_SHEETS_API_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}
```

**Setup Guide**: https://github.com/jamiewilson/form-to-google-sheets

#### Option 2: WhatsApp API

Already implemented! Form data can be sent directly to WhatsApp:

```javascript
// Function is in main.js - uncomment to activate
function sendToWhatsApp(data) {
    const phone = '919148546403';
    const message = `New Contact: ${data.name}...`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
}
```

#### Option 3: Email Service (Formspree, EmailJS)

**Using Formspree** (Easiest):

1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Using EmailJS**:

1. Sign up at https://www.emailjs.com
2. Follow their integration guide
3. Add their SDK to your HTML

#### Option 4: WebForms / Custom Backend

```javascript
// Configure fetch URL in main.js
const response = await fetch('https://your-backend.com/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

---

## 🔍 SEO Optimization

### Current Implementation

✅ Unique `<title>` and `<meta description>` on each page
✅ Open Graph tags for social sharing
✅ Structured Data (JSON-LD) for LocalBusiness
✅ Semantic HTML5 tags
✅ Alt text on all images
✅ Clean URLs

### To Improve SEO Further:

1. **Add your actual business address** in structured data
2. **Replace placeholder images** with real photos (with descriptive filenames)
3. **Add blog content** regularly
4. **Submit sitemap** to Google Search Console
5. **Get backlinks** from business directories
6. **Optimize images** (compress to reduce file size)

### Update Structured Data

Edit the JSON-LD in `index.html` `<head>`:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Royal Doors & Windows",
    "telephone": "+919148546403",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "YOUR ACTUAL STREET ADDRESS",
        "addressLocality": "Bengaluru",
        "postalCode": "560001",
        "addressCountry": "IN"
    }
}
</script>
```

---

## 🖼️ Image Recommendations

### Image Sizes (Optimized for Web)

| Section | Recommended Size | Format |
|---------|-----------------|--------|
| Hero Images | 1920x1080px | JPG |
| Product Cards | 800x600px | JPG |
| Gallery Images | 1200x900px | JPG |
| Thumbnails | 400x300px | JPG |
| Icons | 100x100px | PNG/SVG |

### Free Stock Photo Resources

- **Unsplash**: https://unsplash.com (High-quality, free)
- **Pexels**: https://pexels.com (Large collection)
- **Pixabay**: https://pixabay.com (Commercial use)

### Image Optimization Tools

- **TinyPNG**: https://tinypng.com (Online compression)
- **Squoosh**: https://squoosh.app (Google's image optimizer)
- **ImageOptim**: https://imageoptim.com (Mac app)

---

## 🌐 Hosting on Hostinger

### Step-by-Step Deployment

1. **Login to Hostinger hPanel**
2. **Go to File Manager**
3. **Navigate to `public_html` folder**
4. **Upload all files** from your project folder
5. **Set folder permissions** to 755
6. **Set file permissions** to 644
7. **Test your site** at your domain

### Using FTP (FileZilla)

1. **Download FileZilla**: https://filezilla-project.org
2. **Get FTP credentials** from Hostinger hPanel
3. **Connect via FTP**
4. **Upload files** to `public_html`

### Important Files for Hostinger

- `.htaccess` (for URL rewrites if needed)
- `index.html` (must be in root `public_html`)
- All assets in proper folders

---

## ⚙️ JavaScript Functionality

### Included Features

✅ Mobile menu toggle
✅ FAQ accordion
✅ Contact form validation
✅ Smooth scroll navigation
✅ Navbar scroll effects
✅ Success message modal
✅ Image lazy loading
✅ Gallery lightbox (optional)

### Form Validation Rules

- **Name**: Minimum 3 characters
- **Phone**: Must be valid 10-digit Indian mobile number
- **Email**: Must be valid email format
- **Location**: Required field
- **Message**: Minimum 10 characters

### Customizing Validation

Edit `js/main.js` to modify validation rules:

```javascript
// Example: Change phone validation for international numbers
const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
```

---

## 🎯 Page Descriptions

### index.html (Homepage)
- Hero section with CTA buttons
- Product categories grid (6 products)
- Benefits of uPVC section
- Services overview
- 4-step process
- About preview
- Gallery preview
- Testimonials
- FAQ
- CTA section

### about.html
- Company history
- Team information
- Values & mission
- Certifications
- Timeline

### products/index.html
- All products listing
- Filter/category navigation
- Product comparison
- CTA to contact

### contact.html
- Complete contact form
- Contact information cards
- Google Maps embed
- Business hours
- WhatsApp integration

### services.html
- Service details
- Process explanation
- Pricing information
- Case studies

### gallery.html
- Project portfolio
- Before/after images
- Lightbox view
- Categories filter

### blog/index.html
- Blog post listings
- Categories
- Search functionality
- Pagination

---

## 🛠️ Maintenance Guide

### Regular Updates

**Weekly:**
- Check form submissions
- Update blog content
- Respond to inquiries

**Monthly:**
- Update testimonials
- Add new projects to gallery
- Check broken links
- Review analytics

**Quarterly:**
- Update product information
- Refresh images
- SEO audit
- Performance check

### Common Issues & Fixes

#### Images Not Loading
```html
<!-- Check path is correct -->
<img src="images/photo.jpg">  <!-- Correct -->
<img src="/images/photo.jpg"> <!-- Also works -->
```

#### Mobile Menu Not Working
```javascript
// Ensure main.js is loaded
<script src="js/main.js"></script> <!-- At end of body -->
```

#### Form Not Submitting
1. Check console for errors (F12)
2. Verify form ID matches JavaScript
3. Ensure all required fields have `required` attribute

---

## 📱 Responsive Design

The website is fully responsive across all devices:

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

### Testing Responsiveness

1. **Chrome DevTools**: Right-click → Inspect → Toggle device toolbar
2. **Firefox Responsive Design Mode**: Ctrl+Shift+M
3. **Real Devices**: Test on actual phones/tablets

---

## ♿ Accessibility

Current accessibility features:

✅ Semantic HTML
✅ Alt text on images
✅ Keyboard navigation
✅ Aria labels where needed
✅ Good color contrast
✅ Focus indicators

### Improve Accessibility Further

1. Add `aria-label` to all buttons
2. Ensure form labels are properly associated
3. Test with screen readers
4. Add skip navigation link

---

## 🔒 Security Best Practices

### For Contact Forms

1. **Never store sensitive data** in frontend JavaScript
2. **Use HTTPS** (Hostinger provides free SSL)
3. **Validate on backend** (if you add a backend later)
4. **Add CAPTCHA** to prevent spam (Google reCAPTCHA)
5. **Rate limiting** on form submissions

### Content Security

1. Keep all code in version control (Git)
2. Regular backups via Hostinger
3. Use strong passwords
4. Enable two-factor authentication

---

## 📊 Analytics Integration

### Google Analytics 4

Add this code before `</head>` in all HTML files:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 🚀 Performance Optimization

### Current Optimizations

✅ Tailwind CSS via CDN (cached)
✅ Minimal JavaScript
✅ Lazy loading for images
✅ Optimized font loading

### Further Optimizations

1. **Compress images** before uploading
2. **Enable Gzip compression** on Hostinger
3. **Use WebP format** for images (with JPG fallback)
4. **Minify HTML/CSS/JS** before production
5. **Enable browser caching** via `.htaccess`

### .htaccess for Performance

Create `.htaccess` in root folder:

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 📞 Support & Contact

### Brand Details

**Business Name**: Royal Doors & Windows
**Phone**: +91 91485 46403
**Email**: info@royaldoorswindows.com
**Location**: Bengaluru, Karnataka, India
**Tagline**: Premium uPVC Window & Door Systems

### Developer Notes

- All code is commented for easy understanding
- Reusable components in `/components/reusable-components.html`
- Follow existing patterns when adding new sections
- Test on multiple browsers before deployment
- Keep mobile-first approach

---

## 📚 Resources & Links

### Documentation

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **HTML5 Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **JavaScript Guide**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

### Tools

- **VS Code**: https://code.visualstudio.com
- **FileZilla**: https://filezilla-project.org
- **Google Fonts**: https://fonts.google.com
- **Can I Use**: https://caniuse.com (Browser compatibility)

### Testing

- **Google PageSpeed**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

---

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder images with actual photos
- [ ] Update business address in footer and contact page
- [ ] Configure contact form submission (Google Sheets/Email)
- [ ] Add Google Analytics tracking code
- [ ] Test all links (internal and external)
- [ ] Test contact form on mobile
- [ ] Check page load speeds
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify mobile responsiveness
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business listing
- [ ] Add SSL certificate (Hostinger provides free)
- [ ] Test WhatsApp button functionality
- [ ] Proofread all content for typos
- [ ] Verify phone numbers and email addresses
- [ ] Add favicon (icon in browser tab)
- [ ] Set up 301 redirects if needed
- [ ] Create custom 404 error page
- [ ] Test form spam protection

---

## 🎉 You're All Set!

Your professional website is ready to launch. Follow the deployment guide above to go live on Hostinger.

**Need help?** Contact the developer or refer to the documentation linked above.

**Good luck with your business! 🚀**

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Built with**: HTML5 + Tailwind CSS + JavaScript
