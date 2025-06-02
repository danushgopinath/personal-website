'use client';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <ToastContainer position="bottom-right" theme="dark" />
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center w-full justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500"></div>
            </div>
            <h2 className="text-4xl font-bold whitespace-nowrap">Contact Me</h2>
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500"></div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6 text-lg">
            <p>
              Feel free to use the form or drop me an email. Old-fashioned phone
              calls work too.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl text-pink-400 mr-4">📞</span>
                <span>+1 (857) 269-9080</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl text-pink-400 mr-4">✉️</span>
                <span>danushgopinath8502@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl text-pink-400 mr-4">📍</span>
                <span>Boston, MA 02119, USA</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message..."
              required
              className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-lg md:text-xl text-black transition-shadow shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
