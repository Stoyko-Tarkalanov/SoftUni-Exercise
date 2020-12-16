function solve(pencils, markers, cleaner, disscount) {
let pencilsPrice = 5.80; // package
let markersPrice = 7.20; // package
let cleanerPrice = 1.20; // per -> liter

pencilsPrice *= pencils;
markersPrice *= markers;
cleanerPrice *= cleaner;

let totalPrice = pencilsPrice + markersPrice + cleanerPrice;
let disscountPrice = totalPrice - ((totalPrice * disscount) / 100);

console.log(disscountPrice.toFixed(3));
}
solve("2","3","2.5","25");