import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

// todo: OLD WAY TO DEFINE ROUTES
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// todo: NEW WAY TO DEFINE ROUTES
// Every object in this array represents a route
const router = createBrowserRouter([
  {
    path: "/",
    // * RootLayout acts as a parent/wrapper to the child routes
    // We can also have path dependent layout wrappers
    element: <RootLayout />,
    // errorElement is a prop used to define the element that should be loaded when the page throws an error
    errorElement: <ErrorPage />,
    // todo: Using relative paths below
    // absolute paths start with /
    children: [
      {
        // https://example.com/path
        // path can also be nothing (/)
        //path: "/",
        // For dev server, it will be just localhost:3000 (http://localhost:3000/)

        // Setting <HomePage/> as the default route
        index: true,
        // JSX code to be rendered is the element
        // element may also contain other jsx code
        // like <p><HomePage/></p>
        element: <HomePage />,
      },

      { path: "products", element: <ProductsPage /> },
      // * Dynamic Routing using :id as the path parameter
      { path: "products/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  // Providing/Rendering the router on the screen, and load the active path
  return <RouterProvider router={router} />;
}

export default App;
