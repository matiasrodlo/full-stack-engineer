const team = {
  _players: [
    {
      firstName: "Matias",
      lastName: "Rodlo",
      age: "29",
    },
    {
      firstName: "Marian",
      lastName: "Rodriguez",
      age: "15",
    },
    {
      firstName: "Marianela",
      lastName: "Lopez",
      age: "15",
    },
  ],
  _games: [
    {
      opponet: "Julio",
      teampoints: 10,
      opponetPoints: 30,
    },
    {
      opponet: "David",
      teampoints: 20,
      opponetPoints: 50,
    },
    {
      opponet: "Maikol",
      teampoints: 12,
      opponetPoints: 20,
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer: function (newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },

  addGame: function (newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponet: newOpponent,
      teampoints: newTeamPoints,
      opponetPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

// Adding a new player
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team.games);
