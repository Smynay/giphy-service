import './App.css';
import Header from './components/Header';
import GifCard from './components/GifCard';
import { ApiKey } from './ApiKey';
import MainPage from './pages/MainPage';

function App() {
  const getResponse = (url) => fetch(url);

  let result = getResponse(
    `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=12&limit=25&offset=0&rating=g&lang=ru`
  );

  result.then((response) => response.json()).then((data) => console.log(data));
  // .then((result) => result.data.forEach((gif) => console.log(gif.url)));

  return (
    <div className="App">
      <Header />
      <MainPage />
      <div className="container-sm d-flex flex-row justify-content-around flex-wrap">
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
      </div>
    </div>
  );
}

export default App;
