const ImageCard = ({ urls, alt_description, onClick }) => {
  return (
    <div>
      <div>
        <img src={urls.small}
          alt={alt_description}
          onClick={onClick}/>
      </div>
    </div>
  );
};
  
export default ImageCard;