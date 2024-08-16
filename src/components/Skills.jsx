import './Skills.css'

const softSkills = [
<<<<<<< HEAD
  { iconClass: 'fa-solid fa-users-line', label: 'Teamwork', color: '#435ef8' },
  { iconClass: 'fa-solid fa-scale-balanced', label: 'Emotional intelligence', color: '#435ef8' },
  { iconClass: 'fa-solid fa-lightbulb', label: 'Creativity', color: '#435ef8' }
=======
  { iconClass: 'fa-solid fa-users-line', label: 'Trabalho em equipe', color: '#435ef8' },
  { iconClass: 'fa-solid fa-scale-balanced', label: 'Inteligência emocional', color: '#435ef8' },
  { iconClass: 'fa-solid fa-lightbulb', label: 'Criatividade', color: '#435ef8' }
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
];

const hardSkills = [
  { iconClass: 'fa-brands fa-html5', label: 'HTML', color: '#ff6600' },
  { iconClass: 'fa-brands fa-css3-alt', label: 'CSS', color: '#00d9ff' },
  { iconClass: 'fa-brands fa-square-js', label: 'Javascript', color: '#ffd000' },
  { iconClass: 'fa-brands fa-python', label: 'Python', color: '#0400ff' },
  { iconClass: 'fa-brands fa-java', label: 'Java', color: '#ff0015' },
  { iconClass: 'fa-regular fa-c', label: 'C/C++', color: '#7700ff' },
  { iconClass: 'fa-solid fa-database', label: 'SQL', color: '#cc0088' }
];

const Skills = () => {
  return (
    <section id='skills' className='sectionMain'>
      <h2 className='titleSection'>HABILIDADES</h2>
      <div className='row skillTypes'>
        <div className='col col-lg-5 col-md-12 col-sm-12 softSkills'>
          <h3 className='caption skillTitle'>Soft skills:</h3>
          <div className='skillsListIcons'>
            {softSkills.map((skill, index) => (
              <div className='skillBlock' key={index}>
                <i
                  className={`skillIcon iconSoft ${skill.iconClass}`}
                  style={{ backgroundColor: skill.color }}
                ></i>
                <h4>{skill.label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className='col col-lg-2 col-md-12 col-sm-12 SkillImage'>
          {/* {Imagem ícone de cérebro ou lápis} */}
        </div>
        <div className='col col-lg-5 col-md-12 col-sm-12 hardSkills'>
          <h3 className='caption skillTitle'>Hard skills:</h3>
          <div className='skillsListIcons'>
            {hardSkills.map((skill, index) => (
              <div className='skillLine' key={index}>
                <i
                  className={`skillIcon iconHard ${skill.iconClass}`}
                  style={{ backgroundColor: skill.color }}
                ></i>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
