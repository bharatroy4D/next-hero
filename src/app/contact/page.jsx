import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-16 px-4 max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="p-3 border rounded"
        ></textarea>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
