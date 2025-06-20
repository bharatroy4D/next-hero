import React from 'react';

const ServicePage = () => {
  const services = [
    { title: 'Web Development', desc: 'Custom websites and apps with React and Next.js.' },
    { title: 'UI/UX Design', desc: 'Modern and intuitive interfaces for your users.' },
    { title: 'SEO Optimization', desc: 'Improve your visibility in search engines.' },
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="border p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
