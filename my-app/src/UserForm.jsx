import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', form);
    // Add your submit logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-6 max-w-2xl ml-auto  space-y-6 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div>
          <label className="block text-black mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Evan"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Right column */}
        <div>
          <label className="block text-black mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Microsoft"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Left column: Email */}
        <div>
          <label className="block text-black mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="evan@microsoft.com"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Right column: Phone */}
        <div>
          <label className="block text-black mb-1">Your Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your number phone"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      <div className="mt-8 text-right">
        {/* <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Submit
        </button> */}
      </div>
    </form>
  );
}
