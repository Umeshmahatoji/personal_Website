import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-description">
              Feel free to reach out to me for any inquiries, collaborations, or opportunities.
              I'm always open to discussing new projects and innovative ideas.
            </p>
            <div className="contact-items">
              <a href="mailto:er.mahatoumesh@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <span>er.mahatoumesh@gmail.com</span>
                </div>
              </a>
              <a href="tel:+9779863822490" className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <span>+977 9863822490</span>
                </div>
              </a>
              <a href="https://maps.app.goo.gl/JTsC7L4FxyvaK5pB7" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <span>Bhaktapur, Nepal</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form 
              className="contact-form" 
              action="https://formsubmit.co/er.mahatoumesh@gmail.com" 
              method="POST"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New message from Portfolio Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
