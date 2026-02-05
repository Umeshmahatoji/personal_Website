import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faCheckCircle, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  const experienceList = [
    {
      title: 'Senior Software Developer',
      company: 'Technables IT Solution Pvt. Ltd',
      location: 'Koteshwor, Kathmandu, Nepal',
      period: 'Nov 2025 - Current',
      icon: faBriefcase,
      responsibilities: [
        'Led a cross-functional team in developing WatchX, a modern watch buying and selling platform, delivering key features for users and sellers',
        'Directed the design, development, and implementation of the MetLife Insurance Claim System, ensuring compliance and meeting insurance domain needs',
        'Leveraged software architecture expertise to architect scalable solutions, integratingrobust CI/CD pipelines to enhance system performance, reduce time-to-market, andensure seamless development workflows',
        'Led agile development processes, ensuring efficient project timelines and fostering a high-performing team',
        
      ],
      projects: ['WatchX', 'Metlife Claims', 'Metlife Store']
    },
    {
      title: 'Mid Software Developer',
      company: 'Technables IT Solution Pvt. Ltd',
      location: 'Koteshwor, Kathmandu, Nepal',
      period: 'Aug 2023 - Nov 2025',
      icon: faUserTie,
      responsibilities: [
        ' Contributed to a .NET-based CMS by creating diverse view components, notably including CAPTCHA solutions (v2 and v3), enhancing its functionality and security measures',
        'Led the development of a theater management system, integrating a ‘Show Schedule Prediction Module’ and enabling dynamic, real-time updates using SignalR for enhanced efficiency, and used FullCalendar (JS library) to represent the show schedule',
        'Collaborated with real-world inventory managers, identifying their challenges and crafting tailored software solutions to address their specific needs and optimize inventory management processes',
        'Designed and developed RESTful API endpoints for parking management software and data formats for efficient communication and interaction between system components',
        
      ],
      projects: ['One Cinema', 'Landmark', 'Eyeplex', 'TA-Parking', 'TA-Inventory']
    },
    
    {
      title: 'Jr Software Developer',
      company: 'Technables IT Solution Pvt. Ltd',
      location: 'Koteshwor, Kathmandu, Nepal',
      period: 'Nov 2022 - Aug 2023',
      icon: faUserGraduate,
      responsibilities: [
        'Assisted in developing web components and modules for the School Management System, supporting overall system functionality.',
        'mplemented small-scale services and features to improve data handling and search capabilities within the system',
        'Built and maintained datasets using automated tools to support development and testing processes for the School Management System',
        'Contributed to the School Management System by learning, creating, and maintaining various modules, ensuring they worked correctly and efficiently',
     
      ],
      projects: ["School Management System"]
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line"></div>
        </div>
        <div className="experience-content">
          {experienceList.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={exp.icon} />
              </div>
              <div className="experience-card-content">
                <div className="experience-header">
                <div className="job-title-section">
                  <h3>{exp.title}</h3>
                  <p className="company-name">{exp.company}</p>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="experience-body">
                <h4>Key Responsibilities:</h4>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                {exp.projects.length > 0 && (
                  <div className="projects-section">
                    <h4>Notable Projects:</h4>
                    <div className="projects-tags">
                      {exp.projects.map((project, idx) => (
                        <span key={idx} className="project-tag">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
