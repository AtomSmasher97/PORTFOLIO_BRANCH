import React, { useState } from 'react';
import styles from './CSS/Contact.module.css';
import resumeFile from "./assets/VENKATESWAR REDDY KOTHAPALLY.docx"; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data captured (not sent):', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className={`${styles.contactSection} ${styles.underConstructionWrapper}`}>
      <div className={styles.underConstructionOverlay}>
        <div className={styles.overlayContent}>
          <h2>Page Under Construction!</h2>
          <p>I'm working hard to get this page ready. In the meantime,</p>
          <a href={resumeFile} download="VENKATESWAR REDDY KOTHAPALLY.docx" className={styles.downloadButton}>
            Download My Resume
          </a>
        </div>
      </div>

      <div className={styles.contactContent}>  
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
            >
              Send Message
            </button>

            {isSubmitted && (
              <p className={`${styles.statusMessage} ${styles.success}`}>
                Thanks for your message! (This is a demo - no email was sent).
              </p>
            )}
          </form>

          <div className={styles.alternativeContact}>
            <p>Or find me on:</p>
            <a href="mailto:your.email@example.com" className={styles.altLink}>Email</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.altLink}>LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.altLink}>GitHub</a>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Contact;