/* Extended if-else-if */

let workday = "Tuesday";

/* if (workday === "Monday") {
  console.log("Have fun working for 4 more days!");
} else if (workday === "Tuesday") {
  console.log("Tusi Musy");
} else if (workday === "Wednesday") {
  console.log("Hello Midweek");
} else if (workday === "Thursday") {
  console.log("Almost done!");
} else if (workday === "Friday") {
  console.log("Weekend ahead!");
} else {
  //default case
  console.log("It's weekend!!!!!");
} */

/* Switch-case-statement */
switch (workday) {
  case "Monday":
    console.log("Have fun working for 4 more days!");
    break;
  case "Tuesday":
    console.log("Tusi Musy");
    break;
  case "Wednesday":
    console.log("Hello Midweek");
    break;
  case "Thursday":
    console.log("Almost done!");
    break;
  case "Friday":
    console.log("Weekend ahead!");
    break;
  default:
    console.log("It's weekend!!!!!");
}

console.log("END");
