
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    projectType: 'Residential Construction',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  // Example: "https://script.google.com/macros/s/AKfycbzQy.../exec"
  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE"; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    
    setStatus('submitting');

    // Create FormData to send
    const data = new FormData();
    data.append('First Name', formData.firstName);
    data.append('Last Name', formData.lastName);
    data.append('Phone', formData.phone);
    data.append('Project Type', formData.projectType);
    data.append('Message', formData.message);
    data.append('Timestamp', new Date().toString());

    try {
        // We use 'no-cors' because Google Apps Script typically doesn't support CORS preflight for simple POSTs 
        // in a way that browsers like without setup. 'no-cors' allows the request to reach the server (opaque response).
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: data,
            mode: 'no-cors'
        });

        // Since response is opaque, we assume success if no network error occurred
        setStatus('success');
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            projectType: 'Residential Construction',
            message: ''
        });

        setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
        console.error("Submission Error:", error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-32 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <span className="text-orange-500 font-mono text-sm tracking-widest mb-4 block">/// GET IN TOUCH</span>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8">Let's build<br/>something iconic.</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-md">
            Whether you need a BOQ estimate, a design consultation, or full-stack construction management, our AI and experts are ready.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-white shadow-sm border border-slate-200 group-hover:bg-orange-500 transition-colors">
                <Mail className="w-5 h-5 text-slate-900 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 font-medium mb-1">Email Us</h4>
                <p className="text-slate-500">contact@designermistri.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-white shadow-sm border border-slate-200 group-hover:bg-orange-500 transition-colors">
                <Phone className="w-5 h-5 text-slate-900 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 font-medium mb-1">Call Us</h4>
                <p className="text-slate-500">+91 76783 25442</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-white shadow-sm border border-slate-200 group-hover:bg-orange-500 transition-colors">
                <MapPin className="w-5 h-5 text-slate-900 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 font-medium mb-1">HQ</h4>
                <p className="text-slate-500">Noida 2<br/>Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
          {status === 'success' && (
             <div className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600">Our team will contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-bold text-orange-500 hover:underline"
                >
                  Send another message
                </button>
             </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors" 
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors" 
                  placeholder="Doe" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Phone Number</label>
                    <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors" 
                    placeholder="+91 98765 43210" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Project Type</label>
                    <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors appearance-none"
                    >
                        <option>Residential Construction</option>
                        <option>Commercial Interior</option>
                        <option>Renovation</option>
                        <option>Architectural Design</option>
                        <option>General Inquiry</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors h-32 resize-none" 
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>

            <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                  <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
              ) : (
                  <>Send Request <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
