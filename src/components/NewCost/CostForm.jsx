import { useState } from 'react'
import styles from './CostForm.module.css'

const CostForm = ({ setCosts, toggleMenu }) => {
  const [data, setData] = useState({
    description: '',
    price: 0,
    date: '',
  })

  const submitHandler = (e) => {
    e.preventDefault()
    setCosts(data)
    setData({
      description: '',
      price: 0,
      date: '',
    })
  }

  const inputHandler = (text, name) => {
    //this is safer than setData([...data, [name]:text])
    setData((data) => {
      return { ...data, [name]: text }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newCost__controls}>
        <div className={styles.newCost__control}>
          <label>Name</label>
          <input
            type="text"
            value={data.description}
            onChange={(e) => inputHandler(e.target.value, 'description')}
          />
        </div>
        <div className={styles.newCost__control}>
          <label>Summ</label>
          <input
            type="number"
            value={data.price}
            min="0.01"
            step="0.01"
            onChange={(e) => inputHandler(e.target.value, 'price')}
          />
        </div>
        <div className={styles.newCost__control}>
          <label>Date</label>
          <input
            /*value={data.date} this does not work, i have no idea*/
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={(e) => inputHandler(new Date(e.target.value), 'date')}
          />
        </div>
        <div className={styles.newCost__actions}>
          <button type="submit">Add expense</button>
          <button onClick={() => toggleMenu()}>Cancel</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm
