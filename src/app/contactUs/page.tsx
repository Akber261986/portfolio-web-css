'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setMessage(`Your Message sent successfully`)
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setMessage("")
        }, 4000);
      } else {
        setError('Failed to send message');
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form');
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };
  
  return (
    <section id="contact" className={'contactSection'}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className={'contactForm'}>
        <div className={'formGroup'}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={'formGroup'}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={'formGroup'}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>
        {message && <div className='text-center text-green-500'>{message}</div>}
        {error && <div className='text-center text-red-500'>{error}</div>}

        <button type="submit" className={'submitButton'}>
          Send Message
        </button>
      </form>
      <div className="social">
          <Link href="https://www.linkedin.com/in/ghulam-akber-8221052bb/" target="_blank" rel="noopener noreferrer"
          >
            <Image 
            src={"/images/svg/linkedin-brands-solid.svg"}
            alt='LinkedIn'
            width={50}
            height={1}
            />
          </Link>
          <Link href="https://github.com/Akber261986" target="_blank" rel="noopener noreferrer"
          >
            <Image 
            src={"/images/svg/github-brands-solid.svg"}
            alt='GitHub'
            width={50}
            height={1}
            />
          </Link>
          <Link href="https://web.facebook.com/ghulam.dal?mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"
          >
            <Image 
            src={"/images/svg/facebook-brands-solid.svg"}
            alt='Facebook'
            width={50}
            height={1}
            />
          </Link>
        </div>
    </section>
  );
};

export default ContactUs;
