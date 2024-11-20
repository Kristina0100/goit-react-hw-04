const ImageCard = ({ urls, alt_description}) => { 
  return (
    <div>
      <div>
        <img src={urls.small} alt={alt_description} />
			</div>
    </div>
  )
}

export default ImageCard;