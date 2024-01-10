import { useEffect, useState } from "react";
import { fetchImages } from "./api";

async function fetchDogs(size, keyword) {
  const response = await fetch("dogs.json");
  const data = await response.json();
  return data.filter((item) => {
    return (
      (size === "all" || size === item.size) &&
      (!keyword || item.breed.includes(keyword))
    );
  });
}

export default function App() {
  const [dogs, setDogs] = useState([]);
  const [size, setSize] = useState("all");
  const [search, setSearch] = useState("");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleImageClick = () => {
    // 新しいウィンドウを開く
    alert("画像がクリックされました");
    /*
    window.open(imageUrl, "_blank", "width=800,height=600");
    */
  };
  useEffect(() => {
    (async () => {
      const data = await fetchDogs("all");
      setDogs(data);
    })();
  }, []);
  return (
    <>
      <header>
        <h1>いぬフォトギャラリー</h1>
      </header>
      <div>
        <aside>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const size = event.target.elements.size.value;
              const keyword = event.target.elements.searchTerm.value;
              const data = await fetchDogs(size, keyword);
              setDogs(data);
              setsize(Size);
              setSearch(keyword);
            }}
          >
            <div>
              <label htmlFor="searchTerm">犬種から探す</label>
              <input size="text" id="searchTerm" placeholder="入力欄" />
            </div>
            <div>
              <label htmlFor="size">サイズから探す</label>
              <select id="size">
                <option value="all">すべて</option>
                <option value="超小型">超小型犬</option>
                <option value="小型">小型犬</option>
                <option value="中型">中型犬</option>
                <option value="大型">大型犬</option>
              </select>
            </div>
            <div>
              <button>条件を決定</button>
            </div>
          </form>
        </aside>
        <main>
          {dogs.map((jsondata) => {
            if (size === jsondata.size || size === "all") {
              return (
                <section className={jsondata.size}>
                  <h2>{jsondata.breed}</h2>
                  <p>{jsondata.size}</p>
                  <img
                    src={jsondata.image}
                    alt={jsondata.breed}
                    onClick={() => handleImageClick(jsondata.image)}
                    style={{ cursor: "pointer" }}
                  />
                </section>
              );
            }
          })}
        </main>
      </div>
      <button id="scrollToTopBtn" onClick={scrollToTop}>
        条件を変更する
      </button>
      <footer>
        <p>5422083 古賀日南乃</p>
        <p>日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
        <p>
          Dog images are retrieved from Dog API
          <br />
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </footer>
    </>
  );
}
