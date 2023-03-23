import React, { useState } from 'react';

function Signup() {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { firstName, lastName, email, password };
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} /></label>
        <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> </label>
        <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;