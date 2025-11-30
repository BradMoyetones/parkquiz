'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TRIVIA_QUESTIONS } from '@/lib/data';
import { ArrowRight, Gamepad2, Star, Trophy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function PlayPage() {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const [isFinished, setIsFinished] = useState(false);
    const router = useRouter()

    const handleAnswer = (index: number) => {
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
                <Trophy className="w-24 h-24 text-warning mb-6 drop-shadow-lg animate-bounce" />
                <h2 className="text-3xl font-bold mb-2">¡Juego Terminado!</h2>
                <p className="text-muted-foreground text-lg mb-8">
                    Obtuviste <span className="text-success font-bold">{score}</span> de{' '}
                    <span className="text-success font-bold">{TRIVIA_QUESTIONS.length}</span> aciertos.
                </p>
                <div className="flex gap-4">
                    <Button onClick={() => router.push("/games")} variant="secondary">
                        <ArrowRight className="w-4 h-4 rotate-180" />
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
                        <Gamepad2 className="w-4 h-4" />
                        Jugar de nuevo
                    </Button>
                </div>
            </div>
        );
    }

    const q = TRIVIA_QUESTIONS[currentQ];

    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <Button onClick={() => router.push("/games")} variant={"link"}>
                        <ArrowRight className="w-4 h-4 rotate-180" /> Salir
                    </Button>
                    <span className="text-emerald-400 font-mono text-sm">
                        Pregunta {currentQ + 1}/{TRIVIA_QUESTIONS.length}
                    </span>
                </div>

                <Card className="rounded-2xl shadow-xl border mb-6 relative overflow-hidden">
                    <CardContent>
                        <div
                            className="absolute top-0 left-0 h-1 bg-emerald-500 transition-all duration-500"
                            style={{ width: `${((currentQ + 1) / TRIVIA_QUESTIONS.length) * 100}%` }}
                        ></div>
                        <h3 className="text-xl font-bold mb-6 mt-2">{q.question}</h3>

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
                                    ? 'bg-success/20 border-2 border-success text-success'
                                    : idx === selected
                                    ? 'bg-destructive/20 border-2 border-destructive text-destructive'
                                    : 'bg-muted/50 text-muted-foreground opacity-50'
                                : 'bg-muted hover:bg-accent text-muted-foreground'
                        } border`}
                                >
                                    <span>{opt}</span>
                                    {showResult && idx === q.correct && (
                                        <Star className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {showResult && (
                            <div className="mt-6 p-4 bg-accent/50 rounded-xl border border-accent-foreground animate-slideUp">
                                <p className="text-accent-foreground text-sm mb-4">{q.explanation}</p>
                                <Button onClick={nextQuestion} className="w-full">
                                    {currentQ === TRIVIA_QUESTIONS.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
