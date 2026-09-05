import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import PageContainer from "./PageContainer";
import javixLogo from "../../assets/logo/javix-logo-final.png";

const links = [
  {
    heading: "Design",
    items: ["Conversion Rate Optimization", "Graphic Design", "UX Design", "UI Design", "Branding"],
  },
  {
    heading: "Development",
    items: ["Shopify Development", "Web Design & Dev", "Custom Frontend", "WordPress Dev"],
  },
  {
    heading: "Marketing",
    items: ["Google Ads", "SEO", "Social Media", "Performance Marketing", "Email Marketing"],
  },
  {
    heading: "Automations",
    items: ["Email Automation", "AI Agent Development", "Custom Chatbot"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-0">
      <PageContainer>

        {/* ── Top: Brand + Nav Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 pb-6 border-b border-gray-100">

          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link to="/" className="inline-block">
              <img
                src={javixLogo}
                alt="JAVIX"
                style={{ height: "30px", width: "auto", objectFit: "contain" }}
                draggable={false}
              />
            </Link>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#43C47A] mt-1 shrink-0" />
                <div className="text-gray-600 text-[15px] leading-relaxed font-medium">
                  <p className="mb-2">
                    <span className="text-gray-800 font-semibold">Dindigul:</span><br />
                    Mari Complex, 1st Cross Street,<br />Moovendar Nagar, Balakrishnapuram,<br />Dindigul, Tamil Nadu 624005
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#43C47A] mt-1 shrink-0" />
                <div className="text-gray-600 text-[15px] leading-relaxed font-medium">
                  <p>
                    <span className="text-gray-800 font-semibold">Coimbatore:</span><br />
                    23, Sriram Layout Rd, Saibaba Colony,<br />Coimbatore, Tamil Nadu 641011
                  </p>
                </div>
              </div>
              <a href="tel:+918903863022" className="flex items-center gap-4 group">
                <Phone size={20} className="text-[#43C47A] shrink-0" />
                <span className="text-gray-600 text-[15px] font-medium group-hover:text-[#43C47A] transition-colors">+91 89038 63022</span>
              </a>
              <a href="mailto:javixtechnologies@gmail.com" className="flex items-center gap-4 group">
                <Mail size={20} className="text-[#43C47A] shrink-0" />
                <span className="text-gray-600 text-[15px] font-medium group-hover:text-[#43C47A] transition-colors">javixtechnologies@gmail.com</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", size: 18 },
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", size: 18 },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", size: 18 },
                { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", size: 16 },
              ].map(({ label, path, size }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#43C47A] hover:border-[#43C47A]/30 hover:bg-[#F4FBF7] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {links.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[13px] font-bold tracking-widest uppercase text-gray-900 mb-5">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link
                        to="#"
                        className="text-gray-500 hover:text-[#43C47A] font-medium text-[15px] transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 text-gray-400 font-medium text-sm">
          <p>Copyright © 2015 - {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-[#43C47A] transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#43C47A] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </PageContainer>
    </footer>
  );
}
