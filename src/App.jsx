import "./App.css";
import BookList from "./components/BookList";
import { books } from "./data/books";
import Panel from "./components/Panel";
import { useState } from "react";

export default function App() {
  const [bookList, setBookList] = useState(books);
  function handleReserve(bookId) {
    setBookList((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book,
      ),
    );
  }

  const availableCount = bookList.filter(
    (book) => book.available,
  ).length;

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        {availableCount} de {bookList.length} livros disponíveis.
      </header>
      <Panel title="Acervo">
        <BookList books={bookList} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}
