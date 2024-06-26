import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='header' id='menu'>
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
              <button className='nav-link' onClick={() => scrollToSection('projects')}>
                Projetos
              </button>
            </li>
            <li className='nav-item'>
              <button className='nav-link' onClick={() => scrollToSection('EB')}>
                Formação
              </button>
            </li>
            <li className='nav-item'>
              <button className='nav-link' onClick={() => scrollToSection('skills')}>
                Habilidades
              </button>
            </li>
            <li className='nav-item'>
              <button className='nav-link' onClick={() => scrollToSection('contact')}>
                Contato
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
              Prazer, Diogo! Sou um estudante universitário e sigo na área de engenharia de software. Até o momento possuo
              conhecimento mais voltado para{' '}
              <span className='styleTech stylePY'>Python</span>,{' '}
              <span className='styleTech styleJV'>Java</span> e{' '}
              <span className='styleTech styleJS'>Javascript</span>, gosto de criar soluções inteligentes co procuro estudar mais. Sou uma
              pessoa comprometida e criativa, sempre buscando aprender mais
              sobre o universo da tecnologia.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
