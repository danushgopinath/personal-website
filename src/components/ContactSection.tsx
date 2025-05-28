'use client';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center w-full justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500 relative"></div>
            </div>
            <h2 className="text-4xl font-bold whitespace-nowrap">Contact Me</h2>
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500 relative"></div>
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
          {/* ───── Left: Info ───── */}
          <div className="space-y-6">
            <p className="text-lg">
              Feel free to use the form or drop me an email. Old-fashioned phone
              calls work too.
            </p>

            <div className="space-y-4 text-lg">
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

          {/* ───── Right: Form ───── */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: hook up form logic
            }}
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Message */}
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-lg md:text-xl text-black hover:opacity-90 transition-shadow shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
