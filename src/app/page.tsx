'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe, 
  Menu, 
  X, 
  Sparkles,
  Star,
  Eye,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const achievements = [
    { value: '99%', label: 'Lower Fees', icon: Star, color: 'emerald' },
    { value: '3 SEC', label: 'Settlement Time', icon: Zap, color: 'blue' },
    { value: '15+', label: 'Currencies', icon: Globe, color: 'purple' },
    { value: '0%', label: 'Data Exposure', icon: Shield, color: 'rose' }
  ];

  const services = [
    {
      icon: Eye,
      title: 'Zero-Knowledge Identity',
      description: 'Document-free identity verification using biometric data and ZK proofs for complete privacy protection.',
      gradient: 'from-rose-400/20 to-pink-400/20'
    },
    {
      icon: Globe,
      title: 'Cross-Border Payments',
      description: 'Instant remittances with optional privacy controls and transparent, competitive exchange rates.',
      gradient: 'from-blue-400/20 to-cyan-400/20'
    },
    {
      icon: TrendingUp,
      title: 'Credit Building',
      description: 'Build verifiable credit history through transaction patterns without exposing personal financial data.',
      gradient: 'from-purple-400/20 to-indigo-400/20'
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
            }}
          ></div>
          
          {/* Floating Glass Orbs */}
          {Array.from({length: 8}, (_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-br from-blue-400/15 to-purple-400/15 backdrop-blur-3xl rounded-full opacity-70 animate-float"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + (i % 3)}s`
              }}
            ></div>
          ))}
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 
            ? 'bg-black/90 backdrop-blur-2xl border-b border-white/30' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-purple-400 backdrop-blur-xl rounded-2xl shadow-lg shadow-blue-500/25" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 backdrop-blur-xl rounded-2xl blur-lg" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
                </div>
                <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MIDREM
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#capabilities" className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group">
                  Capabilities
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#platform" className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group">
                  Platform
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#access" className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group">
                  Access
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </a>
                <button className="bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/25 px-6 py-3 rounded-2xl transition-all duration-300 font-medium shadow-lg shadow-black/20">
                  Launch App
                </button>
              </div>

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
              <a href="#capabilities" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors">Capabilities</a>
              <a href="#platform" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400 transition-colors">Platform</a>
              <a href="#access" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-400 transition-colors">Access</a>
              <button className="bg-white/15 backdrop-blur-xl border border-white/30 px-8 py-4 rounded-2xl shadow-lg shadow-black/20">
                Launch App
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 z-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-3 bg-black/60 backdrop-blur-2xl rounded-full px-8 py-4 mb-12 border border-white/30 shadow-lg shadow-black/30">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium tracking-wide">POWERED BY MIDNIGHT NETWORK</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none tracking-tight">
              <span className="block text-white">PRIVATE</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                FINANCE
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-white/70 mt-4 font-light">
                FOR AFRICA
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Zero-knowledge financial inclusion platform enabling 
              <span className="text-blue-400 font-medium"> privacy-preserving remittances</span> and 
              <span className="text-purple-400 font-medium"> credit building</span> across Africa.
            </p>

            {/* Glass Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="group relative bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-2xl border border-white/30 hover:border-white/50 px-12 py-5 rounded-2xl text-lg font-medium transition-all duration-500 transform hover:scale-105 shadow-lg shadow-blue-500/20">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Get Started</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <button className="bg-black/40 backdrop-blur-2xl border border-white/30 hover:bg-black/60 px-12 py-5 rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg shadow-black/20">
                View Demo
              </button>
            </div>

            {/* Glass Achievement Cards */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl rounded-3xl shadow-lg shadow-black/30"></div>
                  <div className="relative bg-gradient-to-br from-blue-400/15 to-purple-500/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 hover:border-blue-400/60 transition-all duration-500 group-hover:transform group-hover:scale-105 shadow-lg shadow-black/20">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-500/30 backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                        <achievement.icon size={24} className="text-blue-400" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-white font-medium text-sm">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                <span className="text-white">ZERO-KNOWLEDGE</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CAPABILITIES
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                Revolutionary financial tools built for privacy, designed for Africa's mobile economy.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="group relative w-full max-w-3xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} backdrop-blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className="relative bg-black/30 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 hover:border-white/30 transition-all duration-500 shadow-lg shadow-black/30">
                    <div className="flex items-center justify-center mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/30`}>
                        <service.icon size={40} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-center text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-center font-light text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    BUILT FOR
                  </span>
                  <br />
                  <span className="text-white">INCLUSION</span>
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                  Designed specifically for Africa's unique financial landscape with 
                  mobile-first architecture and regulatory compliance.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-1">Document-Free Onboarding</div>
                      <div className="text-white/60 text-sm font-light">Biometric verification without traditional KYC requirements</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-1">Mobile Money Integration</div>
                      <div className="text-white/60 text-sm font-light">Seamless connection with M-Pesa, Airtel Money, and MTN Mobile Money</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-1">Regulatory Compliance</div>
                      <div className="text-white/60 text-sm font-light">Selective disclosure for AML/KYC while preserving privacy</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-1">Community Savings Circles</div>
                      <div className="text-white/60 text-sm font-light">Traditional African savings models enhanced with blockchain technology</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-lg shadow-black/30">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      350M+
                    </div>
                    <div className="text-white font-medium">Unbanked Adults</div>
                    <div className="text-white/60 text-sm font-light">Across Sub-Saharan Africa</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg shadow-black/20">
                      <span className="text-white/90 font-light">Traditional Banking</span>
                      <span className="text-red-400 font-medium">Excluded</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg shadow-black/20">
                      <span className="text-white/90 font-light">Mobile Money</span>
                      <span className="text-yellow-400 font-medium">Limited</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl border border-blue-400/40 shadow-lg shadow-blue-500/20">
                      <span className="text-white font-medium">MIDREM</span>
                      <span className="text-green-400 font-medium">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="access" className="py-24 px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/15 backdrop-blur-2xl rounded-3xl shadow-lg shadow-black/40"></div>
              <div className="relative bg-black/50 backdrop-blur-2xl rounded-3xl p-12 border border-white/30 shadow-lg shadow-black/30">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                  <span className="text-white">JOIN THE FUTURE OF</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    FINANCIAL INCLUSION
                  </span>
                </h2>
                <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
                  Experience unprecedented privacy, efficiency, and global reach 
                  for your financial transactions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-2xl border border-white/30 hover:border-white/50 px-12 py-5 rounded-2xl text-lg font-medium transition-all duration-500 transform hover:scale-105 shadow-lg shadow-blue-500/20">
                    <span className="relative z-10 flex items-center space-x-3">
                      <span>Get Started</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="bg-black/40 backdrop-blur-2xl border border-white/30 hover:bg-black/60 px-12 py-5 rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg shadow-black/20">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-purple-400 backdrop-blur-xl rounded-2xl shadow-lg shadow-blue-500/25" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 backdrop-blur-xl rounded-2xl blur-lg" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
                  </div>
                  <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    MIDREM
                  </span>
                </div>
                <p className="text-white/60 max-w-md leading-relaxed font-light">
                  Privacy-first financial inclusion platform for Africa. 
                  Powered by Midnight Network's zero-knowledge technology.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-6 text-white/80">Platform</h4>
                <div className="space-y-3 text-white/60 text-sm font-light">
                  <div className="hover:text-white cursor-pointer transition-colors">Features</div>
                  <div className="hover:text-white cursor-pointer transition-colors">Documentation</div>
                  <div className="hover:text-white cursor-pointer transition-colors">API Reference</div>
                  <div className="hover:text-white cursor-pointer transition-colors">Smart Contracts</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-6 text-white/80">Resources</h4>
                <div className="space-y-3 text-white/60 text-sm font-light">
                  <div className="hover:text-white cursor-pointer transition-colors">Whitepaper</div>
                  <div className="hover:text-white cursor-pointer transition-colors">Blog</div>
                  <div className="hover:text-white cursor-pointer transition-colors">Community</div>
                  <div className="hover:text-white cursor-pointer transition-colors">Support</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm font-light">
                © 2024 MIDREM • Built on Midnight Network
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <div className="text-white/60 hover:text-blue-400 cursor-pointer transition-colors text-sm font-light">Twitter</div>
                <div className="text-white/60 hover:text-purple-400 cursor-pointer transition-colors text-sm font-light">Discord</div>
                <div className="text-white/60 hover:text-rose-400 cursor-pointer transition-colors text-sm font-light">Telegram</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}