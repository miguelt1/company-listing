import { Route, Routes } from 'react-router-dom'

import CompanyList from './pages/CompanyList'
import Number from './pages/Number'
import CompanyDetail from './pages/CompanyDetail'
import MainHeader from './components/MainHeader/MainHeader'
import "./styles/style.scss";

function App() {
  return (
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
  )
}

export default App
