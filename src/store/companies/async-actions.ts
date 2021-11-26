import { Dispatch } from 'redux'
import * as actions from './actions'
import { CompaniesActions, ICompany, IPhoneNumber } from './types'
import { api } from '../../services/api'

/*

Get Companies

*/
export async function getCompaniesAsync(dispatch: Dispatch<CompaniesActions>) {
  try {
    let getResponse = await api.get<[ICompany]>('/companies')
    const companyList = getResponse.data
    dispatch(actions.addCompanyList(companyList))
  } catch (err) {
    console.log(err)
  }
}

/*

Get Company Detail

*/
export async function getCompanyDetailAsync(
  dispatch: Dispatch<CompaniesActions>,
  companyId: string | undefined
) {
  try {
    if (companyId) {
      let getPhoneNumber = await api.get<[IPhoneNumber]>(`/phone_numbers`)
      let getCompany = await api.get<ICompany>(`/companies/${companyId}`)

      let phoneNumbers = getPhoneNumber.data.filter(
        (value, index) => value.company_id === +companyId
      )
      let companyData = getCompany.data
      companyData.phoneNumbers = phoneNumbers

      dispatch(actions.setCompany(companyData))
    }
  } catch (err) {
    console.log(err)
  }
}

/*

Get Phone Number

*/
export async function getPhoneNumberAsync(
  dispatch: Dispatch<CompaniesActions>,
  phoneId: string | undefined
) {
  try {
    if (phoneId) {
      let getPhoneNumber = await api.get<IPhoneNumber>(`/phone_numbers/${phoneId}`)

      dispatch(actions.setPhoneNumber(getPhoneNumber.data))
    }
  } catch (err) {
    console.log(err)
  }
}
