import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import emailjs-com

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(
      "service_knjtvvc",   // Replace with your EmailJS Service ID
      "template_81873ly",  // Replace with your EmailJS Template ID
      e.target,
      "Cf9vEJJhpfRuNXCXs"    // Replace with your EmailJS Public Key
    )
    .then((result) => {
      console.log("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
  };

  return (
    <section id="contact" className="bg-gray-900 mt-20 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg mt-4">I would love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message below.</p>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-300">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-300">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-300">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Write your message here"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-6 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
