import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
	return (
		<div>
			<ul className={styles.gallery}>
				{images.map((image) => (
					<li key={image.id}>
						<ImageCard
							urls={image.urls}
							alt_description={image.alt_description}
							onClick={() => onImageClick(image)}/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ImageGallery;