import './App.css';
import Header from './components/Header';
import GifCard from './components/GifCard';
import Loader from './components/Loader';
import { ApiKey } from './ApiKey';
import MainPage from './pages/MainPage';

function App() {
  const getResponse = (url) => fetch(url);
  let items = [];

  let result = getResponse(
    `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=12&limit=25&offset=0&rating=g&lang=ru`
  );

  result
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then((result) =>
      result.data.forEach((gif) => items.push(gif.images.downsized.url))
    );

  console.log(items);

  return (
    <div className="App">
      <Header />
      <MainPage items={items} />
    </div>
  );
}

export default App;
