import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

function Layout({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Header / Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm mb-3">
        <Container>
          <Navbar.Brand href="/home" className="fw-bold text-lavender">✨ Glow Cosmetics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/cart" className="position-relative">
                Cart
                {totalItems > 0 && (
                  <Badge pill bg="lavender" className="position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-4 mt-5 border-top">
        <Container>
          <div className="mb-3">
            <Nav className="justify-content-center">
              <Nav.Link href="/privacy" className="text-muted px-3">Privacy Policy</Nav.Link>
              <Nav.Link href="/terms" className="text-muted px-3">Terms &amp; Conditions</Nav.Link>
              <Nav.Link href="/faq" className="text-muted px-3">FAQ</Nav.Link>
              <Nav.Link href="/about" className="text-muted px-3">About Us</Nav.Link>
            </Nav>
          </div>
          <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Glow Cosmetics. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default Layout;