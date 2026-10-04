# AI Prompts & Development Log

This project was developed with ChatGPT as an AI-assisted learning and development
tool. The conversation was used for planning, visual research, frontend learning,
implementation, animation, debugging, and documentation.

The project was developed manually in VS Code. AI-generated code was reviewed,
pasted into the project, tested in the browser, and modified during development.

---

## 1. Understanding the Task

### Initial Prompt

> I'm a first year student and webdev intern at CHERRY+ with 2 hours at my hand
> to do this and i have no idea on how to code on HTML,etc i only know agentic
> based development and vibe coding and little bit of streamlit based website
> development.

The complete Cherry Network WebDev Trainee Task was then provided as context.

This established the main constraints:

- First-year frontend-only implementation
- Strong focus on visual experience and animations
- React/HTML/CSS/JavaScript allowed
- Backend not required
- AI assistance allowed
- Autonomous coding agents prohibited
- `README.md` and `prompts.md` required

---

## 2. Choosing a Development Strategy

### Prompt

> i was thinking of going to pick an inspo over from awwardss or refero and thne
> start building and learning together

This established the development approach:

**Inspiration → deconstruct → build → learn the code while building.**

Instead of attempting to learn HTML/CSS/JavaScript completely from scratch,
the project would use the available time to build a real project while learning
the important concepts encountered during implementation.

---

## 3. Selecting Visual References

### Prompt

> Here are my 3 choices:
> 1) https://virtuallyeverafter.xyz/

VEA (Virtually Ever After) was selected as the primary visual reference.

The concept taken from VEA included:

- Dark immersive environments
- Thin framing
- Numbered navigation
- Large typography
- Spatial storytelling
- Minimal UI
- Central visual objects
- Motion and transitions

The implementation intentionally avoided attempting to reproduce the original
WebGL/Three.js experience because of the limited development time.

---

## 4. Reviewing the Additional References

### Prompt

> check the pasted texts

The uploaded design-reference material was reviewed to extract the visual systems
from the additional references.

The references were identified as:

### Reference 1 — VEA

Primary reference for:

- Atmosphere
- Experimental composition
- Immersive storytelling
- Motion
- Unusual interactions

### Reference 2 — General Intelligence Company

Secondary reference for:

- Editorial typography
- Restrained UI
- Spacious layouts
- Atmospheric presentation

### Reference 3 — Apple iPhone Duo

Tertiary reference for:

- Spacing
- Visual hierarchy
- Minimal controls
- Polished interaction patterns
- Product-level visual discipline

---

## 5. Clarifying Reference Priority

### Prompt

> general intelligence company is 2nd apple iphone duo is third VEA is 1st

This established the final reference hierarchy:

1. VEA — primary
2. General Intelligence Company — secondary
3. Apple iPhone Duo — tertiary

The final design direction therefore became:

**VEA's immersive/experimental feel + General Intelligence's editorial restraint
+ Apple's polished spacing and UI discipline.**

The references were treated as inspiration rather than designs to directly copy.

---

## 6. Defining the Website Direction

### Prompt

> yeah let's move ahead what's the next step ?

The website was planned as a cinematic, single-page hackathon experience.

The proposed structure included:

- Hero
- The Idea
- Challenge
- Timeline
- Final CTA
- Footer

The hero was identified as the most important visual area and the primary place
to express the VEA-inspired direction.

---

## 7. Hero Concept

### Prompt

> here are the inspo screenshots

The screenshots were used to establish the visual composition of the hero.

The final concept included:

- Dark/black canvas
- Thin viewport framing
- Small technical metadata
- Minimal navigation
- Large "THE LAST COMMIT." typography
- Central animated commit/orbit visual
- "Build what remains." supporting text
- Scroll indicator

The central object was designed as an abstract representation of a Git commit
rather than using a conventional hero image.

---

## 8. Project Setup

### Prompt

> in the folder C:\Users\Yello\Downloads\Cherry+\Task1

The React/Vite project was created inside the Task1 directory.

During setup, PowerShell prevented the normal `npm` PowerShell script from
running because of the system execution policy.

The project was successfully initialized using:

    npm.cmd create vite@latest . -- --template react

The Vite development server was then started locally.

---

## 9. Building the First Hero

### Prompt

> I'm in

This confirmed that the local Vite environment was running and development
could begin.

The first implementation focused on building the hero before expanding the rest
of the page.

