"use client";
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { h1 } from 'framer-motion/client';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        form.current?.reset();
      },
      (err) => {
        console.log('FAILED...', err);
        alert(JSON.stringify(err)); // hello
      },
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <label className='-mb-2'>Name</label>
      <input type="text" name="user_name" required className="border p-2 text-white" />
      
      <label className='-mb-2'>Email</label>
      <input type="email" name="user_email" required className="border p-2 text-white" />
      
      <label className='-mb-2'>Message</label>
      <textarea name="message" required className="border p-2 text-white" />
      
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800/60 transition">
        Send Message
      </button>
    </form>
  );
}