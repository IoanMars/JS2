let lineElement = '55639217';
const lineMassive = [];
const optimization = [13, 15, 19, 22, 26, 5, 22, 12, 13];
let backDoubleOptimization = 0;
let delDoubleOptimization = 0;


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
