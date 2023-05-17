import climbing from './climbing.jpeg'

const Footer = () => {
  const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  return (
    <footer
      className="footer"
      ref={scrollTo}
      style={{
        backgroundImage: `url(${climbing})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
`    <a
        className="link"
        href="https://www.linkedin.com/in/andrew-james-pritchett/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>`
      <a
        className="link"
        href="https://github.com/andrew-jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <p className='footer-cr'>Copyright 2023 ©</p>

    </footer>

  )
}

export default Footer
