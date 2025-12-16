import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faCheckCircle, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  const experienceList = [
    {
      title: 'Senior Software Developer',
      company: 'Technables IT Solution Pvt. Ltd',
      location: 'Koteshwor, Kathmandu, Nepal',
      period: 'Nov 2022 - Current',
      icon: faBriefcase,
      responsibilities: [
        'Proficient in C# programming language with a focus on object-oriented programming principles',
        'Hands-on experience developing web applications using ASP.NET MVC and ASP.NET Core',
        'Familiarity with front-end technologies such as HTML, CSS, and JavaScript for building interactive user interfaces',
        'Basic understanding of database concepts and experience working with SQL Server for data storage and retrieval',
        
      ],
      projects: ['Landmark', 'Eyeplex', 'Cineroyal Cinema']
    },
    {
      title: 'Jr Software Developer',
      company: 'Technables IT Solution Pvt. Ltd',
      location: 'Koteshwor, Kathmandu, Nepal',
      period: 'May 2022 - Oct 2022',
      icon: faUserTie,
      responsibilities: [
        'Assisted in developing web applications using ASP.NET and C#',
        'Collaborated with senior developers on various software projects',
        'Participated in code reviews and learned best coding practices',
        'Worked on bug fixes and feature enhancements',
        
      ],
      projects: []
    },
    {
      title: 'Intern',
      company: 'Technables IT Solution Pvt. Ltd',
      location: 'Koteshwor, Kathmandu, Nepal',
      period: 'Feb 2022 - Apr 2022',
      icon: faUserGraduate,
      responsibilities: [
        'Learned fundamentals of .NET framework and C# programming',
        'Assisted in basic web development tasks',
        'Participated in team meetings and development discussions',
        'Gained exposure to professional software development environment',
     
      ],
      projects: []
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
