import { combineReducers, createStore } from 'redux'
import { companiesReducer } from './companies/reducer'
import { ICompaniesState } from './companies/types'

export interface IRootState {
  companies: ICompaniesState
}

const store = createStore(
  combineReducers({
    companies: companiesReducer,
  })
)
export default store
