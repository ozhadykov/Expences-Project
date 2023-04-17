import { useState } from 'react'
import CostForm from './CostForm'
import styles from './NewCost.module.css'

const NewCost = ({ setCosts }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={styles.newCost}>
      {!showMenu ? (
        <button onClick={toggleMenu}>Add New Expence</button>
      ) : (
        <CostForm setCosts={setCosts} toggleMenu={toggleMenu} />
      )}
    </div>
  )
}

export default NewCost
