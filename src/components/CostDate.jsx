import styles from './CostDate.module.css'

function CostDate({ date }) {
  console.log(date.getFullYear())
  return (
    <div className={styles.CostDate}>
      <div className={styles.CostDateMonth}>
        {date.toLocaleString('en-EN', { month: 'long' })}
      </div>
      <div className={styles.CostDateYear}>{date.getFullYear()}</div>
      <div className={styles.CostDateDay}>
        {date.toLocaleString('en-EN', { day: '2-digit' })}
      </div>
    </div>
  )
}

export default CostDate
