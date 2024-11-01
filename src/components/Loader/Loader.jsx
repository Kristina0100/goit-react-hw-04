import { RotatingLines } from 'react-loader-spinner'
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="green"
  strokeWidth="5"
  strokeColor="crimson"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
      />
    </div>
  )
}

export default Loader