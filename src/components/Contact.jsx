// src/components/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID,
      )
      .then(
        () => {
          toast.success(
            "Thank you for your message! I'll respond as soon as possible.",
          );
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Please try again later.");
          console.error("Failed to send message: ", error.text);
        },
      );
  };

  return (
    <section
      className="bg-gray-900 text-gray-100 py-20 mt-[-10px]"
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Contact Information */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4 text-indigo-300">
              Let's Connect
            </h3>
            <p>
              Whether you have a question, an opportunity, or just want to say
              hi, feel free to reach out. I’m excited to connect and grow in the
              world of web development.
            </p>

            <div className="mb-4 mt-8 flex items-center gap-2">
              <FaEnvelope aria-hidden="true" className="text-sky-400" />
              <a
                href="mailto:mohammedabdulabi@gmail.com?subject=Inquiry&body=Hi Mohammed, I would like to discuss..."
                className="hover:underline text-indigo-400"
                aria-label="Send an email to Mohammed Abdul Abi"
              >
                mohammedabdulabi@gmail.com
              </a>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <FaPhone aria-hidden="true" className="text-sky-400" />
              <span aria-label="Phone number">+47 458 45 550</span>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <FaMapMarkedAlt aria-hidden="true" className="text-sky-400" />
              <span aria-label="Location">
                Niels Juels gate 87, 4008 Stavanger
              </span>
            </div>
          </div>

          {/* Contact Form - Currently Commented Out */}
          {/*
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  autoComplete="off"
                  placeholder="Write your message here"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
          */}
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
