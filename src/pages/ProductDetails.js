import { useParams, Link } from "react-router-dom";
// todo: 'useParams' returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
function ProductDetailsPage() {
  // params is an object
  // It contains every dynamic path segment defined in the route definition
  const params = useParams();
  return (
    <>
      <h1>Prouct Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailsPage;
