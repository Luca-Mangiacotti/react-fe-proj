import { Link } from "react-router-dom";

export default function Card({
  isDetail,
  id,
  title,
  description,
  imageUrl,
  price,
}) {
  return (
    <div
      className="card my-4 shadow-sm border-primary"
      style={{ maxWidth: 350 }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="card-img-top img-fluid"
          style={{ objectFit: "cover", height: 220 }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text text-muted" style={{ minHeight: 60 }}>
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="badge bg-success fs-5">{price} €</span>
          {isDetail ? (
            <Link to="/" className="btn btn-outline-secondary btn-sm">
              Home
            </Link>
          ) : (
            <Link to={`/comics/${id}`} className="btn btn-primary btn-sm">
              Dettaglio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
