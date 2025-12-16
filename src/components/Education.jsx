import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCalendarAlt, faUniversity } from '@fortawesome/free-solid-svg-icons'

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor's of Computer Engineering",
      institution: "KCE, Khwopa College of Engineering",
      university: "Tribhuvan University",
      location: "Chakupat, Lalitpur, Nepal",
      period: "Sep 2018 - Sep 2023",
      icon: faGraduationCap
    },
    {
      degree: "High School, Science",
      institution: "GIC, Greenland International Higher Secondary School",
      location: "Biratnagar, Morang, Nepal",
      period: "Jun 2015 - Apr 2017",
      icon: faUniversity
    },
    {
      degree: "Secondary School (SLC)",
      institution: "Srijana S.E.B. School",
      location: "Golbazar, Siraha, Nepal",
      period: "Jun 2005 - Jun 2015",
      icon: faUniversity
    }
  ]

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>
        <div className="education-timeline">
          {educationList.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={edu.icon} />
              </div>
              <div className="education-card">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                {edu.university && (
                  <p className="university">{edu.university}</p>
                )}
                <div className="education-meta">
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faUniversity} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
