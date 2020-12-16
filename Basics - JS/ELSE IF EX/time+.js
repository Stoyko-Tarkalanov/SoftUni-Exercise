// function solve(first, second) {
//   let hours = Number(first);
//   let minutes = Number(second);
//   let totalTime = 0;

//   let newHours = hours * 60;
//   totalTime = newHours + minutes + 15;
//   minutes = Math.floor(totalTime % 60);

//   if (totalTime / 60 >= 24) {
//     totalTime = 0;
//   }

//   if (minutes < 10) {
//     console.log(`${(totalTime / 60).toFixed(0)}:0${minutes}`);
//   } else {
//     console.log(`${(totalTime / 60).toFixed(0)}:${minutes}`);
//   }

// }

// solve("23", "44");



function solve(hours, minutes) {
  hours = Number(hours);
  minutes = Number(minutes);

  let totalMins = hours * 60 + minutes + 15;
  let newHours = Math.floor(totalMins / 60);
  let newMins = totalMins % 60;

  if (newHours === 24) { //проверяваме дали часовете са 24
    newHours = 0; // ако часовете са 24, правим ги на 0
    if (newMins < 10) { // проверяваме дали минутите са по-малко от 10
      console.log(`${newHours}:0${newMins}`); // ако са - добавяме водещя 0, за да може винаги да се визуализира двуцифрено число.
    } else {
      console.log(`${newHours}:${newMins}`); // ако са 10 и нагоре - просто изпринтваме минутите.
    }
  } else if (newMins < 10) { // Ако изпълнението на програмата стигне до този else if, значи часовете са по-малко от 24 и няма нужда да ги модифицираме. Единствено трябва да проверим дали минутите са по-малко от 10.
    console.log(`${newHours}:0${newMins}`); // тук правим същата проверка
  } else { // ако изпълнението на програмата стигне до този else, значи часовете не са = 24 и минутите са < 10, значи просто изпринтваме стойностите.
    console.log(`${newHours}:${newMins}`);
  }
}