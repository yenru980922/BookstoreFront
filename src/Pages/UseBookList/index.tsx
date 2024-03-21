import React from 'react';
import { useGetApiUsedBooksUserIdUserId } from '../../API';

const UserBooksList: React.FC<{ userId: number }> = ({ userId }) => {
  const { data, isLoading, error } = useGetApiUsedBooksUserIdUserId(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>我的上架書籍</h1>
      {data?.data.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
         
        </div>
      ))}
    </div>
  );
};

export default UserBooksList;
