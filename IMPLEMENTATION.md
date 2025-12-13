# Hack The Bay Landing Page - Complete Implementation Guide

This guide explains how to build every feature of the Hack The Bay landing page step-by-step, from scratch.

---

## Table of Contents

1. [Setup & Dependencies](#setup--dependencies)
2. [Hero Section (Sun)](#hero-section-sun)
3. [Earth Section](#earth-section)
4. [Mars Section](#mars-section)
5. [FAQ Section (Neptune & Uranus)](#faq-section-neptune--uranus)
6. [Starfield Background](#starfield-background)
7. [Custom Cursor](#custom-cursor)
8. [Animation Fundamentals](#animation-fundamentals)

---

## Setup & Dependencies

### Required Libraries

\`\`\`bash
npm install framer-motion
\`\`\`

**Key Libraries & Their Purposes:**

- **Framer Motion**: Handles all animations (hover, scale, fade)
- **Next.js**: Framework (you're already using this)
- **React 18+**: For hooks and state management
- **Tailwind CSS**: For styling (included by default in v0)

### Font Setup (Orbitron - Galactic)

In `app/layout.tsx`:

\`\`\`typescript
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700', '900'] })

export default function RootLayout({ children }) {
return (

<html className={orbitron.className}>
<body>{children}</body>
</html>
)
}
\`\`\`

This applies the galactic Orbitron font to your entire site.

---

## Hero Section (Sun)

### Concept

The sun is a **perfect circle** that starts **half above the viewport** (only the bottom semicircle visible). On page load, this creates an impressive visual entrance.

### HTML Structure

\`\`\`typescript
export function HeroSection() {
return (

<section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
{/_ Sun Circle _/}
<motion.div
className="absolute w-96 h-96 rounded-full"
style={{
          background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA500)',
          boxShadow: '0 0 100px 40px rgba(255, 215, 0, 0.3)',
          top: '-192px', // Half the width (384/2 = 192)
        }}
/>

      {/* Content on top of sun */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white">Hack The Bay</h1>
        <button className="mt-8 px-8 py-3 bg-cyan-400 text-black font-bold rounded">
          Apply Now
        </button>
      </div>
    </section>

)
}
\`\`\`

### How It Works

**CSS Properties Explained:**

1. **`rounded-full`** - Makes it a perfect circle (100% border-radius)
2. **`w-96 h-96`** - Equal width and height (384px × 384px) = perfect circle
3. **`top: '-192px'`** - Pushes the circle up by HALF its size, so only bottom half visible
4. **`radial-gradient(circle at 30% 30%, ...)`** - Creates the golden glow effect starting from upper left
5. **`boxShadow: '0 0 100px 40px rgba(...)'`** - Creates the faint glow around the sun

**Why not `clip-path`?**

- Clip-path distorts the gradient
- Border-radius with positioning is cleaner and more performant

### Styling the Glow

\`\`\`css
/_ The key to the sun glow _/
box-shadow:
0 0 60px 20px rgba(255, 215, 0, 0.2), /_ Inner glow _/
0 0 100px 40px rgba(255, 215, 0, 0.15); /_ Outer glow _/
\`\`\`

The glow is created by **layered box-shadows** with decreasing opacity. Each layer spreads further and fades more.

---

## Earth Section

### Concept

The Earth starts at the center of the screen. When you **hover over it**, it:

1. **Scales up** (1.8x larger)
2. **Moves slightly left** to make room
3. **Text box fades in** on the right side with information
4. **Text box disappears** when you scroll to the next section

### HTML Structure

\`\`\`typescript
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function EarthSection() {
const [isHovered, setIsHovered] = useState(false)

return (

<section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Container for planet and text box */}
      <div className="flex items-center justify-center w-full gap-20">

        {/* Planet Container - CENTERED */}
        <motion.div
          className="relative w-64 h-64 flex-shrink-0"
          animate={{
            scale: isHovered ? 1.8 : 1,
            x: isHovered ? -60 : 0, // Moves left on hover
          }}
          transition={{ duration: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Earth Planet - Blue gradient circle */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700" />

          {/* Cloud overlay that fades */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-20"
            animate={{ opacity: isHovered ? 0 : 0.2 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Text Box - APPEARS ON HOVER */}
        <motion.div
          className="w-80 p-6 bg-slate-900 rounded-lg border border-cyan-400"
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 20,
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-3">The Earth</h2>
          <p className="text-white">
            Where the hackathon takes place. Learn about our location in Florida.
          </p>
          {/* Map with pin could go here */}
        </motion.div>
      </div>
    </section>

)
}
\`\`\`

### Key Animation Techniques

**1. State Management**
\`\`\`typescript
const [isHovered, setIsHovered] = useState(false)
\`\`\`

- Tracks whether user is hovering
- Changes in state trigger Framer Motion animations

**2. Scale Animation**
\`\`\`typescript
animate={{ scale: isHovered ? 1.8 : 1 }}
\`\`\`

- `isHovered ? 1.8 : 1` = "If hovering, scale to 1.8x, otherwise 1x"
- Framer Motion smoothly animates between these values

**3. Position Animation**
\`\`\`typescript
animate={{ x: isHovered ? -60 : 0 }}
\`\`\`

- `x: -60` = Move 60 pixels to the LEFT
- Negative numbers = left, positive = right

**4. Opacity/Visibility**
\`\`\`typescript
animate={{ opacity: isHovered ? 1 : 0 }}
\`\`\`

- `opacity: 1` = fully visible
- `opacity: 0` = invisible (but still takes up space)
- `pointerEvents: 'none'` = can't click invisible elements

**5. Smooth Transitions**
\`\`\`typescript
transition={{ duration: 0.4 }}
\`\`\`

- Duration in seconds
- Controls how fast the animation happens

### Cloud Effect

The cloud overlay is a **white semi-transparent div** that fades out on hover:
\`\`\`typescript
<motion.div
className="absolute inset-0 rounded-full bg-white opacity-20"
animate={{ opacity: isHovered ? 0 : 0.2 }}
/>
\`\`\`

- `opacity-20` = 20% white (very subtle)
- On hover, fades to `opacity: 0` (invisible)
- Creates the "clouds revealing the map" effect

---

## Mars Section

### Concept

Mars works like Earth, **BUT** it has 3 **clickable buttons INSIDE the planet**. Each button represents a different track:

1. **AI Track** - Clicking changes the text box to show AI info
2. **Web Track** - Clicking changes the text box to show Web info
3. **Mobile Track** - Clicking changes the text box to show Mobile info

### HTML Structure

\`\`\`typescript
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function MarsSection() {
const [isHovered, setIsHovered] = useState(false)
const [selectedTrack, setSelectedTrack] = useState('ai') // Track state

// Track data - customize these
const tracks = {
ai: {
title: 'AI & Machine Learning Track',
description: 'Build AI models, chatbots, and intelligent systems.'
},
web: {
title: 'Web Development Track',
description: 'Create full-stack web applications with React, Next.js, and more.'
},
mobile: {
title: 'Mobile Development Track',
description: 'Develop iOS and Android apps with cutting-edge mobile tech.'
}
}

return (

<section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      <div className="flex items-center justify-center w-full gap-20">

        {/* Mars Planet - CENTERED with buttons INSIDE */}
        <motion.div
          className="relative w-64 h-64 flex-shrink-0 flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.8 : 1,
            x: isHovered ? -100 : 0, // Shift LEFT for text box space
          }}
          transition={{ duration: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Mars Planet - Red gradient circle */}
          <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-red-500 via-orange-600 to-red-700" />

          {/* 3 Track Buttons INSIDE the planet */}
          <div className="relative z-10 flex flex-col gap-4">
            {['ai', 'web', 'mobile'].map((track, index) => (
              <motion.button
                key={track}
                onClick={(e) => {
                  e.stopPropagation() // Prevent parent hover triggering
                  setSelectedTrack(track)
                }}
                className={`
                  w-12 h-12 rounded-full font-bold text-sm
                  transition-all duration-200
                  ${selectedTrack === track
                    ? 'bg-cyan-400 text-black scale-110'
                    : 'bg-white text-black hover:bg-cyan-200'
                  }
                `}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Text Box - Shows selected track info */}
        <motion.div
          className="w-80 p-6 bg-slate-900 rounded-lg border border-orange-400"
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 20,
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-orange-400 mb-3">
            {tracks[selectedTrack].title}
          </h2>
          <p className="text-white">
            {tracks[selectedTrack].description}
          </p>
        </motion.div>
      </div>
    </section>

)
}
\`\`\`

### Critical: Making Buttons Clickable

**The Problem:** When the parent `motion.div` scales up on hover, it can block clicks to child buttons.

**The Solution:** 3 key things:

1. **Stop Propagation**
   \`\`\`typescript
   onClick={(e) => {
   e.stopPropagation() // Prevents parent from handling the click
   setSelectedTrack(track)
   }}
   \`\`\`

2. **Use `relative z-10`** on the buttons container
\`\`\`typescript
<div className="relative z-10 flex flex-col gap-4">
  {/* buttons here */}
</div>
\`\`\`

3. **Ensure parent has pointer-events enabled** (default in Framer Motion)

### Button Styling

The buttons change appearance when clicked:
\`\`\`typescript
${selectedTrack === track
? 'bg-cyan-400 text-black scale-110' // Selected = bright cyan, slightly larger
: 'bg-white text-black hover:bg-cyan-200' // Unselected = white, hover = light cyan
}
\`\`\`

This gives **visual feedback** that the button is active.

### Track Data Structure

\`\`\`typescript
const tracks = {
ai: { title: '...', description: '...' },
web: { title: '...', description: '...' },
mobile: { title: '...', description: '...' }
}
\`\`\`

Then access it: `tracks[selectedTrack].title`

This makes it **easy to add more tracks** later - just add more entries to the object.

---

## FAQ Section (Neptune & Uranus)

### Concept

- **Neptune** has 3 **static moons** orbiting around it (but NOT animated)
- Each moon displays a **FAQ question** as text inside it
- When you **click a moon**, the **Uranus planet displays the answer**
- The moons stay in fixed positions (no animation)

### HTML Structure

\`\`\`typescript
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function FAQSection() {
const [selectedFAQ, setSelectedFAQ] = useState(0) // Track which FAQ is selected

const faqs = [
{
question: 'When does the hackathon start?',
answer: 'Hack The Bay 2025 starts on March 15th at 9:00 AM.'
},
{
question: 'How long is the hackathon?',
answer: 'The event runs for 24 hours, ending on March 16th at 9:00 AM.'
},
{
question: 'Do I need experience?',
answer: 'No! Beginners and experts welcome. Learn from mentors and experienced hackers.'
}
]

return (

<section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      <div className="flex items-center justify-center w-full gap-40">

        {/* NEPTUNE - Left side with 3 moons */}
        <div className="relative w-80 h-80">
          {/* Neptune Planet */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800" />

          {/* 3 Moons - STATIC POSITIONS */}
          {faqs.map((faq, index) => {
            // Position moons in a circle around Neptune
            const angle = (index / faqs.length) * 360
            const radius = 180 // Distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <motion.button
                key={index}
                onClick={() => setSelectedFAQ(index)}
                className={`
                  absolute w-24 h-24 rounded-full flex items-center justify-center
                  text-xs font-bold text-center p-2 cursor-pointer
                  transition-all duration-200
                  ${selectedFAQ === index
                    ? 'bg-cyan-400 text-black shadow-lg scale-110'
                    : 'bg-gray-400 text-black hover:bg-gray-300'
                  }
                `}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
                whileHover={{ scale: 1.1 }}
              >
                {faq.question}
              </motion.button>
            )
          })}
        </div>

        {/* URANUS - Right side showing the answer */}
        <motion.div
          className="relative w-80 h-80"
          key={selectedFAQ} // Re-trigger animation when FAQ changes
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Uranus Planet */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-cyan-500 to-blue-600" />

          {/* Answer Text */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="text-cyan-300 font-bold mb-3 text-lg">Answer</h3>
              <p className="text-white text-sm">
                {faqs[selectedFAQ].answer}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

)
}
\`\`\`

### How the Moon Positioning Works

This is **pure mathematics** - placing elements in a circle:

\`\`\`typescript
const angle = (index / faqs.length) _ 360 // 0°, 120°, 240° for 3 moons
const radius = 180 // Distance from center (adjust this to move moons closer/farther)
const x = Math.cos((angle _ Math.PI) / 180) _ radius
const y = Math.sin((angle _ Math.PI) / 180) \* radius
\`\`\`

**Explained:**

- Divide 360° by number of moons → each moon gets equal spacing
- `Math.cos` and `Math.sin` convert angle to x,y coordinates
- `* radius` moves them outward from center
- The transform positions each moon: `translate(center + offset)`

**To change positions:**

- Increase `radius` → moons move farther out
- Decrease `radius` → moons move closer to planet
- Moons are **NOT animated** - they stay in fixed positions

### Button Styling on Click

\`\`\`typescript
${selectedFAQ === index
? 'bg-cyan-400 text-black shadow-lg scale-110' // Selected = bright
: 'bg-gray-400 text-black hover:bg-gray-300' // Unselected = dim
}
\`\`\`

When a moon is selected:

- **Background turns cyan**
- **Gets a shadow** for depth
- **Scales up slightly** for emphasis

### Uranus Answer Display

\`\`\`typescript
<motion.div
key={selectedFAQ} // Forces re-animation when answer changes
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}

> {/_ Shows the answer _/}
> </motion.div>
> \`\`\`

The `key={selectedFAQ}` is **crucial** - it tells React to remount this component when the selected FAQ changes, triggering the fade-in animation.

---

## Starfield Background

### Concept

A realistic **starfield** with thousands of small stars scattered across the space background. Static (doesn't animate).

#### Choosing between procedural stars vs. a background image

- Prefer procedural stars (like the implementation below) for zero-image weight, crisp rendering on any viewport, and easy density/brightness tweaks.
- If you have a beautiful texture, layer it behind the procedural stars: set `body` to a subtle gradient or image, then keep the thin procedural layer on top for sparkle without banding or heavy payloads.
- Avoid huge PNGs; if using an image, export as AVIF/WebP around 1–2k wide. Use `background-size: cover;` and keep parallax/fixed backgrounds desktop-only to avoid mobile jank.

### Implementation

\`\`\`typescript
export function Starfield() {
const stars = Array.from({ length: 200 }, (\_, i) => ({
id: i,
left: Math.random() _ 100,
top: Math.random() _ 100,
size: Math.random() _ 2 + 0.5,
opacity: Math.random() _ 0.7 + 0.3,
}))

return (

<div className="fixed inset-0 pointer-events-none">
{stars.map(star => (
<div
key={star.id}
className="absolute bg-white rounded-full"
style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
/>
))}
</div>
)
}
\`\`\`

### How It Works

\`\`\`typescript
Array.from({ length: 200 }, (\_, i) => ({...}))
\`\`\`

- Creates an array of 200 objects
- Each object = one star

\`\`\`typescript
left: Math.random() _ 100 // Random position 0-100%
size: Math.random() _ 2 + 0.5 // Random size 0.5-2.5px
opacity: Math.random() \* 0.7 + 0.3 // Random brightness 0.3-1.0
\`\`\`

Each star is **randomly positioned and sized**, creating natural variation.

### Apply to Background

In your main `page.tsx`:

\`\`\`typescript
export default function Home() {
return (
<>
<Starfield />
<HeroSection />
<EarthSection />
<MarsSection />
<FAQSection />
</>
)
}
\`\`\`

And in `app/globals.css`:

\`\`\`css
body {
background-color: #000000; /_ Deep space black _/
}
\`\`\`

---

## Custom Cursor

### Concept

Replace the default cursor with a **spaceship/star shape**.

### Implementation

\`\`\`css
/_ In app/globals.css _/
html {
cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="%23FFD700" d="M16 2 L20 12 L30 14 L22 22 L24 32 L16 27 L8 32 L10 22 L2 14 L12 12 Z"/></svg>') 12 2, auto;
}
\`\`\`

### How It Works

\`\`\`
cursor: url('data-uri') hotspotX hotspotY, fallback;
\`\`\`

- **`data:image/svg+xml;utf8`** = embed SVG directly
- **`<svg>...<path fill="%23FFD700" d="M16 2 ..."/></svg>`** = a star shape (gold color)
- **`12 2`** = click hotspot (top-left of the star)
- **`auto`** = fallback to normal cursor if SVG fails

#### Using your own asset (PNG or SVG)

- Place the file in `public/cursor.svg` (or `.png`), then: `cursor: url('/cursor.svg') 12 2, auto;`
- Keep it ≤32px for crisp edges; ship a 2x PNG fallback if your SVG uses gradients/filters.
- Adjust the hotspot (`12 2` above) so clicks feel accurate on both Windows and macOS.
- Ensure the cursor shape doesn't hide button focus/hover states.

### Custom Star SVG

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<path fill="#FFD700" d="M16 2 L20 12 L30 14 L22 22 L24 32 L16 27 L8 32 L10 22 L2 14 L12 12 Z"/>
</svg>
\`\`\`

This creates a **5-point star**. You can modify the `d="..."` path to create different shapes.

---

## Content Management for Copy

- For a small site, prefer a typed TypeScript module (e.g., `content/siteContent.ts`) exporting objects for hero, tracks, and FAQs. This keeps copy centralized with intellisense and no runtime parsing.
- If you want pure data, store JSON plus a small validator (zod or a type guard) before using it.
- Suggested shape:
  - `hero: { title, subtitle, cta, ctaHref }`
  - `earth: { heading, body }`
  - `mars: { heading, tracks: { id, title, description }[] }`
  - `faq: { items: { question, answer }[] }`
- Centralizing copy makes future localization or CMS migration easier.

---

## Animation Fundamentals

### What is Framer Motion?

Framer Motion is a **React animation library** that makes it easy to create smooth animations.

### Basic Pattern

\`\`\`typescript
import { motion } from 'framer-motion'

<motion.div
initial={{ opacity: 0 }} // Starting state
animate={{ opacity: 1 }} // Ending state
transition={{ duration: 0.5 }} // How fast
onHoverStart={() => {...}} // On hover

> Content here
> </motion.div>
> \`\`\`

### Key Concepts

**1. State-Driven Animations**
\`\`\`typescript
const [isActive, setIsActive] = useState(false)

<motion.div
animate={{
    scale: isActive ? 1.5 : 1,
    backgroundColor: isActive ? '#00FF00' : '#FF0000'
  }}
/>
\`\`\`

**2. Gesture Animations**
\`\`\`typescript
<motion.div
whileHover={{ scale: 1.1 }} // On hover
whileTap={{ scale: 0.9 }} // On click
/>
\`\`\`

**3. Smooth Transitions**
\`\`\`typescript
transition={{
  duration: 0.4,        // How long (seconds)
  delay: 0.1,           // Wait before starting
  type: 'spring',       // Spring animation vs linear
  stiffness: 100        // How bouncy (spring only)
}}
\`\`\`

### Common Properties You'll Animate

\`\`\`typescript
animate={{
  scale: 1.5,           // Size (1 = normal, 1.5 = 50% bigger)
  x: 100,               // Move right 100px
  y: -50,               // Move up 50px
  opacity: 0.5,         // Transparency (0 = invisible, 1 = visible)
  rotate: 360,          // Rotation in degrees
  backgroundColor: '#FF0000'  // Color changes
}}
\`\`\`

### Performance Tips

1. **Only animate `transform` and `opacity`**

   - ✅ `scale`, `x`, `y`, `rotate`, `opacity`
   - ❌ `width`, `height`, `left`, `top`

2. **Use `will-change` for heavy animations**
   \`\`\`css
   .planet { will-change: transform; }
   \`\`\`

3. **Reduce animation duration on mobile**
   \`\`\`typescript
   duration: window.innerWidth < 768 ? 0.2 : 0.4
   \`\`\`

---

## Summary: What Each File Does

| File                                    | Purpose                          |
| --------------------------------------- | -------------------------------- |
| `app/page.tsx`                          | Main page - imports all sections |
| `app/layout.tsx`                        | HTML structure + font setup      |
| `components/sections/hero-section.tsx`  | Sun with glow                    |
| `components/sections/earth-section.tsx` | Earth planet with hover reveal   |
| `components/sections/mars-section.tsx`  | Mars with 3 clickable tracks     |
| `components/sections/faq-section.tsx`   | Neptune + Uranus FAQ             |
| `components/starfield.tsx`              | Background stars                 |
| `app/globals.css`                       | Global styles + cursor           |

---

## Next Steps

1. **Copy the code** from the sections above
2. **Create files** in your project
3. **Test interactions** - hover over planets, click buttons
4. **Customize** - change colors, text, add more FAQs
5. **Add more features** - footer, navigation, animations

You now understand **how everything works**. Modify and build on this foundation!
