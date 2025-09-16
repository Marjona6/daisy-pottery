import React, { useState } from 'react';
import { CONTACT_FORM_ENDPOINT } from '../utils';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // URL-encode form data for x-www-form-urlencoded submission
  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      // Reset inputs
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus((prev) => ({
        ...prev,
        submitting: false,
        info: { error: true, msg },
      }));
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, submitting: true, info: { error: false, msg: null } }));

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          // Not strictly required by Formspree, but harmless to include
          'form-name': 'contact',
          name,
          email, // Formspree captures this as the reply-to
          message,
          subject: 'New Lead on The Little Yorkshire Pottery',
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
      handleServerResponse(true, 'Thank you, your message has been submitted.');
    } catch (error) {
      handleServerResponse(false, error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="container mx-auto flex flex-col px-10 py-20 items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-prussian-blue">
          Send me a message
        </h1>
        <form
          name="contact"
          onSubmit={handleOnSubmit}
          className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-prussian-blue">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded border border-gray-700 focus:border-verdigris focus:ring-2 focus:ring-verdigris text-base outline-none text-oxford-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-prussian-blue">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded border border-gray-700 focus:border-verdigris focus:ring-2 focus:ring-verdigris text-base outline-none text-oxford-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-prussian-blue">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded border border-gray-700 focus:border-verdigris focus:ring-2 focus:ring-verdigris h-32 text-base outline-none text-oxford-blue py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          {status.info.msg && (
            <p className={`mb-4 text-sm ${status.info.error ? 'text-red-600' : 'text-green-600'}`}>
              {status.info.msg}
            </p>
          )}

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={status.submitting}
              className="bg-prussian-blue hover:bg-verdigris text-white border-0 py-2 px-6 focus:outline-none rounded text-lg w-full md:w-fit disabled:opacity-60"
            >
              {status.submitting ? 'Submitting...' : status.submitted ? 'Submitted' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
