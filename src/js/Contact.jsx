import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if (!name || !email || !message) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send('service_4m86e0k', 'template_wzcrm3s', {
        from_name: name,
        from_email: email,
        message: message,
      }, '9O29gY3lUj_Q0zL7I')
      .then(() => {
        console.log('Email sent successfully!');
        event.target.reset();
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <section id="contact" className="content">
      <h2>Contact</h2>
      <p>If you're interested in working together, feel free to reach out to me.</p>
      <Form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group controlId="name" className="col-md-6">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="email" className="col-md-6">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
        </div>

        <Form.Group controlId="message" className="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="custom-button" disabled={isSubmitting} style={{ width: '150px' }}>
          {isSubmitting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            'Send Message'
          )}
        </Button>
      </Form>

      {showAlert && (
        <div className="alert-box alert-success mt-3" role="alert">
          Message sent successfully!
        </div>
      )}
    </section>
  );
}

export default Contact;
