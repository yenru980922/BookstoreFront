import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UseBookCreate from "./components/UseBookCreate";
import UseBookList from "./components/UseBookList";


const router = createBrowserRouter([
  {
    path: "/", //首頁
    element: <App />,
  },
  {
    path: "/used-books", 
    element: <UseBookCreate />,
  },
  {
    path: "/add-used-book", 
    element: <UseBookList />,
  },
]);

export default router;
