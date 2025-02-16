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
        Welcome!
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
                Projects
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('EB')}
              >
                Academic
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link'
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Diogo Oike</h1>
      <div className='headerSub'>
        <div className='row aboutRow'>
          <div className='col devFunctionCol'>
            <h2 className='devFunction'>DATA ENGINEER <br /> BACKEND DEVELOPER</h2>
          </div>
          <div className='col aboutCol'>
            <p className='aboutText'>
              Nice to meet you, I'm Diogo! I'm a university student pursuing a
              degree in software engineering. I apply my knowledge in{' '}
              <span className='styleTech stylePY'>Python</span>,{' '}
              <span className='styleTech styleJV'>Java</span>, and{' '}
              <span className='styleTech styleJS'>JavaScript</span> in the
              field. I enjoy creating smart solutions while exploring the world
              of technology. I'm a committed and creative person, always looking
              to <span className='styleEnph'>learn</span> something new.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
