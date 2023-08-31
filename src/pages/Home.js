import { Link } from "react-router-dom";
// * We use Link instead of href to navigate between pages
// Using href sends http requests to the server every time and impatcs performance
function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products"> the list of products</Link>
      </p>
    </>
  );
}

export default HomePage;
