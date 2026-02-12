import React, { useState } from 'react';
import Simulator from './components/Simulator';
import StepGuide from './components/StepGuide';
import ChatTutor from './components/ChatTutor';
import { GraduationCap, Zap, BookOpen, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guide' | 'chat'>('guide');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500 rounded-lg text-slate-900">
                <Zap size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h1 className="text-xl font-bold tracking-tight">Mi Primer Simulador Eléctrico</h1>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Secundaria Técnica No. 47</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
             <div className="flex items-center gap-2 opacity-80">
                <GraduationCap size={16} />
                <span>Materia: Electrónica / TICs</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: The Simulator (The Result) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-6 bg-yellow-500 rounded-full"></span>
                    Resultado Esperado (Demo)
                </h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Así es como debe funcionar tu presentación de PowerPoint cuando termines. 
                    Pruébalo aquí para entender la lógica del circuito antes de construirlo.
                </p>
                <Simulator />
            </div>
        </div>

        {/* Right Column: The Instructions & Help */}
        <div className="lg:col-span-5 flex flex-col h-[calc(100vh-140px)] lg:h-auto lg:min-h-[600px]">
            {/* Tabs for Mobile/Desktop Compactness */}
            <div className="flex gap-2 mb-4 bg-slate-200 p-1 rounded-lg self-start">
                <button 
                    onClick={() => setActiveTab('guide')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'guide' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                    <BookOpen size={16} />
                    Guía Paso a Paso
                </button>
                <button 
                    onClick={() => setActiveTab('chat')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'chat' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                    <MessageCircle size={16} />
                    Consultar al Profe AI
                </button>
            </div>

            {/* Content Area for Tabs */}
            <div className="flex-1 relative">
                <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'guide' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                    <StepGuide />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'chat' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                    <ChatTutor />
                </div>
            </div>
        </div>

      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>© 2024 Proyecto Escolar - Secundaria Técnica No. 47</p>
        </div>
      </footer>
    </div>
  );
};

export default App;