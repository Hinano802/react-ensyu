import { useEffect, useState } from "react";
import { Card } from "./Card";
import { fetchBreedsList } from "./fetchBreedsList";
import { fetchDogs } from "./fetchDogs";
import { Button } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function App() {
  const [breedList, setBreedList] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [size, setSize] = useState("all");
  const [search, setSearch] = useState("all");
  const [dogCount, setDogCount] = useState(9);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function shuffle(arr) {
    if (Array.isArray(arr)) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    } else {
      return arr;
    }
  }

  useEffect(() => {
    (async () => {
      const data = await fetchDogs(search);
      setDogs(shuffle(data));
    })();
  }, [search]);

  useEffect(() => {
    (async () => {
      const data = await fetchBreedsList();
      setBreedList(data.terrier);
    })();
  }, []);

  return (
    <>
      <header>
        <h1>テリアフォトギャラリー</h1>
      </header>
      <div>
        <aside>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const size = event.target.elements.searchTerm.value;
              const keyword = event.target.elements.searchTerm.value;
              const data = await fetchDogs(size, keyword);
              setDogs(data);
              setSize(size);
              setSearch(keyword);
            }}
          >
            <div>
              <label htmlFor="searchTerm">犬種を選ぶ</label>
              <select id="searchTerm">
                <option value="all">すべて</option>
                {breedList.map((breed, index) => {
                  return (
                    <option value={breed} key={index}>
                      {breed}-terrier
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <Button
                type="submit"
                size="large"
                variant="contained"
                style={{ background: "rgb(205, 92, 92)", fontSize: "2rem" }}
              >
                条件を決定
              </Button>
            </div>
          </form>
        </aside>
        <main>
          {Array.isArray(dogs) &&
            dogs.slice(0, dogCount).map((src) => {
              return <Card src={src} />;
            })}
          <Button
            size="large"
            variant="contained"
            disabled={dogs.length - 1 < dogCount}
            onClick={() => setDogCount(dogCount + 9)}
            style={
              dogs.length - 1 < dogCount
                ? null
                : { backgroundColor: "rgb(170, 80, 80)", color: "white" }
            }
          >
            表示を増やす
          </Button>
        </main>
      </div>
      <Button id="scrollToTopBtn" onClick={scrollToTop}>
        <ArrowCircleUpIcon />
      </Button>
      <footer>
        <p>5422083 古賀日南乃</p>
        <p>日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
        <p>
          犬の画像は <a href="https://dog.ceo/dog-api/about">Dog API </a>{" "}
          から取得しています。
        </p>
      </footer>
    </>
  );
}
