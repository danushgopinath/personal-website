'use client';

import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100 });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xeokqkvk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        form.reset();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0" data-aos="fade-up">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Toast */}
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastClassName="backdrop-blur-sm bg-black/80 border border-gray-700"
        closeButton={false}
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <div className="flex items-center w-full justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap text-white animate-pulse-slow">
              Contact Me
            </h2>
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce-delayed-1" />
            <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-delayed-2" />
            <span className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce-delayed-3" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10" data-aos="fade-up">
          {/* Contact Info */}
          <div className="space-y-8 text-lg" data-aos="fade-up">
            <p className="text-xl leading-relaxed text-gray-300">
              Feel free to use the form or drop me an email. Old-fashioned phone calls work too.
            </p>
            <div className="space-y-6">
              <div className="flex items-center group p-3 rounded-xl transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-pink-500/10 border border-transparent hover:border-gray-700/50">
                <span className="text-2xl text-pink-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                  📞
                </span>
                <span className="group-hover:text-pink-300 group-hover:scale-110 transition-transform duration-300 transition-colors">
                  +1 (857) 269-9080
                </span>
              </div>
              <div className="flex items-center group p-3 rounded-xl transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 border border-transparent hover:border-gray-700/50">
                <span className="text-2xl text-purple-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                  ✉️
                </span>
                <span className="group-hover:text-purple-300 group-hover:scale-110 transition-transform duration-300 transition-colors">
                  danushgopinath8502@gmail.com
                </span>
              </div>
              <div className="flex items-center group p-3 rounded-xl transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/10 border border-transparent hover:border-gray-700/50">
                <span className="text-2xl text-indigo-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                  📍
                </span>
                <span className="group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300 transition-colors">
                  Boston, MA 02119, USA
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 relative ${formSubmitted ? 'form-submitted' : ''}`}
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                name="firstName"
                placeholder="First"
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                gradient="from-pink-400 to-purple-500"
              />
              <InputField
                name="lastName"
                placeholder="Last"
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                gradient="from-purple-400 to-indigo-500"
              />
            </div>

            <InputField
              name="email"
              type="email"
              placeholder="youremail@example.com"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              gradient="from-pink-400 to-purple-500"
            />

            <InputField
              name="phone"
              type="tel"
              placeholder="Phone (optional)"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              gradient="from-purple-400 to-indigo-500"
            />

            <InputField
              isTextArea
              name="message"
              placeholder="Type your message..."
              rows={5}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              gradient="from-indigo-400 to-pink-500"
            />

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative overflow-hidden group inline-block px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-lg md:text-xl text-black transition-all duration-500 ease-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl shadow-pink-500/20 hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 group-active:opacity-40 transition-opacity duration-300" />
              </button>
            </div>

            {formSubmitted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg z-20 animate-fadeIn">
                <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl transform animate-scaleIn">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-400 to-indigo-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300">Your message has been sent successfully.</p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Utility classes for button gradient animation */}
      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 100%;
        }
        .bg-pos-0 {
          background-position: 0% 0%;
        }
        .bg-pos-100 {
          background-position: 100% 0%;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s forwards;
        }
      `}</style>
    </section>
  );
}

// -------------------------------
// Reusable InputField component
// -------------------------------

type InputFieldProps = {
  name: string;
  placeholder: string;
  gradient: string;
  focusedInput: string | null;
  setFocusedInput: (v: string | null) => void;
  type?: string;
  rows?: number;
  isTextArea?: boolean;
};

function InputField({
  name,
  placeholder,
  gradient,
  focusedInput,
  setFocusedInput,
  type = 'text',
  rows,
  isTextArea,
}: InputFieldProps) {
  const sharedClasses = `w-full border border-gray-700 rounded-lg px-4 py-3 bg-white/5 backdrop-blur-sm focus:outline-none transition-all duration-300 ${
    focusedInput === name ? 'ring-2 border-transparent shadow-lg' : 'hover:border-gray-500'
  }`;

  const wrapperBorder = `absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-500 ${
    focusedInput === name ? 'w-full' : 'w-0'
  }`;

  return (
    <div className="relative" data-aos="fade-up">
      {isTextArea ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={!name.startsWith('phone')}
          onFocus={() => setFocusedInput(name)}
          onBlur={() => setFocusedInput(null)}
          className={sharedClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={!name.startsWith('phone')}
          onFocus={() => setFocusedInput(name)}
          onBlur={() => setFocusedInput(null)}
          className={sharedClasses}
        />
      )}
      <div className={wrapperBorder} />
    </div>
  );
}
