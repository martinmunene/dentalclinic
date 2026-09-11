# Deans Dental Clinic Website

A modern, high-converting, responsive website built for **Deans Dental Clinic** (Nairobi, Kenya) based on official content, services, locations, accepted insurance plans, and brand identity from [deans.co.ke](https://deans.co.ke/).

---

## 🏥 Clinic Locations & Contact
- **Garden City Mall**: 2nd Floor (Next to KCB Bank), Thika Road, Nairobi
- **Runda Mall**: 2nd Floor, Kiambu Road, Nairobi
- **24/7 Hotline**: `+254 703 222 228` / `+254 703 222 227`
- **Email**: `info@deans.co.ke`
- **Hours**: Mon – Sat: 8:00 AM – 8:00 PM | Sun: 10:00 AM – 4:00 PM

---

## 🚀 Quick Start & Preview

### Method 1: Direct Double Click
Double click `open-website.bat` or open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local HTTP Server (Port 8080)
Double click `start-server.bat`. It will automatically start a local server and open `http://localhost:8080/` in your browser.

---

## 📂 Project Architecture

```
deans-dental-website/
├── index.html               # Main semantic dental landing page
├── open-website.bat         # 1-click batch launcher
├── start-server.bat         # 1-click local HTTP server
├── README.md                # Project documentation
├── css/
│   └── styles.css           # Design tokens, layouts, animations & responsive styling
├── js/
│   └── app.js               # Booking wizard, Before/After slider, insurance search & modals
└── assets/
    └── images/
        └── logo.png         # Deans Dental official script logo
```

---

## ✨ Features & User Flows

1. **Top Emergency Bar & Floating Actions**
   - Direct click-to-call for 24/7 dental emergency helpline.
   - Floating WhatsApp button with pre-filled message.

2. **Interactive 4-Step Appointment Booking Engine**
   - Branch selector (*Garden City Mall* vs *Runda Mall*).
   - Categorized service selector (*Cosmetic, Orthodontics, Restorative, General, Surgical*).
   - Date picker with tomorrow minimum date default and clickable time slot pills.
   - Patient contact details & insurance scheme input.
   - Automatic reference code generation (`DEANS-XXXXXX`) and 1-click **WhatsApp Confirmation**.

3. **Interactive Smile Transformation (Before & After Slider)**
   - Draggable split-view slider comparing smile transformations.
   - Switch between **Teeth Whitening** and **Braces Alignment** clinical cases.

4. **Service Directory with Live Filtering**
   - Filter treatments by category: *All, Cosmetic, Orthodontics, Restorative, General, Surgical*.
   - Each card displays procedure duration, pain rating (*100% Painless*), key benefits, and direct booking CTA.

5. **Accepted Insurance Filter & Instant Verification Tool**
   - Real-time search across 16+ Kenyan health insurance providers (AAR, Jubilee, CIC, Britam, APA, GA, Equity, KCB, Madison, etc.).
   - Interactive verification modal for patients to check coverage.

6. **Dual Nairobi Branch Showcases**
   - Details for Garden City Mall and Runda Mall with floor levels, parking availability, direct lines, and one-click Google Maps driving links.

7. **Patient Reviews, Dental Blog Reader & FAQ Accordion**
   - Verified patient reviews and star ratings.
   - Expandable clinical articles modal for oral health guides.
   - Interactive FAQ accordion for common patient questions.

---

## 🌐 Deployment to Production

### Free Static Hosting (Netlify / Vercel / GitHub Pages)
- **Netlify**: Drag and drop the `deans-dental-website` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: Import the folder via Vercel CLI (`vercel`) or GitHub repository.
- **GitHub Pages**: Push the repository to GitHub and enable Pages in repository settings under the `main` branch.

### Traditional cPanel / Kenyan Web Hosts (Truehost, Safaricom Cloud, Kenya Web Experts)
- Upload all files from this folder directly into `public_html/`.

---

© 2026 Deans Dental Clinic. All Rights Reserved.

