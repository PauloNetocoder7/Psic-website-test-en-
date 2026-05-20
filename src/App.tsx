import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Check, 
  Menu, 
  X, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Star,
  Users,
  Compass,
  MessageSquare,
  HelpCircle,
  Sparkles,
  Heart
} from 'lucide-react';

// Define the services data matching requirements exactly
interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "individual",
    emoji: "👤",
    title: "Individual Therapy",
    description: "We provide a safe, confidential space to explore personal challenges, manage stress, and heal from past experiences. Our tailored approach helps clients develop practical tools to foster self-discovery and lasting emotional wellness."
  },
  {
    id: "teen",
    emoji: "🌱",
    title: "Teen & Adolescent Therapy",
    description: "Navigating the modern adolescent years can be challenging for both teens and their families. We offer compassionate counseling to help young people build coping skills, improve self-esteem, and manage academic or social stressors."
  },
  {
    id: "family",
    emoji: "🏡",
    title: "Family Therapy",
    description: "We work with families to strengthen relational bonds, resolve ongoing conflicts, and improve patterns of communication. Our sessions are designed to cultivate mutual understanding, respect, and support among all members."
  },
  {
    id: "trauma",
    emoji: "💫",
    title: "Trauma & PTSD Treatment",
    description: "Experiencing trauma can leave you feeling stuck, disconnected, or perpetually on high alert. We utilize evidence-based trauma-focused therapies to help clients safely process difficult memories and reclaim a sense of agency."
  },
  {
    id: "anxiety",
    emoji: "🌊",
    title: "Anxiety & Depression Support",
    description: "Chronic anxiety and persistent feelings of depression can make daily life feel overwhelming. We teach scientific coping protocols to help clients break free from negative thought patterns and rediscover motivation and peace."
  },
  {
    id: "grief",
    emoji: "🕊️",
    title: "Grief & Loss Counseling",
    description: "Grief is a deeply personal journey with no set timeline or correct path. We offer a gentle, supportive presence to help clients honor their loss, process complex feelings, and slowly navigate life after a significant change."
  }
];

// Define therapeutic approaches data
interface Approach {
  title: string;
  subtitle: string;
  description: string;
}

const approaches: Approach[] = [
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    subtitle: "Action-Oriented & Empirical",
    description: "An action-oriented, evidence-based treatment focusing on the connection between thoughts, feelings, and behaviors. We help clients identify and modify unhelpful cognitive patterns to bring about positive, tangible changes in their daily lives."
  },
  {
    title: "Mindfulness-Based Therapy",
    subtitle: "Presence & Emotional Grounding",
    description: "By integrating modern cognitive therapy with timeless alignment and present-moment awareness, we teach clients to observe their thoughts and sensations without judgment. This practice is scientifically proven to reduce stress, regulate intense emotions, and build mental resilience."
  },
  {
    title: "Acceptance & Commitment Therapy (ACT)",
    subtitle: "Value-Driven & Purposeful Growth",
    description: "A transformative psychological approach that encourages clients to accept their internal thoughts and feelings rather than fighting them. We support individuals in clarifying their core personal values and committing to concrete actions that enrich their lives."
  }
];

