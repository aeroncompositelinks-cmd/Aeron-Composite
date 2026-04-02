/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Users, 
  FileText, 
  Scale, 
  TrendingUp,
  Award,
  CheckCircle2,
  Layout,
  Mail,
  ExternalLink
} from 'lucide-react';

// --- Types ---
interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  type: 'title' | 'content' | 'split' | 'grid';
}

// --- Components ---

const TimelineComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const timelineData = [
    {
      title: "Pre-Meeting",
      icon: <FileText size={20} />,
      details: "Preparation of agendas, drafting notices, and ensuring all statutory pre-meeting formalities are met as per Companies Act 2013."
    },
    {
      title: "Meeting Day",
      icon: <Users size={20} />,
      details: "Organizing and managing Board and Committee meetings. Taking accurate minutes and ensuring quorum and procedural compliance."
    },
    {
      title: "Post-Meeting",
      icon: <CheckCircle2 size={20} />,
      details: "Following up on action items, finalizing minutes, and updating statutory registers and records immediately after the session."
    },
    {
      title: "Filings & ROC",
      icon: <Scale size={20} />,
      details: "Handling corporate filings, disclosures, and statutory obligations including forms and returns for timely submission to the ROC."
    },
    {
      title: "Audit Cycle",
      icon: <ShieldCheck size={20} />,
      details: "Managing Secretarial and other Compliance Audits. Liaisoning with internal and statutory auditors to ensure transparency."
    }
  ];

  return (
    <div className="mt-6 sm:mt-12 flex flex-col items-center">
      <div className="relative w-full max-w-4xl mb-8 sm:mb-16">
        <div className="timeline-line" />
        <div className="flex justify-between items-center relative z-10">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center cursor-pointer group ${index === activeIndex ? 'timeline-item-active' : 'timeline-item-inactive'}`}
            >
              <div className="timeline-dot mb-2 sm:mb-4" />
              <span className={`text-[8px] sm:text-xs font-bold uppercase tracking-tighter transition-colors ${index === activeIndex ? 'text-aeron-orange' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {item.title.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          className="w-full max-w-2xl glass-card p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-aeron-orange/5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16" />
          <div className="p-3 sm:p-5 bg-orange-50 rounded-2xl shadow-inner text-aeron-orange shrink-0">
            {timelineData[activeIndex].icon}
          </div>
          <div className="relative z-10 text-center sm:text-left">
            <h4 className="text-lg sm:text-2xl font-display font-bold mb-2 sm:mb-4 text-aeron-dark tracking-tight">
              {timelineData[activeIndex].title} Phase
            </h4>
            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
              {timelineData[activeIndex].details}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <p className="mt-4 sm:mt-8 text-[8px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-widest">
        Tap a phase to explore
      </p>
    </div>
  );
};

const AeronLogo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="absolute inset-0 bg-aeron-orange rounded-full opacity-20 animate-pulse" />
      <div className="text-aeron-orange font-display font-bold text-2xl italic tracking-tighter">A</div>
    </div>
    <div className="flex flex-col">
      <span className="font-display font-bold text-xl tracking-tight leading-none">AERON</span>
      <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500">Aeron Composite Limited</span>
    </div>
  </div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: SlideData[] = [
    {
      id: 0,
      title: "Company Secretary",
      subtitle: "Career Opportunity at Aeron | Ahmedabad",
      type: 'title',
      content: (
        <div className="flex flex-col items-center text-center space-y-8 mt-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-1 bg-aeron-orange mb-4"
          />
          <div className="space-y-4">
            <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">Job ID: HRJ001</p>
            <p className="text-gray-400 text-sm">Date: 01/02/2026</p>
          </div>
          <div className="flex gap-4 mt-8">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">Manufacturing</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">Compliances & Legal</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">Full-Time</span>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Role Overview",
      subtitle: "Positioning & Location",
      type: 'grid',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-8">
          <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-orange-100 rounded-xl text-aeron-orange">
                <Briefcase size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl">Designation</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-aeron-dark">Company Secretary</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Reporting Flow: HR to Director</p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-orange-100 rounded-xl text-aeron-orange">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl">Location</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-aeron-dark">Ahmedabad (Iscon)</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Industrial / Manufacturing Sector</p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-orange-100 rounded-xl text-aeron-orange">
                <Scale size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl">Department</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-aeron-dark">Compliances & Legal</p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-orange-100 rounded-xl text-aeron-orange">
                <TrendingUp size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl">Compensation</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-aeron-dark">No bar for right candidate</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Competitive CTC</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Candidate Profile",
      subtitle: "Experience & Qualifications",
      type: 'content',
      content: (
        <div className="space-y-8 mt-8">
          <div className="flex items-start gap-6 p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <Clock className="text-aeron-orange shrink-0 mt-1" size={28} />
            <div>
              <h4 className="font-bold text-lg mb-2">Experience Requirements</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-aeron-orange" />
                  Minimum 4 years of core Company Secretary experience
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-aeron-orange" />
                  Preference: Manufacturing or Industrial sector background
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-aeron-orange" />
                  Mandatory: Knowledge and experience working in a Listed Company
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <GraduationCap className="text-gray-600 shrink-0 mt-1" size={28} />
            <div>
              <h4 className="font-bold text-lg mb-2">Academic Qualification</h4>
              <p className="text-xl font-display font-bold text-aeron-dark">
                Company Secretary (CS)
              </p>
              <p className="text-gray-600">Institute of Company Secretaries of India (ICSI)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Functional Specialization",
      subtitle: "Core Areas of Expertise",
      type: 'grid',
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-8">
          {[
            "Company Secretarial Work",
            "Governance & Compliance",
            "Company Law Expertise",
            "Financial Reporting",
            "Board & Committee Support",
            "Liaison with Authorities",
            "Risk Management",
            "Corporate Policy Dev.",
            "Shareholder Relations"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 sm:p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-aeron-orange shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">{item}</span>
            </motion.div>
          ))}
          <div className="col-span-2 sm:col-span-3 p-3 sm:p-4 bg-gray-900 text-white rounded-xl flex items-center justify-center gap-4">
            <Award className="text-aeron-orange shrink-0" size={18} />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Business Strategy Support & Contract Management</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Core Responsibilities",
      subtitle: "Compliance & Governance",
      type: 'content',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mt-4 sm:mt-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="bullet-point">
              <div className="bullet-icon" />
              <p className="text-sm sm:text-base text-gray-700">Ensure absolute compliance with <strong>Companies Act, 2013</strong> and applicable regulations.</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" />
              <p className="text-sm sm:text-base text-gray-700">Organize and manage board/committee meetings, agendas, and minutes.</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" />
              <p className="text-sm sm:text-base text-gray-700">Maintain statutory registers and records per legal requirements.</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="bullet-point">
              <div className="bullet-icon" />
              <p className="text-sm sm:text-base text-gray-700">Manage Secretarial and other Compliance Audits independently.</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" />
              <p className="text-sm sm:text-base text-gray-700">Coordinate corporate filings, disclosures, and ROC applications.</p>
            </div>
            <div className="bullet-point">
              <div className="bullet-icon" />
              <p className="text-sm sm:text-base text-gray-700">Advise the Board of Directors on governance best practices.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Compliance Lifecycle",
      subtitle: "Interactive Operational Timeline",
      type: 'content',
      content: <TimelineComponent />
    },
    {
      id: 6,
      title: "Strategic Liaison",
      subtitle: "External & Internal Coordination",
      type: 'content',
      content: (
        <div className="flex flex-col gap-8 mt-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-aeron-orange bg-gray-50">
              <h4 className="font-bold mb-2">Regulatory Liaison</h4>
              <p className="text-sm text-gray-600">Acting as a bridge between the company and regulatory authorities, auditors, legal advisors, and shareholders.</p>
            </div>
            <div className="p-6 border-l-4 border-gray-400 bg-gray-50">
              <h4 className="font-bold mb-2">Legal Documentation</h4>
              <p className="text-sm text-gray-600">Drafting and vetting contractual agreements, deeds, articles of association, and corporate policies.</p>
            </div>
          </div>
          <div className="p-8 bg-aeron-dark text-white rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-aeron-orange" />
              <h4 className="font-display font-bold text-xl">Team Leadership</h4>
            </div>
            <p className="text-gray-300">Ability to actively and closely interact with other departments for closer co-ordination of various activities. Strong team leader abilities required.</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Advanced Competencies",
      subtitle: "Specialized Experience",
      type: 'grid',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 p-3 sm:p-4 bg-orange-50 rounded-xl">
              <ShieldCheck className="text-aeron-orange shrink-0" size={20} />
              <span className="text-xs sm:text-sm font-semibold">Stock Exchange Compliance</span>
            </div>
            <div className="flex items-center gap-3 p-3 sm:p-4 bg-orange-50 rounded-xl">
              <FileText className="text-aeron-orange shrink-0" size={20} />
              <span className="text-xs sm:text-sm font-semibold">IPO / FPO / Private Placement</span>
            </div>
            <div className="flex items-center gap-3 p-3 sm:p-4 bg-orange-50 rounded-xl">
              <Scale className="text-aeron-orange shrink-0" size={20} />
              <span className="text-xs sm:text-sm font-semibold">Loan against Shares Formalities</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-2xl">
            <h4 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <Layout size={18} className="text-gray-500" />
              Technical Proficiency
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
              <li>• Microsoft Office Suite (Word, Excel, PowerPoint)</li>
              <li>• ERP Systems Experience</li>
              <li>• Digital Filing & ROC Portals</li>
              <li>• Virtual Meeting Platforms</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Key Soft Skills",
      subtitle: "Behavioral Attributes",
      type: 'content',
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-12">
          {[
            { label: "Integrity", desc: "Highest ethical standards" },
            { label: "Analytical", desc: "Pragmatic problem solving" },
            { label: "Communication", desc: "Excellent verbal & written" },
            { label: "Proactive", desc: "Anticipate & escalate issues" }
          ].map((skill, i) => (
            <div key={i} className="text-center p-4 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-aeron-orange font-bold text-sm sm:text-base">{i + 1}</span>
              </div>
              <h5 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">{skill.label}</h5>
              <p className="text-[10px] sm:text-xs text-gray-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 9,
      title: "Join Aeron",
      subtitle: "Shape the Future of Industrial Governance",
      type: 'title',
      content: (
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 mt-6 sm:mt-12">
          <p className="max-w-2xl text-gray-600 text-sm sm:text-lg px-4">
            We are looking for a dedicated professional to lead our compliance and legal framework. 
            If you have the expertise and the drive, we want to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4">
            <a 
              href="mailto:hr@aeron.in?subject=Application for Company Secretary (HRJ001)"
              className="flex-1 flex items-center justify-center gap-2 bg-aeron-orange hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-orange-500/20 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              Apply Now
            </a>
            <a 
              href="https://aeron.in/careers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-aeron-orange text-aeron-dark font-bold py-4 px-6 rounded-2xl transition-all group"
            >
              <ExternalLink size={20} className="text-gray-400 group-hover:text-aeron-orange transition-colors" />
              Learn More
            </a>
          </div>

          <div className="mt-4 p-6 sm:p-8 bg-gray-50 rounded-3xl border border-gray-200 w-full max-w-md mx-4">
            <p className="font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-3">Contact HR Department</p>
            <p className="text-xl sm:text-2xl font-display font-bold text-aeron-dark">Aeron - Ahmedabad</p>
            <div className="w-12 h-1 bg-aeron-orange mx-auto mt-4" />
          </div>
          
          <p className="text-gray-400 text-[10px] sm:text-xs mt-6 sm:mt-12 italic">Authorized by HR (HOD) & Management</p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="presentation-container">
      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
        <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/50 text-sm font-mono">
          {currentSlide + 1} / {slides.length}
        </div>
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white disabled:opacity-30 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 bg-aeron-orange hover:bg-orange-600 rounded-full text-white disabled:opacity-30 transition-all shadow-lg shadow-orange-500/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div 
          className="h-full bg-aeron-orange"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="slide"
        >
          {/* Slide Header */}
          <div className="px-12 pt-12 flex justify-between items-start">
            <div className="space-y-1">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-display font-bold tracking-tight text-aeron-dark"
              >
                {slides[currentSlide].title}
              </motion.h2>
              {slides[currentSlide].subtitle && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-aeron-orange font-medium tracking-wide uppercase text-xs"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              )}
            </div>
            <AeronLogo />
          </div>

          {/* Slide Content */}
          <div className="slide-content">
            {slides[currentSlide].content}
          </div>

          {/* Slide Footer */}
          <div className="px-12 py-8 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-medium">
            <span>© 2026 Aeron Composite Limited | Confidential</span>
            <span>Company Secretary Recruitment Presentation</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] aspect-square bg-aeron-orange/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
