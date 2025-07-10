import { useState, useEffect } from "react";
import axios from "axios";
import PizzaCard from "../components/PizzaCard";

export default function HomePage() {
  const [pizzas, setPizzas] = useState([]);

  //esegiamo il rendering delle pizze
  const fetchPizzas = () => {
    console.log("caricando le pizze");
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        setPizzas(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(fetchPizzas, []);
  return (
    <>
      <h1 className="text-primary">Pizzeria 8 Bit</h1>
      <section>
        {pizzas.map((card, index, pizza) => (
          <div key={index} pizza={pizza}>
            <PizzaCard
              name={card.name}
              description={card.description}
              price={card.price}
              foto={card.foto}
              id={card.id}
              isDetail={false}
              ingredients={pizza.ingredients}
            />
          </div>
        ))}
      </section>
    </>
  );
}
