const image = (name) => `/case-studies/emonshi/${encodeURIComponent(name)}.png`;

export const emonshi = {
  slug: "emonshi",
  title: "Emonshi",
  eyebrow: "Clinic management software · Product case study · 2021",
  description: "Redesigning clinic management around appointments, patient records, and staff workflows.",
  thumbnail: image("Thumbnail - Emonshi"),
  thumbnailAlt: "Emonshi clinic management interface on a dark blue cover",
  thumbnailStyle: "artwork",
  thumbnailBackground: "#0a0854",
  intro: "Clinic management software for health clinics",
  heroImage: image("Header"),
  heroAlt: "Emonshi case study header with clinic management software preview",
  heroStyle: "artwork",
  sections: [
    {
      type: "overview", title: "About the project",
      about: "Emonshi is a B2B platform that helps health clinics manage appointments and patient records. The team planned to extend the platform to other service businesses, including sports clubs, legal practices, salons, and catering.",
      role: "I redesigned an MVP used by two clinics for seven months. I spoke directly with doctors and secretaries, gathered feedback, and improved the experience. I worked closely with the CEO, CTO, and developers.",
      contributions: ["User research", "Competitive analysis", "Information architecture", "Wireframing", "UI design", "Design system", "Testing", "Developer collaboration"],
      metrics: [{ value: "2", label: "Clinics using the MVP" }, { value: "7 months", label: "MVP use before redesign" }],
    },
    {
      type: "problem", title: "Problems and solutions",
      problem: "Clinics struggled to manage patient records. Doctors needed fast access to previous visits, while disconnected appointment systems made booking difficult for patients and staff.",
      goal: "Create one system for appointments, patient information, visit history, and transactions, with access suited to each clinic role.",
      points: [
        { title: "Scattered patient history", body: "Doctors could not quickly review earlier visits or understand a returning patient's needs." },
        { title: "Slow scheduling", body: "Secretaries spent time finding available slots and creating appointments." },
        { title: "Difficult records", body: "Patient details, transactions, and appointments were hard to archive and retrieve." },
      ],
      solutions: ["Accessible patient profiles, history, and transactions", "Quick appointment flow for service, doctor, date, and payment", "Role-specific access for doctors, secretaries, and clinic admins"],
    },
    {
      type: "research", title: "User personas",
      intro: "The design focused on two clinic roles with different daily needs.",
      personas: [
        { name: "Dr. Jack Summer", role: "Cardiologist · 41", need: "Review earlier visits, write referrals, and understand a patient quickly before consultation." },
        { name: "Sara Jonson", role: "Clinic secretary", need: "Book appointments quickly, manage patient records, export data, and find available time slots." },
      ],
    },
    {
      type: "timeline", title: "Product design timeline",
      intro: "The presentation maps research, architecture, visual design, testing, development, and feedback across a 40-day timeline.",
      image: image("Product timeline"),
      imageAlt: "Emonshi product design timeline from research through development and feedback",
    },
    {
      type: "visual", title: "Design system",
      intro: "A shared system of typography, color, buttons, and grid rules made the design process faster and more consistent.",
      colors: ["#252A45", "#6F778B", "#0042F5", "#CED5DF", "#F0F2F5"],
      details: [
        { title: "Typography", body: "Inter forms the type scale, from 32 px headings to 12 px metadata." },
        { title: "Grid", body: "A defined grid system organizes dense clinic data and forms." },
        { title: "Buttons", body: "Primary, secondary, and disabled states make actions consistent across screens." },
      ],
    },
    { type: "product", title: "Patient management", kicker: "01 · Patient records", intro: "A patient summary gives doctors critical information at a glance. Patient profiles bring details, visit history, transactions, and recent bookings together.", images: [{ src: image("Patient management"), alt: "Emonshi patient management screens and patient information", caption: "Patient management" }] },
    { type: "product", title: "Quick appointment", kicker: "02 · Scheduling", intro: "Secretaries can create appointments by selecting a service, doctor, date, and payment method.", images: [{ src: image("Quick appointment"), alt: "Emonshi quick appointment scheduling screens", caption: "Quick appointment" }] },
    { type: "product", title: "Clinic management", kicker: "03 · Administration", intro: "Clinic admins manage staff, services, days off, holidays, and clinic information from one place.", images: [{ src: image("Clinic Managenent"), alt: "Emonshi clinic staff, service, and settings management screens", caption: "Clinic management" }] },
    { type: "accessibility", title: "Accessibility check", intro: "The presentation checks interface color contrast against WCAG and shows AA-grade examples. Contrast must be rechecked when final assets are added.", values: ["6.78:1", "14.04:1", "9.5:1"] },
    { type: "text", title: "More than 20 screens", body: "The final design spans more than 20 screens across patient, appointment, and clinic management workflows.", image: image("Screens"), imageAlt: "Gallery of more than 20 Emonshi interface screens" },
  ],
};
