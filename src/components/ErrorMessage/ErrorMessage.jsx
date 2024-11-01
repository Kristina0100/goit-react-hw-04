import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({error}) => {
  return (
    <div className={styles.error_wrap}>
      <p  className={styles.error}>
        Oops...an error occurred while fetching images ({error}). Please try again later.
      </p>
    </div>
  )
}

export default ErrorMessage