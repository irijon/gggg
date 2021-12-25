import "./App.scss";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState({});

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    searchProducts(search);
  };

  const searchProducts = (query) => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        setProducts(data);
      });
    });
  };

  return (
    <div className="App">
      <div className="search-wrapper">
        <input
          className="search"
          placeholder="Наименование товара"
          value={search}
          onChange={handleSearch}
        />
        <button className="btn-search" onClick={handleClick}>
          Поиск
        </button>
      </div>
      <div className="cards">
        <Card {...products.mvideo} logo={mvideoLogo}></Card>
        <Card {...products.ozon} logo={ozonLogo}></Card>
      </div>
    </div>
  );
}

function Card({ name, link, price, logo }) {
  if (name) {
    return (
      <div className="card">
        <h3>
          <a target="_blank" rel="noreferrer" href={link}>
            {name}
          </a>
        </h3>
        <div className="logo">
          {logo}
        </div>
        <div className="price">
          <a className="toMagaz" target="_blank" rel="noreferrer" href={link}>
            Купить
          </a>
          <span>Цена: {price}</span>
        </div>
        
      </div>
    );
  }
  return null;
}

const mvideoLogo = <img src="https://cms.mvideo.ru/magnoliaPublic/dam/jcr:6c33dfce-6106-48c9-9101-8dadbfea21fd"></img>

const ozonLogo = <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/Ozon-new-logo-01.jpg" width="200px" height="100px" srcset="https://cdn1.ozone.ru/s3/cms/7f/t44/wc400/doodle_1.png 2x" alt="Ozon"></img>

export default App;
