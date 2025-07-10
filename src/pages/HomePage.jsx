import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function HomePage() {
  const [comics, setComics] = useState([]);

  //esegiamo il rendering delle pizze
  const fetchComics = () => {
    console.log("caricando i comics");
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        console.log("Risposta dell' API: ", response.data);
        const { data } = response;
        setComics(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(fetchComics, []);
  return (
    <>
      <h1 className="text-primary">8bit Manga</h1>
      <section>
        {(Array.isArray(comics) ? comics : []).map((card, index, comic) => (
          <div key={index} comic={comic}>
            <Card
              title={card.title}
              description={card.description}
              price={card.price}
              imageUrl={card.imageUrl}
              id={card.id}
              isDetail={false}
              ingredients={comic.ingredients}
            />
          </div>
        ))}
      </section>
    </>
  );
}
