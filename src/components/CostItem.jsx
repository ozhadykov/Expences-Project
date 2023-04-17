import CostDate from './CostDate'
import Card from './Card'
import './CostItem.css'

function CostItem({ date, description, price }) {
  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">{price}$</div>
      </div>
    </Card>
  )
}

export default CostItem
