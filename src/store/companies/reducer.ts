import { Constants, CompaniesActions, ICompaniesState } from './types'

const init: ICompaniesState = {
  listCompanies: [],
  pageTitle: 'Companies',
}

export function companiesReducer(
  state: ICompaniesState = init,
  action: CompaniesActions
): ICompaniesState {
  switch (action.type) {
    case Constants.GET_LIST_COMPANIES:
      return {
        ...state,
      }
    case Constants.ADD_LIST_COMPANIES:
      return {
        ...state,
        listCompanies: action.payload.item,
      }
    case Constants.SET_COMPANY_DETAIL:
      return {
        ...state,
        companyDetail: action.payload.item,
      }
    case Constants.SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumberSelected: action.payload.item,
      }
    case Constants.SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload.title,
      }
    default:
      return state
  }
}
