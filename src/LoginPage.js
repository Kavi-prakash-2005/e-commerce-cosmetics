import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Alert, Button, Form, Container, Row, Col } from 'react-bootstrap';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // At least 1 letter, 1 number, min 6 chars
    return /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long and include letters, numbers and a special character.');
    } else {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      navigate('/home');
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center py-5" 
      style={{ background: 'linear-gradient(to right, #e6e6fa, #dda0dd)' }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5} xl={4}>
          <div className="login-card shadow p-5 rounded bg-white">
            <div className="text-center mb-4">
              <h1 className="fw-bold text-lavender">✨ Glow Cosmetics</h1>
              <p className="text-muted">Beauty that lasts</p>
            </div>
            
            <h2 className="text-center mb-4 text-lavender">Welcome Back</h2>
            
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <Button type="submit" className="w-100 btn-lavender">
                Login
              </Button>

              <div className="mt-3 text-center">
                <Link to="/forgot-password" className="text-lavender text-decoration-none">
                  Forgot password?
                </Link>
              </div>
              
              <hr className="my-4" />
              
              <div className="text-center">
                <p className="text-muted mb-0">Don't have an account?</p>
                <Button variant="outline-lavender" className="w-100 mt-2">
                  Create Account
                </Button>
              </div>
            </Form>
          </div>
          
          <div className="text-center mt-3">
            <small className="text-muted">
              By logging in, you agree to our{' '}
              <Link to="/terms" className="text-lavender">Terms of Service</Link> and{' '}
              <Link to="/privacy" className="text-lavender">Privacy Policy</Link>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;