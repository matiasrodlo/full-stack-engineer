import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("" /* initialState */);
  const [dateTime, setDatetime] = useState("" /* initialState */);
  const [description, setDescription] = useState("" /* initialState */);
useEffect(effect: () => {
  getTransactions().then(transactions => {

  })
}, deps: [])

async function getTransaction() {
  const url = process.env.REACT_APP_API_URL+'/transactions'
  const response = await fetch(url)
  const json = await response.json()
}
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split('')[0]

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price, name: name.substring(price.length+1), description, dateTime }),
    })
      .then((response) => response.json())
      .then((json) => setName(value:''); setDatetime(value: ''); 
      setDescription(value: ' ')
      .catch((error) => console.error("Error adding transaction:", error));
  }

  return (
    <main>
      <h1>
        $400<span>.00</span>
        <form onSubmit={addNewTransaction}>
          <div className="basic">
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              placeholder={"+200 new samsung tv"} // Consider better placeholder
            />
            <input
              value={dateTime}
              onChange={(ev) => setDatetime(ev.target.value)}
              type="datetime"
            />
          </div>
          <div className="description">
            <input
              type="text"
              onChange={(ev) => setDescription(ev.target.value)}
              placeholder={"Optional description"} // Consider better placeholder
            />
          </div>
          <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">
          {/* Predefined transactions remain the same */}
        </div>
      </h1>
    </main>
  );
}

export default App;

// 51:12 mins