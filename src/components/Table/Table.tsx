import { ICompany, IPhoneNumber } from '../../store/companies/types'
import './Table.scss'
import { Link } from 'react-router-dom'

interface IPropsCardList {
  list: IPhoneNumber[] | undefined
}

const Table = ({ list }: IPropsCardList) => {
  return (
    <table className="table-wrapper">
      <tr>
        <th>Number</th>
        <th>Type</th>
      </tr>
      {list?.map((elem, index) => {
        return (
         
            <tr key={index}>
              <td><Link to={`/number/${elem.id}`}>{elem.id}</Link></td>
              <td>{elem.type}</td>
            </tr>
          
        )
      })}
    </table>
  )
}

export default Table
