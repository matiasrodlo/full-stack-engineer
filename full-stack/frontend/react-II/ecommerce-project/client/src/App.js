import "./App.css";
import { BrowserRouter as Router, Switch, Router } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/Productdetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Router path="/" exact component={ProductListing} />
          <Router path="/product/:productId" exact component={ProductDetails} />
          <Router>404 not Found!</Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
