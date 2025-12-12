# ⚡ Quick Start Guide - Royal Doors & Windows

## 🚀 Get Started in 5 Minutes

### Step 1: View Your Website (30 seconds)
1. Open the folder: `royal-doors-windows`
2. Double-click `index.html`
3. Your homepage will open in your default browser
4. Click through the navigation to explore

### Step 2: Test Contact Form (1 minute)
1. Open `contact.html` in your browser
2. Fill out the form
3. Click "Send Message"
4. You'll see a success popup (form works!)

### Step 3: Open in VS Code (1 minute)
1. Open VS Code
2. File → Open Folder → Select `royal-doors-windows`
3. You'll see all files in the sidebar
4. Click any file to edit

### Step 4: Make Your First Edit (2 minutes)
1. Open `index.html` in VS Code
2. Find this line (around line 189):
   ```html
   <h1 class="text-4xl lg:text-6xl font-display font-bold leading-tight">
       Premium uPVC Windows & Doors
   ```
3. Change the text to anything you want
4. Save the file (Ctrl+S)
5. Refresh your browser
6. See your changes!

### Step 5: View on Mobile (30 seconds)
1. In your browser with the website open
2. Press F12 (opens Developer Tools)
3. Click the phone/tablet icon (Toggle Device Toolbar)
4. See how your site looks on mobile!

---

## 📁 What's Where

```
royal-doors-windows/
│
├── index.html              ← Homepage (open this first!)
├── contact.html            ← Contact page with form
│
├── js/
│   └── main.js            ← All JavaScript (form validation, menu, etc.)
│
├── components/
│   └── reusable-components.html  ← Copy components from here
│
├── README.md              ← Full documentation (read this for details)
├── PROJECT-SUMMARY.md     ← What's been built (overview)
├── QUICK-START.md         ← This file
│
├── sitemap.xml            ← For Google (SEO)
└── robots.txt             ← For search engines (SEO)
```

---

## 🎨 Quick Customization

### Change Phone Number
**Find & Replace** (Ctrl+H in VS Code):
- Find: `+919148546403`
- Replace: `YOUR_PHONE_NUMBER`
- Click "Replace All"

### Change Email
**Find & Replace**:
- Find: `info@royaldoorswindows.com`
- Replace: `YOUR_EMAIL@example.com`
- Click "Replace All"

### Change Location
**Find & Replace**:
- Find: `Bengaluru, Karnataka`
- Replace: `YOUR_CITY, YOUR_STATE`
- Click "Replace All"

### Change Colors
1. Open `index.html`
2. Find the Tailwind config (around line 47)
3. Change these values:
   ```javascript
   'emerald-primary': '#0F5E43',  // Your primary color
   'gold-primary': '#D1A94D',      // Your accent color
   ```

### Add Your Logo
1. Put your logo image in `images/` folder
2. Name it `logo.png`
3. Open `index.html`
4. Find line 97 (the logo section)
5. Replace with:
   ```html
   <img src="images/logo.png" alt="Royal Doors & Windows" class="h-10">
   ```

### Replace Hero Image
1. Put your hero image in `images/` folder
2. Name it `hero.jpg`
3. Find line 239 in `index.html`
4. Change to:
   ```html
   <img src="images/hero.jpg" alt="...">
   ```

---

## 📋 Ready-to-Copy Components

Open `components/reusable-components.html` to find:

1. **Navigation Bar** - Copy & paste to new pages
2. **Hero Section** - For page headers
3. **Product Card** - Display products
4. **Service Card** - Show services
5. **Testimonial Card** - Customer reviews
6. **FAQ Item** - Questions & answers
7. **CTA Section** - Call to action banners
8. **Footer** - Page footer
9. **Contact Form** - Full form with validation
10. **WhatsApp Button** - Floating chat button

**How to use:**
1. Open the components file
2. Find the component you need
3. Copy the HTML code
4. Paste into your page
5. Change the text

---

## 🌐 Publish to Internet

