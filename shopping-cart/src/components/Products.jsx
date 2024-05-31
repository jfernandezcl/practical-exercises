import "../components/Products.css";
import { AddToCartIcon } from "./Icons";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <img src={products.thumbnail} alt={products.title} />
            <div>
              <strong>{products.title}</strong>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
