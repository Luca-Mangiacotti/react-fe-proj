import { Link } from "react-router-dom";
import "../../../src/index.css";

export default function Card({
  isDetail,
  id,
  title,
  category,
  imageUrl,
  price,
}) {
  return (
    <div className="card custom-card my-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="card-img-top custom-card-img"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="text-muted mb-2">
          Categoria: <strong>{category?.name}</strong>
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="badge bg-info fs-6 py-2 px-3">{price} €</span>

          <Link to={`/comics/${id}`} className="btn btngen btn-sm">
            Dettaglio
          </Link>
        </div>
      </div>
    </div>
  );
}
