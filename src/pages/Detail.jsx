import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

export default function Detail() {
  const { id } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((res) => {
        setComic(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-5">Caricamento...</div>;
  if (!comic) return <div className="text-center mt-5">Comic non trovato.</div>;

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-4">
      <Card
        isDetail={true}
        id={comic.id}
        title={comic.title}
        description={comic.description}
        price={comic.price}
        imageUrl={comic.imageUrl}
      />
    </div>
  );
}
