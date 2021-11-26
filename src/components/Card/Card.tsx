import './Card.scss'

import { COMPANY_ICON, PHONE_ICON, TYPE_ICON, VATIN_ICON } from '../../constants'
import companyIcon from '../../assets/icons/company.svg'
import vatinIcon from '../../assets/icons/id.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import typeIcon from '../../assets/icons/type.svg'

export interface IPropsCard {
  title?: string | undefined
  iconType?: string
  iconDescription?: string
}

const Card = ({ title, iconType, iconDescription }: IPropsCard) => {
  return (
    <div className="card-wrapper">
      <div className="main-title-wrapper">
        <span className="main-title">{title}</span>
      </div>
      <div className="icon-description">
        <div className="icon">
          {iconType === COMPANY_ICON && <img src={companyIcon} alt={COMPANY_ICON} />}
          {iconType === VATIN_ICON && <img src={vatinIcon} alt={VATIN_ICON} />}
          {iconType === PHONE_ICON && <img src={phoneIcon} alt={PHONE_ICON} />}
          {iconType === TYPE_ICON && <img src={typeIcon} alt={TYPE_ICON} />}
        </div>
        <div className="description">
          <span className="text">{iconDescription}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
