import './Projects.css'

const Projects = () => {
  return (
    <section id='projects' class='sectionMain'>
      <h2 class='titleSection'>PROJETOS</h2>
      <div id='carousel' class='carousel slide'>
        <div class='carousel-inner'>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage1'
                  href='https://dnaka27.github.io/Tindog_Udemy_Web/'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>TinDoG</h3>
                <p class='textDescription'>
                  Este é um projeto realizado no curso de programação fullstack
                  da Udemy, um aplicativo de relacionamento para cachorros, esse
                  é o{' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/Tindog_Udemy_Web'
                    target='_blank'
                  >
                    TINDOG.
                  </a>{' '}
                  Nele utilizei de <span class='styleTech styleHTML'>HTML</span>{' '}
                  <span class='styleTech styleCSS'>CSS</span>, assim criei um
                  modelo estático de página, isso utilizando também do{' '}
                  <span class='styleTool'>BOOTSTRAP</span> para responsividade e
                  componentes
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage2'
                  href='https://dnaka27.github.io/ToDoList_basic/'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>To do list</h3>
                <p class='textDescription'>
                  Este é um projeto para organização, uma lista de tarefas
                  simples para o dia a dia, mas que conta com filtros e uma
                  barra de pesquisa, {' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/ToDoList_basic/'
                    target=' _blank'
                  >
                    TO DO LIST
                  </a>
                  . Nesse projeto utilizei de{' '}
                  <span class='styleTech styleJS'>JAVASCRIPT</span> junto de{' '}
                  <span class='styleTech styleReact'>REACT</span> e por fim
                  estilizei com <span class='styleTech styleCSS'>CSS</span>
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item active'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                {/* Adicionar domínio */}
                <a
                  class='carouselProjectImage projectImage3'
                  href='https://coinviewer-diogooike.streamlit.app/'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>Coin Viewer</h3>
                <p class='textDescription'>
                  Este é um projeto próprio que ainda está em andamento, uma
                  aplicação de cotações de moedas, o {' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/Coin_Viewer'
                    target='_blank'
                  >
                    COIN VIEWER
                  </a>
                  . Ele é feito essencialmente com{' '}
                  <span class='styleTech stylePY'>PYTHON</span>,{' '}
                  <span class='styleTool'>STREAMLIT</span> para a interface,{' '}
                  <span class='styleTool'>PANDAS</span> e {''}
                  <span class='styleTool'>NUMPY</span> para os dados,{' '}
                  <span class='styleTool'>REQUESTS</span> para a API e {' '}
                  <span class='styleTool'>PLOTLY</span> para os gráficos.
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage4'
                  href='https://github.com/Dnaka27/Basic_system_JavaSpring'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>Java API</h3>
                <p class='textDescription'>
                  Este é um projeto básico feito em{' '}
                  <span class='styleTech styleJV'>Java</span>,{' '}
                  <a
                    href='https://github.com/Dnaka27/Basic_system_JavaSpring'
                    class='projectName'
                  >
                    JAVA API
                  </a>{' '}
                  é um sistema simples integrado com banco de dados H2, nele
                  utilizei do <span class='styleTool'>SPRING</span> framework,
                  além do <span class='styleTool'>MAVEN</span> para gerenciar
                  suas dependencias
                </p>
              </div>
            </div>
          </div>
          <div class='carousel-item'>
            <div class='carouselProjects'>
              <div class='carouselImageCol'>
                <a
                  class='carouselProjectImage projectImage5'
                  href='https://github.com/Dnaka27/Nutritionix_API-Google_sheets'
                  target='_blank'
                  alt='Project image'
                ></a>
              </div>
              <div class='carouselDescriptionCol'>
                <h3 class='titleProjectDescription'>Nutritionix project</h3>
                <p class='textDescription'>
                  Projeto realizado no curso de programação em python da Udemy,
                  o {' '}
                  <a
                    class='projectName'
                    href='https://github.com/Dnaka27/Nutritionix_API-Google_sheets'
                    target='_blank'
                  >
                    NUTRITIONIX
                  </a>
                  . Ele consiste em uma integração de planilha {' '}
                  <span class='styleTool'>SHEETS</span> {' '}
                  com uma chamada de API{' '}
                  utilizando <span class='styleTech stylePY'>PYTHON</span> e a
                  ferramenta <span class='styleTool'>SHEETY</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  )
}

export default Projects
