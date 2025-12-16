import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <img src="/assets/umeshlogo.png" alt="Umesh Logo" className="logo-image" />
          <span className="logo-text">me<span className='dot'>sh.</span></span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            About
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
            Projects
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
            Skills
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
            Experience
          </a>
          <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>
            Education
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Contact
          </a>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
