import { Link, useNavigate } from "react-router-dom";
// * We use Link instead of href to navigate between pages
// Using href sends http requests to the server every time and impatcs performance
function HomePage() {
  // * Imperative navigation
  // useNavigate hook is used to navigate through pages programmatically
  // ie: on form submission etc
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products"> the list of products</Link>
      </p>
      <p>
        {/* Demo button, we won't useNavigate this way usually. We use a link. */}
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
