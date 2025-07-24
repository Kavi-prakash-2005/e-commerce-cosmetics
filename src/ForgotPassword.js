import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    setSuccess('Password reset instructions sent to your email!');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card shadow p-5 rounded bg-white">
        <h2 className="text-center mb-4 text-lavendar">Forgot Password</h2>
        <Form onSubmit={handleReset}>
          <Form.Group className="mb-3">
            <Form.Label>Enter your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {success && <Alert variant="success">{success}</Alert>}

          <Button type="submit" className="w-100 btn-lavendar">Send Reset Link</Button>
        </Form>
      </div>
    </div>
  );
}

export default ForgotPassword;
