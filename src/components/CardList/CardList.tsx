import Card from '../Card/Card'
import { VATIN_ICON } from '../../constants'
import { ICompany } from '../../store/companies/types'
import './CardList.scss'
import { Link } from 'react-router-dom'

interface IPropsCardList {
  list: ICompany[]
}

const CardList = ({ list }: IPropsCardList) => {
  return (
    <div className="cards-wrapper">
      {list.map((elem, index) => {
        return (
          <Link to={`/company/${elem.id}`} key={index}>
            <Card title={elem.name} iconType={VATIN_ICON} iconDescription={elem.vatin} />
          </Link>
        )
      })}
    </div>
  )
}

export default CardList
