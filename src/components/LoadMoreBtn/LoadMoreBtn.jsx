import styles from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => {
  return (
    <div className={styles.btn_wrap}>
      <button className={styles.btn} type="button" onClick={onClick}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn