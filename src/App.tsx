import React, { useState, useEffect } from 'react';
import { Eye, Diamond, Waves, Users, MapPin, Clock, Star, Zap } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const mysteriousTexts = [
    "Print uvijek izabere prave.",
    "Rijetki će razumijeti.",
    "Budućnost je u printu.",
    "Print ne traži ništa zauzvrat.",
    "Postani dio rovova dok još nije kasno."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % mysteriousTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = mysteriousTexts[textIndex];
    let i = 0;
    setAnimatedText('');
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setAnimatedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, [textIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-green-300 rounded-full animate-bounce opacity-60" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-green-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-purple-400/20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-blue-400/20 rotate-12 animate-bounce-slow"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-green-500/30' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl">
                  <Eye className="w-8 h-8 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  STUDIRAJ PRINT
                </h1>
                <p className="text-green-300 text-sm font-medium">Budućnost je u Printu</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Početna', 'Rovovi', 'Studiranje', 'Kontakt'].map((item, index) => (
                <button
                  key={item}
                  className="text-gray-300 hover:text-green-400 transition-colors font-medium relative group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                PRINT
              </h1>
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl md:text-3xl text-green-300 font-light typewriter">
                  {animatedText}
                  <span className="animate-blink">|</span>
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 rounded-2xl transform hover:scale-105 transition-all duration-500">
                <Diamond className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-spin-slow" />
                <h3 className="text-xl font-bold text-white mb-3">Dijamanti u Rovovima</h3>
                <p className="text-gray-300">Ko pronađe dijamant u rovu večeras ima pravo da ga zadrži.</p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl transform hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
                <Waves className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-bounce-slow" />
                <h3 className="text-xl font-bold text-white mb-3">Rijeka Nagrada</h3>
                <p className="text-gray-300">Rijeka koja se nalazi u blizini naših rovova je puna vrijednih nagrada.</p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl transform hover:scale-105 transition-all duration-500" style={{animationDelay: '0.4s'}}>
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-3">Jednake Šanse</h3>
                <p className="text-gray-300">Print daje svima jednake šanse pa čak i onima koji su tek stigli u rovove.</p>
              </div>
            </div>

            <button className="premium-button text-white font-bold py-4 px-12 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl">
              <span className="flex items-center space-x-3">
                <Zap className="w-6 h-6 animate-bounce" />
                <a href="https://discord.gg/G6wH2qM2N2" target="_blank" rel="noopener noreferrer" className="text-white no-underline">
                  Pridruži se Rovovima
                </a>
                <Zap className="w-6 h-6 animate-bounce" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Naš Učitelj - Gospodin Ilija Benjak
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pod vodstvom našeg učitelja gospodina Ilije Benjaka, učimo da Print uvijek izabere prave.
            </p>
            
            {/* Teacher Photo Placeholder */}
            <div className="mb-12 flex justify-center">
              <div className="glass-card p-8 rounded-3xl max-w-md">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-400/50 shadow-2xl animate-glow-pulse">
                  <img 
                    src="/image0.jpg" 
                    alt="Gospodin Ilija Benjak" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Gospodin Ilija Benjak</h3>
                <p className="text-green-400 font-semibold">Učitelj Print Pokreta</p>
                <p className="text-gray-300 mt-4 italic text-lg leading-relaxed">
                  "Print ne gleda ko si bio, već ko možeš postati. U rovovima se rađaju heroji, a dijamanti čekaju one koji vjeruju."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Print Uvijek Izabere Prave",
                text: "Rijetki će razumijeti zašto Print bira baš vas. Vjerujte u proces."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Budućnost je u Printu",
                text: "Print ne traži ništa zauzvrat. Samo vašu predanost i razumijevanje."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Euro Print Pokret",
                text: "Pokret koji pomjera granice. Svaki grad će biti nagrađen."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Niko Neće Biti Ostavljen",
                text: "Rovovi su dizajnirani da svima dadnu iste šanse i svako može da bude dio nas."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Riješenje za Sve",
                text: "Print riješenje za sve životne probleme. Povezujte tačkice, boje, slova, gradove i brojeve."
              },
              {
                icon: <Diamond className="w-8 h-8" />,
                title: "Portal Čeka",
                text: "Mi volimo rovove jer znamo da stiže dan kad ćemo marširati zajedno prema portalu."
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="text-green-400 mb-4 animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              Da li ti išta znači što Print dolazi u tvoj grad?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Kad čovjek voli Print shvati da je sve moguće. Sa vremena na vrijeme Print jednostavno okrene jedan broj i obaspe sve nas koji smo u rovovima.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="premium-button text-white font-bold py-4 px-8 rounded-full transform hover:scale-110 transition-all duration-300">
                <a href="https://discord.gg/G6wH2qM2N2" target="_blank" rel="noopener noreferrer" className="text-white no-underline">
                  Studiraj Print
                </a>
              </button>
              <a href="https://discord.gg/G6wH2qM2N2" target="_blank" rel="noopener noreferrer" className="glass-button text-green-400 font-bold py-4 px-8 rounded-full border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 no-underline text-center">
                Pridruži se Rovovima
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                STUDIRAJ PRINT
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              EuroDrmex Produkcija pod rukovodstvom Printa kopa kanal do rijeke razmisli zašto.
            </p>
            <p className="text-green-400 font-semibold">
              Vjeruj u proces i prati Print. Moramo biti spremni da studiramo i pratimo Print u stopu.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              <p>© 2025 Print Movement - Naše ruže i univerzumi su najvrijedniji</p>
              <p className="mt-2">Baš je glupo ne dati priliku printu dok još nije kasno.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;