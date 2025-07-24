import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

function FaqPage() {
  const faqCategories = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location and typically take 7-14 business days."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes! We ship to most countries worldwide. International shipping costs and delivery times vary based on location. Please note that customers are responsible for any customs fees or import taxes that may apply."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website and view your order status and tracking details under 'Order History'."
        },
        {
          question: "Can I modify or cancel my order after it's placed?",
          answer: "We process orders quickly to ensure fast shipping. If you need to modify or cancel an order, please contact our customer support team immediately. We can usually accommodate changes if the order hasn't been processed yet, but we cannot guarantee modifications once an order enters our fulfillment process."
        }
      ]
    },
    {
      category: "Products & Ingredients",
      questions: [
        {
          question: "Are your products cruelty-free?",
          answer: "Absolutely! All Glow Cosmetics products are 100% cruelty-free. We never test on animals and we don't work with suppliers who conduct animal testing. We're proud to be certified by Leaping Bunny and PETA as a cruelty-free brand."
        },
        {
          question: "Are your products vegan?",
          answer: "Most of our products are vegan, but not all. Products that are fully vegan are clearly labeled with our 'Vegan' icon. We're continuously working to expand our vegan offerings and reformulate existing products to be vegan-friendly whenever possible."
        },
        {
          question: "What ingredients do you avoid in your formulations?",
          answer: "We maintain a strict 'No-No List' of potentially harmful ingredients that we never use, including parabens, sulfates (SLS/SLES), phthalates, formaldehyde, mineral oil, and artificial fragrances. We prioritize naturally-derived ingredients that are effective and gentle on the skin."
        },
        {
          question: "Do you test for allergies?",
          answer: "All our products undergo dermatologist testing, but individual allergic reactions can still occur. We recommend performing a patch test before using a new product, especially if you have sensitive skin or known allergies. If you experience any adverse reaction, discontinue use immediately and consult a healthcare professional."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day satisfaction guarantee on all purchases. If you're not completely satisfied with your purchase, you may return unopened and gently used items within 30 days of delivery for a full refund or exchange. Some restrictions apply to certain personal care items for hygiene reasons."
        },
        {
          question: "How do I initiate a return?",
          answer: "To start a return, log into your account, go to 'Order History', select the order containing the item(s) you wish to return, and click 'Return Items'. Follow the prompts to complete your return request. Once approved, you'll receive a prepaid return shipping label via email."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 5-7 business days after we receive and inspect your return. The refund will be issued to your original payment method. Please note that shipping costs are non-refundable, and it may take an additional 2-5 business days for the refund to appear on your statement, depending on your payment provider."
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer: "Yes! During the return process, you'll have the option to select 'Exchange' instead of 'Refund'. You can then choose the product, shade, or size you'd like to exchange for. If there's a price difference, we'll either charge or refund the difference accordingly."
        }
      ]
    },
    {
      category: "Account & Loyalty Program",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Creating an account is easy! Click on the 'Sign Up' button in the top right corner of our website, enter your email address and create a password. You can also sign up during checkout. Having an account allows you to track orders, save favorite products, and earn loyalty points with every purchase."
        },
        {
          question: "What is the Glow Rewards program?",
          answer: "Glow Rewards is our loyalty program that lets you earn points on every purchase. For every $1 spent, you earn 1 point. These points can be redeemed for discounts, free products, and exclusive offers. You'll also receive special perks like birthday gifts, early access to new products, and members-only promotions."
        },
        {
          question: "I forgot my password. How can I reset it?",
          answer: "Click the 'Login' button, then select 'Forgot Password?' Enter the email address associated with your account, and we'll send you a password reset link. Follow the instructions in the email to create a new password. For security reasons, password reset links expire after 24 hours."
        },
        {
          question: "How can I update my account information?",
          answer: "Once logged in, click on 'My Account' in the top navigation menu. From there, you can update your profile information, change your password, manage payment methods, edit shipping addresses, and adjust your communication preferences."
        }
      ]
    }
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <div className="policy-container p-4 p-md-5">
            <h1 className="text-center mb-5 text-lavender">Frequently Asked Questions</h1>
            
            <p className="lead text-center mb-5">
              Find answers to our most commonly asked questions. Can't find what you're looking for? 
              Contact our customer support team at <a href="mailto:support@glowcosmetics.com" className="text-lavender">support@glowcosmetics.com</a>.
            </p>
            
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-5">
                <h2 className="section-title mb-4">{category.category}</h2>
                <Accordion>
                  {category.questions.map((faq, faqIndex) => (
                    <Accordion.Item key={faqIndex} eventKey={`${categoryIndex}-${faqIndex}`}>
                      <Accordion.Header>{faq.question}</Accordion.Header>
                      <Accordion.Body>
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            ))}
            
            <div className="text-center mt-5 pt-4 border-top">
              <h3 className="text-lavender mb-4">Still have questions?</h3>
              <p className="mb-4">
                Our customer support team is here to help you with any questions or concerns.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-4 mb-3">
                  <div className="card h-100 border-0 shadow-sm text-center p-3">
                    <div className="card-body">
                      <h5 className="card-title">Email Us</h5>
                      <p className="card-text">
                        <a href="mailto:support@glowcosmetics.com" className="text-lavender">
                          support@glowcosmetics.com
                        </a>
                      </p>
                      <p className="card-text text-muted small">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card h-100 border-0 shadow-sm text-center p-3">
                    <div className="card-body">
                      <h5 className="card-title">Call Us</h5>
                      <p className="card-text">
                        <a href="tel:1234567890" className="text-lavender">
                          (123) 456-7890
                        </a>
                      </p>
                      <p className="card-text text-muted small">
                        Mon-Fri, 9am-5pm EST
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card h-100 border-0 shadow-sm text-center p-3">
                    <div className="card-body">
                      <h5 className="card-title">Live Chat</h5>
                      <p className="card-text">
                        <button className="btn btn-outline-lavender btn-sm">
                          Start Chat
                        </button>
                      </p>
                      <p className="card-text text-muted small">
                        Available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FaqPage;