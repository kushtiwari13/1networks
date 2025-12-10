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
  <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2">
    {/* Left Side - Title */}
    <div className="text-left">
      <h2 className="mb-4 text-4xl font-bold text-gray-900">
        Contact <span className="text-red-600">Us</span>
      </h2>
      <p className="text-lg leading-relaxed text-gray-600">
        Let's discuss your network goals and transform your infrastructure
        with expert solutions tailored just for you.
      </p>
    </div>

    {/* Right Side - Boxes */}
    <div className="flex flex-col space-y-6">
      {/* Contact Info */}
      <div className="p-6 text-center text-white bg-gray-900 border-2 shadow-md rounded-2xl">
        <h3 className="mb-3 text-xl font-semibold text-red-600">Get in Touch</h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-300">
          Ready to transform your network infrastructure? Our experts are
          here to help.
        </p>
        <div className="space-y-1">
          <h4 className="flex items-center justify-center gap-2 text-sm font-medium text-gray-100">
            <FaEnvelope aria-hidden="true" className="text-400" />
            <span>Email</span>
          </h4>
          <a
            href="mailto:info@1networks.in"
            className="block text-sm text-center transition hover:text-red-300"
          >
            info@1networks.in
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 border border-gray-300 shadow-lg bg-white/80 backdrop-blur rounded-2xl">
        <h3 className="mb-1 text-lg font-semibold">Send us a Message</h3>
        <p className="mb-4 text-sm text-gray-700">
          Ready to upgrade your network? Let's talk.
        </p>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-3">
          <input
            type="text"
            name="from_name"
            placeholder="Your full name"
            required
            className="w-full p-3 text-sm border rounded-lg"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 text-sm border rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            className="w-full p-3 text-sm border rounded-lg"
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Tell us about your network requirements..."
            required
            className="w-full p-3 text-sm border rounded-lg"
          ></textarea>

          <button
            type="submit"
            disabled={status.sending}
            className="w-full py-2 text-white transition bg-red-600 rounded-lg hover:bg-red-700"
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
