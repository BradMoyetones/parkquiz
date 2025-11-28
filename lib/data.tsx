// --- DATOS DE EJEMPLO (MOCK DATA) ---
import { Brain, Compass, MapPin } from 'lucide-react';

const TRIVIA_QUESTIONS = [
    {
        id: 1,
        question: '¿Cuál es el ave emblemática que protegemos en el Bioparque Wakatá?',
        options: ['El Loro Orejiamarillo', 'El Cóndor de los Andes', 'El Águila Real', 'El Tucán Caribeño'],
        correct: 1, // Index
        explanation:
            '¡Correcto! El Parque Jaime Duque es fundamental en la conservación y reproducción del Cóndor de los Andes.',
    },
    {
        id: 2,
        question: '¿Qué monumento icónico del parque es una réplica exacta de uno en la India?',
        options: ['El Coliseo Romano', 'La Estatua de la Libertad', 'El Taj Mahal', 'La Torre Eiffel'],
        correct: 2,
        explanation:
            '¡Exacto! El Taj Mahal del parque es una réplica a escala y un homenaje al amor y la arquitectura.',
    },
    {
        id: 3,
        question: '¿En qué atracción puedes caminar literalmente sobre Colombia?',
        options: ['El Mapa de Colombia en Relieve', 'El Zoológico', 'El Tren Panorámico', 'El Castillo Medieval'],
        correct: 0,
        explanation:
            '¡Sí! El Mapa de Colombia en Relieve es un aviario gigante donde caminas sobre la geografía del país.',
    },
];

const ROULETTE_OPTIONS = [
    { text: 'Verdad: ¿Qué es lo más raro que has comido?', color: 'bg-red-500' },
    { text: 'Reto: Imita a un mono del Bioparque', color: 'bg-blue-500' },
    { text: 'Dato: El parque abrió en 1983', color: 'bg-green-500' },
    { text: 'Pregunta: ¿Quién es el más miedoso de la mesa?', color: 'bg-yellow-500' },
    { text: 'Reto: Selfie grupal haciendo caras', color: 'bg-purple-500' },
    { text: 'Adivinanza: Soy grande y tengo trompa...', color: 'bg-pink-500' },
];

const FACTS = [
    {
        title: 'El Ojo de Dios',
        text: "El monumento 'La Mano de Dios' pesa más de 1.200 toneladas y representa la fuerza creadora.",
        icon: <MapPin className="w-6 h-6 text-emerald-400" />,
    },
    {
        title: 'Conservación',
        text: 'El Bioparque Wakatá no es solo un zoológico, es un centro de conservación de especies en riesgo.',
        icon: <Brain className="w-6 h-6 text-blue-400" />,
    },
    {
        title: 'Historia Aeroespacial',
        text: 'Tenemos un museo dedicado a la fuerza aérea con aviones reales que sirvieron al país.',
        icon: <Compass className="w-6 h-6 text-orange-400" />,
    },
];

export { TRIVIA_QUESTIONS, ROULETTE_OPTIONS, FACTS };
