import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage"; 
import AddUsedBook from "./Pages/UseBookCreate/index"; 
import PublicLayout from "./layouts/PublicLayout";
// import UsedBookList from "./Pages/UseBookList/index"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PublicLayout/>}>
        <Route index element={<HomePage/> }/>
        <Route path="/add-used-book" element={<AddUsedBook />}/>
    </Route>

  )
);


export default router;
