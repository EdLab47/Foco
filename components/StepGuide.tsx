import React, { useState } from 'react';
import { INSTRUCTIONS, INITIAL_CHECKLIST } from '../constants';
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { ChecklistItem } from '../types';

const StepGuide: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [openStep, setOpenStep] = useState<number | null>(1);

  const toggleCheck = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const toggleStep = (id: number) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 h-full overflow-hidden flex flex-col">
      <div className="p-4 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Instrucciones del Proyecto</h2>
        <p className="text-sm text-slate-500">Secundaria Técnica No. 47</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {INSTRUCTIONS.map((step) => (
          <div key={step.id} className="border border-slate-200 rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleStep(step.id)}
              className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <span className="font-semibold text-left text-slate-700">{step.title}</span>
              {openStep === step.id ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
            </button>
            
            {openStep === step.id && (
              <div className="p-4 bg-white">
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  {step.content.map((line, idx) => (
                    <li key={idx} className="leading-relaxed">{line}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
             ✅ CHECKLIST DE CALIFICACIÓN
          </h3>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div 
                key={item.id} 
                onClick={() => toggleCheck(item.id)}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <div className={`mt-0.5 transition-colors ${item.checked ? 'text-green-600' : 'text-slate-300 group-hover:text-slate-400'}`}>
                  {item.checked ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                </div>
                <span className={`text-sm ${item.checked ? 'text-slate-500 line-through' : 'text-slate-700'}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepGuide;