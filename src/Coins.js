import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [pickCoin, setPickCoin] = useState(0);
  const [myMoney, setMyMoney] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onSelectChange = (event) => {
    setPickCoin(event.target.value);
    setMyMoney(0);
  };
  const onInputChange = (event) => {
    setMyMoney(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelectChange}>
          <option>Select Coin!</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChange}
          value={myMoney}
          type="number"
          placeholder="Write Your USD"
        />
        &nbsp; USD &nbsp;
        <button>Check!</button>
      </form>
      <h3>You can get {myMoney / pickCoin}</h3>
    </div>
  );
}

export default App;
