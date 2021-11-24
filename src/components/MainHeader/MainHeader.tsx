import './MainHeader.scss'

const MainHeader = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="btn-wrapper">
          <button className="btn-back">Go Back</button>
        </div>
        <div className="title-wrapper">
          <span className="title">Title</span>
        </div>
      </nav>
    </header>
  )
}

export default MainHeader
