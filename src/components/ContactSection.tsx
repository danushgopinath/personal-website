// components/ContactSection.tsx
'use client';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ─────────────── Left: Info ─────────────── */}
        <div>
          <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
          <div className="h-1 w-24 bg-cyan-500 mb-6 rounded" />

          <p className="text-lg mb-6">
            Feel free to use the form or drop me an email. Old-fashioned phone
            calls work too.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl text-cyan-500 mr-4">📞</span>
              <span className="text-lg">+1 (617) 555-1234</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl text-cyan-500 mr-4">✉️</span>
              <span className="text-lg">
                danush.gopinath@northeastern.edu
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl text-cyan-500 mr-4">📍</span>
              <span className="text-lg">Boston, MA 02115, USA</span>
            </div>
          </div>
        </div>

        {/* ─────────────── Right: Form ─────────────── */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: hook up your form handler here
          }}
        >
          {/* Name split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Phone (optional) */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
