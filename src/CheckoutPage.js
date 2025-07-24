import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, ListGroup, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CheckoutPage({ cart, clearCart }) {
  const [validated, setValidated] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cardConfirmed, setCardConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  
  const navigate = useNavigate();

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    // Handle price correctly whether it's a string or number
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : item.price;
    
    return total + (price * item.quantity);
  }, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle confirmation of card details
  const confirmCardDetails = (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setCardConfirmed(true);
  };

  // Handle payment and order submission
  const placeOrder = () => {
    if (typeof clearCart !== 'function') {
      console.error("clearCart is not a function:", clearCart);
      return;
    }
    
    // Handle order submission
    setOrderPlaced(true);
    clearCart();
    
    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <Container className="py-5 text-center">
        <div className="bg-white p-5 rounded shadow">
          <div className="display-1 text-success mb-4">✓</div>
          <h2 className="mb-4">Thank You for Your Order!</h2>
          <p className="mb-4">Your order has been placed successfully. You will receive a confirmation email shortly.</p>
          <p className="text-muted mb-4">Order #: {Math.floor(Math.random() * 10000000)}</p>
          <Button variant="lavender" onClick={() => navigate('/home')}>
            Continue Shopping
          </Button>
        </div>
      </Container>
    );
  }

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="warning">
          Your cart is empty. Please add products before checkout.
        </Alert>
        <Button variant="lavender" onClick={() => navigate('/home')}>
          Browse Products
        </Button>
      </Container>
    );
  }

  // Card details confirmation step
  if (cardConfirmed) {
    return (
      <Container className="py-5">
        <h2 className="text-center text-lavender mb-4">💳 Confirm Payment</h2>
        
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body className="text-center">
                <h5 className="mb-4">Payment Details</h5>
                
                <div className="border p-3 rounded mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Card Number:</span>
                    <span>**** **** **** {formData.cardNumber.slice(-4)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Card Type:</span>
                    <span>{formData.cardNumber.startsWith('4') ? 'Visa' : 
                           formData.cardNumber.startsWith('5') ? 'MasterCard' : 
                           'Credit Card'}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Name:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Shipping Address:</span>
                    <span>{formData.address}, {formData.city}</span>
                  </div>
                </div>
                
                <div className="border p-3 rounded mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span className="text-success">Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="fw-bold">Total:</span>
                    <span className="fw-bold text-lavender">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <p className="text-muted mb-4">
                  By clicking "Complete Payment", you agree to our terms and conditions.
                </p>
                
                <div className="d-grid gap-2">
                  <Button variant="lavender" onClick={placeOrder}>
                    Complete Payment
                  </Button>
                  <Button variant="outline-secondary" onClick={() => setCardConfirmed(false)}>
                    Edit Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  
  return (
    <Container className="py-5">
      <h2 className="text-center text-lavender mb-4">💳 Checkout</h2>
      
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Shipping & Billing Information</h5>
              
              <Form noValidate validated={validated} onSubmit={confirmCardDetails}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Shipping Address</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your shipping address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required 
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP/Postal Code</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required 
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your ZIP code.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Country</Form.Label>
                  <Form.Select 
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select country</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select your country.
                  </Form.Control.Feedback>
                </Form.Group>

                <h5 className="mb-3">Payment Method</h5>
                
                <Form.Group className="mb-4">
                  <Form.Check
                    type="radio"
                    id="credit-card"
                    name="paymentMethod"
                    value="credit-card"
                    label="Credit Card"
                    onChange={handleChange}
                    required
                    checked={formData.paymentMethod === 'credit-card'}
                  />
                  
                  <Form.Check
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    label="PayPal"
                    onChange={handleChange}
                    checked={formData.paymentMethod === 'paypal'}
                  />
                  
                  <Form.Control.Feedback type="invalid">
                    Please select a payment method.
                  </Form.Control.Feedback>
                </Form.Group>

                {(formData.paymentMethod === 'credit-card' || formData.paymentMethod === '') && (
                  <div className="border p-3 rounded mb-4">
                    <Row>
                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Card Number</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="XXXX XXXX XXXX XXXX" 
                            required={formData.paymentMethod === 'credit-card' || formData.paymentMethod === ''}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid card number.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY" 
                            required={formData.paymentMethod === 'credit-card' || formData.paymentMethod === ''}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid expiry date.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="XXX" 
                            required={formData.paymentMethod === 'credit-card' || formData.paymentMethod === ''}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid CVV.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}

                <Button variant="lavender" type="submit" className="w-100">
                  Proceed to Payment Confirmation
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="shadow-sm mb-4">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <ListGroup variant="flush">
              {cart.map((item, index) => {
                // Handle price correctly whether it's a string or number
                const price = typeof item.price === 'string' 
                  ? parseFloat(item.price.replace('$', '')) 
                  : item.price;
                
                return (
                  <ListGroup.Item key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-medium">{item.name}</span>
                        <span className="text-muted d-block">Qty: {item.quantity}</span>
                      </div>
                      <span>${(price * item.quantity).toFixed(2)}</span>
                    </div>
                  </ListGroup.Item>
                );
              })}
              
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span className="text-success">Free</span>
                </div>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span className="text-lavender">${cartTotal.toFixed(2)}</span>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          
          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="text-success me-2">✓</div>
                <div>
                  <small className="text-muted">All transactions are secure and encrypted.</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="text-success me-2">✓</div>
                <div>
                  <small className="text-muted">Your personal information is private.</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutPage;