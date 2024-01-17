const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log("It's not a string");
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    } else {
      console.log("It's not a number");
    }
  },
  get todaySpecial() {
    if (this._meal !== "" && this._price !== 0) {
      return "Todays Special is Spaghetti for $5!";
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "hola";
menu.price = 2;

console.log(menu.todaySpecial);
