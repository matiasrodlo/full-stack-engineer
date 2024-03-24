function luckyCoockie(name) {
  let num = Math.floor(Math.random() * 12);
  console.log(num);

  let phrase = {
    1: "I am in the right place at the right time, doing the right thing",
    2: "Conscious breathing is my anchor.",
    3: "You are loved just for being who you are, just for existing",
    4: "The chance to love and be loved exists no matter where you are",
    5: "Make way for the unprecedented and watch your reality rearrange yourself",
    6: "Open your heart and drink in the glorious day",
    7: "Am I good enough? Yes I am",
    8: "The perfect moment is this one",
    9: "I am deliberate and afraid of nothing",
    10: "Your life is about to be incredible",
    11: "Who you are inside is what helps you make and do everything in life",
    12: " Your perspective is unique. It’s important and it counts",
  };

  return `Hey ${name}, repeat after me: ${phrase[num]}`;
}

luckyCoockie("Mario");
