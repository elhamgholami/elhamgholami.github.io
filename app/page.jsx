'use client';

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About", icon: "👨‍🎓" },
    { id: "research", label: "Research", icon: "🔬" },
    { id: "publications", label: "Publications", icon: "📚" },
    // { id: "teaching", label: "Teaching", icon: "🎓" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-colors duration-500">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 dark:from-purple-400/10 dark:to-blue-400/10 rounded-full blur-xl"></div>
        <div
          className="floating-orb absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-400/10 dark:to-orange-400/10 rounded-full blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="floating-orb absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 dark:from-cyan-400/10 dark:to-teal-400/10 rounded-full blur-xl"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="floating-orb absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 dark:from-indigo-400/10 dark:to-purple-400/10 rounded-full blur-xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <header className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
               <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse -z-10"></div>

<div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl z-10">
  <Image
    src="/assets/profile.jpg"   // چون داخل public/assets است
    alt="Elham Gholami"
    fill
    sizes="160px"
    className="object-cover"
    priority
  />
</div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent mb-4 animate-gradient">
                Elham Gholami
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-2 slide-in-up">
                B.Sc., Computer Engineering
              </p>
              <p
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Iran University of Science and Technology
              </p>

              <div
                className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 slide-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  B.Sc IUST
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  Ai Researcher
                </span>
                <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  3 Publications
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="relative z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg sticky top-0 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2 sm:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-lg shadow-purple-500/25 dark:shadow-purple-400/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                <span className="text-lg sm:mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 fade-in border border-white/20 dark:border-gray-700/50">
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="slide-in-content">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                About Me
              </h2>
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                   I am an AI researcher with a B.Sc. in Computer Engineering from the Iran University of Science and Technology.
My research focuses on artificial intelligence, natural language processing, and their applications in mental health and human-centered systems.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    I have worked on projects involving large language models (LLMs), retrieval-augmented generation (RAG), and temporal modeling for crisis detection.
I am passionate about building intelligent systems that bridge human insight and machine learning to create meaningful, real-world impact.
                  </p>

                  {/* Achievement Grid */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl border border-purple-200/50 dark:border-purple-700/50">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        2
                      </div>
                      <div className="text-purple-800 dark:text-purple-300 font-medium">
                        Publications
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        4
                      </div>
                      <div className="text-blue-800 dark:text-blue-300 font-medium">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-xl border border-pink-200/50 dark:border-pink-700/50">
                      <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                        8 courses
                      </div>
                      <div className="text-pink-800 dark:text-pink-300 font-medium">
                        🎓 Teaching Experience
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div className="slide-in-content">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                Research Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Natural Language Processing",
                    desc: "Text understanding, embeddings, sentiment & emotion analysis",
                    gradient: "from-purple-500 to-pink-500",
                    bgLight: "from-purple-50 to-pink-50",
                    bgDark: "from-purple-900/20 to-pink-900/20",
                    borderLight: "border-purple-200/50",
                    borderDark: "border-purple-700/50",
                    textLight: "text-purple-800",
                    textDark: "text-purple-200",
                  },
                  {
                    title: "Large Language Models for Mental Health",
                    desc: "Medical image analysis and diagnostic systems",
                    gradient: "from-blue-500 to-cyan-500",
                    bgLight: "from-blue-50 to-cyan-50",
                    bgDark: "from-blue-900/20 to-cyan-900/20",
                    borderLight: "border-blue-200/50",
                    borderDark: "border-blue-700/50",
                    textLight: "text-blue-800",
                    textDark: "text-blue-200",
                  },
                  {
                    title: "Information Retrieval & RAG",
                    desc: "Search/retrieval for Persian text and retrieval-augmented generation",
                    gradient: "from-indigo-500 to-purple-500",
                    bgLight: "from-indigo-50 to-purple-50",
                    bgDark: "from-indigo-900/20 to-purple-900/20",
                    borderLight: "border-indigo-200/50",
                    borderDark: "border-indigo-700/50",
                    textLight: "text-indigo-800",
                    textDark: "text-indigo-200",
                  },
                  {
                    title: "Computer Vision",
                    desc: "Image recognition and visual understanding",
                    gradient: "from-pink-500 to-rose-500",
                    bgLight: "from-pink-50 to-rose-50",
                    bgDark: "from-pink-900/20 to-rose-900/20",
                    borderLight: "border-pink-200/50",
                    borderDark: "border-pink-700/50",
                    textLight: "text-pink-800",
                    textDark: "text-pink-200",
                  },
                  {
                    title: "Edge/Embedded AI & Systems",
                    desc: "From IoT/Smart-grid to CPU design (VHDL/Verilog) for efficient ML",
                    gradient: "from-green-500 to-emerald-500",
                    bgLight: "from-green-50 to-emerald-50",
                    bgDark: "from-green-900/20 to-emerald-900/20",
                    borderLight: "border-green-200/50",
                    borderDark: "border-green-700/50",
                    textLight: "text-green-800",
                    textDark: "text-green-200",
                  },
                  {
                    title: "Robotics",
                    desc: "Autonomous systems and human-robot interaction",
                    gradient: "from-orange-500 to-amber-500",
                    bgLight: "from-orange-50 to-amber-50",
                    bgDark: "from-orange-900/20 to-amber-900/20",
                    borderLight: "border-orange-200/50",
                    borderDark: "border-orange-700/50",
                    textLight: "text-orange-800",
                    textDark: "text-orange-200",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group p-6 bg-gradient-to-br ${item.bgLight} dark:${item.bgDark} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 research-card border ${item.borderLight} dark:${item.borderDark} backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <h3
                      className={`font-bold ${item.textLight} dark:${item.textDark} mb-3 text-lg`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`${item.textLight}/70 dark:${item.textDark}/70 text-sm leading-relaxed`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "publications" && (
            <div className="slide-in-content">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                Recent Publications
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title:
                      "Knowledge-Defined Networking IoT Framework for Smart Grid Protection",
                    authors: "K. D. Seifi, M. H. S. Javadi, E. G. Mateki, M. H. Alaeiyan (2025)",
                    journal: "Proceedings of I-CoSTE 2025 (Accepted)",
                    accent: "purple",
                  },
                  {
                    title:
                      "Detecting Mental Health Crisis using LLM and Temporal Models(in progress)",
                    // authors: "Johnson, S. & Davis, K. (2023)",
                    // journal: "Proceedings of ICML 2023, pp. 567-582",
                    accent: "blue",
                  },
                  {
                    title: "Survey of Propagation Models in Social Networks and Applications",
                    authors: "M. H. S. Javadi, F. G. Baghbani ,E. G. Mateki",
                    // journal: "Archive",
                    accent: "indigo",
                  },
                ].map((pub, index) => (
                  <div
                    key={index}
                    className={`group p-6 bg-gradient-to-r from-${pub.accent}-50/50 to-${pub.accent}-100/50 dark:from-${pub.accent}-900/10 dark:to-${pub.accent}-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 publication-card border-l-4 border-${pub.accent}-400 dark:border-${pub.accent}-500 backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2 text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">
                      {pub.authors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 italic text-sm">
                      {pub.journal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teaching Tab */}
          {/* {activeTab === "teaching" && (
            <div className="slide-in-content">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                Teaching
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-6">
                    Current Courses
                  </h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 text-lg mb-2">
                        CS 485: Machine Learning
                      </h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Advanced concepts in ML algorithms and applications
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 text-lg mb-2">
                        CS 380: Artificial Intelligence
                      </h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Introduction to AI principles and techniques
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
                    Office Hours
                  </h3>
                  <div className="p-8 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl border border-indigo-200/50 dark:border-indigo-700/50 backdrop-blur-sm">
                    <div className="space-y-3">
                      <p className="text-indigo-800 dark:text-indigo-200 font-bold text-lg">
                        Tuesdays & Thursdays
                      </p>
                      <p className="text-indigo-700 dark:text-indigo-300 text-lg">
                        2:00 PM - 4:00 PM
                      </p>
                      <p className="text-indigo-700 dark:text-indigo-300">
                        Room 314, CS Building
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="slide-in-content">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                Get In Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-4 text-lg">
                      📍 Linkedin
                    </h3>
                    <div className="space-y-2 text-purple-700 dark:text-purple-300">
                     
                      <a
                        href="https://www.linkedin.com/in/elham-gholami-9185ab223/"
                        className="block text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors font-medium"
                      >
                        Elham Gholami →
                      </a>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg">
                      📧 Email
                    </h3>
                    <a
                      href="mailto:sarah.johnson@university.edu"
                      className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-medium"
                    >
                     elham.gholami.mtk@gmail.com
                    </a>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl border border-indigo-200/50 dark:border-indigo-700/50 backdrop-blur-sm">
                    <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-4 text-lg">
                      🔗 Github
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="https://github.com/elhamgholami"
                        className="block text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors font-medium"
                      >
                        github →
                      </a>
                      
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        /* Hide scrollbar for better mobile experience */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Modern floating animation for orbs */
        @keyframes floating {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-30px) rotate(120deg) scale(1.1); 
            opacity: 0.8;
          }
          66% { 
            transform: translateY(15px) rotate(240deg) scale(0.9); 
            opacity: 0.7;
          }
        }
        
        /* Gradient animation for text */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Slide animations */
        @keyframes slideInDown {
          from { 
            opacity: 0; 
            transform: translateY(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInContent {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        /* Enhanced pulse animation */
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.05); 
            filter: brightness(1.1);
          }
        }
        
        /* Hover glow effect */
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.5); }
        }
        
        /* Apply animations */
        .floating-orb {
          animation: floating 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 6s ease infinite;
        }
        
        .slide-in-down {
          animation: slideInDown 0.8s ease-out;
        }
        
        .slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .slide-in-content {
          animation: slideInContent 0.6s ease-out;
        }
        
        .research-card {
          animation: slideInUp 0.6s ease-out;
        }
        
        .publication-card {
          animation: slideInUp 0.6s ease-out;
        }
        
        /* Enhanced hover effects */
        .research-card:hover {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 640px) {
          .floating-orb {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
