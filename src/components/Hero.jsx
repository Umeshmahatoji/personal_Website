import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faDownload, faCode, faLaptopCode, faBriefcase, faDatabase, faServer, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram, faMicrosoft, faJs, faHtml5, faCss3Alt, faPython } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Animated background elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">🙏 Nameste, I'm</span>
            <span className="name">ER. UMESH MAHATO</span>
          </h1>
          <p className="hero-subtitle">
            <FontAwesomeIcon icon={faLaptopCode} className="subtitle-icon" />
            Senior Software Developer
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          <div className="hero-tech-icons">
            <div className="tech-icon" style={{ animationDelay: '0.1s' }}>
              <span className="tech-text" style={{ color: '#68217A' }}>.NET</span>
            </div>
            <div className="tech-icon" style={{ animationDelay: '0.2s' }}>
              <FontAwesomeIcon icon={faDatabase} style={{ color: '#CC2927' }} />
            </div>
            <div className="tech-icon" style={{ animationDelay: '0.3s' }}>
              <FontAwesomeIcon icon={faJs} style={{ color: '#9333EA' }} />
            </div>
            <div className="tech-icon" style={{ animationDelay: '0.4s' }}>
              <FontAwesomeIcon icon={faHtml5} style={{ color: '#E34F26' }} />
            </div>
            <div className="tech-icon" style={{ animationDelay: '0.5s' }}>
              <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#1572B6' }} />
            </div>
            <div className="tech-icon" style={{ animationDelay: '0.6s' }}>
              <FontAwesomeIcon icon={faCodeBranch} style={{ color: '#F05032' }} />
            </div>
            <div className="tech-icon" style={{ animationDelay: '0.7s' }}>
              <FontAwesomeIcon icon={faServer} style={{ color: '#00ADD8' }} />
            </div>
            <div className="tech-icon" style={{ animationDelay: '0.8s' }}>
              <FontAwesomeIcon icon={faPython} style={{ color: '#3776AB' }} />
            </div>
          </div>
          <div className="hero-social">
            <a href="https://linkedin.com/in/umesh-mahato" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/umesh-mahato" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/umeshsingh01414/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
              <span>Instagram</span>
            </a>
          </div>
          <div className="hero-buttons">
            <a href="/assets/My_Resume.pdf" download="Umesh_Mahato_Resume.pdf" className="btn btn-secondary">
              <FontAwesomeIcon icon={faDownload} className="btn-icon" />
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-wrapper">
            <div className="profile-circle">
              <div className="profile-placeholder">
                <img src="/assets/umeshmahato.jpeg" alt="Umesh Mahato" className="profile-image" />
              </div>
            </div>
            {/* Floating elements */}
            <div className="floating-elem floating-1">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="floating-elem floating-2">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className="floating-elem floating-3">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
