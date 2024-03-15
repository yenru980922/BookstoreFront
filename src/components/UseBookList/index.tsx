// UsedBooksList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface Book {
  id: number;
  title: string;
  author: string;

}

const UsedBooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

 



//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get<Book[]>('/api/usedbooks'); // 更改为你的API端点
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchBooks();
//   }, []);

  return (
    <div>
      <h1>我的二手書列表</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsedBooksList;
