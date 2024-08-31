// src/components/BookList.jsx

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>; // Додано key для унікальності кожного елемента
      })}
    </ul>
  );
};

export default BookList;
