import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("" /* initialState */);
  const [dateTime, setDatetime] = useState("" /* initialState */);
  const [description, setDescription] = useState("" /* initialState */);
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";

    fetch(url, init: {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(value: { name, description, datetime
      }).then(response => {response.json().then(json => {
        console.log('result', json)
      })})
    });
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
              placeholder={"+200 new samsung tv"}
            />
            <input
              value={dateTime}
              onChange={(ev) => setDatetime(ev.target.value)}
              type="datetime-local"
            />
          </div>
          <div className="description">
            <input
              type="text"
              onChange={(ev) => setDescription(ev.target.value)}
              placeholder={"description"}
            />
          </div>
          <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung TV</div>
              <div className="description">it was time for new tv</div>
            </div>
            <div className="right"></div>
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Gig job new website</div>
              <div className="description">it was time for new tv</div>
            </div>
            <div className="right"></div>
            <div className="price green">$400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Iphone</div>
              <div className="description">it was time for new tv</div>
            </div>
            <div className="right"></div>
            <div className="price red">-$900</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </h1>
    </main>
  );
}

export default App;
