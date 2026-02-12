import React, { useState } from 'react';
import { Lightbulb, Power } from 'lucide-react';

const Simulator: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const togglePower = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-slate-300 relative transition-colors duration-500 ease-in-out">
        {/* Background Layer mimicking the Slide logic */}
        <div className={`absolute inset-0 transition-colors duration-500 ${isOn ? 'bg-yellow-100' : 'bg-slate-900'}`}></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-12">
            
            {/* The Bulb */}
            <div className={`relative transition-all duration-300 ${isOn ? 'scale-110' : 'scale-100'}`}>
                <Lightbulb 
                    size={140} 
                    className={`transition-all duration-300 ${
                        isOn 
                        ? 'text-yellow-400 drop-shadow-[0_0_50px_rgba(250,204,21,0.9)] fill-yellow-200' 
                        : 'text-gray-600 fill-gray-800'
                    }`} 
                />
                {/* Filament glow hint */}
                {isOn && (
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                )}
            </div>

            {/* The Switch Button */}
            <button
                onClick={togglePower}
                className={`
                    px-8 py-4 rounded-lg font-bold text-xl shadow-lg transform transition-transform active:scale-95
                    flex items-center gap-3 border-2
                    ${isOn 
                        ? 'bg-green-600 hover:bg-green-500 text-white border-green-400' 
                        : 'bg-red-600 hover:bg-red-500 text-white border-red-400'
                    }
                `}
            >
                <Power size={24} />
                {isOn ? 'APAGAR' : 'ENCENDER'}
            </button>
        </div>

        {/* Label akin to Slide Number */}
        <div className={`absolute bottom-4 left-4 font-mono text-sm ${isOn ? 'text-slate-600' : 'text-slate-500'}`}>
            {isOn ? 'Diapositiva 3 (Estado ENCENDIDO)' : 'Diapositiva 2 (Estado APAGADO)'}
        </div>
    </div>
  );
};

export default Simulator;