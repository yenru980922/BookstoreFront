import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import HomePage from './Pages/UsedBooks/HomePage/HomePage';
import AddUsedBook from './Pages/UsedBooks/UseBookCreate/index';
import PublicLayout from './layouts/PublicLayout';
import UserBooksList from './Pages/UsedBooks/UseBookList/index';
// import UsedBookList from "./Pages/UseBookList/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PublicLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/add-used-book' element={<AddUsedBook />} />
      <Route path='/used-book-list' element={<UserBooksList userId={2} />} />
    </Route>
  )
);

export default router;
