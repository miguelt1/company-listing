import { useParams } from 'react-router-dom'
import CardList from '../components/CardList/CardList'
import * as asyncactions from '../store/companies/async-actions'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CompaniesActions, ICompany } from '../store/companies/types'
import { IRootState } from '../store'
import { useEffect } from 'react'
import Table from '../components/Table/Table'

const mapStateToProps = ({ companies }: IRootState) => {
  const { companyDetail } = companies
  return { companyDetail }
}

const mapDispatcherToProps = (dispatch: Dispatch<CompaniesActions>) => {
  return {
    getCompanyDetail: (companyId: string | undefined) =>
      asyncactions.getCompanyDetailAsync(dispatch, companyId),
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>

const CompanyDetail = (props: ReduxType) => {
  // fetch companies list from store/api

  const { getCompanyDetail, companyDetail } = props

  const companyId = useParams().companyId

  useEffect(() => {
    getCompanyDetail(companyId)
  }, [])

  return <Table list={companyDetail?.phoneNumbers} />
}

export default connect(mapStateToProps, mapDispatcherToProps)(CompanyDetail)
