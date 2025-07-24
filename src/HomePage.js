import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Badge,
  Toast,
  ToastContainer
} from 'react-bootstrap';

// Sample product data - Fixed price format to be a number instead of string
const products = [
  {
    id: "1",
    name: "Lipstick",
    description: "Long-lasting vibrant color",
    price: 12,
    rating: 4.5,
    image: "https://static.vecteezy.com/system/resources/previews/002/085/141/original/tubes-of-lipstick-on-a-black-cloth-free-photo.jpg"
  },
  {
    id: "2",
    name: "Eyeliner",
    description: "Waterproof black liquid eyeliner",
    price: 8,
    rating: 4.2,
    image: "https://cdn0.woolworths.media/content/wowproductimages/large/749401.jpg"
  },
  {
    id: "3",
    name: "Foundation",
    description: "Full coverage, natural finish foundation",
    price: 15,
    rating: 4.7,
    image: "https://th.bing.com/th/id/OIP.LQWqf0ry_HOjeKkwINW0DQHaHa?w=219&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: "4",
    name: "Blush",
    description: "Silky smooth powder blush",
    price: 10,
    rating: 4.3,
    image: "https://static.vecteezy.com/system/resources/previews/017/587/731/non_2x/blush-with-brush-illustration-free-free-vector.jpg"
  },
  {
    id: "5",
    name: "Highlighter",
    description: "Shimmer highlighter for a natural glow",
    price: 14,
    rating: 4.6,
    image: "https://th.bing.com/th/id/OIP.vrdPHH3qSkzPu7A1IXsHcwHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: "6",
    name: "Mascara",
    description: "Volumizing and lengthening mascara",
    price: 9,
    rating: 4.4,
    image: "https://th.bing.com/th/id/OIP.WNWqbSJTgafvS8Vh1sPGhQHaJa?w=154&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  }
];

// Carousel items
const carouselItems = [
  {
    id: 1,
    title: "Best Sellers",
    subtitle: "Top rated by our customers",
    img: "https://c8.alamy.com/comp/F2H3RN/best-sellers-showing-number-one-and-text-F2H3RN.jpg"
  },
  {
    id: 2,
    title: "Summer Sale",
    subtitle: "Up to 30% off!",
    img: "https://images.vexels.com/media/users/3/143332/raw/449082e6f92815664ca4c60d75da27d9-summer-sale-design-with-elements.jpg"
  }
];

function HomePage({ addToCart, cart }) {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    if (typeof addToCart !== 'function') {
      console.error("addToCart is not a function:", addToCart);
      return;
    }
    
    // Create a copy with the correct format for the cart
    const cartProduct = {
      ...product,
      // Make sure price is a number
      price: typeof product.price === 'string' 
        ? parseFloat(product.price.replace('$', '')) 
        : product.price
    };
    
    console.log("Adding product to cart:", cartProduct);
    addToCart(cartProduct);
    
    // Show toast notification
    setAddedProduct(product.name);
    setShowToast(true);
  };
  
  const cartItemCount = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <Container className="py-4">
      {/* Toast Notification */}
      <ToastContainer className="p-3" position="top-end">
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={3000} 
          autohide
          bg="success"
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Added to Cart</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {addedProduct} was added to your cart!
            <div className="mt-2">
              <Button 
                size="sm" 
                variant="light" 
                onClick={() => navigate('/cart')}
              >
                View Cart ({cartItemCount})
              </Button>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Cart Badge */}
      <div className="text-end mb-3">
        <Button 
          variant="outline-lavender" 
          onClick={() => navigate('/cart')}
        >
          🛒 Cart
          {cartItemCount > 0 && (
            <Badge bg="lavender" className="ms-2">{cartItemCount}</Badge>
          )}
        </Button>
      </div>

      {/* Carousel */}
      <Carousel className="mb-5 shadow">
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.img}
              alt={item.title}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>


      {/* Products */}
        <section>
          <h3 className="mb-4 fw-bold text-lavender">🛒 Popular Cosmetics</h3>
          <Row className="g-4">
            {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Card className="h-100 shadow-sm border-0 product-card">
              <Card.Img variant="top" src={product.image} className="p-3" height="200" />
              <Card.Body>
            <Card.Title className="fw-semibold">{product.name}</Card.Title>
            <Card.Text className="text-muted mb-1">{product.description}</Card.Text>
            <Card.Text className="fw-bold mb-1">${product.price.toFixed(2)}</Card.Text>
            <Card.Text className="small text-warning mb-3">
              {'⭐'.repeat(Math.floor(product.rating))}
              {product.rating % 1 >= 0.5 ? '⭐' : ''}
              <span className="text-muted ms-2">({product.rating})</span>
            </Card.Text>
            <div className="d-grid gap-2">
              <Button 
                variant="lavender" 
                onClick={() => handleAddToCart(product)}
                style={{
              backgroundColor: '#6f42c1',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 15px',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
                }}
                className="hover-effect"
              >
                Add to Cart
              </Button>
              <Link 
                to={`/product/${product.id}`} 
                className="btn btn-outline-lavender"
                style={{
              backgroundColor: 'lavender',
              borderRadius: '8px',
              padding: '10px 15px',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
                }}
              >
                View Details
              </Link>
            </div>
              </Card.Body>
            </Card>
          </Col>
            ))}
          </Row>
        </section>

        {/* Newsletter */}
      <section className="my-5 p-4 bg-white shadow rounded">
        <Row className="align-items-center">
          <Col md={6}>
            <h3 className="text-lavender">Subscribe to our Newsletter</h3>
            <p className="text-muted">Get the latest updates on new products and upcoming sales</p>
          </Col>
          <Col md={6}>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email address" />
              <Button variant="lavender">Subscribe</Button>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default HomePage;