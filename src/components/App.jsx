// src/components/App.jsx
import Product from "./Product";
import BookList from "./BookList";
import { Alert } from "./Alert"; // Імпортуємо компонент Alert як іменований експорт
import UserMenu from "./UserMenu"; // Імпортуємо компонент UserMenu

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  return (
    <div className="content-wrapper">
      <UserMenu name="User icon" />

      <h1>
        <img src="./vite.svg" /> Vite +{" "}
        <img src="./react.svg" className="react-icon" /> React
      </h1>

      <div>
        <h2>Best selling</h2>
        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />

        <h3>Books of the week</h3>
        <BookList books={favouriteBooks} />

        <h3>Alert sample</h3>
        {/* Додаємо різні варіанти компоненту Alert */}
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" outlined>
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" outlined elevated>
          Please update your profile contact information
        </Alert>
      </div>
    </div>
  );
}
