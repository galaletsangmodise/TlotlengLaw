# Project Brief: Tlotleng Attorneys Website Redesign

## Which company did you choose?

**Company:** Tlotleng Attorneys
**Industry:** Legal services (private law firm — criminal law, family law, RAF claims, civil litigation, and related practice areas)
**Current website:** https://tlotlenglaw.co.za/

## How did you find them?

I found them through a Google search while looking for South African law firms with a public web presence I could realistically evaluate and redesign.

## Why did you choose this company specifically?

I used to be a law student before moving into software development, and this project let me merge both interests. Legal services are also a strong practical fit for a UX case study — clients often come to a law firm's site anxious, time-pressed, or in genuinely urgent situations (an arrest, an eviction notice, an accident), so clarity, trust, and speed-to-action aren't nice-to-haves here, they're the whole job of the site. That combination of subject-matter familiarity and a real UX stakes made Tlotleng Attorneys a strong choice to redesign as a portfolio piece and, longer-term, as something I could pitch to the firm directly for potential employment.

## Why does their website need a redesign?

The current site is functional but dated, and falls short against a number of core usability heuristics:

**Weak visual hierarchy.** The homepage is a flat stack of sections (slider → about → services → testimonials → contact) with no clear dominant call-to-action. Nothing visually signals "this is the one thing to do here"  there's no prominent "Book a Consultation" or "Call Now" button standing above the rest.

**Thin navigation for the content depth.** The site covers 8 distinct practice areas, but they're buried under a single "Services" nav item with no sub-pages or anchors. A visitor looking specifically for divorce law or criminal defense can't jump there directly — a violation of the "recognition over recall" heuristic.

**Consistency and error-prevention failures.** A broken `<strong>` tag renders as literal text in the About section link, and the "Read More" links point to `#` (dead links). Both are the kind of small, visible defects that erode trust in a professional services site.

**Cluttered content structure.** Service descriptions are dense paragraphs with no icons, cards, or visual separation. Legal clients scanning under stress need to find relevant information fast, and the current layout doesn't support that.

**Underdeveloped trust and credibility signals.** There's no attorney photo, no visible case results, and the footer reads "© 2021" — a strong, unintentional signal that the practice may be inactive. Testimonials are present but not attributed with enough weight to feel credible.

**Unclear calls-to-action.** Existing CTAs ("Join the winning team," "Read More") are vague and low-intent. There's no explicit path to booking a consultation or calling directly, despite legal needs often being urgent.


**Broken contact form.** The form area shows a visible honeypot placeholder ("Leave this field empty if you're human") with no actual visible input fields — suggesting the form isn't rendering or functioning correctly. A non-functional contact form on a lead-generation site is a critical failure.

**Generic, template-driven visual design.** The site runs on default WPBakery/WordPress styling with no distinctive palette or typography — undercutting the professionalism the copy itself claims to convey.



**Unverified mobile responsiveness and accessibility.** WPBakery builds are prone to inconsistent mobile rendering, and there's no visible alt-text strategy, skip-navigation, or ARIA landmark structure — all relevant given that a large share of "lawyer near me" searches happen on mobile.
