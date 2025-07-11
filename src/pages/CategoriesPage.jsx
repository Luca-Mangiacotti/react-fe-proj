import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Ui/Card";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [comics, setComics] = useState([]);

  // Carica le categorie all'avvio
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL_CATEGORIES)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Errore nel caricamento categorie", err));
  }, []);

  // Carica i comics quando viene selezionata una categoria
  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`${import.meta.env.VITE_API_URL}?category=${selectedCategory}`)
        .then((res) => setComics(res.data))
        .catch((err) =>
          console.error("Errore nel caricamento dei comics", err)
        );
    }
  }, [selectedCategory]);

  return (
    <div className="mx-5 mt-4">
      <h1 className="mb-4 text-info">Categorie</h1>

      <div className="mb-4 d-flex flex-wrap gap-2">
        {Array.isArray(categories) &&
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`btn ${
                selectedCategory === cat.name ? "btn-info" : "btn-outline-info"
              }`}
            >
              {cat.name}
            </button>
          ))}
      </div>

      {selectedCategory && (
        <>
          <h2 className="mb-3 text-secondary">Comics in: {selectedCategory}</h2>
          <section className="card-grid gap-3">
            {comics.map((comic) => (
              <Card
                key={comic.id}
                title={comic.title}
                price={comic.price}
                imageUrl={comic.imageUrl}
                id={comic.id}
                category={comic.category}
              />
            ))}
          </section>
        </>
      )}
    </div>
  );
}
