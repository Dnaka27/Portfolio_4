import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        Bem vindo!
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a href='#projects' className='nav-link'>
                Projetos
              </a>
            </li>
            <li className='nav-item'>
              <a href='#skills' className='nav-link'>
                Habilidades
              </a>
            </li>
            <li className='nav-item'>
              <a href='#EB' className='nav-link'>
                Formação
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link'>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Diogo Oike</h1>
      <div className='headerSub'>
        <div className='row aboutRow'>
          <div className='col devFunctionCol'>
            <h2 className='devFunction'>FULLSTACK DEVELOPER</h2>
          </div>
          <div className='col aboutCol'>
            <p className='aboutText'>
              Prazer, Diogo! Sou um estudante universitário em busca de
              oportunidades profissionais. Sigo na área da programação e possuo
              conhecimento em desenvolvimento{' '}
              <span className='styleTech stylePY'>Python</span>,{' '}
              <span className='styleTech styleJV'>Java</span> e{' '}
              <span className='styleTech styleJS'>Javascript</span>. Sou uma
              pessoa comprometida e criativa, sempre buscando aprender mais
              sobre o universo da tecnologia.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
