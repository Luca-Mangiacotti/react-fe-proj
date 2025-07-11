import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCard from "../components/Ui/DetailCard";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((res) => {
        console.log(res.data);
        setComic(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-5">Caricamento...</div>;
  if (!comic) return <div className="text-center mt-5">Comic non trovato.</div>;

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-4">
      <Link to="/" className="btn btngen text-center mt-5">
        {" "}
        torna all'elenco{" "}
      </Link>
      <DetailCard
        id={comic.id}
        title={comic.title}
        description={comic.description}
        price={comic.price}
        imageUrl={comic.imageUrl}
        stockQuantity={comic.stockQuantity}
        category={comic.category}
      />
    </div>
  );
}
