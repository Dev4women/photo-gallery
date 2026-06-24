function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.title} />
      <p className="photo-title">{photo.title}</p>
    </div>
  );
}

export default PhotoCard;