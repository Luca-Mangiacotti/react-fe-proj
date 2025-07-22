import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/ui/Card";

export default function HomePage() {
  const [comics, setComics] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const fetchComics = () => {
    const url = `${import.meta.env.VITE_API_URL}${
      searchWord ? `?word=${searchWord}` : ""
    }`;

    axios
      .get(url)
      .then((response) => {
        setComics(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(fetchComics, [searchWord]);

  return (
    <div className="mx-5">
      <h1 className="text-info mb-3 mt-3">8bit Manga</h1>

      {/*  Search bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca per titolo..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>

      {/*  Cards */}
      <section className="card-grid gap-3">
        {comics.map((card, index) => (
          <div key={index}>
            <Card
              title={card.title}
              price={card.price}
              imageUrl={card.imageUrl}
              id={card.id}
              category={card.category}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
