import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h3>3+ Years</h3>
            <p>Professional Experience</p>
          </div>
          <div className="about-description">
            <p>
              Experienced .NET developer with 3 years of hands-on expertise in developing robust and scalable
              software solutions using the .NET framework. Proficient in C# programming language, with a deep
              understanding of object-oriented programming principles.
            </p>
            <p>
              Skilled in building web applications, RESTful APIs, and desktop applications using ASP.NET MVC,
              ASP.NET Core, and WinForms. Strong knowledge of database design and development, including SQL
              Server and Entity Framework for data access.
            </p>
            <p>
              Demonstrated ability to work in Agile environments, collaborating effectively with cross-functional
              teams to deliver high-quality software solutions on time. Committed to continuous learning and
              staying updated with the latest advancements in the .NET ecosystem to drive innovation and improve
              development efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
