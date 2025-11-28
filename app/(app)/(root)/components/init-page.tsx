'use client'
import { useState, useEffect } from 'react';
import {
    Play,
    Brain,
    Compass,
    HelpCircle,
    Trophy,
    ArrowRight,
    MapPin,
    Star,
    ChevronRight,
    X,
    RotateCw,
} from 'lucide-react';



// --- COMPONENTES ---

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyle =
        'px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 shadow-lg';
    const variants = {
        primary:
            'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 shadow-emerald-900/50',
        secondary: 'bg-slate-700 text-slate-100 hover:bg-slate-600 border border-slate-600',
        outline: 'bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

const GameCard = ({ title, description, icon, color, onClick, tag }) => (
    <div
        onClick={onClick}
        className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 cursor-pointer hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 overflow-hidden"
    >
        <div
            className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`}
        />

        <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg ${color} bg-opacity-20 text-white`}>{icon}</div>
            {tag && (
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                    {tag}
                </span>
            )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="flex items-center text-emerald-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
            Jugar ahora <ChevronRight className="w-4 h-4 ml-1" />
        </div>
    </div>
);

// --- VISTAS DEL JUEGO ---

const TriviaGame = ({ onBack }) => {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selected, setSelected] = useState(null);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (index) => {
        setSelected(index);
        setShowResult(true);
        if (index === TRIVIA_QUESTIONS[currentQ].correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQ < TRIVIA_QUESTIONS.length - 1) {
            setCurrentQ(currentQ + 1);
            setSelected(null);
            setShowResult(false);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 animate-fadeIn">
                <Trophy className="w-24 h-24 text-yellow-400 mb-6 drop-shadow-lg animate-bounce" />
                <h2 className="text-3xl font-bold text-white mb-2">¡Juego Terminado!</h2>
                <p className="text-slate-300 text-lg mb-8">
                    Obtuviste <span className="text-emerald-400 font-bold">{score}</span> de{' '}
                    <span className="text-emerald-400 font-bold">{TRIVIA_QUESTIONS.length}</span> aciertos.
                </p>
                <div className="flex gap-4">
                    <Button onClick={onBack} variant="secondary">
                        Volver al Menú
                    </Button>
                    <Button
                        onClick={() => {
                            setIsFinished(false);
                            setCurrentQ(0);
                            setScore(0);
                            setSelected(null);
                            setShowResult(false);
                        }}
                    >
                        Jugar de nuevo
                    </Button>
                </div>
            </div>
        );
    }

    const q = TRIVIA_QUESTIONS[currentQ];

    return (
        <div className="max-w-md mx-auto animate-fadeIn">
            <div className="flex items-center justify-between mb-8">
                <button onClick={onBack} className="text-slate-400 hover:text-white flex items-center gap-1">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Salir
                </button>
                <span className="text-emerald-400 font-mono text-sm">
                    Pregunta {currentQ + 1}/{TRIVIA_QUESTIONS.length}
                </span>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700 mb-6 relative overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-1 bg-emerald-500 transition-all duration-500"
                    style={{ width: `${((currentQ + 1) / TRIVIA_QUESTIONS.length) * 100}%` }}
                ></div>
                <h3 className="text-xl text-white font-bold mb-6 mt-2">{q.question}</h3>

                <div className="space-y-3">
                    {q.options.map((opt, idx) => (
                        <button
                            key={idx}
                            disabled={showResult}
                            onClick={() => handleAnswer(idx)}
                            className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center justify-between group
                ${
                    showResult
                        ? idx === q.correct
                            ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-100'
                            : idx === selected
                            ? 'bg-red-500/20 border-2 border-red-500 text-red-100'
                            : 'bg-slate-700/50 text-slate-400 opacity-50'
                        : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                }`}
                        >
                            <span>{opt}</span>
                            {showResult && idx === q.correct && (
                                <Star className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                            )}
                        </button>
                    ))}
                </div>

                {showResult && (
                    <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700 animate-slideUp">
                        <p className="text-slate-300 text-sm mb-4">{q.explanation}</p>
                        <Button onClick={nextQuestion} className="w-full">
                            {currentQ === TRIVIA_QUESTIONS.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

const RouletteGame = ({ onBack }) => {
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState(null);
    const [rotation, setRotation] = useState(0);

    const spin = () => {
        if (spinning) return;
        setSpinning(true);
        setResult(null);

        // Random rotation between 5 and 10 full spins + random segment
        const randomSpin = 1800 + Math.random() * 1800;
        const targetRotation = rotation + randomSpin;

        setRotation(targetRotation);

        setTimeout(() => {
            const selectedIndex = Math.floor(Math.random() * ROULETTE_OPTIONS.length);
            setResult(ROULETTE_OPTIONS[selectedIndex]);
            setSpinning(false);
        }, 3000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fadeIn max-w-md mx-auto">
            <div className="w-full flex justify-start mb-4">
                <button onClick={onBack} className="text-slate-400 hover:text-white flex items-center gap-1">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Volver
                </button>
            </div>

            <div className="relative mb-8 group">
                {/* Decorative outer ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

                {/* The Spinner Visual */}
                <div
                    className="w-64 h-64 rounded-full border-8 border-slate-800 bg-slate-700 relative overflow-hidden shadow-2xl transition-all duration-[3000ms] cubic-bezier(0.25, 0.1, 0.25, 1)"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {/* Visual Segments (Simplified) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(var(--tw-gradient-stops))] from-red-500 via-yellow-500 to-blue-500 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full shadow-lg z-10"></div>
                    </div>
                </div>
                {/* Pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-white drop-shadow-lg z-20"></div>
            </div>

            {result ? (
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 text-center animate-slideUp shadow-xl w-full">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                        Tu Desafío
                    </span>
                    <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${result.color} bg-opacity-80`}
                    >
                        ¡Toca Jugar!
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{result.text}</h3>
                    <Button onClick={spin} variant="primary" className="w-full">
                        Girar de nuevo
                    </Button>
                </div>
            ) : (
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4">¡Gira la Ruleta!</h3>
                    <Button onClick={spin} disabled={spinning} className="w-full px-12">
                        {spinning ? 'Girando...' : '¡GIRAR!'}
                    </Button>
                </div>
            )}
        </div>
    );
};

