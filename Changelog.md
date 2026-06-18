# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-06-17

### Changed
- Cropped the church background image to remove excess sky, making the building more prominent.
- Adjusted mobile background positioning (`center top`) and moved the hero section higher (`margin-top: 5vh`) so the church building is clearly visible above the accordion content on phones.
- Added desktop background positioning (`center 25%`) to better frame the church building on larger screens.

## [Unreleased] - 2026-06-17

### Changed
- Shortened event time formats for consistency: Food Pantry now shows "4-6:00 PM", Family Diaper Bank shows "5-7:00 PM", and IGNITEYoungAdults shows "6-8:00 PM".

## [Unreleased] - 2026-06-17

### Changed
- Moved IGNITEYoungAdults from the Sunday schedule to the Events section, now listed as "1st & 2nd Wednesdays Monthly, 6:00 PM - 8:00 PM".
- Updated IGNITEYouth Sunday time from "6:00 PM - 8:00 PM" to "5:30PM - 8:00 PM".

## [Unreleased] - 2026-06-16

### Added
- Created a modern, mobile-friendly landing page (`index.html`) with a "Coming Soon" theme.
- Added an animated background featuring glowing, floating orbs.
- Integrated a glassmorphism aesthetic for schedule cards.
- Displayed weekly service times and events extracted from the old index page.
- Added quick action buttons for Facebook and Email (`info@ignitetheozark.com`).
- Added an address button linking directly to Google Maps (`19585 Hwy 413, Branson West, MO, United States, 65737`).
- Implemented responsive micro-animations for a cutting-edge feel.

### Changed
- Replaced the placeholder icon with the official IGNITE Church at Lakewood logo.
- Updated the primary heading to prominently feature "IGNITE Church at Lakewood".
- Refined the landing page layout for a cleaner, more professional aesthetic.
- Removed floating orb animations in favor of a subtle, elegant dark theme.
- Improved mobile responsiveness with dynamic font scaling (`clamp()`) and better button stacking on small screens.
- Reorganized the main content into three modern, collapsible accordion sections to reduce visual clutter.
- Redesigned the layout: transitioned to a split-screen desktop view and adjusted mobile spacing to ensure the center background is clearly visible and not obscured by content.
- Adjusted the background image alignment to ensure it perfectly frames the background architecture without cutting off the top on desktop screens.
- Moved the logo to permanently float in the upper-left corner across all device sizes for a stronger brand presence.
- Added a subtle, continuous pulse animation to the "Our new website is coming soon." text to draw attention.
- Redesigned the "WELCOME HOME!" text into a vibrant, glowing badge to make it pop prominently against the background.
- Refined the contact action buttons into sleek, professional, compact pill shapes that wrap fluidly.
- Implemented exclusive accordion logic so that expanding one section automatically collapses the others, maintaining a clean layout.
- Added intelligent fallback logic to the accordions so that "Contact Us" automatically expands if a user attempts to collapse all sections, ensuring critical info is always visible.
- Added smooth auto-scrolling on mobile devices so that when a section is tapped to expand, the page smoothly scrolls to bring it into full view.
- Updated the Family Diaper Bank schedule to accurately display the time block: "5:00 PM - 7:00 PM".
- Replaced the embossed cross background with a highly realistic, AI-cleaned architectural photo of the actual IGNITE Church building, removing all parked vehicles, people, equipment, and power lines from the sky for a pristine look.
