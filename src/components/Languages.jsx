import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faCheck } from '@fortawesome/free-solid-svg-icons'

const Languages = () => {
  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Maithali', level: 'Native' },
    { name: 'Nepali', level: 'Fluent' }
  ]

  return (
    <section className="languages" id="languages">
      <div className="container">
        <div className="section-header">
          <FontAwesomeIcon icon={faLanguage} className="section-icon" />
          <h2 className="section-title">Language Proficiency</h2>
          <div className="section-line"></div>
        </div>
        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div key={index} className="language-card">
              <FontAwesomeIcon icon={faCheck} className="lang-icon" />
              <h3>{lang.name}</h3>
              <p className="lang-level">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
