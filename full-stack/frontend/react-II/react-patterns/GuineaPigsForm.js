import React from "react";

function GuineaPigsForm({ favoriteGP, onSelectFavorite, onResetFavorite }) {
  <div data-testid="guineaPigsForm" id="guineaPigsForm">
    <label>
      Choose Your Favorite Guinea Pig:
      <select value={favoriteGP} onChange={favoriteChangeHandler}>
        <option value="0">Alex</option>
        <option value="1">Izzy</option>
        <option value="2">Brandon</option>
        <option value="3">DJ</option>
      </select>
    </label>
    <button onClick={resetFavoriteHandler}>Reset Favorite</button>
  </div>;
}

export default GuineaPigsForm;
