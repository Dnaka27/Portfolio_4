import './Skills.css'

const Skills = () => {


  return (
    <section id='skills' class='sectionMain'>
      <h2 class='titleSection'>HABILIDADES</h2>
      <div class='row skillTypes'>
        <div class='col col-lg-5 col-md-12 col-sm-12 softSkills'>
          <h3 class='caption skillTitle'>Soft skills:</h3>
          <div class='skillsListIcons'>
            <div class='skillBlock'>
              <i class='skillIcon iconSoft fa-solid fa-users-line'></i>
              <h4>Trabalho em equipe</h4>
            </div>
            <div class='skillBlock'>
              <i class='skillIcon iconSoft fa-solid fa-scale-balanced'></i>
              <h4>Inteligência emocional</h4>
            </div>
            <div class='skillBlock'>
              <i class='skillIcon iconSoft fa-solid fa-lightbulb'></i>
              <h4>Criatividade</h4>
            </div>
          </div>
        </div>
        <div class='col col-lg-2 col-md-12 col-sm-12 SkillImage'>
          {/* {Imagem ícone de cérebro ou lápis} */}
        </div>
        <div class='col col-lg-5 col-md-12 col-sm-12 hardSkills'>
          <h3 class='caption skillTitle'>Hard skills:</h3>
          <div class='skillsListIcons'>
            <div class='skillLine'>
              <i class='skillIcon iconHard fa-brands fa-html5'></i>
              <span>HTML</span>
            </div>
            <div class='skillLine'>
              <i class='skillIcon iconHard fa-brands fa-css3-alt'></i>
              <span>CSS</span>
            </div>
            <div class='skillLine'>
              <i class='skillIcon iconHard fa-brands fa-square-js'></i>
              <span>Javascript</span>
            </div>
            <div class='skillLine'>
              <i class='skillIcon iconHard fa-brands fa-python'></i>
              <span>Python</span>
            </div>
            <div class='skillLine'>
              <i class='skillIcon iconHard fa-brands fa-java'></i>
              <span>Java</span>
            </div>
            <div class='skillLine'>
              <i class='skillIcon iconHard fa-regular fa-c'></i>
              <span>C/C++</span>
            </div>
            <div class='skillLine'>
              <i class='skillIcon iconHard fa-solid fa-database'></i>
              <span>SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills