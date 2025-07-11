import React from "react";

export default function DetailCard({
  title,
  description,
  price,
  imageUrl,
  category,
  stockQuantity,
}) {
  return (
    <div className="detail-card-container">
      <img src={imageUrl} alt={title} className="detail-card-image" />
      <h2 className="mt-3">{title}</h2>
      <p className="text-muted mb-2">
        Categoria: <strong>{category?.name}</strong>
      </p>
      <p>{description}</p>
      <p>Disponibilità {stockQuantity}</p>
      <div className="mt-3">
        <span className="badge bg-primary fs-5">€ {price}</span>
      </div>
    </div>
  );
}
