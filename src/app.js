/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //Arrays with their values
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //Random numbers for each array and their values
  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  //Concatenation of the random values into an excuse
  document.querySelector("#excuse").innerHTML =
    who[random1] +
    " " +
    action[random2] +
    " " +
    what[random3] +
    " " +
    when[random4];
};
