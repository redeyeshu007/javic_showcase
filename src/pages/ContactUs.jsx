import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight, CheckCircle2, Send } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageContainer from '../components/layout/PageContainer';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const offices = [
  {
    city: 'Dindigul',
    address: 'Mari Complex, 1st Cross Street,\nMoovendar Nagar, Balakrishnapuram,\nDindigul, Tamil Nadu 624005',
    mapUrl: 'https://maps.google.com/?q=Mari+Complex+1st+Cross+Street+Moovendar+Nagar+Balakrishnapuram+Dindigul+Tamil+Nadu+624005',
  },
  {
    city: 'Coimbatore',
    address: '23, Sriram Layout Rd,\nSaibaba Colony,\nCoimbatore, Tamil Nadu 641011',
    mapUrl: 'https://maps.google.com/?q=23+Sriram+Layout+Rd+Saibaba+Colony+Coimbatore+Tamil+Nadu+641011',
  },
];

const services = [
  'Web Development', 'Mobile App Development', 'UI/UX Design',
  'Branding & Identity', 'Digital Marketing', 'AI & Automation', 'Other',
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#0A0F0D] relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #43C47A 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #43C47A 0%, transparent 70%)' }} />
        <PageContainer>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-block text-[#43C47A] text-[13px] font-bold tracking-[0.18em] uppercase mb-6">
              Contact Us
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-[42px] sm:text-[56px] lg:text-[68px] font-['Outfit'] font-medium leading-[1.05] tracking-tight text-white mb-6">
              {"Let's build something "}
              <span className="text-[#43C47A]">remarkable</span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-[17px] leading-relaxed max-w-xl">
              Whether you have a product idea, a problem to solve, or just want to explore what's possible — we're ready to listen and act.
            </motion.p>
          </motion.div>
        </PageContainer>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-[#131B17] border-b border-[#1F2C25]">
        <PageContainer>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 py-8">
            <motion.a variants={fadeUp} href="tel:+918903863022" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#0A0F0D] border border-[#1F2C25] flex items-center justify-center text-[#43C47A] group-hover:bg-[#43C47A]/10 group-hover:border-[#43C47A]/40 transition-all duration-300">
                <Phone size={16} strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">Phone</p>
                <p className="text-white font-medium text-[15px] group-hover:text-[#43C47A] transition-colors">+91 89038 63022</p>
              </div>
            </motion.a>
            <div className="hidden sm:block w-px h-10 bg-[#1F2C25]" />
            <motion.a variants={fadeUp} href="mailto:javixtechnologies@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#0A0F0D] border border-[#1F2C25] flex items-center justify-center text-[#43C47A] group-hover:bg-[#43C47A]/10 group-hover:border-[#43C47A]/40 transition-all duration-300">
                <Mail size={16} strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">Email</p>
                <p className="text-white font-medium text-[15px] group-hover:text-[#43C47A] transition-colors">javixtechnologies@gmail.com</p>
              </div>
            </motion.a>
          </motion.div>
        </PageContainer>
      </section>

      {/* Main: Form + Offices */}
      <section className="py-24 lg:py-32 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}>
              <span className="text-[#43C47A] text-[12px] font-bold tracking-[0.18em] uppercase mb-4 block">Send a Message</span>
              <h2 className="text-[30px] sm:text-[38px] font-['Outfit'] font-medium leading-[1.15] tracking-tight text-[#0A0F0D] mb-3">
                Tell us about your project
              </h2>
              <p className="text-[#53615A] text-[15px] leading-relaxed mb-10">
                Fill in the details below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="flex flex-col items-center justify-center text-center py-16 px-8 bg-[#F4FBF7] rounded-[24px] border border-[#43C47A]/20">
                  <CheckCircle2 size={48} className="text-[#43C47A] mb-5" strokeWidth={1.5} />
                  <h3 className="text-[#0A0F0D] font-['Outfit'] font-medium text-[24px] mb-3">Message Received!</h3>
                  <p className="text-[#53615A] text-[15px] leading-relaxed max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-[#0A0F0D] text-[13px] font-semibold tracking-wide">Full Name <span className="text-[#43C47A]">*</span></label>
                      <input id="contact-name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-gray-50 text-[#0A0F0D] text-[15px] placeholder:text-gray-400 outline-none focus:border-[#43C47A] focus:bg-white focus:ring-2 focus:ring-[#43C47A]/15 transition-all duration-200" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-phone" className="text-[#0A0F0D] text-[13px] font-semibold tracking-wide">Phone Number</label>
                      <input id="contact-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-gray-50 text-[#0A0F0D] text-[15px] placeholder:text-gray-400 outline-none focus:border-[#43C47A] focus:bg-white focus:ring-2 focus:ring-[#43C47A]/15 transition-all duration-200" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-[#0A0F0D] text-[13px] font-semibold tracking-wide">Email Address <span className="text-[#43C47A]">*</span></label>
                    <input id="contact-email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-gray-50 text-[#0A0F0D] text-[15px] placeholder:text-gray-400 outline-none focus:border-[#43C47A] focus:bg-white focus:ring-2 focus:ring-[#43C47A]/15 transition-all duration-200" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-service" className="text-[#0A0F0D] text-[13px] font-semibold tracking-wide">Service Interested In</label>
                    <select id="contact-service" name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-gray-50 text-[#0A0F0D] text-[15px] outline-none focus:border-[#43C47A] focus:bg-white focus:ring-2 focus:ring-[#43C47A]/15 transition-all duration-200 appearance-none cursor-pointer">
                      <option value="" disabled>Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-[#0A0F0D] text-[13px] font-semibold tracking-wide">Message <span className="text-[#43C47A]">*</span></label>
                    <textarea id="contact-message" name="message" required rows={5} placeholder="Tell us about your project, goals, and timeline…" value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-gray-50 text-[#0A0F0D] text-[15px] placeholder:text-gray-400 outline-none focus:border-[#43C47A] focus:bg-white focus:ring-2 focus:ring-[#43C47A]/15 transition-all duration-200 resize-none" />
                  </div>
                  <button id="contact-submit" type="submit" disabled={loading} className="inline-flex items-center gap-3 bg-[#0A0F0D] text-white px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#43C47A] hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
                          <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Offices */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }} className="space-y-8">
              <div>
                <span className="text-[#43C47A] text-[12px] font-bold tracking-[0.18em] uppercase mb-4 block">Our Offices</span>
                <h2 className="text-[30px] sm:text-[38px] font-['Outfit'] font-medium leading-[1.15] tracking-tight text-[#0A0F0D] mb-3">Find us here</h2>
                <p className="text-[#53615A] text-[15px] leading-relaxed">We operate across Tamil Nadu with offices in Dindigul and Coimbatore.</p>
              </div>
              <div className="space-y-5">
                {offices.map((office, i) => (
                  <motion.div key={office.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="group flex gap-5 p-6 bg-white border border-gray-100 rounded-[20px] hover:border-[#43C47A]/30 hover:shadow-[0_8px_30px_rgba(67,196,122,0.08)] transition-all duration-300">
                    <div className="w-11 h-11 rounded-[14px] bg-[#F4FBF7] flex items-center justify-center text-[#43C47A] shrink-0 group-hover:bg-[#43C47A] group-hover:text-white transition-all duration-300">
                      <MapPin size={20} strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#0A0F0D] font-['Outfit'] font-semibold text-[17px] mb-1">{office.city}</h3>
                      <p className="text-[#53615A] text-[14px] leading-relaxed whitespace-pre-line mb-3">{office.address}</p>
                      <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#43C47A] text-[13px] font-semibold hover:gap-2.5 transition-all duration-200">
                        View on Map <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#0A0F0D] rounded-[20px]">
                <div className="w-2 h-2 rounded-full bg-[#43C47A] mt-1.5 shrink-0 animate-pulse" />
                <div>
                  <p className="text-white font-semibold text-[14px] mb-1">Quick Response Guaranteed</p>
                  <p className="text-gray-400 text-[13px] leading-relaxed">We respond to all inquiries within 24 hours on business days.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
