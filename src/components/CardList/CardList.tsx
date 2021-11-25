import Card from '../Card/Card'
import { COMPANY_ICON } from '../../constants'
import './CardList.scss'

const CardList = () => {
  return (
    <div className="cards-wrapper">
      <Card title="example" iconType={COMPANY_ICON} iconDescription="Some text here" />
      <Card title="example" iconType={COMPANY_ICON} iconDescription="Some text here" />
      <Card title="example" iconType={COMPANY_ICON} iconDescription="Some text here" />
      <Card title="example" iconType={COMPANY_ICON} iconDescription="Some text here" />
      <Card title="example" iconType={COMPANY_ICON} iconDescription="Some text here" />
      <Card title="example" iconType={COMPANY_ICON} iconDescription="Some text here" />
      <Card title="example" iconType={COMPANY_ICON} iconDescription="Some text here" />
    </div>
  )
}

export default CardList