The initial hero contained:

- Navigation
- Metadata
- Main title
- Supporting text
- Central orbit
- Commit core
- Scroll indicator

---

## 10. Learning React and CSS During Implementation

### Prompt

> right now the circle kinda breathes and well i didnt undersand a single thing

This prompted a shift toward explaining the implementation instead of only
providing code.

The development discussion covered:

- JSX
- React components
- `className`
- CSS classes
- CSS animations
- `@keyframes`
- React state
- Browser mouse events
- CSS custom properties
- DOM structure

The goal was to understand the important parts of the submitted code well
enough to explain them.

---

## 11. Removing Unnecessary Experimentation

### Prompt

> let's now remove anything.,this is how it looks right now and we got very less time

Because of the limited time remaining, unnecessary experimentation was removed
and the focus shifted toward completing a polished website.

A mouse-following interaction was explored but ultimately not treated as
essential functionality.

The website was prioritized around completing the main visual experience.

---

## 12. Building the Remaining Sections

### Prompt

> yeah sounds fine

The page was expanded from the hero into a complete frontend experience.

The implemented sections became:

- Hero
- The Idea
- The Challenge
- Timeline
- Final Commit / CTA
- Footer

The registration button was intentionally kept as a visual CTA instead of
spending time implementing a functional registration system.

---

## 13. Scroll-Based Animation

### Prompt

> yeah sounds fine

Scroll-based section reveal animations were added.

The implementation used:

- JavaScript `IntersectionObserver`
- CSS transitions
- Opacity changes
- Vertical movement

The basic interaction was:

    Section outside viewport
            ↓
       hidden/lowered
            ↓
    Section enters viewport
            ↓
       "visible" class
            ↓
       fade + movement

This was used to satisfy the task's strong emphasis on animation while keeping
the implementation understandable and lightweight.

---

## 14. Visual Polish

### Prompt

> go on

The final visual polish focused on micro-interactions and motion.

Implemented improvements included:

- Hero entrance animations
- Ambient background animation
- Challenge card hover states
- Hover expansion lines
- Timeline hover interactions
- Animated registration CTA
- Animated scroll indicator
- Responsive mobile styling

The goal was to make the website feel like an intentional interactive
experience rather than a static landing page.

---

## 15. Final Scope Decision

### Prompt

> yeah lets get it over with

At this stage, feature development was stopped and the focus shifted toward
submission preparation.

The project remained frontend-only.

No backend, database, authentication, or functional registration system was
implemented because the first-year task only requires the frontend.

---

## 16. README Documentation

### Prompt

> can you give me the whole README.md in one markdown copy paste file so i can
> use it and then move on to the other things one at a time

A `README.md` was created documenting:

- Project overview
- Design direction
- Features
- Sections
- Technology stack
- Project structure
- Local development instructions
- AI usage
- Development approach
- Credits

---

## 17. Prompt Documentation

### Prompt

> this is the whole convo history bro i need this in prompts.md right ?

The complete development conversation was considered as the source for this
prompt log.

Rather than copying the entire conversation into the repository, the relevant
development prompts and decisions were condensed into this document.

---

# AI Usage Summary

ChatGPT was used for:

- Understanding the task requirements
- Project planning
- Visual reference analysis
- UI/UX ideation
- React/Vite setup
- JSX generation
- CSS generation
- Animation ideas
- Scroll-based animation
- Hover interactions
- Responsive design
- Debugging
- Learning frontend concepts
- Documentation

The project was not created using an autonomous coding agent.

The implementation was manually run, inspected, tested, and adapted during
development.

---

# Modification & Adaptation of AI Output

AI-generated code and ideas were not used blindly.

During development, the generated output was manually adapted to:

- Match the VEA-inspired visual direction
- Combine the supporting visual characteristics of the other references
- Fit the "The Last Commit" concept
- Work within the available development time
- Remove unnecessary functionality
- Adjust typography and spacing
- Change animation timing and behavior
- Add and modify hover interactions
- Create the final section structure
- Ensure responsive behavior

The final website is an original implementation created through AI-assisted
development, manual editing, browser testing, and adaptation.

---

# Final Development Philosophy

The project followed the approach:

**Inspiration → Deconstruction → Implementation → Learning → Animation → Polish**

The purpose of using AI was not to replace the development process, but to
learn and build a working frontend experience within the limited time available.