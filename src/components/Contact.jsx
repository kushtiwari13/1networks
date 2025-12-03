import { useRef, useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: "" });

    try {
      const emailjs = await import("emailjs-com");
      await emailjs.default.sendForm(
        "service_d9fnf5s",
        "template_7owb9ao",
        formRef.current,
        "lVxA2r26bLwNO0oNy"
      );
      setStatus({
        sending: false,
        ok: true,
        msg: "Message sent! We'll get back soon.",
      });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        sending: false,
        ok: false,
        msg: "Failed to send. Please try again.",
      });
    }
  };

  return (
    <section
  id="contact"
  className="relative bg-[#f5f5f5] pt-24 pb-20 px-6 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Side - Title */}
    <div className="text-left">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Contact <span className="text-red-600">Us</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Let's discuss your network goals and transform your infrastructure
        with expert solutions tailored just for you.
      </p>
    </div>

    {/* Right Side - Boxes */}
    <div className="flex flex-col space-y-6">
      {/* Contact Info */}
      <div className="bg-gray-900 text-white border-2 rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-xl font-semibold text-red-600 mb-3">Get in Touch</h3>
        <p className="text-gray-300 text-sm mb-5 leading-relaxed">
          Ready to transform your network infrastructure? Our experts are
          here to help.
        </p>
        <div className="space-y-1">
          <h4 className="flex items-center gap-2 justify-center text-sm font-medium text-gray-100">
            <FaEnvelope aria-hidden="true" className="text-400" />
            <span>Email</span>
          </h4>
          <a
            href="mailto:info@1nw"
            className="text-sm hover:text-red-300 transition block text-center"
          >
            info@1nw
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white/80 backdrop-blur border border-gray-300 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-1">Send us a Message</h3>
        <p className="text-sm text-gray-700 mb-4">
          Ready to upgrade your network? Let's talk.
        </p>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-3">
          <input
            type="text"
            name="from_name"
            placeholder="Your full name"
            required
            className="w-full p-3 border rounded-lg text-sm"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg text-sm"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            className="w-full p-3 border rounded-lg text-sm"
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Tell us about your network requirements..."
            required
            className="w-full p-3 border rounded-lg text-sm"
          ></textarea>

          <button
            type="submit"
            disabled={status.sending}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            {status.sending ? "Sending…" : "Send Message"}
          </button>

          {status.ok !== null && (
            <p
              className={`text-sm mt-2 ${
                status.ok ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>

  );
}
