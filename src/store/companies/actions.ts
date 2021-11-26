import { action } from 'typesafe-actions'
import { Constants, ICompany, IPhoneNumber } from './types'

export function addCompanyList(item: ICompany[]) {
  return action(Constants.ADD_LIST_COMPANIES, {
    item,
  })
}

export function setCompany(item: ICompany) {
  return action(Constants.SET_COMPANY_DETAIL, {
    item,
  })
}

export function getCompany(item: ICompany) {
  return action(Constants.GET_COMPANY, {
    item,
  })
}

export function setPhoneNumber(item: IPhoneNumber) {
  return action(Constants.SET_PHONE_NUMBER, {
    item,
  })
}
