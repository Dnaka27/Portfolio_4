import './EdBackground.css'

const EdBackground = () => {
  return (
    <section id='EB' class='sectionMain'>
      <h2 class='titleSection'>FORMAÇÃO</h2>
      <div class='EBOptions'>
        <div class='EBCertifies EBActive'>
          <h3>Cursos/certificados</h3>
        </div>
        <div class='EBAcademic EBOff'>
          <h3>Acadêmico</h3>
        </div>
      </div>
      <div class='EBCols'>
        <div class='EBCertifiesCol EBColActive'>
          <div class='EBCertifiesText'>
            <ul class='EBCertifiesList'>
              <li>DIO: Amazon web services</li>
              <li>DIO: Potência Tech Data Science</li>
              <li>Coursera: Google Data Analytics</li>
              <li>Udemy: Python Bootcamp</li>
              <li>Udemy: Fullstack web Bootcamp</li>
            </ul>
          </div>
        </div>
        <div class='EBAcademicCol EBColOff'>
          <p class='textDescription'>
            Estudante de Gestão da tecnologia da informação(GTI) no IFSC de
            Florianópolis. Na parte de programação realizei lógica de
            programação utilizando a linguagem{' '}
            <span class='styleTech styleCPP'>C++</span> e orientação a objetos
            utilizando <span class='styleTech styleJV'>Java</span>. Além disso,
            aprendi sobre noções básicas de rede e de gestão. Isso em
            disciplinas como: Infraestrutura de rede, processos de
            desenvolvimento de sistemas, gestão de pessoas e gestão econômica e
            financeira
          </p>
        </div>
      </div>
    </section>
  )
}

export default EdBackground
