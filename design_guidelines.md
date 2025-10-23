# Red Ark Cinema - Comprehensive Design Guidelines

## Design Approach & Philosophy

**Reference-Based Approach**: Drawing inspiration from leading cinema technology companies (RED Digital Cinema, ARRI) combined with creative studio aesthetics (The Mill, MPC) to convey both technical excellence and creative sophistication.

**Core Design Principles:**
- Cinematic drama through bold contrast and scale
- Technical precision conveyed through clean layouts and sharp typography
- Professional credibility through structured information hierarchy
- Modern edge through asymmetric layouts and strategic negative space

---

## Typography System

**Primary Font**: "Inter" (Google Fonts) - Clean, modern sans-serif for technical credibility
**Accent Font**: "Bebas Neue" (Google Fonts) - Bold, condensed for impactful headlines and section titles

**Type Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold (Bebas Neue, uppercase)
- Section Headers: text-4xl md:text-5xl lg:text-6xl font-bold (Bebas Neue, uppercase)
- Subsection Titles: text-2xl md:text-3xl font-semibold (Inter)
- Service Cards: text-xl font-bold (Inter)
- Body Text: text-base md:text-lg font-normal (Inter)
- Captions/Meta: text-sm font-medium (Inter)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, and 24 for consistent rhythm
- Component padding: p-8 to p-16
- Section vertical spacing: py-20 md:py-24 lg:py-32
- Card gaps: gap-8 or gap-12
- Element margins: mb-8, mb-12, mb-16

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl mx-auto
- Grid layouts: Use 12-column grid system with responsive breaks

---

## Page Structure & Sections

### 1. Hero Section (Full Viewport - 90vh)
**Layout**: Cinematic full-screen hero with dramatic typography overlay
**Content**:
- Large hero image: Dramatic film production scene (camera operator on set, professional lighting rig, or cinema equipment in action)
- Overlay: Semi-transparent black gradient (top to bottom)
- Main headline: "RED ARK CINEMA" in massive Bebas Neue
- Tagline: "Complete Cinema Solutions | Production to Post-Production"
- Dual CTAs: "Explore Services" (primary) and "View Portfolio" (secondary) with blur backdrop
- Scroll indicator at bottom

### 2. Studio Introduction (2-Column Split)
**Layout**: Asymmetric 60/40 split on desktop, stacked on mobile
**Left**: Bold statement about the studio (3-4 lines, large text)
**Right**: Supporting paragraph describing full-service capabilities
**Image**: Include production floor/studio environment image below text

### 3. Services Showcase (Multi-Section Grid)
**Primary Categories** (4-Column Grid on desktop, 2 on tablet, 1 on mobile):

**Equipment Rentals Category:**
- Camera Unit card with icon/image
- Light Unit card with icon/image  
- Sound Recording Unit card with icon/image
- Each card: Image header, title, 3-4 key features list

**Post-Production Services** (3-Column Grid):
- Film Editing, Colour Grading, Dubbing
- RR (Re-Recording), Background Music, Dolby Atmos Mixing
- Each with service icon, title, brief description

**Creative Services** (3-Column Grid):
- Graphic Design, CGI, VFX
- Full-width cards with hover expand effect
- Include sample work thumbnails

**Distribution & Marketing** (2-Column):
- Digital Marketing services
- Distribution network capabilities

### 4. Project Types Spectrum
**Layout**: Horizontal scrolling cards or full-width staggered grid
**Cards for**: Films, Short Films, Music Albums, Documentaries
**Each includes**: Icon, project type, production phase coverage (pre/production/post), key deliverables

### 5. Equipment Portfolio Gallery
**Layout**: Masonry grid (Pinterest-style) with mixed aspect ratios
**Images**: High-quality photos of camera rigs, lighting setups, sound equipment, mixing consoles
**Grid**: 3 columns desktop, 2 tablet, 1 mobile with gap-6
**Interaction**: Click to enlarge with equipment specifications overlay

