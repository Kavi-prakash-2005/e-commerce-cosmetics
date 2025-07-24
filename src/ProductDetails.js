import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Tabs, Tab, Form } from 'react-bootstrap';

import './ProductDetails.css'; // Assuming you have a CSS file for custom styles
// Sample product data - in a real app, this would come from an API or database
const productList = [
  {
    id: '1',
    name: 'Lipstick',
    description: 'Long-lasting vibrant color that keeps your lips hydrated all day long. Our luxurious formula is enriched with vitamin E and jojoba oil for a smooth, comfortable feel.',
    details: 'Paraben-free, cruelty-free, and made with natural ingredients. Available in 12 vibrant shades to match any look or mood.',
    price: '$12',
    rating: 4.5,
    reviews: 124,
    image: 'https://static.vecteezy.com/system/resources/previews/002/085/141/original/tubes-of-lipstick-on-a-black-cloth-free-photo.jpg',
    images: ['https://static.vecteezy.com/system/resources/previews/002/085/141/original/tubes-of-lipstick-on-a-black-cloth-free-photo.jpg', 'https://th.bing.com/th/id/R.09a0d83b96b319133826422db39f14aa?rik=vIsSLNuHUF%2b7dg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flipstick-png-hd-lipstick-png-3573.png&ehk=CqUqNGy%2b3wR3Yqs5hpuhvqBCoMPfimzey5bSxSA9SuI%3d&risl=&pid=ImgRaw&r=0', 'https://static.vecteezy.com/system/resources/previews/010/495/328/original/colorful-lipstick-perspactive-vector.jpg'],
    colors: ['#FF0000', '#FF69B4', '#800000']
  },
  {
    id: '2',
    name: 'Eyeliner',
    description: 'Waterproof black liquid eyeliner with precision tip applicator for perfect winged liner every time.',
    details: 'Our smudge-proof formula stays put for up to 24 hours. The ultra-fine brush tip gives you complete control for thin or bold lines.',
    price: '$8',
    rating: 4.2,
    reviews: 98,
    image: 'https://th.bing.com/th/id/OIP.jXmUO064envxdH_ePUE24wHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    images: ['https://th.bing.com/th/id/OIP.jXmUO064envxdH_ePUE24wHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://th.bing.com/th/id/OIP.eTZ6dIkUhlkQ0V_rrYIScwHaHa?w=219&h=218&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://th.bing.com/th/id/OIP.G6olQnSs08nuDjx3KJBoKQHaHa?w=217&h=218&c=7&r=0&o=5&dpr=1.5&pid=1.7'],
    colors: ['#000000', '#614051', '#36454F']
  },
  {
    id: '3',
    name: 'Foundation',
    description: 'Full coverage, natural finish foundation that lasts all day without caking or settling into fine lines.',
    details: 'Available in 40 shades to match every skin tone. Oil-free formula is perfect for all skin types and provides medium to full coverage.',
    price: '$15',
    rating: 4.7,
    reviews: 215,
    image: 'https://th.bing.com/th/id/OIP.LQWqf0ry_HOjeKkwINW0DQHaHa?w=219&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    images: ['https://th.bing.com/th/id/OIP.LQWqf0ry_HOjeKkwINW0DQHaHa?w=219&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://th.bing.com/th/id/OIP.jEyAbhdCiY42k7R4LjDabAHaFH?w=254&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://th.bing.com/th/id/OIP.vaan29vA3LNR0RNeQqUOkgHaEJ?w=313&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'],
    colors: ['#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F']
  },
  {
    id: '4',
    name: 'Blush',
    description: 'Silky smooth powder blush that adds a natural flush of color to your cheeks.',
    details: 'Buildable formula allows you to create a subtle glow or a more dramatic look. Infused with antioxidants to nourish your skin.',
    price: '$10',
    rating: 4.3,
    reviews: 76,
    image: 'https://static.vecteezy.com/system/resources/previews/017/587/731/non_2x/blush-with-brush-illustration-free-free-vector.jpg',
    images: ['https://static.vecteezy.com/system/resources/previews/017/587/731/non_2x/blush-with-brush-illustration-free-free-vector.jpg', 'https://th.bing.com/th/id/OIP.jAl9qguUPolKa9xnUceELgHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://th.bing.com/th/id/OIP.KN7roj2RQleFP1fdCOgHEwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'],
    colors: ['#FF69B4', '#DB7093', '#FFC0CB']
  },
  {
    id: '5',
    name: 'Highlighter',
    description: 'Shimmer highlighter for a natural glow that catches the light beautifully.',
    details: 'Our finely milled powder gives a smooth application without emphasizing texture. Use on cheekbones, brow bone, and cupid\'s bow for a radiant glow.',
    price: '$14',
    rating: 4.6,
    reviews: 89,
    image: 'https://th.bing.com/th/id/OIP.vrdPHH3qSkzPu7A1IXsHcwHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    images: ['https://th.bing.com/th/id/OIP.vrdPHH3qSkzPu7A1IXsHcwHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://m.media-amazon.com/images/I/71waxZOAHLL.jpg', 'https://th.bing.com/th/id/OIP.6HOvVUquWIyKv7eMVx5SXAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5'],
    colors: ['#FFD700', '#FFF8DC', '#FFEBCD']
  },
  {
    id: '6',
    name: 'Mascara',
    description: 'Volumizing and lengthening mascara for dramatic lashes.',
    details: 'The unique brush design captures every lash from root to tip. Our formula builds volume without clumping or flaking.',
    price: '$9',
    rating: 4.4,
    reviews: 152,
    image: 'https://th.bing.com/th/id/OIP.WNWqbSJTgafvS8Vh1sPGhQHaJa?w=154&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    images: ['https://th.bing.com/th/id/OIP.WNWqbSJTgafvS8Vh1sPGhQHaJa?w=154&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://th.bing.com/th/id/OIP.WNWqbSJTgafvS8Vh1sPGhQHaJa?w=154&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7', 'https://th.bing.com/th/id/OIP.VkW8rcpTds9vJMkxyfaflwAAAA?w=129&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'],
    colors: ['#000000', '#36454F']
  }
];

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productList.find(p => p.id === id) || productList[0];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [mainImage, setMainImage] = useState(product.image);
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
      selectedColor: selectedColor
    });
    
    // Show confirmation message
    alert(`${product.name} has been added to your cart!`);
  };
  
  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity: quantity,
      selectedColor: selectedColor
    });
    navigate('/checkout');
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <div className="mb-3">
            <img
              src={mainImage}
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
          
          <Row className="g-2">
            {product.images.map((img, idx) => (
              <Col xs={4} key={idx}>
                <img
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  className="img-thumbnail cursor-pointer"
                  style={{ height: '80px', objectFit: 'cover' }}
                  onClick={() => setMainImage(img)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        
        <Col md={6}>
          <div className="ps-md-4">
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/home" className="text-decoration-none text-muted">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
              </ol>
            </nav>
            
            <h2 className="mb-2 text-lavender">{product.name}</h2>
            
            <div className="mb-3">
              <span className="me-2 text-warning">
                {'⭐'.repeat(Math.floor(product.rating))}
                {product.rating % 1 >= 0.5 ? '⭐' : ''}
              </span>
              <small className="text-muted">({product.rating}) | {product.reviews} Reviews</small>
            </div>
            
            <h3 className="text-lavender mb-3">{product.price}</h3>
            
            <p className="mb-4">{product.description}</p>
            
            <div className="mb-4">
              <label className="d-block mb-2">Color:</label>
              <div className="d-flex gap-2">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`color-option rounded-circle ${selectedColor === color ? 'border border-3 border-lavender' : ''}`}
                    style={{
                      backgroundColor: color,
                      width: '30px',
                      height: '30px',
                      cursor: 'pointer'
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">Quantity:</label>
              <div className="input-group" style={{ width: '150px' }}>
                <Button 
                  variant="outline-secondary" 
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </Button>
                <Form.Control
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-center"
                />
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="d-grid gap-2 d-md-flex mb-4">
              <Button 
                variant="lavender" 
                size="lg" 
                className="px-4 flex-fill"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline-lavender" 
                size="lg" 
                className="px-4 flex-fill"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
            
            <div className="d-flex gap-4 text-center text-muted small mt-4">
              <div>
                <div className="mb-1">🚚</div>
                <div>Free Shipping</div>
              </div>
              <div>
                <div className="mb-1">↩️</div>
                <div>30-Day Returns</div>
              </div>
              <div>
                <div className="mb-1">🔒</div>
                <div>Secure Checkout</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
      <div className="mt-5">
        <Tabs defaultActiveKey="details" className="mb-4">
          <Tab eventKey="details" title="Product Details">
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="mb-3">About this item</h4>
              <p>{product.details}</p>
            </div>
          </Tab>
          <Tab eventKey="reviews" title={`Reviews (${product.reviews})`}>
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="mb-3">Customer Reviews</h4>
              <p className="text-muted">Coming soon...</p>
            </div>
          </Tab>
          <Tab eventKey="shipping" title="Shipping & Returns">
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="mb-3">Shipping Information</h4>
              <p>Free standard shipping on all orders over $35.</p>
              <p>Standard shipping: 3-5 business days</p>
              <p>Express shipping: 1-2 business days (additional fee)</p>
              
              <h4 className="mb-3 mt-4">Return Policy</h4>
              <p>We accept returns within 30 days of purchase. Items must be unused and in original packaging.</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default ProductDetails;