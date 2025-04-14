import React, { useState } from 'react';
import styles from './CSS/Contact.module.css'; // We'll use the same CSS Module file
// import'./CSS/ContactMe.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // Simplified status for static demo: just track if submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset submitted message if user types again
    if (isSubmitted) {
        setIsSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // --- Static Simulation ---
    console.log('Form data captured (not sent):', formData);
    setIsSubmitted(true); // Set submitted state to true
    setFormData({ // Clear the form fields
      name: '',
      email: '',
      message: '',
    });

    // Optional: Hide the success message after a few seconds
    setTimeout(() => {
        setIsSubmitted(false);
    }, 4000); // Hide message after 4 seconds
    // --- End Static Simulation ---
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subheading}>
          Have a question, a project idea, or just want to say hello? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Your Name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="your.email@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={styles.textarea}
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            // No need for disabled state in static version unless you add complex validation
          >
            Send Message
          </button>

          {/* Simplified status message for static demo */}
          {isSubmitted && (
            <p className={`${styles.statusMessage} ${styles.success}`}>
              Thanks for your message! (This is a demo - no email was sent).
            </p>
          )}
        </form>

        {/* Optional: Add other contact methods */}
        <div className={styles.alternativeContact}>
          <p>Or find me on:</p>
          {/* Replace with your actual links and consider using icons */}
          <a href="mailto:your.email@example.com" className={styles.altLink}>Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.altLink}>LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.altLink}>GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;