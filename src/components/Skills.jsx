import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCode, 
  faDatabase, 
  faServer, 
  faDesktop,
  faCodeBranch,
  faCogs,
  faCertificate,
  faCalendarAlt,
  faAward,
  faC,
  faBrain,
  faLaptopCode,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { 
  faPython, 
  faJs, 
  faHtml5, 
  faCss3Alt,
  faGithub,
  faReact,
  faNode,
  faMicrosoft,
  faDocker
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  const certifications = [
    {
      title: "Advanced Databases and SQL Querying",
      provider: "Udemy",
      date: "Feb 2021"
    },
    {
      title: "Advance .NET Core",
      provider: "Coursera",
      date: "Jan 2021"
    }
  ]

  // All skills in one list with percentage bars
  const allSkills = [
    { name: 'C#', icon: null, iconText: 'C#', color: '#68217A', percentage: 90 },
    { name: 'ASP.NET Core', icon: null, iconText: '.NET', color: '#512BD4', percentage: 95 },
    { name: 'ASP.NET', icon: null, iconText: '.NET', color: '#512BD4', percentage: 90 },
    { name: 'MS-SQL', icon: faDatabase, color: '#CC2927', percentage: 90 },
    { name: 'JavaScript (ES6)', icon: faJs, color: '#F7DF1E', percentage: 85 },
    { name: 'Entity Framework', icon: faDatabase, color: '#512BD4', percentage: 85 },
    { name: 'RESTful APIs', icon: faServer, color: '#00ADD8', percentage: 85 },
    { name: 'Git', icon: faCodeBranch, color: '#F05032', percentage: 85 },
    { name: 'GitHub', icon: faGithub, color: '#181717', percentage: 85 },
    { name: 'HTML5', icon: faHtml5, color: '#E34F26', percentage: 95 },
    { name: 'CSS3', icon: faCss3Alt, color: '#1572B6', percentage: 90 },
    { name: 'jQuery', icon: faJs, color: '#0769AD', percentage: 85 },
    { name: 'MySQL', icon: faDatabase, color: '#4479A1', percentage: 80 },
    { name: 'Python', icon: faPython, color: '#3776AB', percentage: 75 },
    { name: 'Agile Methodologies', icon: faCheckCircle, color: '#10B981', percentage: 80 },
    { name: 'Elasticsearch', icon: faDatabase, color: '#005571', percentage: 70 },
    { name: 'C', icon: faCode, color: '#A8B9CC', percentage: 70 }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Qualifications</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-container">
          <div className="skill-bars">
            {allSkills.map((skill, idx) => (
              <div key={idx} className="skill-bar-item" style={{ '--skill-color': skill.color }}>
                <div className="skill-bar-header">
                  <div className="skill-bar-label">
                    <div 
                      className="skill-bar-icon"
                      style={{ background: skill.color }}
                    >
                      {skill.icon ? (
                        <FontAwesomeIcon icon={skill.icon} />
                      ) : (
                        <span className="skill-icon-text">{skill.iconText}</span>
                      )}
                    </div>
                    <span className="skill-bar-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress-fill"
                    style={{ 
                      width: `${skill.percentage}%`,
                      background: skill.color
                    }}
                  >
                    <div className="skill-progress-shine"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications Subsection */}
        <div className="certifications-subsection">
          <div className="subsection-header">
            <FontAwesomeIcon icon={faCertificate} className="subsection-icon" />
            <h3 className="subsection-title">Certifications</h3>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-provider">{cert.provider}</p>
                  <div className="cert-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
