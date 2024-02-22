class Media {
    constructor(title) {
      this._title = title;
      this._isCheckOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckOut() {
      return this._isCheckOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckOut(value) {
      this._isCheckOut = value;
    }
  
    toggleCheckOutStatus() {
      this._isCheckOut = !this._isCheckOut;
    }
  
    getAverageRating() {
      if (this._ratings.length === 0) {
        return 'No ratings yet.';
      }
  
      let ratingsSum = this._ratings.reduce(
        (currentSum, rating) => currentSum + rating,
        0
      );
  
      return ratingsSum / this._ratings.length;
    }
  
    addRating(value) {
      this._ratings.push(value);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckOut);
  
  speed.addRating(4);
  speed.addRating(4);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());