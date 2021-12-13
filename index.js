let lineElement = '55639217';
const lineMassive = [];
const optimization = [13, 15, 19, 22, 26, 5, 22, 12, 13];
let backDoubleOptimization = 0;
let delDoubleOptimization = 0;
const numberMassive = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let dashNum;
const randomNum = [];
const users = [
    {name : 'Ioan',
    age : 28},
    {name : 'Yury',
    age : 24},
    {name : 'Lera',
    age : 22},
    {name : 'Oleksandra',
    age : 23}
];
let sumAge = 0;
const manipulation = [23, 455, 532, 74, 432, 566, 67, 31, 246, 78, 7, 999];
const hunter = 'Каждый охотник желает знать, где сидит фазан.';
const notHunter = [];

function lineTransformation() {
    const lineArr = lineElement.split('');

    for (let i = 0; i < lineArr.length; i++) {
        lineMassive.push(lineArr[i]);

        if (lineArr[i] % 2 && lineArr[i + 1] % 2) {
            lineMassive.push(':');
        }
    }

    return lineMassive.join('');
}

console.log(lineTransformation(lineElement));

function countIdentic(optimization) {

    for (let x = 0; x < optimization.length; x++) {
        for (let y = 0; y < optimization.length; y++) {
            if (x !== y && optimization[x] === optimization[y]) {
                backDoubleOptimization += 1;
            }
        }
    }

    return backDoubleOptimization;
}

console.log(countIdentic(optimization));

function removeDuplicates(optimization) {
    delDoubleOptimization = optimization.slice(0);

    return delDoubleOptimization;
}

console.log(removeDuplicates(optimization));

function removeItem(arr, num) {
    arr.splice(num, 1);
    return optimization;
}

console.log(removeItem(optimization, 1));

// for (let i = 0; i < numberMassive.length; i++) {
//     dashNum += numberMassive[i] + '-';
// }

// console.log(dashNum);

for (let i = 0; i < 15; i++) {
    randomNum.push(Math.floor(Math.random() * 10 + 1));
}

console.log(randomNum);

users.forEach( item => {
    sumAge += (item.age / users.length);
});

console.log(sumAge);

function getFirst(manipulation, n) {

    return manipulation.slice(0, n);
}

console.log(getFirst(manipulation, 5));

function getLast(manipulation, n) {

    return manipulation.slice(Math.max(manipulation.length - n, 0));
}

console.log(getLast(manipulation, 5));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function manipulationFilled(len, value) {
    const lenValue = [];

    for (let i = 0; i < manipulation.length; i++) {
        if (len === manipulation[i]) {
        lenValue.push(value);
        }
    }

    return lenValue;
}

console.log(manipulationFilled(5, 0));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function arrayFilled(len, value){
    const valueLen = [];

    for(len; len > 0; len--) {
        valueLen.push(value);
    }
    return valueLen;
}

console.log(arrayFilled(5, 3));

function generateNumbers(start, len) {
    let generator = new Array(len);

    for (let i = 0; i < len; i++, start++) {
        generator[i] = start;
    }

    return generator;
}

console.log(generateNumbers(-5, 11));

const splitHunter = hunter.split(' ');

for (let i = 0; i < splitHunter.length; i++) {
    notHunter.push(splitHunter[i][0])
}

console.log(notHunter);
