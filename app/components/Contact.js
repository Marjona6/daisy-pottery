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

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    fetch(CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
        subject: 'New Lead on The Little Yorkshire Pottery',
      }),
    })
      .then((response) => {
        handleServerResponse(true, 'Thank you, your message has been submitted.');
      })
      .catch((error) => {
        console.log({ error });
        handleServerResponse(false, error);
      });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
        subject: 'New Lead on The Little Yorkshire Pottery',
      }),
    })
      .then(() => alert('Message sent!'))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
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
              onChange={(e) => setName(e.target.value)}
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
              name="_replyto"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded border border-gray-700 focus:border-verdigris focus:ring-2 focus:ring-verdigris h-32 text-base outline-none text-oxford-blue py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-prussian-blue text-white border-0 py-2 px-6 focus:outline-none rounded text-lg w-full md:w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