### Option 1: Hostinger (Recommended)
1. Login to Hostinger
2. Open File Manager
3. Go to `public_html` folder
4. Upload all files from `royal-doors-windows` folder
5. Visit your domain - site is live!

### Option 2: Free Hosting (Testing)
- **Netlify**: Drag & drop folder → instant website
- **GitHub Pages**: Free hosting for static sites
- **Vercel**: Automatic deployment

---

## 📧 Connect Contact Form

### Easiest Way: Formspree (Free)

1. Go to https://formspree.io
2. Sign up (free)
3. Create new form
4. Copy your form endpoint
5. Open `contact.html`
6. Find the `<form>` tag (around line 70)
7. Add this:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
8. Done! Form emails will come to you

### Alternative: Google Sheets
1. Follow guide: https://github.com/jamiewilson/form-to-google-sheets
2. Submissions go directly to Google Sheets
3. Free and easy!

---

## ✅ Before Going Live Checklist

Quick checks before publishing:

- [ ] Changed phone number to yours
- [ ] Changed email to yours
- [ ] Changed location to yours
- [ ] Replaced placeholder images
- [ ] Tested contact form
- [ ] Checked on mobile (F12 → phone icon)
- [ ] All links work
- [ ] No spelling mistakes
- [ ] Added your logo
- [ ] Configured form submission

---

## 🆘 Common Issues & Fixes

### Images not showing
**Problem**: Image path is wrong
**Fix**: Make sure image is in `images/` folder and path is correct:
```html
<img src="images/photo.jpg" alt="Description">
```

### Mobile menu not working
**Problem**: JavaScript file not loaded
**Fix**: Make sure this is at the end of your HTML (before `</body>`):
```html
<script src="js/main.js"></script>
```

### Form not submitting
**Problem**: No form action configured
**Fix**: Set up Formspree (see above) or other form service

### Colors look different
**Problem**: Tailwind config not updated
**Fix**: Make sure Tailwind CDN is in `<head>` section

### Page looks broken on mobile
**Problem**: Missing viewport meta tag
**Fix**: Add this in `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 📞 Need Help?

### Documentation Files
1. **QUICK-START.md** (this file) - Quick overview
2. **PROJECT-SUMMARY.md** - What's been built
3. **README.md** - Complete detailed guide
4. **components/reusable-components.html** - Code examples

### Online Resources
- **Tailwind Docs**: https://tailwindcss.com/docs
- **HTML Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **VS Code Guide**: https://code.visualstudio.com/docs

---

## 🎯 What to Do Next

### Today
1. ✅ View the website
2. ✅ Make a small edit
3. ✅ Test on mobile
4. ✅ Read PROJECT-SUMMARY.md

### This Week
1. Gather your images and content
2. Replace all placeholder content
3. Customize colors and branding
4. Create the remaining pages (about, services, etc.)

### Before Launch
1. Complete all customization
2. Test thoroughly
3. Set up form submission
4. Deploy to hosting
5. Go live!

---

## 💡 Pro Tips

### VS Code Extensions (Optional but Helpful)
1. **Live Server** - Auto-refresh on save
2. **Prettier** - Auto-format code
3. **Auto Rename Tag** - Rename both HTML tags at once

### Keyboard Shortcuts
- `Ctrl+S` - Save file
- `Ctrl+F` - Find in file
- `Ctrl+H` - Find and replace
- `Ctrl+/` - Comment/uncomment line
- `F12` - Open browser DevTools

### Testing Checklist
1. Test in Chrome
2. Test in Firefox
3. Test on your phone
4. Test all links
5. Test contact form
6. Test on slow internet

---

## 🎉 You're Ready!

Your website is fully functional and ready to customize.

**Start simple:**
1. Change the text on homepage
2. Add your phone number
3. Replace one image
4. See how easy it is!

**Then gradually:**
- Add more content
- Create more pages
- Configure form
- Publish online

---

**Need detailed instructions?** → Read `README.md`

**Want to see what's built?** → Read `PROJECT-SUMMARY.md`

**Ready to code?** → Open `components/reusable-components.html`

---

**🚀 Happy building!**
