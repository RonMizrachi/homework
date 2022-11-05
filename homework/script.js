function hamburger() {
  let order = prompt(
    "do you want your hamburger with lettuce,tomatoes,onion and pickles or without any vegetables?"
  );
  if (order == "with") {
    let order2 = prompt("do you want with extra burger or without any extra? ");
    if (order2 == "with");
    alert(
      "your order is hamburger with lettuce,tomatoes,onion and pickles with extra burger?"
    );
  } else if (order == "without") {
    let order2 = prompt("do you want with extra burger or without any extra? ");
    if (order2 == "without");
    alert(
      "your order is hamburger without any vegetables without extra burger?"
    );
  }
}

function pizza() {
  let firstorder = prompt(
    "do you want your pizza with olives,mushrooms and onions or without anything?"
  );
  if (firstorder == "with") {
    let secondorder = prompt(
      "do you want your pizza with extra cheese or without extra?"
    );
    if (secondorder == "with")
      alert(
        "your order is pizza with olives,mushrooms and onions and extra cheese "
      );
  } else if (firstorder == "without") {
    let secondorder = prompt(
      "do you want your pizza with extra cheese or without extra?"
    );
    if (secondorder == "without")
      alert(
        "your order is pizza without any vegetables andwithout extra chesse"
      );
  }
}
