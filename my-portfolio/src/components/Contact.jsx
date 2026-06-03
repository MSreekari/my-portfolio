import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Fire the background fetch request directly to your Formspree endpoint account hash
      const response = await fetch("https://formspree.io/f/mnjyayqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert("Transmission failed. Please check your Formspree target activation status.");
      }
    } catch (error) {
      console.error("Network routing exception:", error);
      alert("A network error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-[#F8F9FA] text-black py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* HEADER BLOCK: Section Title & Index */}
        <div className="space-y-4 border-b border-gray-300 pb-6">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white font-mono font-bold text-xs px-2.5 py-1 rounded">
              05
            </span>
          </div>
          <h2 className="text-5xl font-bebasneue tracking-tight uppercase leading-none">
            <span className="inline-flex items-baseline gap-1.5">
              Get In Touch
              <span className="w-2.5 h-2.5 bg-[#6366F1] block !rounded-none translate-y-[-2px]"></span>
            </span>
          </h2>
        </div>

        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 md:p-10 relative overflow-hidden">
          
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 stroke-[1.5]" />
              <h3 className="text-2xl font-bold font-notosans tracking-tight">Transmission Successful</h3>
              <p className="text-black font-notosans text-sm max-w-sm leading-relaxed">
                Thank you for reaching out. Your message has been routed and I will get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 font-mono text-xs text-[#6366F1] hover:underline uppercase tracking-wider cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* Active Interactive Form Block */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Field: Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#F8F9FA] border border-gray-200 text-black px-4 py-3.5 rounded-lg text-sm font-notosans focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Input Field: Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="w-full bg-[#F8F9FA] border border-gray-200 text-black px-4 py-3.5 rounded-lg text-sm font-notosans focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Input Field: Message Textbox */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[#F8F9FA] border border-gray-200 text-black px-4 py-3.5 rounded-lg text-sm font-notosans resize-none focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all duration-200"
                ></textarea>
              </div>

              {/* Action Submit Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-[#0B0F17] hover:bg-[#6366F1] disabled:bg-gray-400 text-white font-bebasneue text-sm tracking-wider uppercase px-8 py-4 rounded-none transition-all duration-300 flex items-center gap-3 group cursor-pointer shadow-lg shadow-black/10"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}