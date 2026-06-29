import "./App.css";
import Logo from "./assets/white.svg";
import foto from "./assets/1.png";
import { useState } from "react";

// Cambridge registration

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    setName("");
    setCity("");
    setNumber("");
    setPhone("");
  }
  // Кнопка сделать input пустым

  return (
    <>
      <header className="container">
        <nav className="">
          <div className="app-logo">
            <img className="logo" src={Logo} alt="logo" />
          </div>
        </nav>
        <section className="app-container">
          <div className="app-item">
            <h1 className="app-tex">Хотите выучить английский язык?</h1>
            <img className="app-foto" src={foto} alt="foto" />
            <div></div>
          </div>

          <div className="app-box">
            <h1 className="app-text">
              Зарегистрируйтесь сейчас, чтобы записаться на занятия
            </h1>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="item"
              type="text"
              placeholder="Имя"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="item"
              type="number"
              placeholder="Номер телефона"
            />

            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="item"
              type="number"
              placeholder="Возраст"
            />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="item"
              placeholder=""
            >
              <option className="app-option" value="" hidden>
                Выберите город
              </option>
              <option value="Ташкент">Ташкент</option>
              <option value="Фергана">Фергана</option>
              <option value="Самарканд">Самарканд</option>
            </select>
            <button onClick={handleSubmit} className="app-button">
              Позвоните мне!
            </button>
            <p className="text">
              Занятия проводятся оффлайн в Ташкенте, Фергане и Самарканде.
            </p>
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
