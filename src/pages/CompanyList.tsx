import CardList from '../components/CardList/CardList'
import * as asyncactions from '../store/companies/async-actions'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CompaniesActions } from '../store/companies/types'
import { IRootState } from '../store'
import { useEffect } from 'react'
import Title from '../components/Title/Title'

const mapStateToProps = ({ companies }: IRootState) => {
  const { listCompanies } = companies
  return { listCompanies }
}

const mapDispatcherToProps = (dispatch: Dispatch<CompaniesActions>) => {
  return {
    getCompanies: () => asyncactions.getCompaniesAsync(dispatch),
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>

const CompanyList = (props: ReduxType) => {
  const { getCompanies, listCompanies } = props

  useEffect(() => {
    getCompanies()
  }, [])

  return (
    <>
      <Title text="Companies" />
      <CardList list={listCompanies} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatcherToProps)(CompanyList)
