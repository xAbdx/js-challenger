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
    let arr3 = [44,22];
    let merged = arr1.concat(arr2,arr3);
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
function capitalize (string) {
    let words = string.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(" "); 
}
document.getElementById('capitalizeLetter').innerHTML = capitalize('made by abd salameh');

// function 6#
function bubbleSort(arr) {
    let num = arr.length;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    document.getElementById('sort').innerHTML = arr;
}