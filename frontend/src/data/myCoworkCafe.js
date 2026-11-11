const image = (name) => `/case-studies/coworkcafe/${encodeURIComponent(name)}.png`;

export const myCoworkCafe = {
  slug: "my-cowork-cafe",
  title: "My Cowork Cafe",
  eyebrow: "Coworking app · Product case study · 2020",
  description: "Helping people find, reserve, and connect in coworking cafes.",
  thumbnail: image("Thumbnail - Cowork Cafe"),
  thumbnailAlt: "My Cowork Cafe case study cover",
  thumbnailStyle: "artwork",
  thumbnailBackground: "#34466C",
  intro: "A mobile app for finding flexible places to work, booking a table, and meeting other coworkers.",
  heroImage: image("Header"),
  heroAlt: "My Cowork Cafe app screens on the case study header",
  heroStyle: "artwork",
  sections: [
    {
      type: "overview", title: "Overview",
      about: "My Coworkcafé helps people work flexibly from cafes and coworking spaces nearby. The app combines place discovery, table reservations, food ordering, and a community for meeting other professionals.",
      role: "I researched user and business needs, identified pain points, planned the information architecture, and designed the mobile experience and design system.",
      contributions: ["User research", "User personas", "Business research", "Information architecture", "Wireframing", "UI design", "Design system", "Usability testing"],
      metrics: [{ value: "2020", label: "Project year" }, { value: "30+", label: "Screens designed" }],
    },
    {
      type: "research", title: "User personas",
      intro: "Research considered both people looking for a flexible workspace and cafe owners who want to fill unused tables.",
      personas: [
        { name: "Michel Milson", role: "Senior UI designer · 25", need: "Find a nearby coworking space, reserve it for selected hours, access food while working, and expand a business network. Limited local spaces and difficulty meeting collaborators were key pain points." },
        { name: "Sara Angel", role: "Coffee shop owner · 32", need: "Increase reservations, revenue, and repeat visits. Empty tables, limited customer management tools, and low awareness of the cafe were key pain points." },
      ],
    },
    {
      type: "architecture", title: "Information architecture",
      intro: "The app map connects discovery, reservations, community, and account tasks from a shared home screen.",
      image: image("Information architecture"),
      imageAlt: "My Cowork Cafe app information architecture diagram",
      imageDisplay: "natural",
    },
    { type: "text", title: "Wireframing", body: "Early wireframes translated research findings into the first screen layouts and task flows before visual design.", image: image("Wireframes"), imageAlt: "My Cowork Cafe early mobile wireframes" },
    {
      type: "visual", title: "Visual style guide",
      intro: "A reusable design system established typography, color, controls, and spacing to keep the mobile app consistent as it grew.",
      colors: ["#34466C", "#4198FD", "#1ECC95", "#E53E3E", "#FC9340", "#E2E8F0", "#99A3B8"],
      details: [
        { title: "Typography", body: "Roboto defines the type scale, from large headings to compact captions." },
        { title: "Components", body: "Primary, secondary, and disabled buttons have default, hover, and pressed states. Inputs cover focused, filled, disabled, error, and icon states." },
        { title: "Spacing", body: "An organized grid and spacing rules guide navigation, tabs, and content placement." },
        { title: "Color", body: "Primary blue and dark navy pair with green, red, orange, and neutral supporting colors." },
      ],
    },
    { type: "product", title: "Registration", kicker: "01 · Get started", intro: "People can sign up, use Google or Facebook, or continue as a guest.", images: [{ src: image("Registration"), alt: "My Cowork Cafe onboarding, registration, and login screens", caption: "Registration" }] },
    { type: "product", title: "Discover coworkers", kicker: "02 · Community", intro: "The community area helps people find coworkers and events matched to their interests and skills.", images: [{ src: image("Discover coworkers"), alt: "My Cowork Cafe coworker discovery screens", caption: "Discover coworkers" }] },
    { type: "product", title: "User profile", kicker: "03 · Connections", intro: "Profiles let people share information, connect with other coworkers, and arrange a coworking session together. Direct messages help them grow their business network.", images: [{ src: image("User profile"), alt: "My Cowork Cafe user profile screens", caption: "User profile" }] },
    { type: "product", title: "Reservation process", kicker: "04 · Booking", intro: "People can find a space, check its availability and details, then choose a date, time, table, and party size. They can add food and drinks, review payment, and confirm the reservation.", images: [{ src: image("Reservation process"), alt: "My Cowork Cafe reservation flow screens", caption: "Reservation process" }] },
    { type: "text", title: "Redesign improvements", body: "User feedback revealed friction in login. I revised the flow, added guest access and Google sign-in, and improved the space details and checkout screens.", image: image("Redesign improvement"), imageAlt: "My Cowork Cafe before and after redesign comparisons" },
    { type: "text", title: "Accessibility", body: "The visual guide considers color contrast against WCAG 2.0. Icons, imagery, gestures, and motion help people navigate and understand actions." },
    { type: "text", title: "More than 30 screens", body: "The final design spans more than 30 screens across discovery, community, reservations, checkout, and account management.", image: image("Screens"), imageAlt: "Gallery of more than 30 My Cowork Cafe mobile screens" },
  ],
};
