import "./Products.css";
import { AddToCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { addToCart } = useCart();
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((products) => (
          <li key={products.id}>
            <img src={products.thumbnail} alt={products.title} />
            <div>
              <strong>{products.title}</strong>
            </div>
            <div>
              <button onClick={() => addToCart(products)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
