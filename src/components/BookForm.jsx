import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.author.trim() || !form.year.trim()) {
      setError("Preencha o título, autor e o ano.");
      return;
    }

    onAddBook({
      id: crypto.randomUUID(),
      title: form.title.trim(),
      author: form.author.trim(),
      year: form.year.trim(),
      available: true,
    });

    setForm({
      title: "",
      author: "",
      year: "",
    });

    setError("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="author">Ano</label>
        <input
          id="year"
          name="year"
          value={form.year}
          onChange={handleChange}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Cadastrar livro</button>
    </form>
  );
}
