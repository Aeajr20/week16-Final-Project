import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., authentication)
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here (e.g., send data to backend, verify credentials)
    // Example:
    // if (username === 'admin' && password === 'password') {
    //   alert('Login successful!');
    // } else {
    //   alert('Invalid credentials. Please try again.');
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
