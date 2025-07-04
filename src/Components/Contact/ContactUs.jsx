import React from 'react';
import { User, Mail, Phone, Calendar, PencilLine, Send, PhoneCall } from 'lucide-react';

const ContactUsForm = () => {
  return (
    <section className="bg-[#f8f5ef]  py-16 px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-[#4e2c17] flex justify-center items-center gap-2">
          Contact us <PhoneCall className="w-6 h-6" />
        </h1>
        <p className="text-gray-700 text-sm mt-2">
          Have questions or need support? Get in touch with our team – <br/> we’re here to help!
        </p>
      </div>

      <form className="max-w-3xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-800 mb-1">Full name</label>
            <div className="flex items-center border border-gray-400 rounded px-3 py-2 bg-white">
              <User className="w-4 h-4 mr-2 text-gray-600" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your name"
                required
                className="w-full rounded-xl outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-800 mb-1">Email address</label>
            <div className="flex items-center border border-gray-400 rounded px-3 py-2 bg-white">
              <Mail className="w-4 h-4 mr-2 text-gray-600" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-800 mb-1">Phone number</label>
            <div className="flex items-center border border-gray-400 rounded px-3 py-2 bg-white">
              <Phone className="w-4 h-4 mr-2 text-gray-600" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 234 567 890"
                required
                className="w-full rounded-xl outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="schedule" className="text-sm font-medium text-gray-800 mb-1">Schedule to receive call</label>
            <div className="flex items-center border border-gray-400 rounded px-3 py-2 bg-white">
              <Calendar className="w-4 h-4 mr-2 text-gray-600" />
              <input
                type="datetime-local"
                id="schedule"
                name="schedule"
                className="w-full rounded-xl outline-none text-sm bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-800 mb-1">Message</label>
          <div className="flex items-start border border-gray-400 rounded px-3 py-2 bg-white">
            <PencilLine className="w-4 h-4 mr-2 mt-1 text-gray-600" />
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full rounded-xl outline-none text-sm bg-transparent resize-none"
            />
          </div>
        </div>

        <div className="text-left">
          <button
            type="submit"
            className="bg-[#4e2c17] text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-[#3d2412] transition-all"
          >
            Submit <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;
