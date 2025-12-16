import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faExternalLinkAlt, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faMicrosoft, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const projects = [
    {
      name: "Cineroyal Cinema",
      description: "Modern cinema booking system with online ticket purchasing and seat selection",
      link: "https://cineroyale.com.np/",
      image: "/assets/cineroyale.png"
    },
    {
      name: "Onecinema",
      description: "Comprehensive cinema management platform with real-time seat availability",
      link: "https://onecinemas.com.np/",
      image: "/assets/onecinemalogo.png"
    },
    {
      name: "CDC Nepal",
      description: "Cinema Distribution Company portal for movie distribution and management",
      link: "https://www.cdcnepal.com.np/",
      image: "/assets/cdc_logo.png"
    },
    {
      name: "Infinity Cinemas",
      description: "Interactive cinema booking application with advanced features",
      link: "https://infinitymovies.com.np/",
      image: "/assets/infinity_logo.png"
    },
    {
      name: "Subhakamana Cinema",
      description: "User-friendly cinema booking system with seamless payment integration",
      link: "https://suvakamanacinema.com.np/home",
      image: "/assets/shuvakamana.png"
    },
    {
      name: "Eyeplex Mall",
      description: "Multiplex cinema platform with integrated mall services",
      link: "https://www.eyeplexmall.com.np/",
      image: "/assets/eyeplexredlogo.png"
    },
    {
      name: "Landmark Nepal",
      description: "Premium cinema experience platform with luxury seat booking",
      link: "https://www.landmarknepal.com/",
      image: "/assets/landmark.png"
    },
    {
      name: "Kashi Cineplex",
      description: "Premium cinema experience platform with luxury seat booking",
      link: "https://www.kashicineplex.com/",
      image: "/assets/kashi.jpg"
    },
    {
      name: "Pathivara Cineplaza",
      description: "Premium cinema experience platform with luxury seat booking",
      link: "https://www.pathivaracineplaza.com",
      image: "/assets/pathivaralogo.jpg"
    }
  ]

  const techStack = [
    { icon: null, color: '#9333EA', title: '.NET', text: '.NET' },
    { icon: null, color: '#FF8C00', title: 'jQuery', text: 'jQ' },
    { icon: faCss3Alt, color: '#32CD32', title: 'CSS' },
    { icon: faDatabase, color: '#1E90FF', title: 'MySQL' }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-overlay"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>Visit {project.name}</span>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech-icon" style={{ color: tech.color }} title={tech.title}>
                      {tech.icon ? (
                        <FontAwesomeIcon icon={tech.icon} />
                      ) : (
                        <span className="tech-text">{tech.text}</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
