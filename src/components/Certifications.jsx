import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faCalendarAlt, faAward } from '@fortawesome/free-solid-svg-icons'

const Certifications = () => {
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

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <FontAwesomeIcon icon={faCertificate} className="section-icon" />
          <h2 className="section-title">Certifications</h2>
          <div className="section-line"></div>
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
    </section>
  )
}

export default Certifications
