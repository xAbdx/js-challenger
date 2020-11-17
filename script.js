// function 1#
let numbers = [1, 3, -1, 45, 55.5];

function positive(numbers) {
    return numbers >= 0;
}

function toShowPositive() {
    document.getElementById('show').innerHTML = numbers.filter(positive);
}

// function 2#
function mergeArrays() {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5];
    let merged = arr1.concat(arr2);
    document.getElementById('merge').innerHTML = merged;
}

// function 3#
let obj = {};
obj.name = 'abd';

function check() {
    document.getElementById('check').innerHTML = obj.hasOwnProperty('name');;
}

// function 4#
let cars = ['mercedes', 'BMW'];
let student = { name: "Abd", age: 22 };

function isItArray() {
    document.getElementById('ifArray1').innerHTML = Array.isArray(cars);
    document.getElementById('ifArray2').innerHTML = Array.isArray(student);
}

// function 5#
function capitalize(text) {
    let input = text.toLowerCase().split(' ');
    for (let i = 0; i < input.length; i++) {
        input[i] = input.charAt(0).toUpperCase()+ input[i].substring(1);
    }
    document.getElementById('capitalizeLetter').innerHTML = capitalizeLetter;
}