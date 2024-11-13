function average(a, b, c) {
    return (a + b + c) / 3;
}

let a = +prompt("Введите первое число", 2);
let b = +prompt("Введите второе число", 4);
let c = +prompt("Введите третье число", 6);

let res = average(a, b, c);
alert(`Среднее арифметическое ваших чисел : ${res}`);
