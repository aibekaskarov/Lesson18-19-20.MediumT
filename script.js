 //1
 let guests = prompt("Введите количество гостей: ")
 if (guests === 2) {
     console.log("разрезов 1")
 } else if (guests === 3) {
     console.log("разрезов 3")
 } else if (guests === 6) {
     console.log("разрезов 3")
 } else if (guests === 5) {
     console.log("разрезов 5")
 } else {
     console.log("разрезов")
 }

//2
let apples = prompt("Укажите количество яблок:");
if (apples % 3 == 0) {
console.log("Яблоки можно разделить поровну между тремя детьми")
} else {
 console.log("Яблоки нельзя разделить поровну между тремя детьми")
}

//3 
let a = prompt("Введите длину a: ");
let b = prompt("Введите длину b: ");
let c = prompt("Введите длину c: "); 
if (a + b > c && b + c > a && a + c > b) {
 console.log("Такое треугольник существует")
} else {
 console.log("Такое треугольник не существует")
}

//4
let a1 = prompt("Введите длину a: ");
let b2 = prompt("Введите длину b: ");
let c3 = prompt("Введите длину c: ");
if (a1 % b2 % c3 == 0) {
 console.log("Равносторонний трекгольник")
} else if ( a1 === b3 || a1 === c3 || b2 === c3) {
 console.log("Равнобедренный треугольник")
} else if ((a1 + b2 + c3) / 2) {
 console.log("Разносторонний треугольник")
} else {
 console.log("Несуществующий треугольник")
}

//5
let weight = prompt("Вес товара: ")
let country = prompt("Из какой страны вы будете?");
if (weight <= 1) {
 console.log("Cтоимость доставки составляет 10 долларов.")
} else if (weight <= 5 && country === "США") {
 console.log("Стоимость доставки составляет 10 долларов.")
} else if (weight <= 5 && country !== "США") {
 console.log("Стоимость доставки составляет 30 долларов.")
} else (
 console.log("Стоимость доставки составляет 50 долларов.")
)
