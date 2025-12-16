import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEnvelope, faPhone, faMapMarkerAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo-container">
              <img src="/assets/umeshlogo.png" alt="Umesh Logo" className="footer-logo-image" />
              <h3 className="footer-logo">ER. UMESH</h3>
            </div>
            <p className="footer-description">
              Senior Software Developer specializing in .NET and modern web technologies. Building robust solutions with passion.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/umesh-mahato" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/umesh-mahato" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
              <a href="https://www.instagram.com/umeshsingh01414/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:er.mahatoumesh@gmail.com">er.mahatoumesh@gmail.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>+977 9863822490</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Bhaktapur, Nepal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          
          <p className="footer-copyright">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
      
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  )
}

export default Footer
