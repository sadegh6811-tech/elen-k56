import { useState } from 'react';
import { Send } from 'lucide-react';
import GlassPanel from './GlassPanel';

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'سلام. من Elen-k هستم. چطور می‌تونم کمکت کنم؟' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: 'در حال پردازش درخواست شما...' }]);
    }, 1000);
  };

  return (
    <GlassPanel className="flex flex-col h-[400px] w-full">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${msg.role === 'user' ? 'bg-blue-500/50 text-white' : 'bg-white/20 text-gray-100'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-black/30 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          placeholder="پیام خود را بنویسید..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500/50 hover:bg-blue-500/70 text-white p-2 rounded-lg transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </GlassPanel>
  );
}
