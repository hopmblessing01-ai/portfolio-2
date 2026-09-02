function ResumeSection({ resumeGroups, programmingSkills, languageSkills, dots }) {
  const educationGroup = resumeGroups.find((group) => group.title === 'Education')
  const employmentGroup = resumeGroups.find((group) => group.title === 'Employment')

  const renderGroup = (group) => {
    if (!group) return null

    return (
      <article key={group.title} className="resume-group">
        <h3>{group.title}</h3>
        {group.items.map((item) => (
          <div key={`${item.title}-${item.period}`} className="resume-item">
            <div className="resume-item-head">
              <div className="line" style={{ background: item.color }} />
              <div>
                <h4>{item.title}</h4>
                <p className="resume-role">{item.subtitle}</p>
              </div>
              <span>{item.period}</span>
            </div>
            <p className="resume-text">{item.text}</p>
          </div>
        ))}
      </article>
    )
  }

  return (
    <div className="resume-grid">
      <aside>
        {renderGroup(educationGroup)}

        <article className="skill-card">
          <h3>Programming Skills</h3>
          {programmingSkills.map((skill) => (
            <div className="meter" key={skill.name}>
              <div className="meter-head">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: `${skill.value}%`, background: skill.color }} />
              </div>
            </div>
          ))}
        </article>

        <article className="skill-card">
          <h3>Language Skills</h3>
          {languageSkills.map((lang) => (
            <div className="lang-row" key={lang.name}>
              <span>{lang.name}</span>
              <span className="lang-dots">
                {dots.map((dot) => (
                  <i key={`${lang.name}-${dot}`} style={{ background: dot <= lang.level ? lang.color : '#dadada' }} />
                ))}
              </span>
            </div>
          ))}
        </article>
      </aside>

      <div>{renderGroup(employmentGroup)}</div>
    </div>
  )
}

export default ResumeSection
