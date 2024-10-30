// import styles from "./ImageCard.module.css"

const ImageCard = ({ urls, description, likes, username }) => { 
  return (
    <div>
      <div>
        <img src={urls.small} alt={description} />
        <div><p>Likes: {likes}</p>
          <p>Author: {username}</p>
        </div>
			</div>
    </div>
  )
}

export default ImageCard