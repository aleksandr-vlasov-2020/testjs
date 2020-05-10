// if (2 * 4 == 7) {
//   console.log("Верно")
// } else {
//   console.log("Неверно")
// }
//1)
let num = 50;
if (num < 49) {
  console.log("Мало")
} else if (num > 100) {
  console.log("Много")
} else {
  console.log("Верно")
};

(num == 50) ? console.log("Верно"): console.log("Неверно");

switch (num) {
  case num < 49:
    console.log("Мало");
    break;
  case num > 100:
    console.log("Много");
    break;
  case num > 80:
    console.log("Все еще много");
    break;
  case num == 50:
    console.log("Верно");
    break;
  // default:
  //   console.log("что то пошло не так");
  //   break;
}