import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      {
        //todo: Dynamic link using template literal
        PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))
      }
      <p>
        Go back to <Link to="/"> the home page</Link>
      </p>
    </>
  );
}

export default ProductsPage;