// Define FAQs data
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How do I know if therapy is right for me?",
    answer: "Therapy can benefit anyone navigating life transitions, relationship struggles, chronic stress, or mental health concerns. If you feel stuck, overwhelmed, or simply want to understand yourself better, our sessions offer a structured, professional environment to gain insight and develop practical tools for positive change."
  },
  {
    question: "Do you offer telehealth sessions?",
    answer: "Yes, we offer secure, confidential virtual therapy sessions for clients located across the USA, Canada, Australia, and the UK. Our HIPAA-compliant telehealth platform provides the exact same high-quality care as our in-person options, all from the privacy and safety of your own space."
  },
  {
    question: "How long does therapy usually take?",
    answer: "The duration of therapy is highly personalized and depends on your unique goals and challenges. Some clients find brief, solution-focused therapy (8 to 12 sessions) highly beneficial, while others engage in deeper, open-ended work to process complex trauma or facilitate long-term growth. We regularly assess progress together to align with your needs."
  },
  {
    question: "Do you accept insurance?",
    answer: "We operate primarily as an out-of-network provider to guarantee the highest level of confidentiality and therapeutic freedom. We can provide you with a comprehensive monthly superbill (statement of services) to submit to your insurance company for potential out-of-network reimbursement. We recommend contacting your provider beforehand to verify benefits."
  },
  {
    question: "What happens in the first session?",
    answer: "During our initial consultation and intake session, we focus on understanding what brings you to therapy, exploring your history, and clarifying what you hope to achieve. This is a gentle, conversational collaborative discussion to ensure we are a great therapeutic fit and to map out your personalized care plan."
  }
];

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Accordion active index state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Contact form submission state
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      // Clear form
      setContactData({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-text font-sans relative overflow-x-hidden luxury-noise selection:bg-brand-gold/30 selection:text-white">
      
      {/* Top Disclaimer Banner */}
      <div className="sticky top-0 z-[100] w-full bg-amber-100 text-amber-950 font-semibold px-4 py-2.5 border-b border-amber-200 shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-center transition-all duration-300">
        <span>TEST WEBSITE FOR PSYCHOLOGISTS</span>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-[38px] z-50 w-full bg-brand-black/90 backdrop-blur-md border-b border-brand-border/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold text-[10px] tracking-tighter uppercase font-serif group-hover:scale-105 duration-300 shadow-gold-glow">
              Ψ
            </div>
            <span className="font-serif font-semibold text-lg lg:text-xl tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300 flex items-center gap-2">
              <span>Test Website <span className="text-brand-gold font-normal lg:font-light">for Psychologists</span></span>
              <span className="flex items-center gap-1.5 ml-1 select-none">
                <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
                <img src="https://flagcdn.com/w40/gb.png" alt="United Kingdom Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
                <img src="https://flagcdn.com/w40/au.png" alt="Australia Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
              </span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs">About</a>
            <a href="#services" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs">Services</a>
            <a href="#approach" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs">Approach</a>
            <a href="#faq" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs">FAQ</a>
            <a href="#contact" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs text-brand-gold hover:underline underline-offset-4 font-semibold">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-gold p-1 focus:outline-none transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 w-full bg-brand-charcoal border-b border-brand-border py-8 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Services
            </a>
            <a 
              href="#approach" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Approach
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-gold font-semibold uppercase tracking-widest text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 flex items-center justify-center border-b border-brand-border/40 overflow-hidden bg-brand-black">
        
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/xtTB6YrY/Whats-App-Image-2026-05-19-at-20-54-18.jpg" 
            alt="Warm elegant background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75 filter brightness-95 contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/60" />
        </div>

        {/* Subtle decorative gold light flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 border border-brand-gold/30 px-3.5 py-1.5 mb-8 bg-brand-charcoal/50 backdrop-blur-sm">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span className="text-brand-gold uppercase tracking-widest text-[9.5px] font-semibold">Evidence-Based Clinical Guidance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-[1.12]">
            You Deserve to Feel Better — <span className="italic font-normal text-brand-gold block mt-2 sm:inline sm:mt-0">And You Can.</span>
          </h1>
          
          <p className="font-sans text-brand-text/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mb-12">
            Compassionate, evidence-based therapy for individuals, teens, and families. Guided by credentialed professionals.
          </p>

          <div className="flex justify-center w-full max-w-xs">
            <a 
              href="#about"
              className="w-full px-8 py-4 bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 gold-glow-button border border-white flex items-center justify-center gap-2 cursor-pointer shadow-gold-glow"
            >
              Learn More <ArrowRight size={14} />
            </a>
          </div>

          {/* Quick validation markers below hero, clean and professional alignment */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-xs font-mono text-brand-muted border-t border-brand-border/40 pt-8 w-full">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-gold" /> Licensed Clinical Psychologists
            </span>
            <span className="flex items-center gap-1.5">
              <LockIcon size={14} /> HIPAA-Compliant Platforms
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-gold" /> Flexible Virtual Scheduling
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Visual Brand Statement with huge impact */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative mb-6 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Our Professional Guidance
                </div>
                <img 
                  src="https://i.ibb.co/B2Dkrq1k/Whats-App-Image-2026-05-19-at-20-37-56.jpg" 
                  alt="Therapy and Conversation Setting" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="relative mb-8 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Therapy Space & Ambience
                </div>
                <img 
                  src="https://i.ibb.co/6cLZLN0f/Whats-App-Image-2026-05-19-at-20-36-08.jpg" 
                  alt="Psychotherapy Consultation Space" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-3">Our Core Practice</span>
              <h2 className="font-serif text-3xl md:text-4.5xl leading-tight text-white mb-6">
                Redefining therapeutic care with a high-end, patient-first methodology.
              </h2>
              <p className="text-brand-muted text-base font-light leading-relaxed mb-8">
                We believe exceptional psychological care is a fundamental component of a full life. By removing traditional barriers and leveraging empirical research, we design experiences to promote enduring clinical growth and healing.
              </p>
              
              <div className="bg-brand-charcoal/80 p-6 border border-brand-border/80 flex items-start gap-4 shadow-xl">
                <span className="text-2xl text-brand-gold pt-1">💡</span>
                <div>
                  <h4 className="font-serif text-white font-medium mb-1">Our Universal Promise</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    We use only recognized, evidence-based methods tailored to your biological, psychological, and social framework. 
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key details, Institutional Message and Stats */}
            <div className="lg:col-span-7 bg-brand-charcoal p-8 md:p-12 border border-brand-border shadow-2xl relative">
              
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-black border border-brand-border px-4 py-1.5 text-brand-gold text-[10px] uppercase font-mono tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block animate-pulse"></span>
                Official Clinic Statement
              </div>

              <span className="text-xs text-brand-gold font-mono tracking-widest uppercase block mb-2">Practice Overview</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-6">
                Welcome to Test Website for Psychologists
              </h3>
              
              <p className="text-brand-text/90 text-base md:text-lg leading-relaxed font-light mb-8">
                We are a team of licensed mental health professionals dedicated to providing compassionate, evidence-based therapy. Our therapists hold advanced degrees in Clinical Psychology and Social Work, with extensive experience supporting individuals, teens, and families through life's challenges.
              </p>

              <hr className="border-brand-border mb-8" />

              {/* Robust Key Metrics Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">15+ Years</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Combined Experience</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">5,000+</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Sessions Delivered</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">Global Reach</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">USA, CAN, AUS & UK</div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Our Specialized Care</span>
            <h2 className="font-serif text-3xl md:text-4.5xl text-white mb-6 font-semibold">
              Evidence-Based Specialties
            </h2>
            <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
              We offer highly tailored clinical treatments targeted to your specific phase of life. Our interventions are scientifically validated and executed with extreme care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-brand-charcoal p-8 border border-brand-border gold-glow-card relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-black border border-brand-border/80 flex items-center justify-center text-3xl mb-8 group-hover:border-brand-gold/60 transition-colors duration-300">
                    {service.emoji}
                  </div>
                  
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <a 
                  href="#contact"
                  className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-brand-gold group-hover:underline underline-offset-4 font-semibold text-left w-fit cursor-pointer"
                >
                  Inquire For Availability <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Therapeutic Approach Section */}
      <section id="approach" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Description */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Therapeutic Approach</span>
              <h2 className="font-serif text-3xl md:text-4.5xl text-white leading-tight mb-6 font-semibold">
                Clinical methods centered on lasting alignment.
              </h2>
              <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed mb-8">
                Our practice rejects the raw cookie-cutter approach. We utilize an integrative methodology, combining distinct evidence-based modalities to treat clients holistically.
              </p>
              
              <div className="flex flex-col gap-4 border-t border-brand-border pt-8 font-serif italic text-brand-gold text-sm">
                <span>"Empirical validity forms our baseline. Compassion completes our healing."</span>
              </div>
            </div>

            {/* Right Column: Interactive Grid of Methods */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {approaches.map((appr, idx) => (
                <div 
                  key={idx}
                  className="bg-brand-charcoal hover:bg-brand-charcoal/80 p-8 md:p-10 border border-brand-border hover:border-brand-gold/40 transition-all duration-300 relative group"
                >
                  <div className="absolute top-8 right-8 font-serif text-5xl md:text-6xl text-brand-border group-hover:text-brand-gold/10 font-bold select-none transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  
                  <span className="text-brand-gold font-mono text-[10px] uppercase tracking-widest font-semibold block mb-2">
                    {appr.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-4">
                    {appr.title}
                  </h3>
                  
                  <p className="text-brand-text/90 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                    {appr.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Common Inquiries</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 font-semibold">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light max-w-xl mx-auto">
              Answers to clarify structural parameters, insurance, telemedicine, and what to expect from your initial clinical interactions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`border border-brand-border transition-all duration-300 ${isOpen ? 'bg-brand-charcoal border-brand-gold/30 shadow-gold-glow' : 'bg-brand-charcoal/40 hover:bg-brand-charcoal/80'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 font-serif text-base md:text-lg text-white font-medium hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-brand-gold flex-shrink-0 transition-transform duration-300">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {/* Pure JS/CSS accordion simulation in react */}
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: isOpen ? '400px' : '0px',
                      opacity: isOpen ? '1' : '0'
                    }}
                  >
                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-brand-text/80 leading-relaxed font-light border-t border-brand-border/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Direct Intake</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-6">
              Begin your healing process today.
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed">
              Reach out to our intake team directly. We review responses within one clinical business day.
            </p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Practice Office Address</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    123 Wellness Avenue, Suite 200,<br />New York, NY 10011 (Demo Address)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Phone Number</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    (555) 000-1234
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Primary Email</h4>
                  <p className="text-xs text-brand-muted mt-1 hover:text-brand-gold transition-colors">
                    contact@testwebsite4psychologists.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Clinical Hours</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Monday – Friday, 9:00am – 6:00pm
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 p-5 border-l-2 border-brand-gold/60 bg-brand-charcoal/20 text-[11px] text-brand-muted tracking-wide leading-relaxed font-mono text-center mx-auto max-w-xl">
            All communications sent via this electronic network are strictly governed by our HIPAA-aligned data processing parameters.
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-black py-12 md:py-20 border-t border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-lg tracking-wider text-white uppercase mb-2 flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span>Ψ TEST WEBSITE <span className="text-brand-gold font-light font-serif">FOR PSYCHOLOGISTS</span></span>
              <span className="flex items-center gap-1.5 ml-1 select-none">
                <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
                <img src="https://flagcdn.com/w40/gb.png" alt="United Kingdom Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
                <img src="https://flagcdn.com/w40/au.png" alt="Australia Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
              </span>
            </div>
            <p className="text-[11px] text-brand-muted max-w-sm leading-relaxed mx-auto md:mx-0 font-light">
              This is a demonstration website created for illustrative purposes only. All clinical services of the clinic, descriptions, and data parameters are fictional.
            </p>
          </div>

          {/* Repeat Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-widest font-medium text-brand-muted">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors text-brand-gold">Contact</a>
          </div>

        </div>

        {/* Real Bottom License bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-brand-border/40 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11.5px] text-brand-muted font-light">
            © 2025 Test Website for Psychologists — Demo Site Only. All information is fictional.
          </p>
          <p className="text-[11.5px] text-brand-muted/80 flex items-center gap-1 font-mono">
            Inspired by upscale clinic structures <Heart size={10} className="text-brand-gold inline" /> Client-centered representation
          </p>
        </div>
      </footer>

    </div>
  );
}

// Custom lock icon to preserve look
function LockIcon({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-brand-gold"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
