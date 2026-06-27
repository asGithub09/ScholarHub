/* =====================================================
   Navbar Menu Interface
===================================================== */

export interface MenuItem {
  id: number;

  /* Navigation Name */
  title: string;

  /* Card Heading */
  heading: string;

  /* Short Description */
  description: string;

  /* Three Features */
  features: string[];

  /* CTA Button */
  button: string;

  /* Accent Color */
  color: string;

  /* Emoji Icon */
  icon: string;
}

/* =====================================================
   Navbar Menu Data
===================================================== */

export const menuData: MenuItem[] = [

  /* ==========================================
      About Us
  ========================================== */

  {
    id: 1,

    title: "About Us",

    heading: "About ScholarHub",

    icon: "🎓",

    color: "#2563EB",

    description:
      "ScholarHub is an education platform helping students discover colleges, scholarships and career opportunities.",

    features: [
      "Trusted by Students",
      "AI Powered Guidance",
      "Expert Career Support",
    ],

    button: "Learn More →",
  },

  /* ==========================================
      Support
  ========================================== */

  {
    id: 2,

    title: "Support",

    heading: "Support Center",

    icon: "🛟",

    color: "#0EA5E9",

    description:
      "Need help? Our support specialists are available to guide you every step of your learning journey.",

    features: [
      "Live Chat",
      "24×7 Support",
      "Email Assistance",
    ],

    button: "Contact Support →",
  },

  /* ==========================================
      FAQs
  ========================================== */

  {
    id: 3,

    title: "FAQs",

    heading: "Frequently Asked Questions",

    icon: "❓",

    color: "#7C3AED",

    description:
      "Quick answers to the most common questions about admissions, courses, scholarships and payments.",

    features: [
      "Admissions",
      "Scholarships",
      "Payments",
    ],

    button: "View FAQs →",
  },

  /* ==========================================
      Contact
  ========================================== */

  {
    id: 4,

    title: "Contact",

    heading: "Contact ScholarHub",

    icon: "☎",

    color: "#10B981",

    description:
      "Get in touch with us through email, phone or our office for any questions or feedback.",

    features: [
      "Email",
      "Phone",
      "Office Address",
    ],

    button: "Contact Us →",
  },

];