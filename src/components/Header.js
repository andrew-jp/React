import NavBar from "./NavBar"
import yose from './yosemite.jpg'

const Header = () => {
  return (
    <div
    className='header'
    style={{
      backgroundImage: `url(${yose})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }
    }
    >
      <NavBar />
      <header className="header-text">
          <h1>Andrew Pritchett</h1>
          <p>Software Engineer | Climber</p>
      </header>
    </div>

  )
}

export default Header