### 6. Technical Capabilities Timeline
**Layout**: Horizontal process flow from left to right
**Phases**: Pre-Production → Production → Post-Production → Distribution
**Visual**: Connected nodes with service details expanding on hover
**Purpose**: Show comprehensive end-to-end capabilities

### 7. Why Choose Red Ark (4-Point Grid)
**Layout**: 2x2 grid on desktop, single column mobile
**Points**: 
- State-of-the-art equipment
- Experienced technical team
- Complete in-house services
- Fast turnaround & quality guarantee
**Style**: Icon + number + headline + description per card

### 8. Contact & Inquiry Section
**Layout**: 2-column split (form left, info right)
**Form Fields**: Name, Email, Phone, Service Interest (dropdown), Project Type, Message
**Right Side**: Studio address, contact numbers, email, business hours, map integration placeholder
**CTA**: "Get Quote" primary button

### 9. Footer (Comprehensive)
**Layout**: 4-column grid on desktop
**Columns**:
- Studio info + logo
- Quick links to all service categories
- Project types navigation
- Social media + newsletter signup
**Bottom Bar**: Copyright, privacy policy, terms

---

## Component Library

### Navigation
**Desktop**: Horizontal nav bar, logo left, menu items center, CTA button right
**Mobile**: Hamburger menu with full-screen overlay
**Style**: Fixed on scroll with backdrop blur effect
**Items**: Home, Services, Portfolio, About, Contact

### Buttons
**Primary**: Solid fill, uppercase text, px-8 py-4, rounded-none (sharp edges for modern feel)
**Secondary**: Border outline, transparent background, same padding
**Blur Backdrop**: When on images, add backdrop-blur-sm with semi-transparent background

### Service Cards
**Structure**: Image/icon header (h-48), title, description, feature list, "Learn More" link
**Hover**: Subtle lift (transform scale) and shadow enhancement
**Border**: 1px subtle border, sharp corners

### Equipment Cards
**Style**: Large image, overlay gradient, equipment name in bold
**Info**: Specs appear on hover as overlay
**Grid**: Responsive with consistent aspect ratios

### Section Headers
**Pattern**: Section number + Title (e.g., "01. SERVICES", "02. EQUIPMENT")
**Alignment**: Left-aligned with divider line extending right
**Spacing**: mb-16 from content

### Stats/Numbers (if used)
**Display**: Large numerals (text-5xl), small label underneath
**Layout**: Inline horizontal with dividers between

---

## Imagery Guidelines

**Hero Image**: Professional cinema production scene with dramatic lighting - should show scale and professionalism
**Service Section Images**: High-quality photos of actual cinema equipment (cameras, lights, mixing consoles)
**Equipment Gallery**: Mix of close-up gear shots and wide production floor images
**About/Studio Images**: Team at work, studio facilities, behind-the-scenes production shots

**Total Image Locations:**
- Hero: 1 large background image
- Studio intro: 1 environmental shot
- Service cards: 6-8 equipment/service images
- Equipment gallery: 12-15 masonry grid images
- Project type cards: 4 representative images

---

## Interactions & Animations

**Minimal Approach**: Use animations sparingly for professional feel
**Allowed Animations:**
- Fade-in on scroll for section reveals (subtle, fast)
- Hover transforms on cards (scale 1.02, duration 200ms)
- Navigation backdrop blur on scroll
- Smooth scroll behavior for anchor links

**Avoided**: Complex scroll-triggered animations, parallax effects, auto-playing videos

---

## Responsive Behavior

**Breakpoints**: Mobile (< 768px), Tablet (768px-1024px), Desktop (> 1024px)
**Key Adaptations:**
- Navigation: Full-screen mobile menu
- Grids: 1 column mobile, 2 tablet, 3-4 desktop
- Typography: Scale down 2-3 sizes on mobile
- Hero: Reduce height to 70vh on mobile, adjust text sizing
- Spacing: Reduce py-20 to py-12 on mobile

---

## Accessibility Standards

- Maintain WCAG AA contrast ratios throughout
- Keyboard navigation for all interactive elements
- Focus states with visible outlines
- Semantic HTML structure with proper heading hierarchy
- Alt text for all imagery
- Form labels properly associated with inputs