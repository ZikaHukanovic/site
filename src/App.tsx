import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Menu, 
  X, 
  ExternalLink, 
  Star, 
  Heart, 
  Zap,
  Calendar,
  Handshake,
  Trophy,
  MessageCircle,
  ChevronDown,
  Play,
  Pause,
  Sparkles,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slogans = [
    "Zajedno rastemo. Zajedno učimo. Print za sve!",
    "Otvoreno znanje bez granica!",
    "Tvoje mjesto za učenje, podršku i napredak."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-blue-500/20 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      />
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-blue-800/30 sticky top-0 z-40 hover:bg-slate-900/95 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-xl shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <GraduationCap className="h-7 w-7 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Print Univerzitet
                </span>
                <div className="text-xs text-blue-300 font-medium">Besplatno obrazovanje</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
                O nama
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
                Kursevi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('events')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
                Događaji
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('partners')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
                Partneri
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <a 
                href="https://discord.gg/pcgVUZEHzn" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-blue-500/50 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Pridruži se
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-blue-800/30 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300">O nama</button>
              <button onClick={() => scrollToSection('courses')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300">Kursevi</button>
              <button onClick={() => scrollToSection('events')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300">Događaji</button>
              <button onClick={() => scrollToSection('partners')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300">Partneri</button>
              <a 
                href="https://discord.gg/pcgVUZEHzn" 
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 my-2 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-lg font-medium text-center hover:scale-105 transition-transform duration-300"
              >
                Pridruži se
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full mb-6 shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <GraduationCap className="h-12 w-12 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
            Print Univerzitet
          </h1>
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4">
              Pozdrav i dobrodošlica!
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Dobro došao/la na Print Univerzitet, tvoje novo omiljeno mjesto za <span className="text-blue-400 font-semibold">besplatno učenje</span>, 
              razmjenu znanja i gradnju zajednice! Naš cilj je da svima omogućimo pristup modernom i kvalitetnom obrazovanju, 
              bez skrivenih troškova, uz pozitivnu i prijateljsku podršku.
            </p>
          </div>

          {/* Animated Slogan */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <p className={`text-xl md:text-2xl font-medium text-blue-300 italic transition-all duration-300 hover:text-blue-200 cursor-default ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              "{slogans[currentSlogan]}"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://discord.gg/pcgVUZEHzn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-blue-500/50 flex items-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Pridruži se Discord-u</span>
              <Sparkles className="h-4 w-4 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180" />
            </a>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Saznaj više
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-slate-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 text-slate-400 flex-wrap">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 cursor-default group">
              <Users className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span>Aktivna zajednica</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 cursor-default group">
              <Star className="h-5 w-5 text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span>100% besplatno</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 cursor-default group">
              <Heart className="h-5 w-5 text-blue-400 group-hover:scale-110 group-hover:text-red-400 transition-all duration-300" />
              <span>Bez ograničenja</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
              Naša misija
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50 relative z-10">
                <BookOpen className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white relative z-10 group-hover:text-blue-200 transition-colors duration-300">Besplatni kursevi</h3>
              <p className="text-slate-300 leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Pružamo potpuno besplatne kurseve i edukativne radionice, dostupne svima bez ikakvih troškova ili ograničenja.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50 relative z-10">
                <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white relative z-10 group-hover:text-blue-200 transition-colors duration-300">Snažna zajednica</h3>
              <p className="text-slate-300 leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Gradimo solidarnu Discord zajednicu gdje niko nije sam – ovdje se znanje dijeli, a svaka nova ideja je dobrodošla.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50 relative z-10">
                <Handshake className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white relative z-10 group-hover:text-blue-200 transition-colors duration-300">Zajednički rad</h3>
              <p className="text-slate-300 leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Naglašavamo učenje kroz zajednički rad: svako može da pita, predloži, predaje ili organizuje radionicu – bez elitizma!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
              Zašto odabrati Print Univerzitet?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-green-500/50 relative z-10">
                <Zap className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white relative z-10 group-hover:text-green-200 transition-colors duration-300">Bezbarijerno znanje</h3>
              <p className="text-slate-300 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Nema pretplata, nema ograničenja – svi mogu učiti. Pristup svim materijalima je potpuno besplatan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50 relative z-10">
                <BookOpen className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white relative z-10 group-hover:text-purple-200 transition-colors duration-300">Raznovrsni kursevi</h3>
              <p className="text-slate-300 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Od informatike, dizajna i jezika, do preduzetništva i ličnih vještina – imamo nešto za svakoga.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-orange-500/50 relative z-10">
                <Users className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white relative z-10 group-hover:text-orange-200 transition-colors duration-300">Mentorstvo</h3>
              <p className="text-slate-300 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Postani mentor ili pronađi mentora među članovima; svi mogu biti podrška jedni drugima.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-red-500/50 relative z-10">
                <Trophy className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white relative z-10 group-hover:text-red-200 transition-colors duration-300">Događanja i izazovi</h3>
              <p className="text-slate-300 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Redovno organizujemo 'live' predavanja, timske izazove, takmičenja i kvizove sa nagradama.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-teal-500/50 relative z-10">
                <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white relative z-10 group-hover:text-teal-200 transition-colors duration-300">Radionice po mjeri</h3>
              <p className="text-slate-300 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Kreirajmo zajedno sadržaj koji vam najviše treba! Vaši zahtjevi oblikuju naš program.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/50 relative z-10">
                <Award className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white relative z-10 group-hover:text-indigo-200 transition-colors duration-300">Sertifikati</h3>
              <p className="text-slate-300 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Završi kurseve i dobij digitalne sertifikate koji potvrđuju tvoje novo znanje i vještine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
              Najave & Obavještenja
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Budi uvijek informisan – nove radionice, događaji i korisni resursi postavljeni su na našem serveru u realnom vremenu!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50 relative z-10">
                  <Calendar className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white relative z-10 group-hover:text-blue-200 transition-colors duration-300">Live događanja</h3>
                  <p className="text-blue-300 text-sm">Svake sedmice</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Pridruži se našim live predavanjima, Q&A sesijama i interaktivnim radionicama.
              </p>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-sm">Aktivno</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50 relative z-10">
                  <Trophy className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white relative z-10 group-hover:text-purple-200 transition-colors duration-300">Takmičenja</h3>
                  <p className="text-purple-300 text-sm">Mjesečno</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                Učestvuj u coding izazovima, kvizovima i kreativnim projektima sa vrijednim nagradama.
              </p>
              <div className="flex items-center gap-2 text-yellow-400">
                <Trophy className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-sm">Nagrade dostupne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
              Partneri i saradnja
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Ponosno sarađujemo sa drugim zajednicama – posebno ističemo:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm text-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-blue-500/50 relative z-10">
                <GraduationCap className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white relative z-10 group-hover:text-blue-200 transition-colors duration-300">Print Univerzitet</h3>
              <p className="text-slate-300 mb-6 relative z-10 group-hover:text-slate-200 transition-colors duration-300">Naša glavna Discord zajednica za učenje i saradnju</p>
              <a 
                href="https://discord.gg/pcgVUZEHzn" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/50 relative z-10 group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <ExternalLink className="h-5 w-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Pridruži se</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-8 border border-green-500/20 backdrop-blur-sm text-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-green-500/50 relative z-10">
                <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white relative z-10 group-hover:text-green-200 transition-colors duration-300">Kalimero Discord</h3>
              <p className="text-slate-300 mb-6 relative z-10 group-hover:text-slate-200 transition-colors duration-300">Naš partner u širenju mreže znanja i podrške</p>
              <a 
                href="https://discord.gg/kalimero" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-green-500/50 relative z-10 group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <ExternalLink className="h-5 w-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Posjeti Kalimero</span>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm text-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-semibold mb-4 text-white flex items-center justify-center gap-2">
              <Handshake className="h-6 w-6 text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="group-hover:text-blue-200 transition-colors duration-300">Kako postati partner?</span>
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto group-hover:text-slate-200 transition-colors duration-300 relative z-10">
              Otvoreni smo za saradnju sa drugim Discord zajednicama i projektima. Ako želiš biti partner, piši nam na našem Discord serveru!
            </p>
            <div className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300 relative z-10">
              Zajedno širimo mrežu znanja i podrške! 🤝
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
            Spreman/na za učenje?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Pridruži se Print Univerzitetu danas i počni svoju besplatnu edukativnu avanturu!
          </p>
          <a 
            href="https://discord.gg/pcgVUZEHzn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/50 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <GraduationCap className="h-7 w-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Počni učiti sada</span>
            <Sparkles className="h-6 w-6 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-800/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-xl shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                <GraduationCap className="h-7 w-7 text-white hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Print Univerzitet
                </span>
                <div className="text-xs text-blue-300 font-medium">Besplatno obrazovanje za sve</div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-slate-400">
              <a href="https://discord.gg/pcgVUZEHzn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Print Univerzitet
              </a>
              <a href="https://discord.gg/kalimero" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Kalimero Partner
              </a>
              <div className="text-center md:text-right">
                <div className="text-sm">© 2025 Print Univerzitet. Sva prava zadržana.</div>
                <div className="text-xs text-slate-500 mt-1 hover:text-blue-400 transition-colors duration-300 cursor-default">Site made by MaTa</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;