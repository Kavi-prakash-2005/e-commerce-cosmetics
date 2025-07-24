import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PrivacyPolicyPage() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <div className="policy-container p-4 p-md-5">
            <h1 className="text-center mb-5 text-lavender">Privacy Policy</h1>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Introduction</h2>
              <p>
                At Glow Cosmetics, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit 
                our website, use our mobile application, or make purchases from us.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge 
                that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Information We Collect</h2>
              <p>We may collect the following types of information about you:</p>
              <h5 className="text-lavender mt-4 mb-3">Personal Information</h5>
              <ul>
                <li>Contact information (name, email address, phone number, shipping and billing address)</li>
                <li>Account credentials (username and password)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Purchase history and preferences</li>
                <li>Demographic information (age, gender, location)</li>
              </ul>
              
              <h5 className="text-lavender mt-4 mb-3">Usage Data</h5>
              <ul>
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages you visit and features you use</li>
                <li>Time spent on our website and interaction data</li>
                <li>Referral sources</li>
              </ul>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Create and manage your account</li>
                <li>Provide customer support</li>
                <li>Send transactional emails and order updates</li>
                <li>Personalize your shopping experience</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities. Cookies are small text files stored on your device that help us improve your 
                experience, understand user behavior, and secure our website.
              </p>
              <p>
                You can manage your cookie preferences through your browser settings. However, disabling 
                certain cookies may limit your ability to use all features of our website.
              </p>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers (payment processors, shipping companies, marketing partners)</li>
                <li>Business partners (with your consent)</li>
                <li>Legal authorities when required by law</li>
                <li>Potential buyers in the event of a business sale or merger</li>
              </ul>
              <p>
                We require all third parties to respect the security of your data and to treat it in accordance 
                with the law. We do not allow our third-party service providers to use your personal data for 
                their own purposes.
              </p>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information provided in the 
                "Contact Us" section below.
              </p>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Children's Privacy</h2>
              <p>
                Our Services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us, and we will delete such 
                information from our records.
              </p>
            </section>
            
            <section className="mb-5">
              <h2 className="section-title mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for 
                other operational, legal, or regulatory reasons. We will notify you of any material changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="section-title mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please 
                contact us at:
              </p>
              <address>
                <strong>Glow Cosmetics</strong><br />
                123 Beauty Lane<br />
                Los Angeles, CA 90001<br />
                <abbr title="Phone">P:</abbr> (123) 456-7890<br />
                <abbr title="Email">E:</abbr> privacy@glowcosmetics.com
              </address>
            </section>
            
            <div className="text-center mt-5 pt-3 border-top">
              <p className="text-muted">Last Updated: May 1, 2025</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicyPage;