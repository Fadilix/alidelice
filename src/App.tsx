import { Toaster } from "react-hot-toast";
// import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;