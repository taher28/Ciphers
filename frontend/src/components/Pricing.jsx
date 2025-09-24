import React from 'react';

const Pricing = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Pricing</h1>
      </div>

      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Free</h3>
            <div className="price">₹0</div>
            <p className="price-description">Forever free</p>
          </div>
          <ul className="features-list">
            <li>Basic journaling features</li>
            <li>100MB storage</li>
            <li>AES-128 encryption</li>
            <li>Single device sync</li>
            <li>Community support</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>

        <div className="pricing-card featured">
          <div className="pricing-header">
            <h3>Pro</h3>
            <div className="price">₹99<span>/mo</span></div>
            <p className="price-description">Billed annually (₹1188)</p>
          </div>
          <ul className="features-list">
            <li>All Free features</li>
            <li>Unlimited storage</li>
            <li>AES-256 encryption</li>
            <li>Cross-device sync</li>
            <li>Biometric authentication</li>
            <li>Priority support</li>
          </ul>
          <button className="pricing-btn primary">Get Started</button>
        </div>

        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Team</h3>
            <div className="price">₹199<span>/mo</span></div>
            <p className="price-description">Per user, billed annually</p>
          </div>
          <ul className="features-list">
            <li>All Pro features</li>
            <li>Shared journals</li>
            <li>Admin controls</li>
            <li>Custom security policies</li>
            <li>Advanced analytics</li>
            <li>Dedicated account manager</li>
          </ul>
          <button className="pricing-btn">Contact Sales</button>
        </div>
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Can I switch plans later?</h3>
          <p>Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged a prorated amount for the remainder of your billing cycle.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a free trial?</h3>
          <p>Yes, we offer a 14-day free trial for our Pro plan. No credit card required to start your trial.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept all major credit cards, PayPal, and for annual plans, we also accept bank transfers.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;