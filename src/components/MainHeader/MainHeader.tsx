import './MainHeader.scss'

interface IPropsMainHeader {
  title: string | undefined
}

const MainHeader = ({ title }: IPropsMainHeader) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="btn-wrapper">
          <button className="btn-back">Go Back</button>
        </div>
        <div className="title-wrapper">
          <span className="title">{title}</span>
        </div>
      </nav>
    </header>
  )
}

export default MainHeader
