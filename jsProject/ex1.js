'use strict';

/*1. Написать функцию, которая принимает на вход 2 параметра - имя и возраст. Если возраст больше или равен 18, выводить на экран "<Имя> есть 18" иначе "<Имя> нет 18".*/

function ex1() {
    let name = prompt('Введите имя:','');
    if (name) {
        let age = prompt('Введите возраст:','');
        if (age) {
            checkAge(name,age);
        }
    }
}

function checkAge(name,age) {
    if (+age >= 18) {
        alert(`${name} есть 18`);
    }
    else if (+age <= 18) {
        alert(`${name} нет 18`);
    }
    else {
        alert('Вы ввели не число');
    }
}

/*2. Написать функцию, которая принимает на вход число n. Если число больше 0, то вывести в консоль числа от 0 до n. Если нет, то вывести в консоль сообщение об ошибке.*/

function ex2() {
    let n = prompt('Введите число:','');
    if (+n > 0) {
        printNum(n);
    }
    else if (+n <= 0) {
        console.error('Вы ввели число меньше 0');
    }
    else {
        console.error('Вы ввели не число');
    }
}

function printNum(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
}

/*3. Написать функцию, которая принимает на вход массив чисел. Найти сумму чисел и вывести на экран.*/

function ex3() {
    let arr = [1, 2, 3, 4, 5];    
    alert(`Сумма чисел массива [${arr}]: ${getSumArray(arr)}`);
}

function getSumArray(arr) {
    let summa = arr.reduce((sum, element) => sum + element);
    return summa;
}

/*4. Написать функцию, которая принимает в качестве параметра массив чисел. Найти максимальное и минимальное значение и поменять их местами. Вывести на экран.*/

function ex4() {
    let arr = [1, 2, 3, 4, 5, 7, 2, 3, -5];
    swapElements(arr);
    alert(`Новый массив: [${arr}]`);
}

function swapElements(arr) {
    let max = arr[0], min=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = i;
        }
        if (max < arr[i]) {
            max = i;
        }
    }
    [arr[max], arr[min]] = [arr[min], arr[max]];
}

/*5. Написать функцию, которая принимает на вход адрес электронной почты. Проверить, содержит ли адрес электронной почты символ @, и выведите предупреждающее сообщение, если такого символа нет.*/

function ex5() {
    let email = prompt('Введите адрес электронной почты:','');
    checkEmail(email);
}

function checkEmail(email) {
    let rex = /[@]+/g;
    (rex.test(email)) ? alert('Вы ввели корректный адрес') :
    alert('В адресе электронной почты должен содержаться символ @');
}

/*6. Написать функцию, которая будет проверять, является ли принимаемый параметр строкой или нет. Функция возвращает true, если да, false, если нет.*/

function ex6() {
    let str = prompt('Введите строку','');
    checkString(str);
}

function checkString(str) {
    if (typeof str == 'string') alert('true');
    else alert('false');
    
}

/*7. Написать функцию которая принимает на вход два числа "a" и "b". Функция должна возвращать "a" в степени "b".*/

function ex7() {
    let a = prompt('Введите 1 число');
    let b = prompt('Введите 2 число');
    if (+a && +b) {
        alert(`Число ${a} в степени ${b}: `+ getStep(a,b));
    }
    else {
        alert('Вы ввели не число');
    }
}

function getStep(a,b) {
    return Math.pow(a,b);
}

/*8. Написать функцию которая принимает на вход два параметра, number и commandCode. Если код равен 1 - вернуть корень из number. Если код равен 2 - вернуть number в квадрате. Если код равен 3 - вернуть number в степени number. Если указан неверный код вернуть null.*/

function ex8(){
    let number = prompt('Введите число: ');
    if (+number) {     
        let commandCode = prompt('Введите код операции');
        alert('Результат вычислений: ' + getCalculations(number, commandCode));
    }
    else {
        alert('Вы ввели не число');
    }
}

function getCalculations(number, commandCode) {
    let step;
    switch (+commandCode) {
        case 1: 
            step = getStep(number,0.5);
            return step;
        case 2: 
            step = getStep(number,2);
            return step;
        case 3:
            step = getStep(number,number);
            return step;
        default:
            return null;
    }
}

/*9. Функция принимает на вход массив чисел, вернуть массив из которого убраны все отрицательные элементы, использовать filter и стрелочную функцию.*/

function ex9() {
    let arr = [1, 0, 2, -10, 3, -21, 4, 5, 7, 2, 3, -5];
    alert(`Старый массив: [${arr}].\nНовый массив без отрицательных значений: [${sortArray(arr)}]`);
}

function sortArray(arr) {
    let sortedArr = arr.filter(item => item >= 0);  
    return sortedArr;
}

/*10. Функция принимает на вход массив чисел и число, к каждому элементу массива нужно прибавить это число и вернуть массив. Делать через map, так же через стрелочную функцию.*/

function ex10() {
    let arr = [1, 2, 3, 4, 5, 7, 2, 3, -5];
    let n = prompt('Введите число: ');
    if (+n) {        
        alert(`Старый массив: [${arr}].\nНовый массив: [${increaseArr(arr, n)}]`);
    }
    else {
        alert('Вы ввели не число');
    }
}

function increaseArr(arr, n) {
    let newArray = arr.map(item => item * n);
    return newArray;
}

/*11. Написать функцию которая принимает на вход массив и число, проверить есть ли в массиве это число. Не использовать циклы.*/

function ex11() {
    let arr = [1, 0, 2, -10, 3, -21, 4, 5, 43, 7, 2, 3, -5];
    let n = +prompt('Введите число: ');
    if (n) {   
        (checkForNumber(arr, n)) ? alert(`Число ${n} присутствует в массиве [${arr}]`) : alert(`В массиве [${arr}] нет числа ${n}`);
    }
    else {
        alert('Вы ввели не число');
    }
}

function checkForNumber(arr, n) {
    let existNum = arr.includes(n);
    return existNum;
}