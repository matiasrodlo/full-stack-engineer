import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const CLIENT_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const CLIENT_SECRET = "XXXXXXXXXXXXXXXXXXXXXXXXXXXX";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParamenters = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParamenters)
      .then((result) => result.json())
      .then((data) => console.log(data.access_token));
  }, []);

  // search

  async function search() {
    console.log("Search for " + searchInput); // Taylor Swift

    //Get request using  Artist ID
    var artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="search for artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                search();
              }
            }}
            onchange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
