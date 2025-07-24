import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CartPage({ cart, removeFromCart, updateQuantity }) {
  const navigate = useNavigate();

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    // Handle price correctly whether it's a string or number
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : item.price;
    
    return total + (price * item.quantity);
  }, 0);

  // Handle quantity change
  const handleQuantityChange = (index, change) => {
    const newQuantity = cart[index].quantity + change;
    if (newQuantity >= 1) {
      updateQuantity(index, newQuantity);
    }
  };

  // Proceed to checkout
  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  // Return to shopping
  const continueShopping = () => {
    navigate('/home');
  };

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Card className="shadow-sm p-5">
          <Card.Body>
            <div className="mb-4">
              <span className="display-5">🛒</span>
            </div>
            <h2 className="mb-4">Your Cart is Empty</h2>
            <p className="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
            <Button variant="lavender" onClick={continueShopping}>
              Browse Products
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="text-center text-lavender mb-4">🛒 Shopping Cart</h2>
      
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <ListGroup variant="flush">
                {cart.map((item, index) => {
                  // Handle price correctly
                  const price = typeof item.price === 'string' 
                    ? parseFloat(item.price.replace('$', '')) 
                    : item.price;
                  
                  return (
                    <ListGroup.Item key={index} className="py-3">
                      <Row className="align-items-center">
                        <Col xs={3} md={2}>
                          <Image src={item.image || "https://via.placeholder.com/100"} alt={item.name} fluid rounded />
                        </Col>
                        <Col xs={9} md={4}>
                          <h5 className="mb-1">{item.name}</h5>
                          <p className="text-muted small mb-0">{item.description}</p>
                        </Col>
                        <Col xs={6} md={3} className="mt-3 mt-md-0">
                          <div className="d-flex align-items-center">
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={() => handleQuantityChange(index, -1)}
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={() => handleQuantityChange(index, 1)}
                            >
                              +
                            </Button>
                          </div>
                        </Col>
                        <Col xs={6} md={2} className="text-end mt-3 mt-md-0">
                          <p className="fw-bold mb-0">${(price * item.quantity).toFixed(2)}</p>
                        </Col>
                        <Col xs={12} md={1} className="text-end mt-3 mt-md-0">
                          <Button 
                            variant="link" 
                            className="text-danger p-0"
                            onClick={() => removeFromCart(index)}
                          >
                            ✕
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
          
          <div className="d-flex justify-content-between">
            <Button variant="outline-lavender" onClick={continueShopping}>
              Continue Shopping
            </Button>
          </div>
        </Col>
        
        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold text-lavender">${cartTotal.toFixed(2)}</span>
              </div>
              
              <Button 
                variant="lavender" 
                className="w-100"
                onClick={proceedToCheckout}
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </Button>
              
              <div className="mt-3">
                <div className="d-flex align-items-center mb-2">
                  <div className="text-success me-2">✓</div>
                  <small className="text-muted">Secure payment</small>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-success me-2">✓</div>
                  <small className="text-muted">Money back guarantee</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;