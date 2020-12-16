function sole(flowers, num, buget) {
    num = Number(num);
    buget = Number(buget);
    let finalPrice = 0;
  
    switch (flowers) {
      case "Roses":
        if (num > 80) {
          finalPrice =  (num * 5) * 0.9;
        } else {
          finalPrice = num * 5;
        }
        break;
      case "Dahlias":
        if (num > 90) {
          finalPrice = (num * 3.8 )* 0.85;
        } else {
          finalPrice = num * 3.8;
        }
        break;
      case "Tulips":
        if (num > 80) {
          finalPrice = (num * 2.8 )* 0.85;
        } else {
          finalPrice = num * 2.8;
        }
        break;
     case "Narcissus":
        if (num < 120) {
          finalPrice = (num * 3) * 1.15;
        } else {
          finalPrice = num * 3;
        }
        break;
    case "Gladiolus":
        if (num < 80) {
          finalPrice = (num * 2.5) * 1.2;
        } else {
          finalPrice = num * 2.5;
        }
        break;
    }
  if (buget >= finalPrice){
    console.log(`Hey, you have a great garden with ${num} ${flowers} and ${(buget-finalPrice).toFixed(2)} leva left.`);
  }
  else {
    console.log(`Not enough money, you need ${(finalPrice-buget).toFixed(2)} leva more.`);
  }
  }
  sole();