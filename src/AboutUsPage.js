import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

// Mock Bootstrap components since we don't have them available
const Container = ({ children, className }) => <div className={`container ${className || ''}`}>{children}</div>;
const Row = ({ children, className }) => <div className={`row ${className || ''}`}>{children}</div>;
const Col = ({ children, className, md, lg }) => {
  const colClasses = [];
  if (md) colClasses.push(`col-md-${md}`);
  if (lg) colClasses.push(`col-lg-${lg}`);
  return <div className={`${colClasses.join(' ')} ${className || ''}`}>{children}</div>;
};
const Card = ({ children, className }) => <div className={`card ${className || ''}`}>{children}</div>;
Card.Body = ({ children, className }) => <div className={`card-body ${className || ''}`}>{children}</div>;
Card.Title = ({ children, className }) => <h5 className={`card-title ${className || ''}`}>{children}</h5>;
Card.Text = ({ children }) => <p className="card-text">{children}</p>;
const Button = ({ children, variant, className }) => <button className={`btn btn-${variant} ${className || ''}`}>{children}</button>;

function AboutUsPage() {
  const team = [
    {
      name: 'Ravi',
      position: 'Founder & CEO',
      bio: 'Emily founded Glow Cosmetics with a vision to create high-quality, cruelty-free beauty products that help everyone feel confident in their own skin.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Product Development',
      bio: 'With over 15 years in cosmetic chemistry, Michael leads our team in creating innovative formulas that are both effective and gentle on the skin.',
      image: 'https://img.freepik.com/premium-photo/man-image_1148666-2836.jpg'
    },
    {
      name: 'Sophia Rodriguez',
      position: 'Marketing Director',
      bio: 'Sophia brings her passion for beauty and digital marketing expertise to connect our products with beauty enthusiasts around the world.',
      image: 'https://th.bing.com/th/id/OIP.at6t_BEWYqb5J4CsbyRYCgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    }
  ];

  // Define social media icons with their components
  const socialMedia = [
    { name: 'Instagram', icon: <Instagram size={24} /> },
    { name: 'Facebook', icon: <Facebook size={24} /> },
    { name: 'TikTok', icon: <TikTokIcon size={24} /> },
    { name: 'YouTube', icon: <Youtube size={24} /> }
  ];

  // Custom TikTok icon since it's not in Lucide
  function TikTokIcon({ size = 24 }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    );
  }

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Our Story</h1>
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          <p className="lead">
            At Glow Cosmetics, we believe that beauty products should enhance your natural radiance.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <Row className="align-items-center mb-5">
        <Col lg={6}>
          <img 
            src="https://th.bing.com/th/id/OIP.6e1wZA10gi6yl-mMUh8ilgHaC9?rs=1&pid=ImgDetMain" 
            alt="About Glow Cosmetics" 
            className="img-fluid rounded shadow mb-4 mb-lg-0"
          />
        </Col>
        <Col lg={6}>
          <div className="ps-lg-4">
            <h2 className="mb-3">From Passion to Beauty Empire</h2>
            <p>
              Founded in 2018, Glow Cosmetics began as a small passion project in Emily Johnson's kitchen. 
              Frustrated by the lack of affordable, high-quality cosmetics that were also ethically produced, 
              Emily set out to create her own line of products that met her high standards.
            </p>
            <p>
              What started as handcrafted lip balms for friends and family quickly grew into a full range of 
              cosmetics that gained popularity for their quality, vibrant colors, and commitment to cruelty-free 
              practices. Today, we're proud to offer over 200 products that help our customers express their 
              unique beauty.
            </p>
            <p>
              Our journey has been guided by a simple philosophy: everyone deserves to feel beautiful in their 
              own skin, and beauty products should enhance, not mask, your natural radiance.
            </p>
          </div>
        </Col>
      </Row>

      {/* Our Values */}
      <div className="py-5">
        <h2 className="text-center mb-5">Our Values</h2>
        <Row className="g-4">
          {[
            {
              icon: '🌿',
              title: 'Sustainability',
              description: 'We are committed to reducing our environmental footprint through eco-friendly packaging and sustainable sourcing practices.'
            },
            {
              icon: '❤️',
              title: 'Cruelty-Free',
              description: 'All of our products are 100% cruelty-free. We never test on animals and work only with ethical suppliers.'
            },
            {
              icon: '🌈',
              title: 'Inclusivity',
              description: 'Beauty comes in all colors, shapes, and sizes. We create products that celebrate diversity and make everyone feel included.'
            },
            {
              icon: '✨',
              title: 'Quality',
              description: 'We never compromise on quality. Our products are carefully formulated with premium ingredients for exceptional results.'
            }
          ].map((value, idx) => (
            <Col md={3} key={idx}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body>
                  <div className="display-4 mb-3">{value.icon}</div>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Meet the Team */}
      <div className="py-5">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <Row className="g-4">
          {team.map((member, idx) => (
            <Col md={4} key={idx}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="text-center pt-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="mb-1">{member.name}</Card.Title>
                  <div className="mb-3">{member.position}</div>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Our Promise */}
      <div className="bg-white p-5 rounded shadow-sm mt-5 text-center">
        <h2 className="mb-4">Our Promise to You</h2>
        <p className="lead mb-0">
          We're dedicated to helping you look and feel your best. With every Glow Cosmetics product, 
          we promise quality, safety, and results you can see and feel. Our commitment extends beyond 
          beauty to building a community that celebrates authenticity and self-expression.
        </p>
      </div>

      {/* Join Our Community with Social Media Icons */}
      <div className="py-5 text-center">
        <h2 className="mb-4">Join Our Community</h2>
        <p className="lead mb-4">
          Stay updated on new products, beauty tips, and exclusive offers by joining our newsletter.
        </p>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email address" 
                aria-label="Email address" 
              />
              <Button variant="outline-primary">Subscribe</Button>
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <h5 className="mb-3">Follow Us</h5>
          <div className="d-flex justify-content-center gap-3">
            {socialMedia.map((platform, idx) => (
              <Button 
                key={idx} 
                variant="outline-dark" 
                className="rounded-circle flex items-center justify-center"
                style={{width: '45px', height: '45px'}}
              >
                {platform.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Visit Us */}
      <div className="py-5">
        <h2 className="text-center mb-5">Visit Our Flagship Store</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <img 
              src="https://th.bing.com/th/id/OIP.VZ1i6-8b99LtqZBwTq4XugHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
              alt="Glow Cosmetics Store" 
              className="img-fluid rounded shadow mb-4 mb-md-0"
            />
          </Col>
          <Col md={6}>
            <div className="ps-md-4">
              <h3 className="mb-3">Glow Cosmetics Boutique</h3>
              <p>
                Experience our products in person and get personalized beauty advice from our experts at our flagship store.
              </p>
              <address className="mb-4">
                <strong>Address:</strong><br />
                123 Beauty Lane<br />
                Los Angeles, CA 90001<br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
              <h5>Hours:</h5>
              <ul className="list-unstyled">
                <li>Monday - Friday: 10am - 8pm</li>
                <li>Saturday: 10am - 6pm</li>
                <li>Sunday: 12pm - 5pm</li>
              </ul>
              <Button variant="primary" className="mt-3">Get Directions</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AboutUsPage;