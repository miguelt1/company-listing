import CardList from '../components/CardList/CardList'
import * as asyncactions from '../store/companies/async-actions'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CompaniesActions, ICompany } from '../store/companies/types'
import { IRootState } from '../store'
import { useEffect } from 'react'
import { setPageTitle } from '../store/companies/actions'

const mapStateToProps = ({ companies }: IRootState) => {
  const { listCompanies } = companies
  return { listCompanies }
}

const mapDispatcherToProps = (dispatch: Dispatch<CompaniesActions>) => {
  return {
    getCompanies: () => asyncactions.getCompaniesAsync(dispatch),
    setPageTitle: (title: string) => dispatch(setPageTitle(title)),
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>

const CompanyList = (props: ReduxType) => {
  // fetch companies list from store/api

  const { getCompanies, listCompanies } = props

  console.log(listCompanies)

  useEffect(() => {
    setPageTitle('Companies')
    getCompanies()
  }, [])

  return <CardList list={listCompanies} />
}

export default connect(mapStateToProps, mapDispatcherToProps)(CompanyList)
