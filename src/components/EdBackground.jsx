<<<<<<< HEAD
import React, { useState } from 'react'
import './EdBackground.css'

const Skills = () => {
  const [activeSection, setActiveSection] = useState('EBCertifies')

  const switchClass = (btnClicked, btnChange, colClicked, colChange) => {
    setActiveSection(btnClicked)
  }

  return (
    <section id='EB' className='sectionMain'>
      <h2 className='titleSection'>ACADEMIC BACKGROUND</h2>
      <div className='EBOptions'>
        <div
          className={`EBCertifies ${
            activeSection === 'EBCertifies' ? 'EBActive' : 'EBOff'
          }`}
          onClick={() =>
            switchClass(
              'EBCertifies',
              'EBAcademic',
              'EBCertifiesCol',
              'EBAcademicCol'
            )
          }
        >
          <h3>Courses/certificates</h3>
        </div>
        <div
          className={`EBAcademic ${
            activeSection === 'EBAcademic' ? 'EBActive' : 'EBOff'
          }`}
          onClick={() =>
            switchClass(
              'EBAcademic',
              'EBCertifies',
              'EBAcademicCol',
              'EBCertifiesCol'
            )
          }
        >
          <h3>Academic</h3>
        </div>
      </div>
      <div className='EBCols'>
        <div
          className={`EBCertifiesCol ${
            activeSection === 'EBCertifies' ? 'EBColActive' : 'EBColOff'
          }`}
          onClick={() =>
            switchClass(
              'EBCertifies',
              'EBAcademic',
              'EBCertifiesCol',
              'EBAcademicCol'
            )
          }
        >
=======
import React, { useState } from 'react';
import './EdBackground.css';

const Skills = () => {
  const [activeSection, setActiveSection] = useState('EBCertifies');

  const switchClass = (btnClicked, btnChange, colClicked, colChange) => {
    setActiveSection(btnClicked);
  };

  return (
    <section id='EB' className='sectionMain'>
      <h2 className='titleSection'>FORMAÇÃO</h2>
      <div className='EBOptions'>
        <div
          className={`EBCertifies ${activeSection === 'EBCertifies' ? 'EBActive' : 'EBOff'}`}
          onClick={() => switchClass('EBCertifies', 'EBAcademic', 'EBCertifiesCol', 'EBAcademicCol')}
        >
          <h3>Cursos/certificados</h3>
        </div>
        <div
          className={`EBAcademic ${activeSection === 'EBAcademic' ? 'EBActive' : 'EBOff'}`}
          onClick={() => switchClass('EBAcademic', 'EBCertifies', 'EBAcademicCol', 'EBCertifiesCol')}
        >
          <h3>Acadêmico</h3>
        </div>
      </div>
      <div className='EBCols'>
        <div className={`EBCertifiesCol ${activeSection === 'EBCertifies' ? 'EBColActive' : 'EBColOff'}`} onClick={() => switchClass('EBCertifies', 'EBAcademic', 'EBCertifiesCol', 'EBAcademicCol')}>
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
          <div className='EBCertifiesText'>
            <ul className='EBCertifiesList'>
              <li>DIO: Amazon web services</li>
              <li>DIO: Potência Tech Data Science</li>
              <li>Coursera: Google Data Analytics</li>
              <li>Udemy: Python Bootcamp</li>
              <li>Udemy: Fullstack web Bootcamp</li>
              <li>Cubos Academy: Data Analysis</li>
            </ul>
          </div>
        </div>
<<<<<<< HEAD
        <div
          className={`EBAcademicCol ${
            activeSection === 'EBAcademic' ? 'EBColActive' : 'EBColOff'
          }`}
          onClick={() =>
            switchClass(
              'EBAcademic',
              'EBCertifies',
              'EBAcademicCol',
              'EBCertifiesCol'
            )
          }
        >
          <p className='textDescription'>
            Information Technology Management (GTI) student at IFSC in
            Florianópolis. In the programming part, I carried out programming
            logic using the language{' '}
            <span className='styleTech styleCPP'>C++</span> and object
            orientation using <span className='styleTech styleJV'>Java</span>.
            Furthermore, I learned about network and management basics. This in
            disciplines such as: Network infrastructure, systems development
            processes, people management and economic and financial management.
=======
        <div className={`EBAcademicCol ${activeSection === 'EBAcademic' ? 'EBColActive' : 'EBColOff'}`} onClick={() => switchClass('EBAcademic', 'EBCertifies', 'EBAcademicCol', 'EBCertifiesCol')}>
          <p className='textDescription'>
            Estudante de Gestão da tecnologia da informação (GTI) no IFSC de Florianópolis. Na parte de programação realizei lógica de programação utilizando a linguagem{' '}
            <span className='styleTech styleCPP'>C++</span> e orientação a objetos utilizando <span className='styleTech styleJV'>Java</span>. Além disso,
            aprendi sobre noções básicas de rede e de gestão. Isso em disciplinas como: Infraestrutura de rede, processos de desenvolvimento de sistemas, gestão de pessoas e gestão econômica e financeira.
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
          </p>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  )
}

export default Skills
=======
  );
};

export default Skills;
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
