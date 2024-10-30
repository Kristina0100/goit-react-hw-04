import ImageCard from "../ImageCard/ImageCard";

// import styles from "./ImageGallery.module.css";

const ImageGallery = ({images, onImageClick}) => {
  return (
	  <div>
		  <ul>
			  {images.map((image) =>
		(
			<li key={image.id}
			onClick={() => onImageClick(image.urls)}>
			<ImageCard
			urls ={image.urls} 
            description={image.description} 
            likes={image.likes} 
            username={image.user.username} />
			  </li>
		  ))}
		  </ul>
		</div>
	)
}

export default ImageGallery