import CostItem from '../CostItem'
import './CostList.css'

const CostList = ({ costs }) => {
  return (
    <ul className="cost-list">
      {costs.length > 0 ? (
        costs.map((cost) => {
          return (
            <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              price={cost.price}
            />
          )
        })
      ) : (
        <h1 className="cost-list__fallback">You dont have expences</h1>
      )}
    </ul>
  )
}

export default CostList
