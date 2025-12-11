
import React, { useState, useRef, useEffect } from 'react';
// API wrapper in src
import { sendChat } from "./api/chat";
import { Send, Paperclip, Image as ImageIcon, Cpu, FileText, Package, Activity, Loader, AlertCircle, Calendar, CheckSquare, Users, BarChart3, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const DPRView = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header Widget */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
           <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-serif font-bold text-slate-900">Villa 402 - Sector 15</h2>
                <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold border border-orange-200">ACTIVE SITE</span>
              </div>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Daily Progress Report • Oct 24, 2024
              </p>
           </div>
           <div className="flex gap-4">
              <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-100 text-sm font-bold flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> On Track
              </div>
              <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-100 text-sm font-bold">
                 ☀ 32°C Clear
              </div>
           </div>
        </div>

        {/* Visuals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Progress Photos */}
           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Site Visuals</h3>
                 <span className="text-xs text-orange-500 font-bold cursor-pointer hover:underline">View Gallery</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                 <img src="https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2001.16.39.jpeg?updatedAt=1765410854216" className="rounded-lg h-32 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Site 1" />
                 <img src="https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2000.58.03%20(1).jpeg?updatedAt=1765410854309" className="rounded-lg h-32 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Site 2" />
                 <img src="https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-09%20at%2021.04.30.jpeg?updatedAt=1765410854369" className="rounded-lg h-32 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Site 3" />
                 <img src="https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2000.27.32.jpeg?updatedAt=1765410854413" className="rounded-lg h-32 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Site 4" />
              </div>
           </div>

           {/* Health & Issues */}
           <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><BarChart3 className="w-4 h-4"/> Project Health</h3>
                 <div className="space-y-6">
                    <div>
                       <div className="flex justify-between text-sm mb-2">
                         <span className="font-medium text-slate-700">Physical Progress</span>
                         <span className="font-bold text-slate-900">68%</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-orange-500 w-[68%] rounded-full"/></div>
                    </div>
                    <div>
                       <div className="flex justify-between text-sm mb-2">
                         <span className="font-medium text-slate-700">Financial Progress</span>
                         <span className="font-bold text-slate-900">72%</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[72%] rounded-full"/></div>
                    </div>
                 </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-red-700 mb-4 flex items-center gap-2"><AlertCircle className="w-4 h-4"/> Critical Issues (2)</h3>
                 <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-red-800">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                      Water tanker delayed by 2 hours.
                    </li>
                    <li className="flex items-start gap-2 text-sm text-red-800">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                      Cement inventory low (reorder triggered).
                    </li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Execution Log & Manpower */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2"><CheckSquare className="w-4 h-4"/> Execution Log</h3>
                 <button className="text-xs font-bold text-slate-400 hover:text-slate-900 border border-slate-200 px-2 py-1 rounded">Export PDF</button>
              </div>
              <div className="space-y-3">
                 {[
                   { time: "09:00 AM", task: "Site opening & labor attendance", status: "Done" },
                   { time: "10:30 AM", task: "Ground floor slab reinforcement checking", status: "Done" },
                   { time: "02:00 PM", task: "Electrical conduit laying in Hall 2", status: "In Progress" },
                   { time: "05:00 PM", task: "Curing of boundary wall", status: "Pending" },
                 ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-300 transition-colors">
                       <div className="flex gap-4 items-center">
                          <span className="font-mono text-xs text-slate-400 w-16">{item.time}</span>
                          <span className="text-sm font-medium text-slate-800">{item.task}</span>
                       </div>
                       <span className={`text-[10px] font-bold px-2 py-1 rounded w-20 text-center ${item.status === 'Done' ? 'bg-green-100 text-green-700' : item.status === 'Pending' ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-700'}`}>{item.status}</span>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><Users className="w-4 h-4"/> Manpower</h3>
              <table className="w-full text-sm">
                 <thead className="text-left text-slate-400 text-xs">
                    <tr>
                      <th className="pb-3 font-semibold">Role</th>
                      <th className="pb-3 text-right font-semibold">Count</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {[
                      { role: "Masons", count: 12 },
                      { role: "Helpers", count: 18 },
                      { role: "Bar Benders", count: 4 },
                      { role: "Electricians", count: 2 },
                      { role: "Site Engineer", count: 1 },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-2.5 text-slate-700">{row.role}</td>
                        <td className="text-right font-bold text-slate-900">{row.count}</td>
                      </tr>
                    ))}
                 </tbody>
                 <tfoot className="border-t border-slate-200">
                    <tr>
                      <td className="pt-3 font-bold text-slate-900">Total</td>
                      <td className="pt-3 text-right font-bold text-orange-500">37</td>
                    </tr>
                 </tfoot>
              </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export const CAATPage = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'dpr'>('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Hello! I am CAAT (Construction Aggregator AI Technology). I can help you with BOQ estimates, scheduling, procurement, or generating design concepts. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeTab]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const data = await sendChat(input);

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.text || "I apologize, I couldn't process that request.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "System Error: Unable to connect to CAAT Neural Core. Please verify your connection.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="pt-28 md:pt-32 h-screen flex flex-col">
      <div className="flex-1 flex flex-col bg-[#F8F9FA] rounded-t-[2rem] shadow-2xl overflow-hidden relative z-10">
      {/* CAAT Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm transition-all">
        <div className="flex items-center gap-4">
          <div className="bg-orange-100 p-2 rounded-lg border border-orange-200">
            <Cpu className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-serif text-slate-900 leading-none">CAAT Engine</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-slate-500 font-medium">Online • Connected to Pricing DB</span>
            </div>
          </div>
        </div>
        <div className="flex bg-slate-100 rounded-lg p-1">
          <button 
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${activeTab === 'chat' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Conversation
          </button>
          <button 
            onClick={() => setActiveTab('dpr')}
            className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${activeTab === 'dpr' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            DPR Demo
          </button>
        </div>
      </div>

      <div className="flex-1 flex max-w-[1600px] w-full mx-auto overflow-hidden">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-slate-50 relative border-r border-slate-200">
          
          {activeTab === 'chat' ? (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id} 
                    className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-2xl ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-800' : 'bg-orange-500'}`}>
                        {msg.role === 'user' ? (
                          <span className="text-white text-xs font-bold">You</span>
                        ) : (
                          <Cpu className="w-4 h-4 text-white" />
                        )}
                      </div>

                      {/* Bubble */}
                      <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-slate-800 text-white rounded-tr-none' 
                          : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <div className="flex w-full justify-start">
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                            <Loader className="w-4 h-4 text-white animate-spin" />
                        </div>
                        <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                            <span className="text-sm text-slate-500">CAAT is thinking...</span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 bg-white border-t border-slate-200">
                <div className="relative max-w-4xl mx-auto">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask CAAT about BOQs, Material Rates, or type 'Generate image of...'..."
                    className="w-full bg-slate-50 border-2 border-orange-100 hover:border-orange-200 focus:border-orange-500 rounded-xl py-4 pl-4 pr-32 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                  />
                  <div className="absolute right-3 top-3 flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <ImageIcon className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-center mt-2">
                   <span className="text-[10px] text-slate-400">AI can make mistakes. Verify critical BOQ data with a field engineer.</span>
                </div>
              </div>
            </>
          ) : (
            <DPRView />
          )}
        </div>

        {/* Right Sidebar - Action Cards */}
        <div className="w-80 bg-white p-6 hidden lg:flex flex-col">
           <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Active Action Cards</h3>
           
           <div className="space-y-4">
              {/* Card 1: Pending BOQ */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 hover:shadow-md transition-shadow cursor-pointer group">
                 <div className="flex justify-between items-start mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                       <FileText className="w-5 h-5" />
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded">Pending</span>
                 </div>
                 <h4 className="font-bold text-slate-800 text-sm mb-1">Draft BOQ #1024</h4>
                 <p className="text-xs text-slate-500 mb-3 leading-relaxed">Residential Project - Ground Floor civil work estimation.</p>
                 <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[60%]" />
                 </div>
                 <div className="flex justify-between mt-1 text-[10px] text-slate-400">
                    <span>Generating...</span>
                    <span>60%</span>
                 </div>
              </div>

              {/* Card 2: Active Order */}
              <div className="border border-slate-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-green-500">
                 <div className="flex justify-between items-start mb-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                       <Package className="w-5 h-5" />
                    </div>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Active</span>
                 </div>
                 <h4 className="font-bold text-slate-800 text-sm mb-1">Cement Order</h4>
                 <p className="text-xs text-slate-500 mb-3 leading-relaxed">Searching for best rates in Whitefield area for Ultratech (50 bags).</p>
                 <button className="w-full py-1.5 border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                    View Quotes
                 </button>
              </div>

               {/* Card 3: Report */}
               <div 
                 onClick={() => setActiveTab('dpr')}
                 className={`border border-slate-200 rounded-xl p-4 bg-white hover:shadow-md transition-all cursor-pointer ring-2 ring-transparent hover:ring-orange-500/20 ${activeTab === 'dpr' ? 'ring-orange-500' : ''}`}
               >
                 <div className="flex justify-between items-start mb-3">
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                       <Activity className="w-5 h-5" />
                    </div>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Ready</span>
                 </div>
                 <h4 className="font-bold text-slate-800 text-sm mb-1">Daily Report</h4>
                 <p className="text-xs text-slate-500 mb-3 leading-relaxed">Site A2: Daily Progress Report generated for 24th Oct.</p>
                 <button className="w-full py-1.5 bg-slate-900 text-white rounded text-xs font-bold hover:bg-black transition-colors flex items-center justify-center gap-2">
                    View Demo <ArrowUpRight className="w-3 h-3" />
                 </button>
              </div>

           </div>
        </div>

      </div>
      </div>
    </div>
  );
};
