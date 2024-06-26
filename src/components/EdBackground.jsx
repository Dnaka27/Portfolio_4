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
        <div className={`EBCertifiesCol ${activeSection === 'EBCertifies' ? 'EBColActive' : 'EBColOff'}`}>
          <div className='EBCertifiesText'>
            <ul className='EBCertifiesList'>
              <li>DIO: Amazon web services</li>
              <li>DIO: Potência Tech Data Science</li>
              <li>Coursera: Google Data Analytics</li>
              <li>Udemy: Python Bootcamp</li>
              <li>Udemy: Fullstack web Bootcamp</li>
            </ul>
          </div>
        </div>
        <div className={`EBAcademicCol ${activeSection === 'EBAcademic' ? 'EBColActive' : 'EBColOff'}`}>
          <p className='textDescription'>
            Estudante de Gestão da tecnologia da informação (GTI) no IFSC de Florianópolis. Na parte de programação realizei lógica de programação utilizando a linguagem{' '}
            <span className='styleTech styleCPP'>C++</span> e orientação a objetos utilizando <span className='styleTech styleJV'>Java</span>. Além disso,
            aprendi sobre noções básicas de rede e de gestão. Isso em disciplinas como: Infraestrutura de rede, processos de desenvolvimento de sistemas, gestão de pessoas e gestão econômica e financeira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
