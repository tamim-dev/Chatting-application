import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Link,
} from "react-router-dom";
import Resgistration from "./pages/Resgistration";
import Login from "./pages/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Resgistration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);
function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
