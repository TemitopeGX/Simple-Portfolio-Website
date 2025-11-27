import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', { email, message })
      .then(response => {
        alert('Message sent successfully');
      })
      .catch(error => {
        alert('Message sending failed');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
      <label>Message:</label>
      <textarea value={message} onChange={e => setMessage(e.target.value)} required></textarea>
      <button type='submit'>Send</button>
    </form>
  );
};

export default Contact;