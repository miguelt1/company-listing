import { useParams } from 'react-router-dom'
import * as asyncactions from '../store/companies/async-actions'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CompaniesActions } from '../store/companies/types'
import { IRootState } from '../store'
import { useEffect } from 'react'
import Card from '../components/Card/Card'
import { TYPE_ICON } from '../constants'

const mapStateToProps = ({ companies }: IRootState) => {
  const { phoneNumberSelected } = companies
  return { phoneNumberSelected }
}

const mapDispatcherToProps = (dispatch: Dispatch<CompaniesActions>) => {
  return {
    getInfoNumber: (phoneId: string | undefined) =>
      asyncactions.getPhoneNumberAsync(dispatch, phoneId),
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>

const Number = (props: ReduxType) => {
  const { phoneNumberSelected, getInfoNumber } = props

  const phoneId = useParams().numberId

  useEffect(() => {
    getInfoNumber(phoneId)
  }, [])

  return <Card title={phoneNumberSelected?.id} iconDescription={phoneNumberSelected?.type} iconType={TYPE_ICON} />
}

export default connect(mapStateToProps, mapDispatcherToProps)(Number)
