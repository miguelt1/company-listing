import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type CompaniesActions = ActionType<typeof actions>

export interface ICompaniesState {
  pageTitle?: string
  listCompanies: ICompany[]
  companyDetail?: ICompany
  phoneNumberSelected?: IPhoneNumber
}

export interface ICompany {
  id?: number
  name: string
  vatin: string
  phoneNumbers?: IPhoneNumber[]
}

export interface IPhoneNumber {
  id: string
  type: string
  company_id: number
}

export enum Constants {
  ADD_LIST_COMPANIES = 'ADD_LIST_COMPANIES',
  SET_COMPANY_DETAIL = 'SET__COMPANY_DETAIL',
  GET_COMPANY = 'GET_COMPANY',
  SET_PHONE_NUMBER = 'SET_PHONE_NUMBER',
}
