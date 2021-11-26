import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import CompanyList from './pages/CompanyList'
import Number from './pages/Number'
import CompanyDetail from './pages/CompanyDetail'
import MainHeader from './components/MainHeader/MainHeader'
import './styles/style.scss'

function App() {
  return (
    <Provider store={store}>
      <div>
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<CompanyList />} />
            <Route path="/company/:companyId" element={<CompanyDetail />} />
            <Route path="/number/:numberId" element={<Number />} />
          </Routes>
        </main>
      </div>
    </Provider>
  )
}

export default App
