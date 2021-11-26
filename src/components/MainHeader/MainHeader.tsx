import './MainHeader.scss'
import { GO_BACK } from '../../constants'
import { useNavigate } from 'react-router-dom'

const MainHeader = () => {
  const navigate = useNavigate()
  return (
    <header className="header">
      <nav className="nav">
        <div className="btn-wrapper">
          <button className="btn-back" onClick={() => navigate(-1)}>
            {GO_BACK}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default MainHeader
