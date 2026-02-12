import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { sendMessageToTutor } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatTutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente de TICs. ¿Tienes dudas sobre cómo hacer tu simulador en PowerPoint o sobre cómo funciona un circuito?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);
    
    setMessages(prev => [...prev, { role: 'user', text: userText }]);

    const response = await sendMessageToTutor(userText);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-4 border-b border-slate-100 bg-indigo-50 rounded-t-xl flex items-center gap-2">
        <Sparkles size={20} className="text-indigo-600" />
        <h3 className="font-bold text-indigo-900">Profe AI - Asistente</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'model' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-600'}`}>
              {msg.role === 'model' ? <Bot size={18} /> : <User size={18} />}
            </div>
            <div className={`p-3 rounded-lg max-w-[80%] text-sm ${msg.role === 'model' ? 'bg-indigo-50 text-slate-800' : 'bg-slate-800 text-white'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 animate-pulse">
                <Bot size={18} />
             </div>
             <div className="bg-indigo-50 p-3 rounded-lg text-sm text-slate-500 italic">
                Escribiendo...
             </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t border-slate-100 flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          placeholder="Pregunta sobre tu tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isLoading}
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatTutor;