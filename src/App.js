import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

// Every object in this array represents a route
const router = createBrowserRouter([
  {
    // https://example.com/path
    // path can also be nothing (/)
    path: "/",
    // For dev server, it will be just localhost:3000 (http://localhost:3000/)

    // JSX code to be rendered is the element
    // element may also contain other jsx code
    // like <p><HomePage/></p>
    element: <HomePage />,
  },
]);

function App() {
  // Providing/Rendering the router on the screen, and load the active path
  return <RouterProvider router={router} />;
}

export default App;
