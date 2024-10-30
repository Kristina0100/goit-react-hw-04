// import styles from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => {
  return (
    <div>
      <button type="button" onClick={onClick}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn