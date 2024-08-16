import './Footer.css'

const Footer = () => {
  function emailCopy() {
    const email = 'diogooikejapan@gmail.com'
    const emailFormat = document.createElement('input')
    emailFormat.value = email
    document.body.appendChild(emailFormat)
    emailFormat.select()
    document.execCommand('copy')
    document.body.removeChild(emailFormat)
    alert('🟢 Email copiado para a área de transferência: ' + email)
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id='contact' className='sectionFooter'>
      <div className="footer-content">
<<<<<<< HEAD
        <h2 className='titleSection'>CONTACT</h2>
=======
        <h2 className='titleSection'>CONTATO</h2>
>>>>>>> c514c9a6650de453244897fcb33aa5f34b8dcdd9
        <div className='contactIcons'>
          <a onClick={emailCopy}>
            <i className='contactIcon fa-solid fa-envelope'></i>
          </a>
          <a href='https://github.com/Dnaka27' target='_blank'>
            <i className='contactIcon fa-brands fa-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/diogo-oike-kanefuku-23639b223/'
            target='_blank'
          >
            <i className='contactIcon fa-brands fa-linkedin'></i>
          </a>
        </div>
      </div>
      <div className='arrow-up'>
        <i className='fa-solid fa-arrow-up' onClick={() => scrollToSection('menu')}></i>
      </div>
    </footer>
  )
}

export default Footer
