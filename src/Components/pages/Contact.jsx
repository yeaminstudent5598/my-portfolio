import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    // This part manages the input fields' values
    const { name, value } = e.target;
    // We update state using the input's `id` or a custom logic, not its `name` attribute if they differ.
    // Let's use `id` to link to state keys.
    const stateKey = e.target.id; // e.g., id="name" updates formData.name
    setFormData(prevData => ({
        ...prevData,
        [stateKey]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_knjtvvc", // আপনার EmailJS Service ID
        "template_81873ly", // আপনার EmailJS Template ID
        e.target,
        "Cf9vEJJhpfRuNXCXs" // আপনার EmailJS Public Key
      )
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully. I will get back to you soon.',
          background: '#1f2937',
          color: '#ffffff',
          confirmButtonColor: '#10b981'
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          background: '#1f2937',
          color: '#ffffff',
          confirmButtonColor: '#ef4444'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Get in Touch
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-400">
              Fill up the form and I will get back to you within 24 hours. Or, you can reach me through the following channels.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FiMail className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">yeaminstudent5598@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">+880 1641 801705</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">Shariatpur Sadar, Shariatpur, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="name" // Used by handleChange to update state
                  type="text"
                  name="from_name" // **এই নামটি টেমপ্লেটের সাথে মিলতে হবে**
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-600 rounded-lg bg-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="email" // Used by handleChange to update state
                  type="email"
                  name="from_email" // **এই নামটি টেমপ্লেটের সাথে মিলতে হবে**
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-600 rounded-lg bg-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  id="message" // Used by handleChange to update state
                  name="message" // **এই নামটি টেমপ্লেটের সাথে মিলতে হবে**
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-600 rounded-lg bg-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  rows="6"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-lg shadow-sm hover:from-emerald-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;