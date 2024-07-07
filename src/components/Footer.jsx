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

  return (
    <footer id='contact' className='sectionFooter'>
      <h2 className='titleSection'>CONTATO</h2>
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
    </footer>
  )
}

export default Footer
