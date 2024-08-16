import React from 'react'
import './Header.css'

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='header' id='menu'>
      <nav className='navbar navbar-expand-lg navbar-dark'>
<<<<<<< HEAD
        Welcome!
=======
        Bem vindo!
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
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
              <button
                className='nav-link'
                onClick={() => scrollToSection('projects')}
              >
<<<<<<< HEAD
                Projects
=======
                Projetos
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('EB')}
              >
<<<<<<< HEAD
                Academic
=======
                Formação
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('skills')}
              >
<<<<<<< HEAD
                Skills
=======
                Habilidades
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('contact')}
              >
<<<<<<< HEAD
                Contact
=======
                Contato
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
              </button>
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
<<<<<<< HEAD
              Nice to meet you, I'm Diogo! I'm a university student pursuing a
              degree in software engineering. I apply my knowledge in{' '}
              <span className='styleTech stylePY'>Python</span>,{' '}
              <span className='styleTech styleJV'>Java</span>, and{' '}
              <span className='styleTech styleJS'>JavaScript</span> in the
              field. I enjoy creating smart solutions while exploring the world
              of technology. I'm a committed and creative person, always looking
              to <span className='styleEnph'>learn</span> something new.
=======
              Prazer, Diogo! Sou um estudante universitário e sigo na área de
              engenharia de software, atua na área com meus conhecimentos em{' '}
              <span className='styleTech stylePY'>Python</span>,{' '}
              <span className='styleTech styleJV'>Java</span> e{' '}
              <span className='styleTech styleJS'>Javascript</span>. Gosto de
              criar soluções inteligentes enquanto exploro o universo da tecnologia,
              sou uma pessoa comprometida e criativa, sempre buscando <span className="styleEnph">aprender</span>{' '}
              algo novo.
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

<<<<<<< HEAD
export default Header
=======
export default Header
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
