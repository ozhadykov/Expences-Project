import { useState } from 'react'
import Card from './Card'
import styles from './Costs.module.css'
import CostList from './Costs/CostList'
import CostsDiagram from './Costs/CostsDiagram'
import CostsFilter from './NewCost/CostsFilter'

const Costs = ({ costs }) => {
  const [year, setYear] = useState('2020')

  function onChangeYearHandler(year) {
    setYear(year)
  }

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === year
  )

  return (
    <Card className={styles.Costs}>
      <CostsFilter onChangeYear={onChangeYearHandler} year={year} />
      <CostsDiagram filteredCosts={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  )
}

export default Costs