const ComingSoon = ({ onBack, title }) => (
    <div className="flex flex-col items-center justify-center min-h-[50vh] animate-fadeIn text-center p-8">
        <div className="bg-slate-800 p-4 rounded-full mb-6">
            <RotateCw className="w-12 h-12 text-slate-500 animate-spin-slow" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-slate-400 mb-8 max-w-xs">
            Estamos preparando este juego con la magia del Parque. ¡Estará listo muy pronto!
        </p>
        <Button onClick={onBack} variant="secondary">
            Volver al Inicio
        </Button>
    </div>
);

// --- COMPONENTE PRINCIPAL (LAYOUT) ---

export default function App() {
    const [view, setView] = useState('home'); // home, trivia, roulette, find, soon
    const [selectedGameTitle, setSelectedGameTitle] = useState('');

    // Styles injected for animations
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
          @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          .animate-slideUp { animation: slideUp 0.4s ease-out; }
          @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const navigateTo = (viewName, title = '') => {
        setView(viewName);
        setSelectedGameTitle(title);
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen  font-sans selection:bg-emerald-500 selection:text-white pb-12">
            {/* NAVBAR */}
            {/* <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
                <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Star className="w-5 h-5 text-white fill-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-white leading-none">Jaime Duque</h1>
                            <span className="text-xs text-emerald-400 font-semibold tracking-wider">INTERACTIVO</span>
                        </div>
                    </div>
                    {view !== 'home' && (
                        <button
                            onClick={() => navigateTo('home')}
                            className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </nav> */}

            <main className="max-w-5xl mx-auto px-4 pt-6">
                {view === 'home' && (
                    <div className="animate-fadeIn">
                        {/* HERO SECTION */}
                        <section className="relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 mb-10 text-center py-12 px-6">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900/90"></div>

                            <div className="relative z-10">
                                <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4 uppercase tracking-widest">
                                    Experiencia Familiar
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                                    ¡La espera es parte <br className="hidden md:block" /> de la{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                        Diversión!
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
                                    Juega, aprende y desafía a tu familia mientras disfrutas de nuestros restaurantes.
                                    Sin descargas, directo desde tu mesa.
                                </p>
                                <Button
                                    onClick={() =>
                                        document.getElementById('games-grid').scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    Explorar Juegos <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </section>

                        {/* GAMES GRID */}
                        <div id="games-grid" className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Play className="w-6 h-6 text-emerald-400" />
                                <h3 className="text-2xl font-bold text-white">Juegos Disponibles</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <GameCard
                                    title="Trivia Wakatá"
                                    description="Demuestra cuánto sabes sobre los animales y monumentos del parque."
                                    icon={<Brain className="w-6 h-6" />}
                                    color="bg-purple-500"
                                    tag="Popular"
                                    onClick={() => navigateTo('trivia')}
                                />
                                <GameCard
                                    title="Ruleta Familiar"
                                    description="Verdad, Reto o Dato Curioso. ¡Perfecto para romper el hielo!"
                                    icon={<RotateCw className="w-6 h-6" />}
                                    color="bg-blue-500"
                                    tag="Diversión"
                                    onClick={() => navigateTo('roulette')}
                                />
                                <GameCard
                                    title="Encuentra al Cóndor"
                                    description="Mini-juego de observación. ¿Qué tan rápidos son tus ojos?"
                                    icon={<SearchIcon />}
                                    color="bg-emerald-500"
                                    onClick={() => navigateTo('soon', 'Encuentra al Cóndor')}
                                />
                                <GameCard
                                    title="¿Quién Soy?"
                                    description="Adivina el personaje o lugar con pistas que se vuelven más fáciles."
                                    icon={<HelpCircle className="w-6 h-6" />}
                                    color="bg-orange-500"
                                    onClick={() => navigateTo('soon', '¿Quién Soy?')}
                                />
                            </div>
                        </div>

                        {/* EDUCATIONAL SECTION */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Compass className="w-6 h-6 text-blue-400" />
                                <h3 className="text-2xl font-bold text-white">Descubre el Parque</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {FACTS.map((fact, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-xl hover:bg-slate-800 transition-colors"
                                    >
                                        <div className="mb-3 p-2 bg-slate-900 w-fit rounded-lg border border-slate-700">
                                            {fact.icon}
                                        </div>
                                        <h4 className="text-white font-bold mb-2">{fact.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{fact.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {view === 'trivia' && <TriviaGame onBack={() => navigateTo('home')} />}
                {view === 'roulette' && <RouletteGame onBack={() => navigateTo('home')} />}
                {view === 'soon' && <ComingSoon title={selectedGameTitle} onBack={() => navigateTo('home')} />}
            </main>
        </div>
    );
}

// Icon helper for the grid
const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
    </svg>
);
